import React, { useState } from "react";

export default function Loading(props) {
  const [search, setSearch] = useState("");
  const { onEditer } = props;

  return (
    <div className="flex  justify-center">
      <input
        value={search}
        onChange={(e) => onEditer(e.target.value)}
        type="text"
        className="h-10 relative outline-none rounded px-2 py-1 w-1/2   bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
        placeholder="search name"
      />
    </div>
  );
}
