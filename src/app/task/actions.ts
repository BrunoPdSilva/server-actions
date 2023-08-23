"use server";

import { prisma } from "@/services/prismaClient";
import { revalidatePath } from "next/cache";

export async function deleteTask(taskId: string) {
  const res = await prisma.task.delete({ where: { id: taskId } });

  console.log(res);
  revalidatePath("/task");
}

export async function toggleIsCompleted(taskId: string, isChecked: boolean) {
  const res = await prisma.task.update({
    where: { id: taskId },
    data: { isCompleted: isChecked },
  });

  console.log(res);
  revalidatePath("/task");
}
