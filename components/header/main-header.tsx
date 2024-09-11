import Link from "next/link";
import { NavLink } from "./nav-link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href={"/"}>NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink path="/news" text="News" />
          </li>
          <li>
            <NavLink path="/archive" text="Archive" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
