"use client";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import clsx from 'clsx';
import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';
import {useState} from 'react';

const toolbar = [
      'undo',
      'redo',
      '-',
      'heading',
      '|',
      'clipboard',
      // 'fontFamily',
      // 'fontSize',
      // 'fontColor',
      // 'fontBackgroundColor',
      'SourceEditing',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'subscript',
      'superscript',
      'highlight',
      '|',
      'alignment',
      '|',
      'numberedList',
      'bulletedList',
      // '|',
      // 'outdent',
      // 'indent',
      '|',
      'todoList',
      'link',
    
      'blockQuote',
      // 'imageUpload',
      'insertTable',
      // 'mediaEmbed',
      '|',
      'findAndReplace',
      '|',
      'code',
      'codeBlock',
      '|',
      'removeFormat',
      'horizontalLine',
      'pageBreak',
      '|',
      'textPartLanguage',
      '|',
      'specialCharacters',
      'emoji',
      '|',
]

type Props = {
  children?: React.ReactNode,
  className?: string,
  label: string,
  value?: string,
  name?: string,
  config?: EditorConfig,
  onChange?: (event: any, editor: any) => void,
  onReady?: (editor: any) => void;
  // onError?: (error: Error, details: ErrorDetails) => void;
  // onChange?: (event: EventInfo, editor: TEditor) => void;
  // onFocus?: (event: EventInfo, editor: TEditor) => void;
  // onBlur?: (event: EventInfo, editor: TEditor) => void;
}

export default function Editor({ children, name, onChange, className, value = '', label, config, ...props }: Props) {
  const cs = clsx("editor form-group", className);
  const [editorData, setEditorData] = useState(value);
  // Add const for all items in the toolbar
  
  const editorConfiguration: EditorConfig = {
    toolbar: toolbar,
    language: 'fr',
    placeholder: 'Entrez votre texte ici...',
    ...config
  };
    return (
        <div className={cs}>
        <label htmlFor="editor">{label}</label>
        <CKEditor
            editor={ ClassicEditor }
            config={{
              placeholder: 'Entrez votre texte ici...',
              ...editorConfiguration,
              ...config
            }}
            data={value}
            onBlur={ (event, editor) => {
                console.log('Blur.', editor);
            } }
            onFocus={ (event, editor) => {
                console.log('Focus.', editor);
            } }
            onChange={ (event, editor) => {
                setEditorData(editor.getData());
                if (onChange) {
                    onChange(event, editor);
                }
            } }
            {...props}
        />
        <textarea name={name} value={editorData} style={{display: 'none'}} />

        </div>
    );
}

