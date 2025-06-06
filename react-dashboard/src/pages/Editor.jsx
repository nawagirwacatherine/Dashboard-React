import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: '<p>Edit your content here...</p>',
  });

  const handleSubmit = () => {
    if (editor) {
      const html = editor.getHTML();
      console.log('Submitted content:', html);
  
    }
  };

  if (!editor) return null;

  return (
    <Card className="w-full">
      <CardContent className="space-y-4 p-4">
        
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={editor.isActive('bold') ? 'default' : 'outline'}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            Bold
          </Button>
          <Button
            variant={editor.isActive('italic') ? 'default' : 'outline'}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            Italic
          </Button>
          <Button
            variant={editor.isActive('underline') ? 'default' : 'outline'}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            Underline
          </Button>
          <Button
            variant={editor.isActive('heading', { level: 1 }) ? 'default' : 'outline'}
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          >
            H1
          </Button>
          <Button
            variant={editor.isActive('heading', { level: 2 }) ? 'default' : 'outline'}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          >
            H2
          </Button>
        </div>

        
        <EditorContent
          editor={editor}
          className=" prose min-h-[200px] p-4 border rounded-md bg-white focus:outline-none"
        />

        <Button className="w-full mt-4" onClick={handleSubmit}>
          Submit Content
        </Button>
      </CardContent>
    </Card>
  );
};

export default Editor;

