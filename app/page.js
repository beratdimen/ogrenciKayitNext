import StudentsTable from "@/components/studentsForm";
import "./globals.css";

export default async function Home() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return <StudentsTable />;
}
