import * as React from "react";
import SectionContentWrapper from "./sections/SectionContentWrapper";
import ThemeSwitch from "../ThemeSwitch";
import { Button } from "../ui/button";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

interface NavLinks {
    label: string;
    href: string;
}

type HeaderProps = {
    navLinks: NavLinks[];
};

const Header = ({ navLinks }: HeaderProps) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [currentSection, setCurrentSection] = React.useState("");
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="w-full mt-6 fixed">
            <SectionContentWrapper>
                <div className="bg-background border rounded-[30px] px-8">
                    <div className="flex items-center justify-between min-h-16">
                        <div
                            className="cursor-pointer"
                            onClick={() => scroll.scrollToTop()}>
                            Tech<span className="text-foreground">Fix</span>
                        </div>
                        <nav className="hidden lg:block">
                            <ul className="flex flex-row gap-2">
                                {navLinks.map((link, index) => (
                                    <li key={`${link.label}${index}`}>
                                        <ScrollLink
                                            key={index}
                                            to={link.href}
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            onSetActive={() =>
                                                setCurrentSection(link.href)
                                            }
                                            duration={500}>
                                            <Button
                                                variant={"ghost"}
                                                className={
                                                    currentSection === link.href
                                                        ? "underline"
                                                        : ""
                                                }>
                                                {link.label}
                                            </Button>
                                        </ScrollLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="lg:hidden flex gap-4">
                            <ThemeSwitch />
                            <Button size={"icon"} variant={"outline"}>
                                {menuOpen ? (
                                    <X onClick={handleMenuOpen} />
                                ) : (
                                    <Menu onClick={handleMenuOpen} />
                                )}
                            </Button>
                        </div>
                        <div className="hidden lg:flex lg:gap-4">
                            <ThemeSwitch />
                            <Link
                                to="/login"
                                onClick={() => setMenuOpen(!menuOpen)}>
                                <Button>Login</Button>
                            </Link>
                        </div>
                    </div>
                    {menuOpen && (
                        <nav className={`pt-2 pb-4  border-t`}>
                            <ul className="flex flex-col gap-2 items-end">
                                <li>
                                    <Link to="/login">
                                        <Button>Login</Button>
                                    </Link>
                                </li>
                                {navLinks.map((link, index) => (
                                    <li key={`${link.label}${index}`}>
                                        <ScrollLink
                                            key={index}
                                            to={link.href}
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={500}
                                            onClick={() =>
                                                setMenuOpen(!menuOpen)
                                            }>
                                            <Button variant={"ghost"}>
                                                {link.label}
                                            </Button>
                                        </ScrollLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
            </SectionContentWrapper>
        </header>
    );
};

export default Header;
