// @ts-nocheck
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileCirclePlus,
    faFilePen,
    faUserGear,
    faUserPlus,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link, useLocation, Outlet } from "react-router-dom";

// NEW IMPORTS
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

import { SearchIcon } from "lucide-react";
// NEW IMPORTS
import { useSendLogoutMutation } from "../features/auth/authApiSlice";

import useAuth from "../hooks/useAuth";

const DASH_REGEX = /^\/dash(\/)?$/;
const NOTES_REGEX = /^\/dash\/notes(\/)?$/;
const USERS_REGEX = /^\/dash\/users(\/)?$/;

const DashHeader = () => {
    const { isManager, isAdmin } = useAuth();

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [sendLogout, { isLoading, isSuccess, isError, error }] =
        useSendLogoutMutation();

    const handleLogout = async () => {
        await sendLogout();
        navigate("/");
    };
    useEffect(() => {
        if (isSuccess) navigate("/");
    }, [isSuccess, navigate]);

    const onNewNoteClicked = () => navigate("/dash/notes/new");
    const onNewUserClicked = () => navigate("/dash/users/new");
    const onNotesClicked = () => navigate("/dash/notes");
    const onUsersClicked = () => navigate("/dash/users");

    let dashClass = null;
    if (
        !DASH_REGEX.test(pathname) &&
        !NOTES_REGEX.test(pathname) &&
        !USERS_REGEX.test(pathname)
    ) {
        dashClass = "dash-header__container--small";
    }

    let newNoteButton = null;
    if (NOTES_REGEX.test(pathname)) {
        newNoteButton = (
            <button
                className="icon-button"
                title="New Note"
                onClick={onNewNoteClicked}>
                <FontAwesomeIcon icon={faFileCirclePlus} />
            </button>
        );
    }

    let newUserButton = null;
    if (USERS_REGEX.test(pathname)) {
        newUserButton = (
            <button
                className="icon-button"
                title="New User"
                onClick={onNewUserClicked}>
                <FontAwesomeIcon icon={faUserPlus} />
            </button>
        );
    }

    let userButton = null;
    if (isManager || isAdmin) {
        if (!USERS_REGEX.test(pathname) && pathname.includes("/dash")) {
            userButton = (
                <button
                    className="icon-button"
                    title="Users"
                    onClick={onUsersClicked}>
                    <FontAwesomeIcon icon={faUserGear} />
                </button>
            );
        }
    }

    let notesButton = null;
    if (!NOTES_REGEX.test(pathname) && pathname.includes("/dash")) {
        notesButton = (
            <button
                className="icon-button"
                title="Notes"
                onClick={onNotesClicked}>
                <FontAwesomeIcon icon={faFilePen} />
            </button>
        );
    }

    const logoutButton = (
        <button className="icon-button" title="Logout" onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
    );

    const errClass = isError ? "errmsg" : "offscreen";

    let buttonContent;
    if (isLoading) {
        buttonContent = <p>Logging Out...</p>;
    } else {
        buttonContent = (
            <>
                {newNoteButton}
                {newUserButton}
                {notesButton}
                {userButton}
                {logoutButton}
            </>
        );
    }

    return (
        <header className="flex h-16 items-center justify-between px-6 border-b bg-gray-100 dark:bg-gray-800 dark:border-gray-700 w-full z-10">
            <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-8 pr-4 py-2 rounded-md bg-white dark:bg-gray-950"
                    // value={search}
                    // onChange={handleSearch}
                />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="z-20">
                    <Button variant={"outline"} size={"icon"}>
                        <Avatar>
                            <AvatarImage src="asd" />
                            <AvatarFallback>
                                <User />
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
};
export default DashHeader;
