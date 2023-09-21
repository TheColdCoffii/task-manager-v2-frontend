import { Link, Outlet } from 'react-router-dom';

export default function AppHeader() {
  return (
    <>
      <header>
        <h1>App Header</h1>
        <nav>
          <Link to="/logout">Logout</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
