"use client";

import { deleteTask } from "@/app/task/actions";
import { Trash } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  taskId: string;
}

export function DeleteButton(props: DeleteButtonProps) {
  return (
    <button
      {...props}
      onClick={() => deleteTask(props.taskId)}
      className="w-12 h-12 rounded-lg bg-red-500 hover:bg-red-600 focus:bg-red-600 flex items-center justify-center ms-auto transition-colors ease-in-out duration-300"
    >
      <Trash size={28} className="text-neutral-950" />
    </button>
  );
}
