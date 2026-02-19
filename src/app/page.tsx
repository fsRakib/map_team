import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const todos1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todos1Data = await todos1.json();

  const todos = await fetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div className=" min-h-screen  bg-sky-300/50 font-sans dark:bg-black">
      <div className="p-2 text-3xl bg-blue-300 font-bold text-gray-800 dark:text-gray-200 m-auto">
        Rakib
      </div>

      <div className="p-4 border-b bg-white dark:bg-gray-800">
        <h2 className="text-xl font-bold mb-4 text-center">Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          <Link
            href="/posts"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded text-center"
          >
            View All Posts
          </Link>
          <Link
            href="/posts/new"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded text-center"
          >
            Create New Post
          </Link>
          <Link
            href="/posts/1"
            className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded text-center"
          >
            View Post #1
          </Link>
          <Link
            href="/posts/7/edit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded text-center"
          >
            Edit Post #7
          </Link>
          <Link
            href="/posts/7/delete"
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded text-center"
          >
            Delete Post #7
          </Link>
          <Link
            href="/posts/1/comments"
            className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded text-center"
          >
            View Comments
          </Link>
          <Link
            href="/todos"
            className="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded text-center"
          >
            View Todos
          </Link>
          <Link
            href="/post2"
            className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded text-center"
          >
            Post2 Page
          </Link>
        </div>
      </div>

      <div className="p-2 border">
        <h1 className="text-2xl font-bold text-center underline">Todo</h1>
        <h2>ID: {todos1Data.id}</h2>
        <h2>Title: {todos1Data.title}</h2>
        <h2>Completed: {todos1Data.completed ? "Yes" : "No"}</h2>
      </div>
    </div>
  );
}
