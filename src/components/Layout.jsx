import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
    return(
        <section className="layout-section">
            <Sidebar />
            <main className="layout-content">
                <Topbar />
                <section className="layout-content-area">
                {children}
                </section>
            </main>
    </section>
    );
}
export default Layout