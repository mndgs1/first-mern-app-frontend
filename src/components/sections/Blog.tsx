import { Card } from "@/components/ui/card";
import { H3 } from "@/components/typography/Heading";
import { P } from "@/components/typography/Paragraph";
import SectionWrapper from "./SectionWrapper";
import SectionContentWrapper from "./SectionContentWrapper";

const Blog = (content) => {
    return (
        <SectionWrapper>
            <SectionContentWrapper>
                <H2>{content.title}</H2>
                {content.posts.map((post) => (
                    <Card>
                        <div className="w-44 h-44 bg-gray-100 overflow-hidden"></div>
                        <P>{post.category}</P>
                        <H3>{post.title}</H3>
                    </Card>
                ))}
            </SectionContentWrapper>
        </SectionWrapper>
    );
};

export default Blog;
