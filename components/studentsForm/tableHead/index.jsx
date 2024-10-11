import "./tableHead.css"; // CSS dosyasını import ediyoruz

export default function TableHead() {
  return (
    <thead>
      <tr className="tableRow">
        <th className="tableHeader">Ad</th>
        <th className="tableHeader">Soyad</th>
        <th className="tableHeader">Vize-1</th>
        <th className="tableHeader">Vize-2</th>
        <th className="tableHeader">Final</th>
        <th className="tableHeader">Ortalama</th>
        <th className="tableHeader">Actions</th>
      </tr>
    </thead>
  );
}