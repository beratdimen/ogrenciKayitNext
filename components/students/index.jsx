"use client";
import { UserIcon } from "@/helpers/icons";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function StudentsPage() {
  const supabase = createClient();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState([]);
  const fetchStudents = async () => {
    let { data, error } = await supabase.from("students").select("*");
    if (error) {
      throw new Error("Veri alınamadı");
    }
    setStudents(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <div>
      {students.length > 0 ? (
        students.map((student) => (
          <div key={student.id}>
            <UserIcon />
            <p>{student.first_name}</p>
            <p>{student.last_name}</p>
            <p>{student.email}</p>
          </div>
        ))
      ) : (
        <div>
          <h2>Hiç öğrenci bulunamadı</h2>
        </div>
      )}
    </div>
  );
}
