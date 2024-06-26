import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate, Link } from "react-router-dom";
import { H2 } from "@/components/typography/Heading";

import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import { useDispatch } from "react-redux";

import { Oval } from "react-loader-spinner";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import SectionContentWrapper from "@/components/landing/sections/SectionContentWrapper";

import usePersist from "../../hooks/usePersist";
import useTitle from "../../hooks/useTitle";
import { P } from "@/components/typography/Paragraph";
import { Checkbox } from "@/components/ui/checkbox";

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
    persist: z.boolean().default(false),
});

const LoginForm = () => {
    useTitle("Login");
    const [login, { isLoading, isError }] = useLoginMutation();
    const [, setPersist] = usePersist();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: "",
            persist: false,
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            const { username, password, persist } = data;
            setPersist(persist);
            const { accessToken } = await login({
                username,
                password,
            }).unwrap();

            dispatch(setCredentials({ accessToken }));
            navigate("/dash/notes");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <SectionContentWrapper className="max-w-2xl">
                <Card className="overflow-hidden ">
                    <CardHeader>
                        <H2>Login</H2>
                        <P variant={"muted"}>lorem ibsum ibsum ibsum</P>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="username"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="persist"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel>
                                                    Remember this device
                                                </FormLabel>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <div className="flex justify-between">
                                    <Link to="/">
                                        <Button
                                            variant={"outline"}
                                            type="button">
                                            Back to Home
                                        </Button>
                                    </Link>
                                    <Button
                                        type="submit"
                                        className="flex gap-2">
                                        {isLoading ? (
                                            <>
                                                Logging in{"  "}
                                                <Oval height={12} width={12} />
                                            </>
                                        ) : (
                                            <>Login</>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                    <CardFooter>
                        {isError && (
                            <P variant={"destructive"}>
                                Oops Something went wrong!
                            </P>
                        )}
                        <Card>
                            <CardTitle>For testing purposes</CardTitle>
                            <span> Login: test</span>
                            <span> Password: test</span>
                        </Card>
                    </CardFooter>
                </Card>
            </SectionContentWrapper>
        </div>
    );
};

export default LoginForm;
