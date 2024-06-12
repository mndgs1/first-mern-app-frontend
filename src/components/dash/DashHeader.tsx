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
import useAuth from "@/hooks/useAuth";
import { User } from "lucide-react";

import { useSendLogoutMutation } from "../../features/auth/authApiSlice";
import ThemeSwitch from "../ThemeSwitch";
import usePersist from "@/hooks/usePersist";
import Spinner from "../ui/spinner";

const DashHeader = () => {
    const navigate = useNavigate();
    const [, setPersist] = usePersist();

    const [sendLogout, { isLoading, isSuccess }] = useSendLogoutMutation();

    const { username } = useAuth();

    const handleLogout = async () => {
        setPersist(false);
        await sendLogout(null);
        navigate("/");
    };
    useEffect(() => {
        if (isSuccess) navigate("/");
    }, [isSuccess, navigate]);

    if (isLoading) {
        <Spinner />;
    }
    return (
        <header className="flex h-16 items-center justify-end px-6 border-b border-border bg-background w-full z-10">
            <div className="flex gap-2">
                <ThemeSwitch />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="z-20">
                        <Button variant={"outline"} size={"icon"}>
                            <Avatar>
                                <AvatarImage src="asd" />
                                <AvatarFallback className="border bg-background">
                                    <User />
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>{username}</DropdownMenuLabel>
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
