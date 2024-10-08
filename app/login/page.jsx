import "./login.css";
import LoginForm from "@/components/loginForm";
import IntroLogin from "@/components/introLogin";
export default function LoginPage() {
  return (
    <div className="loginPanel">
      <div className="loginContainer">
        <LoginForm />
        <IntroLogin />
      </div>
    </div>
  );
}
