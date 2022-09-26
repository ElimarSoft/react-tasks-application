import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
// import { tasks as data } from "./data/tasks";
import { useEffect, useState } from "react";

function App() {

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}
export default App;
