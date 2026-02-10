import { NavLink } from "react-router-dom";

export function Header() {
  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    marginRight: 12,
    textDecoration: "none",
    fontWeight: isActive ? 700 : 400,
  });

  return (
    <header style={{ padding: 24, borderBottom: "1px solid #eaeaea" }}>
      <nav>
        <NavLink to="/week" style={linkStyle}>
          Week
        </NavLink>
        <NavLink to="/list" style={linkStyle}>
          List
        </NavLink>
        <NavLink to="/settings" style={linkStyle}>
          Settings
        </NavLink>
      </nav>
    </header>
  );
}
