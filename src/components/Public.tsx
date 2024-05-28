import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Links = [
    { href: "/", label: "Home" },
    { href: "/", label: "Home" },
    { href: "/", label: "Home" },
    { href: "/", label: "Home" },
    { href: "/", label: "Home" },
];
const Public = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            <header className="flex justify-between items-center h-16 md:h-20 px-12 md:px-20 z-10 top-0 bg-red-200">
                <div className="inline">Logo</div>
                <nav>
                    <ul className="flex">
                        {Links.map((link, index) => (
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
            </header>
            <main className="flex flex-col flex-grow">
                <section className="flex-grow bg-green-200">
                    <div>
                        <h1>Professional Electronics Repairs</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Omnis accusamus natus vitae ad? Recusandae
                            facere laudantium eos ipsam numquam at. Aut
                            accusamus, nesciunt aliquam quibusdam ipsam neque
                            obcaecati quos alias!
                        </p>
                        <div>
                            <Link to={"*"}>
                                <Button>Get Help</Button>
                            </Link>
                            <Link to={"*"}>
                                <Button variant={"outline"}>Learn More</Button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </section>
                <section className="h-96 bg-gray-200">Second Section</section>
                <section className="h-96 bg-gray-200">Third Section</section>
                <section className="h-96 bg-gray-200">Fourth Section</section>
            </main>
            <footer className="bg-red-200">
                <Link to="/login">Employee Login</Link>
                <Button>Footer Button</Button>
            </footer>
        </div>
    );
};
export default Public;
