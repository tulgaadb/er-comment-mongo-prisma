import prisma from "./prisma";

export async function getTodos() {
  try {
    const todos = await prisma.comment.findMany();
    console.log("🚀 ~ file: todo.ts:6 ~ getTodos ~ todos:", todos);
    return { todos };
  } catch (error) {
    return { error };
  }
}

export async function createTodo(
  comment: string,
  user: string,
  section: string
) {
  try {
    const todo = await prisma.comment.create({
      data: { comment, user, section } as any,
    });
    return { todo };
  } catch (error) {
    return { error };
  }
}

export async function getTodoById(id: string) {
  try {
    const todo = await prisma.comment.findUnique({ where: { id } });
    return { todo };
  } catch (error) {
    return { error };
  }
}
