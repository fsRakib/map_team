import React from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};
type Comment={
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

async function comments({ params }: Props) {
  const { id } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );
  const data = await res.json();

  return (
  <div className=" min-h-screen bg-sky-300/50 font-sans dark:bg-black">
      <div className="border p-2">
        <h1 className="text-2xl font-bold text-center underline">Comments for Post {id}</h1>

        <table className="border">
          <thead>
            <tr>
              <th className="border">postId</th>
              <th className="border">id</th>
              <th className="border">name</th>
              <th className="border">email</th>
              <th className="border">body</th>

            </tr>
          </thead>
          <tbody className="border">
            {data.map((comment: Comment) => (
              <tr key={comment.id}>
                <td className="border">{comment.postId}</td>
                <td className="border">{comment.id}</td>
                <td className="border">{comment.name}</td>
                <td className="border">{comment.email}</td>
                <td className="border">{comment.body}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default comments;
