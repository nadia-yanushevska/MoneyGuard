import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

function DashboardPage() {
    return (
        <div>
            <Header />
            Dashboard
            <Outlet />
        </div>
    );
}

export default DashboardPage;
