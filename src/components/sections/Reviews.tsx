import { Star, User } from "lucide-react";

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const Reviews = () => {
    return (
        <section className="mx-auto max-w-4xl py-12 px-4 md:px-6">
            <div className="mb-8">
                <h2 className="text-3xl font-bold">Customer Reviews</h2>
            </div>
            <div className="grid gap-8">
                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <Avatar className="w-10 h-10 border">
                            <AvatarImage
                                alt="@shadcn"
                                src="/placeholder-user.jpg"
                            />
                            <AvatarFallback>
                                <User />
                            </AvatarFallback>
                        </Avatar>
                    </div>
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
                            I had a great experience with this computer repair
                            shop. They were able to diagnose and fix my laptop
                            quickly, and the pricing was very reasonable. I
                            would definitely use them again.
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
                            brought it to this repair shop. They were able to
                            diagnose and fix the problem quickly, and the price
                            was very reasonable. I would definitely recommend
                            them to anyone in need of computer repair services.
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
                            <h3 className="font-semibold">Emily Parker</h3>
                            <div className="flex items-center gap-0.5">
                                <Star className="w-5 h-5 fill-primary" />
                                <Star className="w-5 h-5 fill-primary" />
                                <Star className="w-5 h-5 fill-primary" />
                                <Star className="w-5 h-5 fill-primary" />
                                <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                            </div>
                        </div>
                        <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                            I had a great experience with this computer repair
                            shop. They were able to diagnose and fix my laptop
                            quickly, and the pricing was very reasonable. I
                            would definitely use them again.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex justify-center">
                <div>
                    <div>
                        <Button>Write a Review</Button>
                    </div>
                    <div className="w-full max-w-md">
                        <div>
                            <div>Write a Review</div>
                            <div>
                                Share your experience with our computer repair
                                shop.
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="rating">Rating</Label>
                                <RadioGroup defaultValue="4" id="rating">
                                    <div className="flex items-center gap-2">
                                        <RadioGroupItem
                                            id="rating-5"
                                            value="5"
                                        />
                                        <Label htmlFor="rating-5">
                                            5 stars
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <RadioGroupItem
                                            id="rating-4"
                                            value="4"
                                        />
                                        <Label htmlFor="rating-4">
                                            4 stars
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <RadioGroupItem
                                            id="rating-3"
                                            value="3"
                                        />
                                        <Label htmlFor="rating-3">
                                            3 stars
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <RadioGroupItem
                                            id="rating-2"
                                            value="2"
                                        />
                                        <Label htmlFor="rating-2">
                                            2 stars
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <RadioGroupItem
                                            id="rating-1"
                                            value="1"
                                        />
                                        <Label htmlFor="rating-1">1 star</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="review">Review</Label>
                                <Textarea
                                    id="review"
                                    placeholder="Write your review"
                                />
                            </div>
                        </div>
                        <div>
                            <Button type="submit">Submit Review</Button>
                            <div>
                                <Button variant="outline">Cancel</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
