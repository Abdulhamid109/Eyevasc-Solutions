"use client"
import { Editor } from "@tiptap/react";
import { Bold, Strikethrough, Italic, List, ListOrdered, Heading1, Heading2, Undo, Redo, Code } from "lucide-react";
import { Toggle } from "./ui/toggle";

type props = {
    editor: Editor | null
}

export default function Toolbar({ editor }: props) {
    if (!editor) return null;

    return (
        <div className="border border-input bg-transparent rounded-md flex flex-wrap gap-1 p-1">
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

            <Toggle
                size="sm"
                pressed={false}
                onPressedChange={() =>
    editor.chain().focus().setLineHeight('1.1').run()
                }
            >
                Line height 1.1
            </Toggle>
        </div>
    );
}