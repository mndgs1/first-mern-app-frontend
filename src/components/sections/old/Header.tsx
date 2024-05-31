import { Link } from "react-router-dom";
import { Button } from "../../ui/button";

type Link = {
    label: string;
    href: string;
};

interface Content {
    logo: string;
    navLinks: Link[];
    additionalLinks: Link[] | [];
}

const Header = ({ content }: { content: Content }) => {
    return (
        <header className="bg-gray-100 h-20 absolute inset-x-0 top-0 z-50 flex items-center">
            <div className="container flex justify-between items-center h-16">
                <div className="inline">{content.logo}</div>
                <nav>
                    <ul className="flex">
                        {content.navLinks.map((link, index) => (
                            <li key={`${link.label}${index}`}>
                                <Link to={link.href}>
                                    <Button variant={"link"}>
                                        {link.label}
                                    </Button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
