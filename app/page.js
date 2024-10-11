import StudentsTable from "@/components/studentsForm";
import "./globals.css";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Admin from "./admin/page";
import StudenstPages from "./students/page";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      {user?.user_metadata.role === "admin" ? <Admin /> : <StudenstPages />}
    </div>
  );
}
