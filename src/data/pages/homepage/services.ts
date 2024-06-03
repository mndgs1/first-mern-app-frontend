import { Cpu, ShieldCheck, Database, Network } from "lucide-react";

export const ServicesContent = {
    services: [
        {
            title: "Hardware Repair",
            description:
                "We can diagnose and repair any hardware issues with your PC, including motherboards, CPUs, RAM, and more.",
            icon: Cpu,
            href: "#",
        },
        {
            title: "Virus Removal",
            description:
                "We can detect and remove any viruses, malware, or other malicious software that may be affecting your PC.",
            icon: ShieldCheck,
            href: "#",
        },
        {
            title: "Data Recovery",
            description:
                "Our data recovery experts can help you retrieve important files and documents that have been lost or deleted.",
            icon: Database,
            href: "#",
        },
        {
            title: "Network Setup",
            description:
                "We can assist with setting up and configuring your home or office network, ensuring fast and secure connectivity.",
            icon: Network,
            href: "#",
        },
    ],
};
