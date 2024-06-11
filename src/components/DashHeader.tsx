import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import ThemeSwitch from "./ThemeSwitch";
import usePersist from "@/hooks/usePersist";
import Spinner from "./ui/spinner";

const DashHeader = () => {
    const navigate = useNavigate();
    const [, setPersist] = usePersist();

    const [sendLogout, { isLoading, isSuccess }] = useSendLogoutMutation();

    const handleLogout = async () => {
        await sendLogout(null);
        setPersist(false);
        navigate("/");
    };
    useEffect(() => {
        if (isSuccess) navigate("/");
    }, [isSuccess, navigate]);

    if (isLoading) {
        <Spinner />;
    }
    return (
        <header className="flex h-16 items-center justify-end px-6 border-b bg-gray-100 dark:bg-gray-800 dark:border-gray-700 w-full z-10">
            <div className="flex gap-2">
                <ThemeSwitch />
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
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};
export default DashHeader;
