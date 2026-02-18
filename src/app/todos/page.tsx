import React from "react";

type Todo={
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos = (await res.json()) as Todo[];

  return (
    <div className=" min-h-screen bg-sky-300/50 font-sans dark:bg-black">
      <div className="border p-2">
        <h1 className="text-2xl font-bold text-center underline">Todo List</h1>

        <table className="border">
          <thead>
            <tr>
              <th className="border">User</th>
              <th className="border">ID</th>
              <th className="border">Title</th>
              <th className="border">Completed</th>
            </tr>
          </thead>
          <tbody className="border">
            {todos.map((todo: Todo) => (
              <tr key={todo.id}>
                <td className="border">{todo.userId}</td>
                <td className="border">{todo.id}</td>
                <td className="border">{todo.title}</td>
                <td className="border">{todo.completed ? "yes" : "no"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page;
