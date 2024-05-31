import SectionContentWrapper from "./sections/SectionContentWrapper";
import ThemeSwitch from "./ThemeSwitch";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

interface NavLinks {
    label: string;
    href: string;
}

type HeaderProps = {
    navLinks: NavLinks[];
};

const Header = ({ navLinks }: HeaderProps) => {
    return (
        <header className="fixed w-full mt-6">
            <SectionContentWrapper className="">
                <div className="flex items-center justify-between bg-background dark:bg-muted border rounded-[36px] h-16 px-8">
                    <div>LOGO</div>
                    <nav className="hidden lg:block">
                        <ul className="flex flex-row gap-2">
                            {navLinks.map((link, index) => (
                                <li key={`${link.label}${index}`}>
                                    <a href={link.href}>
                                        <Button variant={"ghost"}>
                                            {link.label}
                                        </Button>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="lg:hidden flex gap-4">
                        <ThemeSwitch />
                        <Button size={"icon"} variant={"outline"}>
                            <Menu />
                        </Button>
                    </div>
                    <div className="hidden lg:flex lg:gap-4">
                        <ThemeSwitch />
                        <Button>Login</Button>
                    </div>
                </div>
            </SectionContentWrapper>
        </header>
    );
};

export default Header;
