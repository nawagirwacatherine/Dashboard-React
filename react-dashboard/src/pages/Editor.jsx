
import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Write something cool...</p>',
  })

  return (
    <div>
      <h2>Editor</h2>
      <EditorContent editor={editor} />
    </div>
  )
}
