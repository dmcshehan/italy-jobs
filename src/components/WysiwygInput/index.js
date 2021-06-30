import React from "react";
import { Editor } from "react-draft-wysiwyg";

export default function QuestionInput({
  editorState,
  onEditorStateChange,
  ...restProps
}) {
  return (
    <Editor
      toolbar={{
        options: ["inline", "colorPicker"],
      }}
      wrapperClassName={"wysiwyg_editor_wrapper"}
      editorClassName="wysiwyg_editor"
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      {...restProps}
    />
  );
}
