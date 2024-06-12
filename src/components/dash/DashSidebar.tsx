import { useNavigate, useLocation } from "react-router-dom";
import { P } from "../typography/Paragraph";
import { useState } from "react";
import { Button } from "../ui/button";

import {
    ChevronLeftIcon,
    ChevronRightIcon,
    UsersIcon,
    FileTextIcon,
} from "lucide-react";
import useAuth from "@/hooks/useAuth";

const DashSidebar = () => {
    const { isManager, isAdmin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState(true);

    const onNotesClicked = () => navigate("/dash/notes");
    const onUsersClicked = () => navigate("/dash/users");

    return (
        <div
            className={`flex flex-col border-r bg-background border-border ${
                isExpanded ? "w-56" : "w-16"
            }`}>
            <div className="flex h-16 items-center justify-between px-4 border-b ">
                <div className="flex items-center justify-between gap-2 font-semibold text-lg">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full border w-8 h-8"
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
                            : "outline"
                    }
                    onClick={onNotesClicked}
                    size={isExpanded ? "default" : "icon"}
                    className={isExpanded ? "justify-start w-full gap-2" : ""}>
                    <FileTextIcon className="h-5 w-5" />
                    <span className={isExpanded ? "block" : "hidden"}>
                        Notes
                    </span>
                </Button>
                {(isAdmin || isManager) && (
                    <Button
                        variant={
                            location.pathname.includes("users")
                                ? "primary"
                                : "outline"
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
                )}
            </nav>
        </div>
    );
};

export default DashSidebar;
