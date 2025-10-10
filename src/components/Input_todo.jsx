import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function Input_todo() {
  const { clickbuton, textareaRef, setNewtask, newtask } =
    useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // مهم جداً
    clickbuton();
  };

  return (
    <form
      onSubmit={handleSubmit}   // ← خليها هنا
      className="flex mx-2 sm:mx-4 m-auto relative"
    >
      <textarea
        ref={textareaRef}
        placeholder="Add Task"
        value={newtask}
        onChange={(e) => setNewtask(e.target.value)}
        className="max-h-48 w-full pl-4 pr-12 py-3 md:m-auto rounded-3xl shadow-todoshad text-md sm:text-xl  md:text-2xl font-abhaya leading-relaxed resize-none overflow-y-scroll no-scrollbar"
        style={{ height: "48px" }}
      />
      <button
        type="submit"   // ← زرار submit رسمي
        className="absolute right-2 bottom-1 sm:bottom-2 w-9 h-9 rounded-full bg-yellow-500 flex justify-center items-center hover:bg-yellow-600 transition"
      >
        <AddIcon className="transition transform hover:scale-110 duration-200" sx={{ fontSize: 30 }} />
      </button>
    </form>
  );
}
