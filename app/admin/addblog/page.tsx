"use client"
import AdminNavbar from '@/components/AdminNavbar'
import RichEditor from '@/components/Editor'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import axios, { AxiosError } from 'axios'
import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
  Crop,
} from "react-image-crop"
import 'react-image-crop/dist/ReactCrop.css' // ✅ required — without this crop UI is broken

const MIN_DIMENSION = 300
const ASPECT_RATIO = 16 / 9

const AddBlog = () => {
  const [title, setTitle] = useState<string>("")
  const [image, setImage] = useState<File | null>(null)
  const [fileName, setFileName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)        // ✅ needed to extract crop
  const canvasRef = useRef<HTMLCanvasElement>(null)    // ✅ needed to draw cropped result
  const [error, setError] = useState<string>("")
  const [imageSrc, setImageSrc] = useState<string>("")
  const [crop, setCrop] = useState<Crop>()             // ✅ properly typed
  const [croppedFile, setCroppedFile] = useState<File | null>(null) // ✅ actual cropped file

  const onHandleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setFileName(file.name)

    const reader = new FileReader()
    reader.addEventListener("load", () => {
      const imageURL = reader.result?.toString() || ""
      const ImageElement = new Image()
      ImageElement.src = imageURL

      ImageElement.addEventListener("load", (e) => {
        const { naturalHeight, naturalWidth } = e.currentTarget as HTMLImageElement
        if (naturalHeight < MIN_DIMENSION || naturalWidth < MIN_DIMENSION) {
          setError("Image must be at least 300 x 300 pixels.")
          setImageSrc("")
          setImage(null)
          return
        }
        setError("")
        setImage(file)
        setImageSrc(imageURL)
      })
    })
    reader.readAsDataURL(file)
  }

  // ✅ Properly typed onImageLoad
  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100
    const crop = makeAspectCrop(
      { unit: "%", width: cropWidthInPercent },
      ASPECT_RATIO,
      width,
      height
    )
    setCrop(centerCrop(crop, width, height))
  }

  // ✅ Extracts the cropped region into a File and saves it
const applyCrop = () => {
    if (!imgRef.current || !canvasRef.current || !crop) return

    const image = imgRef.current
    const canvas = canvasRef.current

    // ✅ Use naturalWidth/naturalHeight for actual pixel dimensions
    const pixelCrop = convertToPixelCrop(
        crop,
        image.naturalWidth,
        image.naturalHeight
    )

    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // ✅ No scaleX/scaleY needed — pixelCrop is already in natural pixel space
    ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
    )

    canvas.toBlob((blob) => {
        if (!blob) return
        const file = new File([blob], fileName, { type: "image/jpeg" })
        setCroppedFile(file)
        toast.success("Crop applied!")
    }, "image/jpeg")
}

  const addBlogData = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const formdata = new FormData()
      formdata.append("title", title)
      formdata.append("image", croppedFile ?? image!)  // ✅ use cropped if available
      formdata.append("filename", fileName)
      formdata.append("description", description)

      const response = await axios.post("/api/admin/addblog", formdata, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      if (response.status === 200) {
        toast.success(response.data.message)
        setTitle("")
        setImage(null)
        setImageSrc("")
        setFileName("")
        setDescription("")
        setCroppedFile(null)
        setCrop(undefined)
        if (fileRef.current) fileRef.current.value = ""
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.error)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AdminNavbar />

      <main className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Create New Blog Post</h1>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <form onSubmit={addBlogData} className="space-y-6">

              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                  Blog Title
                </label>
                <input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter an engaging title..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
                  Cover Image
                </label>
                <input
                  id="image"
                  ref={fileRef}
                  onChange={onHandleImage}
                  type="file"
                  accept="image/jpg,image/jpeg,image/png,image/webp"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer transition duration-200"
                  required
                />
                {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
                <p className="mt-1 text-xs text-gray-500">Accepted formats: JPG, PNG, WEBP (Min 300x300px)</p>

                <canvas ref={canvasRef} className="hidden" />

                {imageSrc && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button type="button" className="mt-3 bg-lime-300 hover:bg-lime-200 text-black">
                        {croppedFile ? "Re-crop Image" : "Crop & Preview"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogTitle>Crop Image (16:9)</DialogTitle>
                      <div className="flex flex-col items-center gap-4 mt-2">
                        <ReactCrop
                          crop={crop}
                          onChange={(_, percentCrop) => setCrop(percentCrop)}
                          keepSelection
                          aspect={ASPECT_RATIO}
                          minWidth={MIN_DIMENSION}
                        >
                          <img
                            ref={imgRef}
                            src={imageSrc}
                            alt="Preview"
                            className="max-h-[60vh] object-contain rounded-lg"
                            onLoad={onImageLoad}
                          />
                        </ReactCrop>
                        <DialogClose><Button
                          type="button"
                          onClick={applyCrop}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Apply Crop
                        </Button></DialogClose>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}

                {croppedFile && (
                  <p className="mt-2 text-xs text-green-600 font-medium">✓ Crop applied — cropped image will be uploaded</p>
                )}
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <RichEditor
                  description={description}
                  onChange={(richText) => setDescription(richText)}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition duration-200 shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Publishing...
                    </>
                  ) : (
                    "Publish Post"
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default AddBlog