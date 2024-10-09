import { AvatarBoy } from "@/helpers/icons";
import { login, signup } from "./actions";
import "./login.css";
export default function LoginPage() {
  return (
    <form>
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
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  );
}
