import { getTodos } from "@/lib/todo";
import Image from "next/image";
import NewTodoForm from "./components/NewToDoForm";

export default async function Home() {
  const { todos } = await getTodos();
  console.log("🚀 ~ file: page.tsx:7 ~ Home ~ todos:", todos);
  return (
    <section>
      <NewTodoForm />
      {todos?.map((c: any) => {
        return (
          <div key={c.id}>
            <div className="grid my-4 gap-6 justify-self-end">
              <div className="text-sm flex items-start gap-4">
                <div className="grid gap-1.5">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">{c.user}</div>
                  </div>
                  <div>{c.comment}</div>
                  <div className="text-zinc-500 text-xs dark:text-zinc-400">
                    {new Date(c.created_at).toUTCString()}
                  </div>
                </div>
              </div>
            </div>
            <hr className="solid" />
          </div>
        );
      })}
    </section>
  );
}
