import { Star, User } from "lucide-react";

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import SectionContentWrapper from "./SectionContentWrapper";
import SectionWrapper from "./SectionWrapper";
import { H2 } from "../typography/Heading";

const Reviews = () => {
    return (
        <SectionWrapper className="bg-gray-100">
            <SectionContentWrapper>
                <H2>Customer Reviews</H2>
                <div className="grid gap-8">
                    <div className="flex gap-4">
                        <Avatar className="w-10 h-10 border">
                            <AvatarImage
                                alt="@shadcn"
                                src="/placeholder-user.jpg"
                            />
                            <AvatarFallback>
                                <User />
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 grid gap-2">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">Sarah Johnson</h3>
                                <div className="flex items-center gap-0.5">
                                    <Star className="w-5 h-5 fill-primary" />
                                    <Star className="w-5 h-5 fill-primary" />
                                    <Star className="w-5 h-5 fill-primary" />
                                    <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                    <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                </div>
                            </div>
                            <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                                I had a great experience with this computer
                                repair shop. They were able to diagnose and fix
                                my laptop quickly, and the pricing was very
                                reasonable. I would definitely use them again.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <Avatar className="w-10 h-10 border">
                                <AvatarImage
                                    alt="@shadcn"
                                    src="/placeholder-user.jpg"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex-1 grid gap-2">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">Alex Smith</h3>
                                <div className="flex items-center gap-0.5">
                                    <Star className="w-5 h-5 fill-primary" />
                                    <Star className="w-5 h-5 fill-primary" />
                                    <Star className="w-5 h-5 fill-primary" />
                                    <Star className="w-5 h-5 fill-primary" />
                                    <Star className="w-5 h-5 fill-primary" />
                                </div>
                            </div>
                            <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                                I had a minor issue with my desktop computer and
                                brought it to this repair shop. They were able
                                to diagnose and fix the problem quickly, and the
                                price was very reasonable. I would definitely
                                recommend them to anyone in need of computer
                                repair services.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex">
                            <Avatar className="w-10 h-10 border">
                                <AvatarImage
                                    alt="@shadcn"
                                    src="/placeholder-user.jpg"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 grid gap-2">
                                <h3 className="font-semibold">Emily Parker</h3>{" "}
                                <div className="flex items-center justify-between"></div>
                                <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                                    I had a great experience with this computer
                                    repair shop. They were able to diagnose and
                                    fix my laptop quickly, and the pricing was
                                    very reasonable. I would definitely use them
                                    again.
                                </p>
                            </div>
                            <div className="flex items-center gap-0.5">
                                <Star className="w-5 h-5 fill-primary" />
                                <Star className="w-5 h-5 fill-primary" />
                                <Star className="w-5 h-5 fill-primary" />
                                <Star className="w-5 h-5 fill-primary" />
                                <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContentWrapper>
        </SectionWrapper>
    );
};

export default Reviews;
