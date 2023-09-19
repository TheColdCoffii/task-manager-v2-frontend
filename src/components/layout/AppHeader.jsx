import { Outlet } from 'react-router-dom';

export default function AppHeader() {
    return (
        <>
            <header>
                <h1>App Header</h1>
            </header>
            <Outlet />
        </>
    );
}
