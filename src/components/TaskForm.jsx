import React, { useSyncExternalStore } from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const value = useContext(TaskContext);
  console.log(value);

  const valor = useContext(TaskContext);
  console.log(valor);

  const handleSubmit = function (e) {
    e.preventDefault();

    valor.createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 pd-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>

        <input
          className="bd-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />

        <textarea
          className="bg-slate-800 pd-10 mb-4"
          placeholder="Escribe la descripcion"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
      </form>

      <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </div>
  );
}

export default TaskForm;
