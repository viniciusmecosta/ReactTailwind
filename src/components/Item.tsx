import React from "react";

interface ItemProps {
  item: string;
  onDelete: (item: string) => void;
}

const Item: React.FC<ItemProps> = ({ item, onDelete }) => {
  return (
    <div className="flex w-full items-center justify-between space-x-2">
      <span>{item}</span>
      <button
        className="transition-colors-b ml-2 cursor-pointer gap-x-80 rounded-md bg-red-700 px-9 text-white transition-all hover:bg-red-500"
        onClick={() => onDelete(item)}
      >
        Apagar
      </button>
    </div>
  );
};

export default Item;
