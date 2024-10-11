export default function RegisterPage() {
  return (
    <form>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="E-Posta Adresi"
      />
      <br />
      <br />
      <input
        id="password"
        name="password"
        type="password"
        required
        placeholder="Şifre"
      />
      <br />
      <br />

      <label>
        Ad:
        <input type="text" id="first_name" name="first_name" />
      </label>
      <br />
      <br />
      <label>
        Soyad:
        <input type="text" name="last_name" id="last_name" />
      </label>
      <br />
      <br />

      <br />
      <label>
        Cinsiyet:
        <select name="gender" id="gender">
          <option value="">Seçiniz</option>
          <option value="Erkek">Erkek</option>
          <option value="Kadın">Kadın</option>
        </select>
      </label>
      <br />
      <br />
      <fieldset>
        <legend>Seviye Seçimi</legend>
        <label>
          <input type="radio" id="level" name="level" value="Frontend" />
          Frontend
        </label>
        <br />
        <br />
        <label>
          <input type="radio" name="level" value="Backend" />
          Backend
        </label>
      </fieldset>
      <br />
      <br />
      <label>
        Sınıf:
        <input type="number" id="class_name" name="class_name" />
      </label>
      <br />
      <br />
      <label>
        Tc No:
        <input type="number" name="tc_no" id="tc_no" />
      </label>
      <br />
      <br />
    </form>
  );
}
