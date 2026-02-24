import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react';
import Toolbar from './Toolbar';

export default function RichEditor({
    description,
    onChange
}:{
    description:string,
    onChange:(richText:string)=>void
}){
    const editor = useEditor({
        extensions: [
            StarterKit.configure({}),
            
        ],
        content:description,
        onUpdate:({editor})=>{
            onChange(editor.getHTML());
        },
        editorProps:{
            attributes:{
                class:
                    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none min-h-[200px] prose prose-sm max-w-none',
                
            }
        },
        immediatelyRender:false
    })
    return (
        <div>
            {editor && <Toolbar editor={editor} />}
            <EditorContent editor={editor} />
        </div>
    );
}