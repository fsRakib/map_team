"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

function page() {
  const { id } = useParams();
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      },
    );
    const data = await res.json();
    console.log("Delete Response:", data);
    router.push("/posts");
  };
  return (
    <div className="flex flex-col items-center">
      <button onClick={handleDelete} className="bg-red-500 text-white p-2">
        Delete Post
      </button>
    </div>
  );
}

export default page;
