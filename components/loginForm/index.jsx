import { login } from "@/app/login/actions";

export default function LoginForm() {
  return (
    <form>
      <h2>Giriş Yap</h2>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="E-Posta Adresi"
      />
      <input
        id="password"
        name="password"
        type="password"
        required
        placeholder="Şifre"
      />
      <button formAction={login}>Giriş Yap</button>
    </form>
  );
}
