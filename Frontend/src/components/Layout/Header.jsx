import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <h1>Notes app</h1>{" "}
      <nav>
        <ul>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Log out</a>
          </li>
          <li>
            <a href="/">Register</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
