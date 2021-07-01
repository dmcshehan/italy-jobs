import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

export default function EditorField({ form, field }) {
  // const {} = field;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    form.setFieldTouched(field.name, true);
    form.setFieldValue(
      field.name,
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  console.log(form);

  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ["inline", "list", "textAlign", "history"],
        }}
      />
      {form.errors.description && form.touched.description ? (
        <div>{form.errors.description}</div>
      ) : null}
    </>
  );
}
