"use client";

import { useState, useRef } from "react";

export default function Admin() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    level: "",
    class_name: "",
    tc_no: null,
  });

  const formRef = useRef(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://xiseukjsxraiqmqgdlcs.supabase.co/rest/v1/students",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apiKey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpc2V1a2pzeHJhaXFtcWdkbGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2MTAwMDcsImV4cCI6MjA0MzE4NjAwN30.Sc5m779kgEvy9SLsQvKOutFTHa-qtCeWuxkncKQKPeE",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpc2V1a2pzeHJhaXFtcWdkbGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2MTAwMDcsImV4cCI6MjA0MzE4NjAwN30.Sc5m779kgEvy9SLsQvKOutFTHa-qtCeWuxkncKQKPeE",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log(JSON.stringify(formData));
      console.log(response);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error("Veri ekleme işlemi başarısız oldu: " + errorData);
      }
      const data = await response.json();
      console.log("Başarıyla eklendi:", data);

      formRef.current.reset();
    } catch (error) {
      console.error("Veri ekleme hatası:", error);
    }
  };

  return (
    <div>
      <h1>Yeni Öğrenci Ekle</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>
          Ad:
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Soyad:
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br />
        

        <br />
        <label>
          Cinsiyet:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Seçiniz</option>
            <option value="Erkek">Erkek</option>
            <option value="Kadın">Kadın</option>
          </select>
        </label>
        <br />
        <fieldset>
          <legend>Seviye Seçimi</legend>
          <label>
            <input
              type="radio"
              name="level"
              value="Frontend"
              checked={formData.level === "Frontend"}
              onChange={handleChange}
            />
            Frontend
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="level"
              value="Backend"
              checked={formData.level === "Backend"}
              onChange={handleChange}
            />
            Backend
          </label>
        </fieldset>
        <br />
        <label>
          Sınıf:
          <input
            type="number"
            name="class_name"
            value={formData.class_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Tc No:
          <input
            type="number"
            name="tc_no"
            value={formData.tc_no}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Öğrenciyi Ekle</button>
      </form>
    </div>
  );
}
