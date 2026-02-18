import Link from "next/link";
import React from "react";

type Post2 = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function Posts2({
  searchParams,
}: {
  searchParams: Promise<{ userId: string }>;
}) {
  const { userId } = await searchParams;

  const url = userId
    ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    : "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);
  const posts = (await res.json()) as Post2[];
  return (
    <div className="min-h-screen bg-sky-300/50 font-sans dark:bg-black">
      <div className="border p-2">
        <h1 className="text-2xl font-bold text-center underline">Post List</h1>

        {/* Filter UI */}
        <div className="my-4">
          <span className="mr-2">Filter by User:</span>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <Link
              key={num}
              href={`/posts?userId=${num}`}
              className={`mx-1 px-2 py-1 border rounded ${
                userId === num.toString()
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {num}
            </Link>
          ))}
          <Link
            href="/posts"
            className="ml-2 px-2 py-1 border rounded bg-gray-200"
          >
            Clear
          </Link>
        </div>

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
            {posts.map((post: Post2) => (
              <tr key={post.id}>
                <td className="border">{post.userId}</td>
                <td className="border">{post.id}</td>
                <td className="border">{post.title}</td>
                <td className="border">{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Show count */}
        <p className="mt-2">Showing {posts.length} posts</p>
      </div>
    </div>
  );
}

export default Posts2;
