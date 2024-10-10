import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export async function AddNote(column, note, id) {
  const supabase = createClient();

  const updateData = { [column]: note };

  const { data, error } = await supabase
    .from("students")
    .update(updateData)
    .eq("id", id)
    .select();

  if (error) {
    redirect("/error");
  }
  return data;
}
