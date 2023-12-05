"use client";
import { Task } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  const router = useRouter();

  return (
    <div
      className="bg-sky-900 p-3 hover:bg-green-700 hover:cursor-pointer"
      onClick={() => {
        router.push(`/tasks/edit/${task.id}`);
      }}
    >
      <h3 className="font-bold text-xl">{task.title}</h3>
      <h5 className="text-slate-300">{task.description}</h5>
    </div>
  );
};

export default TaskCard;
