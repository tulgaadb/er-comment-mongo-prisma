"use server";

import { createTodo } from "@/lib/todo";
import { revalidatePath } from "next/cache";

export async function createTodoAction(
  comment: string,
  user: string,
  section: string
) {
  console.log(
    "🚀 ~ file: _actions.ts:12 ~ comment, user, section:",
    comment,
    user,
    section
  );
  try {
    await createTodo(comment, user, section);
  } catch (error) {
    console.log("🚀 ~ file: _actions.ts:16 ~ error:", error);
  }
  revalidatePath("/");
}
