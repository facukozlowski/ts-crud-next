import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";
import Link from "next/link";

const AllTasks = async () => {
  return await prisma.task.findMany();
};

export const dynamic = "force-dynamic";

const HomePage = async () => {
  const tasks = await AllTasks();

  return (
    <div className="text-center mt-10">
      {tasks.length === 0 ? (
        <div className="py-20">
          <h2 className="text-2xl mb-10">There are no tasks created.</h2>
          <Link
            href="/new"
            className="text-3xl hover:font-bold text-green-500 hover:text-green-400"
          >
            Create a New Task
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3 mt-10">
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
