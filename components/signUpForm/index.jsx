import { signUp, signup } from "@/app/login/actions";

export default function SignUpForm() {
  return (
    <div className="SignUpContainer">
      
      <form>
      <h2>Kayıt Formu</h2>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          placeholder="Ad"
        />
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          placeholder="Soyad"
        />
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
        <button formAction={signUp}>Kaydet</button>
      </form>
    </div>
  );
}
