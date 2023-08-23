import { PlusIcon } from "@/assets/PlusIcon";
import { prisma } from "@/services/prismaClient";
import { redirect } from "next/navigation";

export default function New() {
  async function addTask(data: FormData) {
    "use server";

    const title = data.get("title") as string;
    const description = data.get("description") as string;

    const res = await prisma.task.create({
      data: {
        title,
        description,
        isCompleted: false,
      },
    });

    redirect("/task")
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-neutral-50 mb-16">
        Adicionar uma nova tarefa
      </h1>

      <form action={addTask} className="max-w-2xl w-full">
        <div className="flex flex-col gap-2 text-neutral-50 text-base font-medium">
          <label htmlFor="title">Título da tarefa</label>
          <input
            type="text"
            name="title"
            className="w-full h-14 bg-neutral-900 border border-neutral-800 rounded-lg ps-3"
          />
        </div>
        <div className="flex flex-col gap-2 text-neutral-50 text-base font-medium mt-4">
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            name="description"
            className="w-full h-14 bg-neutral-900 border border-neutral-800 rounded-lg ps-3"
          />
        </div>

        <button
          type="submit"
          className=" w-full h-14 mt-6 rounded-2xl border-2 border-neutral-700 text-neutral-50 leading-none font-medium flex items-center justify-center gap-2 hover:bg-neutral-900 transition-colors ease-in-out duration-300"
        >
          <PlusIcon weight="bold" />
          Adicionar tarefa
        </button>
      </form>
    </>
  );
}
