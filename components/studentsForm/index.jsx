"use client";
import { AddNote } from "@/actions/students";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState, useRef } from "react";
import TableHead from "./tableHead";

export default function StudentsTable() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [not, setNot] = useState();
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedNot, setSelectedNot] = useState(null);

  const modalref = useRef();

  const openDialog = (id, notName) => {
    setSelectedStudent(id);
    setSelectedNot(notName);
    if (modalref.current) {
      modalref.current.showModal();
    }
  };
  const closeDialog = () => {
    if (modalref.current) {
      modalref.current.close();
    }
    setSelectedStudent(null);
    setSelectedNot(null);
    setNot(null);
  };
  const supabase = createClient();

  const fetchStudents = async () => {
    // const response = await fetch(
    //   "https://xiseukjsxraiqmqgdlcs.supabase.co/rest/v1/students?select=*",
    //   {
    //     method: "GET",
    //     headers: {
    //       apiKey:
    //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpc2V1a2pzeHJhaXFtcWdkbGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2MTAwMDcsImV4cCI6MjA0MzE4NjAwN30.Sc5m779kgEvy9SLsQvKOutFTHa-qtCeWuxkncKQKPeE",
    //       Authorization:
    //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpc2V1a2pzeHJhaXFtcWdkbGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2MTAwMDcsImV4cCI6MjA0MzE4NjAwN30.Sc5m779kgEvy9SLsQvKOutFTHa-qtCeWuxkncKQKPeE",
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload(false);
  };

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div>
      <h1>Kayıtlı Öğrenciler</h1>
      <button onClick={() => handleLogout()}>Çıkış Yap</button>
      <table>
        <TableHead />
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>
                  {student.vize1 ? (
                    student.vize1
                  ) : (
                    <button onClick={() => openDialog(student.id, "vize1")}>
                      Not Ekle
                    </button>
                  )}
                </td>
                <td>
                  {student.vize2 ? (
                    student.vize2
                  ) : (
                    <button onClick={() => openDialog(student.id, "vize2")}>
                      Not Ekle
                    </button>
                  )}
                </td>
                <td>
                  {student.final ? (
                    student.final
                  ) : (
                    <button onClick={() => openDialog(student.id, "final")}>
                      Not Ekle
                    </button>
                  )}
                </td>
                <td>
                  {(
                    (student.vize1 + student.vize2 + student.final) /
                    3
                  ).toFixed(2)}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Hiç öğrenci bulunamadı</td>
            </tr>
          )}
        </tbody>
      </table>

      <dialog ref={modalref}>
        <input
          type="number"
          placeholder="Not Giriniz"
          value={not}
          onChange={(e) => setNot(e.target.value)}
        />
        <button
          onClick={() => {
            AddNote(selectedNot, not, selectedStudent);
            closeDialog();
            fetchStudents();
          }}
        >
          Gönder
        </button>
        <button onClick={closeDialog} className="closeButton">
          x
        </button>
      </dialog>
    </div>
  );
}
