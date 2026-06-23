import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import "../components/Layout.css"
import { Outlet } from "react-router";

const Layout = () => {
    return(
        <section className="layout-section">
            <Topbar />
            <main className="layout-content">
                <Sidebar />
                <section className="layout-content-area">
                    <Outlet />
                </section>
            </main>
    </section>
    );
}
export default Layout