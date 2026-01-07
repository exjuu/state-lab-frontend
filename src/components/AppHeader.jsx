import { NavLink } from "react-router-dom";

export default function AppHeader() {
  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <NavLink to="/" style={styles.brand}>
          JobStack
        </NavLink>

        <nav style={styles.nav}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.linkActive : {}),
            })}
            end
          >
            공고 요약
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.linkActive : {}),
            })}
          >
            소개
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: "#fff",
    borderBottom: "1px solid #eee",
  },
  inner: {
    maxWidth: 920,
    margin: "0 auto",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  brand: {
    fontWeight: 700,
    textDecoration: "none",
    color: "#111",
    fontSize: 16,
    letterSpacing: "-0.2px",
  },
  nav: {
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  link: {
    padding: "8px 10px",
    borderRadius: 10,
    textDecoration: "none",
    color: "#555",
    fontSize: 13,
  },
  linkActive: {
    backgroundColor: "#f2f4f7",
    color: "#111",
  },
};
