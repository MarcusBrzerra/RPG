import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import "../components/Layout.css"

const Layout = ({children}) => {
    return(
        <section className="layout-section">
            <Topbar />
            <main className="layout-content">
                <Sidebar />
                <section className="layout-content-area">
                {children}
                </section>
            </main>
    </section>
    );
}
export default Layout