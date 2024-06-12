import SectionContentWrapper from "./SectionContentWrapper";
import SectionWrapper from "./SectionWrapper";
import { H2 } from "../../typography/Heading";
import { P } from "../../typography/Paragraph";
import { Card } from "../../ui/card";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Alice Smith",
            rating: 5,
            comment: "Fixed my computer in no time! Highly recommended!",
        },
        {
            name: "Bob Johnson",
            rating: 4,
            comment: "Great service. Very knowledgeable staff.",
        },
        {
            name: "Charlie Brown",
            rating: 5,
            comment:
                "Excellent work! Will definitely come back for future repairs.",
        },
        {
            name: "Eva Martinez",
            rating: 5,
            comment:
                "Quick and professional service. My computer runs like new now!",
        },
        {
            name: "John Doe",
            rating: 4,
            comment:
                "Friendly staff and reasonable prices. I'm satisfied with the repair.",
        },
        {
            name: "Sarah Williams",
            rating: 5,
            comment:
                "Amazing experience! They went above and beyond to fix my laptop. I'm extremely satisfied with the result.",
        },
        {
            name: "Jennifer Lee",
            rating: 5,
            comment:
                "Highly professional technicians. I trust them with all my tech issues. They always provide top-notch service.",
        },
        {
            name: "David Garcia",
            rating: 5,
            comment:
                "Great communication throughout the repair process. Highly recommend! Will definitely use their services again if needed.",
        },
        {
            name: "Michael Anderson",
            rating: 4,
            comment:
                "Efficient service. Got my computer back faster than expected. Would recommend!",
        },
    ];
    return (
        <SectionWrapper>
            <SectionContentWrapper>
                <H2 className="text-center">
                    Read trusted reviews from our customers
                </H2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full mt-10">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className=" rounded-lg p-6 shadow-sm h-fit">
                            <div className="flex items-center gap-4">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                    className="size-14 rounded-full object-cover"
                                />
                                <div>
                                    <div className="flex gap-0.5">
                                        {[...Array(testimonial.rating)].map(
                                            (_, i) => (
                                                <Star key={i} />
                                            )
                                        )}
                                    </div>
                                    <P>{testimonial.name}</P>
                                </div>
                            </div>
                            <P variant={"muted"}>{testimonial.comment}</P>
                        </Card>
                    ))}
                </div>
            </SectionContentWrapper>
        </SectionWrapper>
    );
};

export default Testimonials;

const Star = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-primary"
            viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
};
