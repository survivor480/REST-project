import React, { useRef, useEffect } from 'react';
import { basicSetup, EditorView, minimalSetup } from "codemirror"
import { EditorState, Compartment } from "@codemirror/state"
import { json } from '@codemirror/lang-json';
import {oneDarkTheme} from '@codemirror/theme-one-dark'
import CodeMirror from "@uiw/react-codemirror";


export default function JsonEditorPanel({
  paneValue,
  setPaneValue,
  isEditable = true,
}: {
  paneValue: any;
  setPaneValue: any;
  isEditable?: boolean | undefined;
}) {
  // const editorRef = useRef(null);
  // const basicExtensions = [
  //   basicSetup,
  //   // @ts-ignore
  //   // keymap.of([]),
  //   // json(),
  //   oneDarkTheme,
  //   EditorState.tabSize.of(2),
  // ];
  // useEffect(() => {
  //   if (editorRef.current === null) return;

  //   const state = EditorState.create({
  //     doc: paneValue,
  //     extensions: [
  //       ...basicExtensions,
  //       EditorView.updateListener.of((view) => {
  //         if (view.docChanged) {
  //           setPaneValue(view.state.doc);
  //         }
  //       }),
  //       EditorView.editable.of(isEditable),
        
  //       EditorView.theme({
  //         "&": {
  //           color: "#7cdcf0",
  //         },
  //         ".cm-content": {
  //           caretColor: "#231f1f",
  //         },
  //         "&.cm-focused .cm-cursor": {
  //           borderLeftColor: "#231f1f",
  //           color: "#c3834b"
  //         },
  //         "&.cm-focused .cm-selectionBackground, ::selection": {
  //           backgroundColor: "#231f1f",
  //           color: "#c3834b"
  //         },
  //         ".cm-gutters": {
  //           color: "#c3612f",
  //           border: "none"
  //         }
  //       }, { dark: true })
  //     ],
  //   });

  //   const view = new EditorView({
  //     // @ts-ignore
  //     state,
  //     parent: editorRef.current,
  //   });

  //   return () => {
  //     view.destroy();
  //   };
  //   // eslint-disable-next-line
  // }, [editorRef.current, paneValue]);

  // return <div ref={editorRef} className='border rounded-xl border-[#231f1f] p-2 h-[400px] overflow-y-scroll'></div>;
  return (
    <div>
      <CodeMirror
        value={paneValue || "console.log('hello world!');"}
        height="200px"
        theme="dark"
        extensions={[json()]}
        onChange={(value, viewUpdate) => {
          // console.log("value:", value);
          setPaneValue(value);
        }}
      />
    </div>
  )
}
