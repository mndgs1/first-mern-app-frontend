import { Outlet } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { useNavigate, useLocation } from "react-router-dom";
import { P } from "./typography/Paragraph";
import { useState } from "react";
import { Button } from "./ui/button";
import DashHeader from "./DashHeaderNew";

import {
    ChevronLeftIcon,
    ChevronRightIcon,
    UsersIcon,
    FileTextIcon,
} from "lucide-react";

const DashLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState(false);

    const onNotesClicked = () => navigate("/dash/notes");
    const onUsersClicked = () => navigate("/dash/users");

    useTitle("Dash | Dan D. Repairs");

    return (
        <div className="flex h-screen w-full">
            <div
                className={`flex flex-col border-r bg-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 ${
                    isExpanded ? "w-60" : "w-16"
                }`}>
                <div className="flex h-16 items-center justify-between px-4 border-b dark:border-gray-700">
                    <div className="flex items-center justify-between gap-2 font-semibold text-lg">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                            onClick={() => setIsExpanded(!isExpanded)}>
                            {isExpanded ? (
                                <ChevronLeftIcon className="h-4 w-4" />
                            ) : (
                                <ChevronRightIcon className="h-4 w-4" />
                            )}

                            <span className="sr-only">Toggle sidebar</span>
                        </Button>
                        <P
                            className={`transition-all duration-300 ${
                                isExpanded ? "block" : "hidden"
                            }`}>
                            Dashboard
                        </P>
                    </div>
                </div>
                <nav
                    className={`flex flex-col gap-2 items-center py-4 ${
                        isExpanded ? "px-4" : ""
                    }`}>
                    <Button
                        variant={
                            location.pathname.includes("notes")
                                ? "primary"
                                : "ghost"
                        }
                        onClick={onNotesClicked}
                        size={isExpanded ? "default" : "icon"}
                        className={
                            isExpanded ? "justify-start w-full gap-2" : ""
                        }>
                        <FileTextIcon className="h-5 w-5" />
                        <span className={isExpanded ? "block" : "hidden"}>
                            Notes
                        </span>
                    </Button>
                    <Button
                        variant={
                            location.pathname.includes("users")
                                ? "primary"
                                : "ghost"
                        }
                        onClick={onUsersClicked}
                        size={isExpanded ? "default" : "icon"}
                        className={
                            isExpanded ? "justify-start w-full gap-2" : ""
                        }>
                        <UsersIcon className="h-5 w-5" />
                        <span className={isExpanded ? "block" : "hidden"}>
                            Users
                        </span>
                    </Button>
                </nav>
            </div>
            <div className="flex-1 overflow-auto">
                <DashHeader />
                <Outlet />
            </div>
        </div>
    );
};

export default DashLayout;
