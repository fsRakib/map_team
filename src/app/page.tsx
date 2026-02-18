import Image from "next/image";

export default async function Home() {
  const todos1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todos1Data = await todos1.json();


  const todos = await fetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div className=" min-h-screen  bg-sky-300/50 font-sans dark:bg-black">
      <div className="p-2 text-3xl bg-blue-300 font-bold text-gray-800 dark:text-gray-200 m-auto">
        Rakib
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
