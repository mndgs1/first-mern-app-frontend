import React from "react";
import { Cpu, Code, Shield, Database, Network } from "lucide-react"; // Adjust the import to match your actual icon library
import { SVGProps } from "react";
import { Card } from "@/components/ui/card";

type IconKey = "Cpu" | "Code" | "Shield" | "Database" | "Network";

const icons: Record<string, React.FC<SVGProps<SVGSVGElement>>> = {
    Cpu,
    Code,
    Shield,
    Database,
    Network,
};

const ServicesSection = ({ content }) => {
    return (
        <section className="section bg-green-100">
            <div className="flex flex-col items-center justify-center space-y-4 text-center section-container">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Our Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    We offer a wide range of services to keep your PC running
                    smoothly.
                </p>
                <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                    {services.map((service, index) => {
                        const IconComponent = icons[service.icon];
                        return (
                            <Card
                                key={index}
                                className="rounded bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-950 p-10">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                                        <IconComponent className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    {service.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
