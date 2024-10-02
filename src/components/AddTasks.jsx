import { useState } from "react";
import Input from "./Input";

function AddTask({ addTaskFunction }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descriçao da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!description.trim() || !title.trim()) {
            return alert("Preencha o titulo ou a descricao da tarefa");
          }
          addTaskFunction(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-whitepx-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
