"use client"

import { useState } from "react"

export default function Component() {
  const [tasks, setTasks] = useState<string[]>([])
  const [newTask, setNewTask] = useState("")

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()])
      setNewTask("")
    }
  }

  const toggleTask = (index: number) => {
    const updatedTasks = [...tasks]
    updatedTasks[index] = updatedTasks[index].startsWith("✓ ") 
      ? updatedTasks[index].slice(2) 
      : "✓ " + updatedTasks[index]
    setTasks(updatedTasks)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTask()
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center justify-between">
          To-Do List
          <img
            src='./icons8.png'
            alt="To-Do List icon"
            className="w-6 h-6"
          />
        </h2>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add Your To-Do List"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow mr-2"
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              onClick={() => toggleTask(index)}
              className={`cursor-pointer p-2 rounded ${
                task.startsWith("✓ ") ? "bg-green-100 line-through" : "bg-gray-100"
              }`}
            >
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}