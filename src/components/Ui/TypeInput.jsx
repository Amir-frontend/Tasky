import React from 'react';
import SearchIcon from '@mui/icons-material/Search';


export default function TypeInput({
  wrapperClass = "",
  title = "",
  inputClass = "",
  iconClass = "",
  options = [],
  contenr="",
  placeholder = "Search...",
}) {
  return (
    <div className={`items-center w-full min-w-12 m-2  ${wrapperClass}`}>
      {/* العنوان */}
      <h2 className="mr-4 text-3xl dark:text-text-dark font-abhaya text-text font-semibold hidden md:flex">{title}</h2>

      {/* input + icon */}
      <div className={contenr}>
        <input
          list="browsel"
          type="text"
          className={`dark:text-text-dark w-full xl:h-10 px-2 font-abhaya bg-slate-200 h-10 text-sm rounded-xl xl:px-3 xl:pr-10 ${inputClass}`}
          placeholder={placeholder}
        />
        <div className={`absolute top-1/2 -translate-y-1/2 right-2 ${iconClass}`}>
          <SearchIcon sx={{ fontSize: 20 }} />
        </div>
      </div>

      <datalist id="browsel">
        {options.map((opt, index) => (
          <option key={index} value={opt} />
        ))}
      </datalist>
    </div>
  );
}
