"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";

function EditPost() {
  const { id } = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    userId: 1,
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data));
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({ ...formData, id: Number(id) }),
        headers: { "Content-type": "application/json ; charset=UTF-8" },
      },
    );
    const updatedPost = await res.json();
    console.log("Update Response:", updatedPost);
    router.push(`/posts/${id}`);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center underline">Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label className=" p-2" htmlFor="title">
            Title
          </label>
          <input
            className="border p-2 w-full"
            id="title"
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="body"
          >
            Body
          </label>
          <textarea
            className="border p-2 w-full"
            id="body"
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          />
        </div>
        <button type="submit" className="bg-blue-500 p-2">
          Update Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;
