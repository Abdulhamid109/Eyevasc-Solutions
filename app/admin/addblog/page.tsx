import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const AddBlog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Create New Blog Post</h1>
            <p className="text-gray-600">Share your thoughts with the world</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <form className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                  Blog Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter an engaging title..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
                  Cover Image
                </label>
                <div className="relative">
                  <input
                    id="image"
                    type="file"
                    accept="image/jpg,image/jpeg,image/png"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer transition duration-200"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500">Accepted formats: JPG, PNG (Max 5MB)</p>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={8}
                  placeholder="Write your blog content here..."
                  maxLength={5000}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none resize-none"
                />
                <p className="mt-2 text-xs text-gray-500 text-right">Maximum 5000 characters</p>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition duration-200 shadow-md"
                >
                  Publish Post
                </button>
                <button
                  type="button"
                  className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 transition duration-200"
                >
                  Save Draft
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