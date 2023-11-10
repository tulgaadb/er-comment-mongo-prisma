"use client";

import { useRef } from "react";
import { createTodoAction } from "@/app/_actions";

const NewTodoForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const comment = data.get("comment") as string;
    const user = data.get("user") as string;
    const section = data.get("section") as string;

    console.log(
      "🚀 ~ file: NewToDoForm.tsx:15 ~ action ~ comment, user, section:",
      comment,
      user,
      section
    );
    try {
      await createTodoAction(comment, user, section);
    } catch (error) {
      console.log("🚀 ~ file: NewToDoForm.tsx:23 ~ action ~ error:", error);
    }
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={action}>
      <input
        type="text"
        name="comment"
        className="rounded border border-slate-400 px-2 py-0.5"
      />
      <input type="hidden" name="user" defaultValue={""} />
      <input type="hidden" name="section" defaultValue={""} />
      <button
        type="submit"
        className="ml-2 rounded bg-slate-700 px-2 py-1 text-sm text-white disabled:bg-opacity-50"
      >
        Send
      </button>
    </form>
  );
};

export default NewTodoForm;
