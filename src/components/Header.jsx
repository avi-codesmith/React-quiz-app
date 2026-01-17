import logo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Quiz app logo" />
      <h1 className="heading">React Quiz APP</h1>
    </header>
  );
}
