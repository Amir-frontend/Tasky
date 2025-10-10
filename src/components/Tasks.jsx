// Tasks.jsx
import React, { useContext, useCallback, useState } from "react";
import TaskItem from "./TaskItem";
import { TodoContext } from "../contexts/TodoContext";
import { toast } from "sonner";

export default function Tasks() {
  const { TaskFiltr, setTasks } = useContext(TodoContext);

  const [open, setOpen] = useState(false);          // modal مفتوح ولا لأ
  const [taskToDelete, setTaskToDelete] = useState(null); // نخزن الـ id بتاع المهمة

  // ✅ toggle done
  const toggleDone = useCallback(
    (id) => {
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
      );
    },
    [setTasks]
  );

  // ✅ edit task
  const editTask = useCallback(
    (id, newText) => {
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, text: newText } : t))
      );
      toast.success("تم تعديل المهمة بنجاح");
    },
    [setTasks]
  );

  // ✅ delete task بعد التأكيد
  const confirmDelete = useCallback(() => {
    if (taskToDelete !== null) {
      setTasks((prev) => prev.filter((t) => t.id !== taskToDelete));
      toast.success("تم حذف المهمة بنجاح");
      setTaskToDelete(null);
      setOpen(false);
    }
  }, [taskToDelete, setTasks]);

  // ✅ عند الضغط على delete داخل الـ TaskItem
  const handleDeleteClick = (id) => {
    setTaskToDelete(id);
    setOpen(true);
  };

  return (
    <div className="h-[446px] gap-10 overflow-y-scroll no-scrollbar relative">
      {TaskFiltr.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleDone={toggleDone}
          onEdit={editTask}
          onDelete={() => handleDeleteClick(task.id)} // ✅ نمرر id
          menuOpen
        />
      ))}

      {open && (
        <div className=" absolute inset-0 bg-opacity-50 flex items-center justify-center z-30">
          <div className="bg-white dark:bg-background p-10 rounded-lg shadow-xl">
            <p className="mb-4 text-lg font-semibold">هل تريد حذف المهمة؟</p>
            <div className="flex gap-4">
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
