import React from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function ID({ params }: Props) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return (
    <div className=" min-h-screen bg-sky-300/50 font-sans dark:bg-black">
      <div className="border p-2 text-black">
        <h1 className="text-2xl font-bold text-center underline">Post</h1>
        <h2>User ID: {post.userId}</h2>
        <h2>ID: {post.id}</h2>
        <h2>Title: {post.title}</h2>
        <h2>Body: {post.body}</h2>
      </div>
    </div>
  );
}

export default ID;
