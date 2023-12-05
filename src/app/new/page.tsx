"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NewPage = ({ params }: { params: { id: String } }) => {
  const { handleSubmit, register, setValue } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/tasks/${params.id}`).then((res) => {
        setValue("title", res.data.title);
        setValue("description", res.data.description);
      });
    }
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await axios.put(`/api/tasks/${params.id}`, data);
    } else {
      await axios.post("/api/tasks", data);
    }
    router.push("/");
    router.refresh();
  });

  return (
    <section className="h-[calc(100vh-7rem)] flex items-center justify-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-3xl font-bold mb-3">
          {params.id ? "Update" : "Create"} Task:
        </h1>
        <label htmlFor="title" className="font-bold text-sm">
          Title:
        </label>
        <input
          id="title"
          type="text"
          placeholder="Write a title"
          className="px-3 py-1 border border-gray-300 rounded-md shadow.sm focus:outline-none focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-black block mb-2 w-full"
          {...register("title")}
        />
        <label htmlFor="title" className="font-bold text-sm">
          Description:
        </label>{" "}
        <textarea
          id="description"
          placeholder="Write a description"
          className="px-3 py-1 border border-gray-300 rounded-md shadow.sm focus:outline-none focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-black block w-full"
          {...register("description")}
        ></textarea>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-600 px-3 py-1 rounded-md text-white mt-4 hover:bg-green-800"
          >
            {params.id ? "Update" : "Create"}
          </button>
          <button
            type="button"
            className="bg-red-600 px-3 py-1 rounded-md text-white mt-4 gap-5 hover:bg-red-800"
            onClick={async () => {
              if (confirm("Estas seguro de eliminar esta tarea?")) {
                await axios.delete(`/api/tasks/${params.id}`);
                router.push("/");
                router.refresh();
              }
            }}
          >
            Delete
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewPage;
