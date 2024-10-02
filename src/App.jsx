import Tasks from "./components/Tasks";
import AddTask from "./components/AddTasks";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     //Chamar API
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     //Pegar os dados que ela retorna
  //     const data = await response.json();
  //     //Aramazenar/persistir esses dados no state
  //     setTasks(data);
  //   };
  //   fetchTasks();
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...tasks, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTasks(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onClickAddTasks(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask addTaskFunction={onClickAddTasks} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTasks={deleteTasks}
        />
      </div>
    </div>
  );
}
export default App;
