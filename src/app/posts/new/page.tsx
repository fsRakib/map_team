"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

 function NewPost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    userId: 1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-type": "application/json ; charset=UTF-8" },
    });

    const newPost = await res.json();
    console.log("Created: ", newPost);
    router.push("/posts");
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center underline">
        Create New Post
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border p-2"
        />
        <textarea
          placeholder="Body"
          value={formData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Create
        </button>
      </form>
    </div>
  );
}

export default NewPost;
