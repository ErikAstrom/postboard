import React, { useState } from "react";

const PostForm = ({ updatePosts }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }

    updatePosts();
  };

  return (
    <div>
      <form
        onSubmit={submitData}
        className="w-[300px] flex flex-col border border-gray-800 rounded-md text-center"
      >
        <h1 className="font-extrabold underline bg-red-400 h-[80px] flex items-center justify-center text-xl">
          Create new Post
        </h1>
        <input
          autoFocus
          className="border min-h-[50px] p-3"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <textarea
          cols={50}
          className="border p-3 "
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={8}
          value={content}
        />
        <button
          type="submit"
          className="border-2 rounded-md bg-white border-gray-400 p-3 w-1/2 mx-auto my-2 hover:text-red-400 hover:border-red-400"
        >
          Create post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
