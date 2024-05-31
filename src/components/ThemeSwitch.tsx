import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeSwitchProps = {
    className?: string;
};

const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
    const getSystemTheme = () => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches)
            return "dark";
        return "light";
    };

    const [currentTheme, setCurrentTheme] = useState<Theme>(getSystemTheme);

    const { setTheme } = useTheme();

    const handleThemeChange = () => {
        if (currentTheme === "dark") setCurrentTheme("light");
        else setCurrentTheme("dark");

        setTheme(currentTheme);
    };

    return (
        <Button
            variant={"outline"}
            size={"icon"}
            onClick={handleThemeChange}
            className={className}>
            {currentTheme === "dark" ? (
                <Moon className="h-5 w-5" />
            ) : (
                <Sun className="h-5 w-5" />
            )}
        </Button>
    );
};

export default ThemeSwitch;
