import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

type ThemeSwitchProps = {
    className?: string;
};

const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
    const { setTheme } = useTheme();
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html?.classList.contains("dark")) {
            setDarkTheme(true);
        } else {
            setDarkTheme(false);
        }
    }, []);

    const handleThemeChange = () => {
        const newTheme = darkTheme ? "light" : "dark";
        setTheme(newTheme);
        setDarkTheme(!darkTheme);
    };

    return (
        <Button
            variant={"outline"}
            size={"icon"}
            onClick={handleThemeChange}
            className={className}>
            {darkTheme ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </Button>
    );
};

export default ThemeSwitch;
