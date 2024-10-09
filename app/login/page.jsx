import { AvatarBoy } from "@/helpers/icons";
import { login, signup } from "./actions";
import "./login.css";
export default function LoginPage() {
  return (
    <div className="container">
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
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
    <div className="intro-container">
      <h2>Hoş Geldiniz !</h2>
      <p>
      Yönetim paneline erişim sağlamak için lütfen giriş yapın.
      Eğer bir hesabınız yoksa, yeni bir yönetici hesabı oluşturabilirsiniz.
      </p>
      <button>No account yet? Signup.</button>
      </div>
    </div>
  );
}
