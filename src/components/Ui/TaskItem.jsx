import React from 'react'

export default function TaskItem({ text, actions }) {
  return (
    <div className="bg-slate-50 w-96 h-60 p-4 rounded shadow">
      <p className="mb-4">{text}</p>
      <div className="flex gap-2">
        {actions?.map((action, i) => (
          <button
            key={i}
            onClick={action.onClick}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  )
}
