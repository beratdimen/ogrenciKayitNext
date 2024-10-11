import { signup } from "@/app/login/actions";

export default function SignUpForm() {
  return (
    <div className="SignUpContainer">
      <h2>Kayıt Formu</h2>
      <form>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email Address"
        />
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
        />
        <button formAction={signup}>Kaydet</button>
      </form>
    </div>
  );
}
