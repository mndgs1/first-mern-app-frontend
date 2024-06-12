import { Outlet } from "react-router-dom";
import DashSidebar from "./DashSidebar";
import DashHeader from "./DashHeader";

const DashLayout = () => {
    return (
        <div className="flex h-screen w-full">
            <DashSidebar />
            <div className="flex-1 overflow-auto">
                <DashHeader />
                <Outlet />
            </div>
        </div>
    );
};

export default DashLayout;
