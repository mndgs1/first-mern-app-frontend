import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";
import useTitle from "../hooks/useTitle";
const DashLayout = () => {
    useTitle("Dash | Dan D. Repairs");

    return (
        <>
            <DashHeader />
            <div className="dash-container">
                <Outlet />
            </div>
            <DashFooter />
        </>
    );
};

export default DashLayout;
