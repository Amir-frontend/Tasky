// TaskItem.jsx
import React, { useState, useRef, useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { TodoContext } from "../contexts/TodoContext";
import { useContext } from "react";

export default function TaskItem({ task, onToggleDone, onEdit, onDelete, className = "" }) {

  const {menuOpen,setMenuOpen} = useContext(TodoContext)

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const inputRef = useRef(null);

  // focus input when entering edit mode
  useEffect(() => {
    if (isEditing && inputRef.current) inputRef.current.focus();
  }, [isEditing]);

  const saveEdit = () => {
    const value = editText.trim();
    if (value === "") return; // optional: block empty
    if (value !== task.text) onEdit(task.id, value);
    setIsEditing(false);
  };

  return (
    <div className={` ms:w-8/12 sm:m-auto mx-1 sm:mx-2 rounded-lg xl:rounded-2xl xl:py-2 mt-2
     sm:mt-4 relative  flex items-center shadow-todoshad px-2 max-h-16${className} ${task.done ? "bg-secondary-dark" : "bg-text-dark"}`}>
      {/* checkbox / done toggle */}
      <button
        type="button"
        onClick={() => onToggleDone(task.id)}
        aria-pressed={task.done}
        className="p-2 rounded-full hover:bg-gray-200 "
      >
        <CheckIcon sx={{ fontSize: 25 }} />
      </button>

      {/* content: text or edit input */}
      <div className="flex-1">
        {isEditing ? (
          <div className="flex gap-2 items-center">
            <input
              ref={inputRef}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") saveEdit();
                if (e.key === "Escape") {
                  setIsEditing(false);
                  setEditText(task.text);
                }
              }}
              className="w-full px-3 rounded border bg-white text-black"
            />
            <button type="button" onClick={saveEdit} className="px-3 py-2 bg-green-500 rounded text-white">
              Save
            </button>
          </div>
        ) : (
          <p className={`break-words ml-2 ${task.done ? "line-through opacity-60" : ""}`}>{task.text}</p>
        )}
      </div>

      {/* menu */}
      <div className="relative">
       <button
  type="button"
  onClick={() => setMenuOpen(menuOpen === task.id ? null : task.id)}
  aria-haspopup="true"
  aria-expanded={menuOpen === task.id}
  className="transition transform hover:scale-110 duration-200"
>
  <MoreVertIcon sx={{ fontSize: 27 }} />
</button>


        {menuOpen === task.id && (
          <div
            role="menu"
            className="absolute right-3 mt-2 w-20 bg-white dark:bg-secondary-dark rounded shadow z-20 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => { setIsEditing(true); setMenuOpen(false); }}
              className="w-full text-left py-2.5 pl-1 hover:bg-gray-100 dark:hover:bg-background-dark border-b flex items-center dark:text-text-dark"
            >
              <EditIcon sx={{ fontSize: 18 }} /> Edit
            </button>
            <button
              type="button"
              onClick={() => { onDelete(task.id); setMenuOpen(false); }}
              className="w-full text-left py-2.5 pl-1 hover:bg-gray-100 dark:hover:bg-background-dark text-red-600 flex items-center"
            >
              <DeleteIcon sx={{ fontSize: 18 }} /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
