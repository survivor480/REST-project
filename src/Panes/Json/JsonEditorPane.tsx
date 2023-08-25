import React, { useRef, useEffect } from 'react';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState, basicSetup } from '@codemirror/basic-setup';
// import { defaultTabBinding } from '@codemirror/commands';
// @ts-ignore
import { indentWithTab } from '@codemirror/commands'
import { json } from '@codemirror/lang-json';





export default function JsonEditorPanel({
  paneValue,
  setPaneValue,
  isEditable = true,
}: {
  paneValue: any;
  setPaneValue: any;
  isEditable?: boolean | undefined;
}) {
  const editorRef = useRef(null);
  const basicExtensions = [
    basicSetup,
    // @ts-ignore
    keymap.of([]),
    json(),
    EditorState.tabSize.of(2),
  ];
  useEffect(() => {
    if (editorRef.current === null) return;

    const state = EditorState.create({
      doc: paneValue,
      extensions: [
        ...basicExtensions,
        EditorView.updateListener.of((view) => {
          if (view.docChanged) {
            setPaneValue(view.state.doc);
          }
        }),
        EditorView.editable.of(isEditable),
        // EditorView.theme({
        //   "&": {
        //     color: "white",
        //     backgroundColor: "#1c1818"
        //   },
        //   ".cm-content": {
        //     caretColor: "#0e9"
        //   },
        //   "&.cm-focused .cm-cursor": {
        //     borderLeftColor: "#0e9"
        //   },
        //   "&.cm-focused .cm-selectionBackground, ::selection": {
        //     backgroundColor: "#231f1f"
        //   },
        //   ".cm-gutters": {
        //     backgroundColor: "#045",
        //     color: "#ddd",
        //     border: "none"
        //   }
        // }, { dark: true })
        EditorView.theme({}, {dark: true})
      ],
    });

    const view = new EditorView({
      // @ts-ignore
      state,
      parent: editorRef.current,
    });

    return () => {
      view.destroy();
    };
    // eslint-disable-next-line
  }, [editorRef.current, paneValue]);

  return <div ref={editorRef} className='border rounded-xl  border-[#231f1f] p-2 h-[400px] overflow-y-scroll'></div>;
}
