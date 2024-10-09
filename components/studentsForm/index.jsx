"use client";
import { useEffect, useState } from "react";

export default function StudentsTable() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(
          "https://xiseukjsxraiqmqgdlcs.supabase.co/rest/v1/students?select=*",
          {
            method: "GET",
            headers: {
              apiKey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpc2V1a2pzeHJhaXFtcWdkbGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2MTAwMDcsImV4cCI6MjA0MzE4NjAwN30.Sc5m779kgEvy9SLsQvKOutFTHa-qtCeWuxkncKQKPeE",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpc2V1a2pzeHJhaXFtcWdkbGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2MTAwMDcsImV4cCI6MjA0MzE4NjAwN30.Sc5m779kgEvy9SLsQvKOutFTHa-qtCeWuxkncKQKPeE",
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Veri alınamadı");
        }

        const data = await response.json();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        console.error("Veri alma hatası:", error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div>
      <h1>Kayıtlı Öğrenciler</h1>
      <table>
        <thead>
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>TC No</th>
            <th>Cinsiyet</th>
            <th>Bölüm</th>
            <th>Sınıf</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.tc_no}</td>
                <td>{student.gender}</td>
                <td>{student.level}</td>
                <td>{student.class_name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Hiç öğrenci bulunamadı</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
