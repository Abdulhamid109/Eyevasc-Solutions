//need to change the ui and need to use toggle from shadcn

"use client"
import { Editor } from "@tiptap/react";
import { Bold, Strikethrough, Italic, List, ListOrdered, Heading1 } from "lucide-react";


type props={
    editor:Editor | null
}
export default function Toolbar({ editor }:props) {
    if (!editor) {
        return null;
    }

    return (
        <div className="border border-input bg-transparent rounded-md flex gap-1 p-1">
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''}
            >
                <Heading1 className="w-4 h-4" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'bg-gray-200' : ''}
            >
                <Bold className="w-4 h-4" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'bg-gray-200' : ''}
            >
                <Italic className="w-4 h-4" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'bg-gray-200' : ''}
            >
                <Strikethrough className="w-4 h-4" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'bg-gray-200' : ''}
            >
                <List className="w-4 h-4" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'bg-gray-200' : ''}
            >
                <ListOrdered className="w-4 h-4" />
            </button>
        </div>
    );
}
