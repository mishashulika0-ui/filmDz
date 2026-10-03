import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="layout">
            <div className="header">Каталог фільмів</div>

            <div className="sidebar">
                <NavLink to="/" end>Головна</NavLink>
                <NavLink to="/catalog">Каталог</NavLink>
                <NavLink to="/xyz">Помилка</NavLink>
            </div>

            <div className="content">
                <Outlet />
            </div>

            <div className="footer">©2026 Права захищені(ні)</div>
        </div>
    );
};

export default Layout;