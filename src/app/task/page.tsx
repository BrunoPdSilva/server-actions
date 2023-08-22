import { Checkbox } from "@/components/Checkbox";
import { DeleteButton } from "@/components/DeleteButton";
import { prisma } from "@/services/prismaClient";

export default async function TasksPage() {
  const taskList = await prisma.task.findMany();

  return (
    <div className="flex flex-col items-center pt-20">
      <h1 className="text-2xl font-bold text-neutral-50 mb-16">
        CRUD de Tarefas Next.JS
      </h1>

      <main className="flex flex-col gap-4 max-w-2xl w-full">
        {taskList.map(task => (
          <div
            key={task.id}
            className="w-full px-8 py-6 bg-neutral-900 border-2 border-neutral-700 rounded-2xl flex items-center"
          >
            <Checkbox isChecked={true} />
            <div className="flex flex-col gap-2 ms-5">
              <h1 className="text-lg text-neutral-50 font-semibold">
                {task.title}
              </h1>
              <h2 className="text-sm text-neutral-50">{task.description}</h2>
            </div>
            <DeleteButton />
          </div>
        ))}
      </main>
    </div>
  );
}
