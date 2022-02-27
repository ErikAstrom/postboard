import React, { useState } from "react";
import { useRouter } from "next/router";

const ChangeName = ({}) => {
  const [name, setName] = useState("");

  const router = useRouter();

  async function handleChange() {
    try {
      const body = { name };
      await fetch("/api/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
    router.reload(window.location.pathname);
  }

  return (
    <div className=" mx-auto pt-[100px] w-[50%]">
      <h1 className=" p-3 text-4xl mb-[10px]">
        Add a <span className="text-red-400">nickname</span> to continue
      </h1>
      <div className="flex h-[75px]">
        <input
          autoFocus
          className="p-3 border rounded-l-md w-9/12 text-xl"
          onChange={(e) => setName(e.target.value)}
          placeholder="..."
          maxLength={15}
          minLength={1}
          type="text"
          value={name}
        />

        <button
          onClick={handleChange}
          className=" rounded-r-md bg-red-400 text-black border-gray-400 p-2 w-3/12 flex items-center justify-center"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ChangeName;
