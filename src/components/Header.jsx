import logo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Quiz app logo" />
      <h1>React Quiz APP</h1>
    </header>
  );
}
