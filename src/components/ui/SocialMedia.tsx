import { ReactNode } from "react";

const SocialMedia = ({ href, icon }: { href: string; icon: ReactNode }) => {
    return (
        <a
            href={href}
            target="_blank"
            className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
            {icon}
        </a>
    );
};

export default SocialMedia;
