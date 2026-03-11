"use client"
import { Editor } from "@tiptap/react";
import { Bold, Strikethrough, Italic, List, ListOrdered, Undo, Redo } from "lucide-react";
import { Toggle } from "./ui/toggle";
import { MdFormatLineSpacing } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type props = {
    editor: Editor | null
}

export default function Toolbar({ editor }: props) {
    if (!editor) return null;

    return (
        <div className="md:justify-center md:items-center md:fixed md:top-0 md:z-111 md:backdrop-blur-2xl md:shadow-2xl md:shadow-black border border-input bg-black/10 rounded-md flex flex-wrap gap-1 p-1">
            <div className="hidden md:flex justify-center items-center text-center  font-bold text-xl ">Toolbar</div>
            {
                [1, 2, 3, 4, 5, 6].map((e) => (

                    <Toggle
                        key={e}
                        size="sm"
                        pressed={editor.isActive("heading", { level: e })}
                        onPressedChange={() => editor.chain().focus().toggleHeading({ level: e as 1 | 2 | 3 | 4 | 5 | 6 }).run()}
                    >
                        H{e}
                    </Toggle>

                ))
            }



            <Toggle
                size="sm"
                pressed={editor.isActive("bold")}
                onPressedChange={() => editor.chain().focus().toggleBold().run()}
            >
                <Bold className="h-4 w-4" />
            </Toggle>

            <Toggle
                size="sm"
                pressed={editor.isActive("italic")}
                onPressedChange={() => editor.chain().focus().toggleItalic().run()}
            >
                <Italic className="h-4 w-4" />
            </Toggle>

            <Toggle
                size="sm"
                pressed={editor.isActive("strike")}
                onPressedChange={() => editor.chain().focus().toggleStrike().run()}
            >
                <Strikethrough className="h-4 w-4" />
            </Toggle>

            <Toggle
                size="sm"
                pressed={editor.isActive("bulletList")}
                onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
            >
                <List className="h-4 w-4" />
            </Toggle>

            <Toggle
                size="sm"
                pressed={editor.isActive("orderedList")}
                onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
            >
                <ListOrdered className="h-4 w-4" />
            </Toggle>

            {/* <Toggle
                size="sm"
                pressed={editor.isActive("code")}
                onPressedChange={() => editor.chain().focus().toggleCode().run()}
            >
                <Code className="h-4 w-4" />
            </Toggle> */}

            <Toggle
                size="sm"
                pressed={false}
                onPressedChange={() => editor.chain().focus().undo().run()}
            >
                <Undo className="h-4 w-4" />
            </Toggle>

            <Toggle
                size="sm"
                pressed={false}
                onPressedChange={() => editor.chain().focus().redo().run()}
            >
                <Redo className="h-4 w-4" />
            </Toggle>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Toggle size="sm">
                        <MdFormatLineSpacing className="h-4 w-4" />
                    </Toggle>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-32">

                    <DropdownMenuItem
                        onClick={() =>
                            editor.chain().focus().setLineHeight("1").run()
                        }
                    >
                        1
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={() =>
                            editor.chain().focus().setLineHeight("1.15").run()
                        }
                    >
                        1.15
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={() =>
                            editor.chain().focus().setLineHeight("1.5").run()
                        }
                    >
                        1.5
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={() =>
                            editor.chain().focus().setLineHeight("2").run()
                        }
                    >
                        2
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>


        </div>
    );
}