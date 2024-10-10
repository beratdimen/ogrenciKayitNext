import Link from "next/link";

export default function IntroLogin() {
  return (
    <div className="intro-container">
      <h2>Hoş Geldiniz !</h2>
      <p>
        Yönetim paneline erişim sağlamak için lütfen giriş yapın. Eğer bir
        hesabınız yoksa, yeni bir yönetici hesabı oluşturabilirsiniz.
      </p>
      <p>Üye değil misiniz?</p>
      <Link href="/signup">Hemen kayıt olun</Link>
    </div>
  );
}
