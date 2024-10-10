import { AvatarBoy } from "@/helpers/icons";
import { login, signup } from "./actions";
import "./login.css";
import Link from "next/link";
export default function LoginPage() {
  return (
    <div className="bbb">
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
          <button formAction={login}>Giriş Yap</button>
        </form>
        <div className="intro-container">
          <h2>Hoş Geldiniz !</h2>
          <p>
            Yönetim paneline erişim sağlamak için lütfen giriş yapın. Eğer bir
            hesabınız yoksa, yeni bir yönetici hesabı oluşturabilirsiniz.
          </p>
          <p>Üye değil misiniz?</p>
          <Link href="/yokki">Hemen kayıt olun</Link>
        </div>
      </div>
    </div>
  );
}
