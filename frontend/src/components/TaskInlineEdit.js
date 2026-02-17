// frontend/src/components/TaskInlineEdit.js

import { useState } from "react";

export default function TaskInlineEdit({ value, onSave, onCancel }) {
  const [text, setText] = useState(value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSave(text);
    if (e.key === "Escape") onCancel();
  };

  return (
    <input
      autoFocus
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
      onBlur={() => onSave(text)}
      className="w-full px-2 py-1 border rounded text-sm"
    />
  );
}
