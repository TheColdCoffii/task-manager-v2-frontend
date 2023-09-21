import { Outlet } from 'react-router-dom';
import '@styles/components/layout/Wrapper.module.css';

export default function Wrapper() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
