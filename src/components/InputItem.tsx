import React, { useState } from "react";
import Item from "./Item";

const InputItem = () => {
  const [itens, setItens] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setItens([...itens, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (itemToDelete: string) => {
    setItens(itens.filter((item) => item !== itemToDelete));
  };

  return (
    <div className="flex max-w-96 flex-col items-center gap-2">
      <h1 className="text-3xl font-bold">Lista de Mercado</h1>
      <div className="flex gap-2">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="rounded-md border border-gray-600 px-2"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite um item"
            />
            <input
              className="transition-colors-b ml-2 cursor-pointer gap-x-80 rounded-md bg-gray-700 px-9 text-white hover:bg-gray-500"
              type="submit"
              value="Adicionar"
            />
          </label>
        </form>
      </div>
      {itens.map((i, index) => (
        <Item key={index} item={i} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default InputItem;
