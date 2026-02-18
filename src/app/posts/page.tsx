import React from "react";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
async function Posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = (await res.json()) as Posts[];

  return (
    <div className=" min-h-screen bg-sky-300/50 font-sans dark:bg-black">
      <div className="border p-2">
        <h1 className="text-2xl font-bold text-center underline">post List</h1>

        <table className="border">
          <thead>
            <tr>
              <th className="border">User</th>
              <th className="border">ID</th>
              <th className="border">Title</th>
              <th className="border">Body</th>
            </tr>
          </thead>
          <tbody className="border">
            {posts.map((post: Posts) => (
              <tr key={post.id}>
                <td className="border">{post.userId}</td>
                <td className="border">{post.id}</td>
                <td className="border">{post.title}</td>
                <td className="border">{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Posts;
