// @ts-nocheck
import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate, Link } from "react-router-dom";
import { H2 } from "@/components/typography/Heading";

import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import { useDispatch } from "react-redux";

import { SyncLoader } from "react-spinners";
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
} from "@/components/ui/card";
import SectionContentWrapper from "@/components/sections/SectionContentWrapper";
import SectionWrapper from "@/components/sections/SectionWrapper";

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
    persist: z.boolean().default(false).optional(),
});

const LoginForm = () => {
    useTitle("Login");
    const [login, { isLoading }] = useLoginMutation();
    const errRef = React.useRef();
    const [errMsg, setErrMsg] = React.useState("");
    const [persist, setPersist] = usePersist();
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
            const { accessToken } = await login({
                username,
                password,
            }).unwrap();

            setPersist(persist);
            dispatch(setCredentials({ accessToken }));
            navigate("/dash");
        } catch (error) {
            console.log(error);
            if (!error.status) {
                setErrMsg("No Server Response");
            } else if (error.status === 400) {
                setErrMsg("Missing username or password");
            } else if (error.status === 401) {
                setErrMsg("Either username or password is incorrect");
            } else {
                setErrMsg(error?.data?.message);
            }
            errRef.current.focus();
        }
    }

    return (
        <SectionWrapper>
            <SectionContentWrapper className="max-w-2xl">
                <Card>
                    <CardHeader>
                        <H2>Login</H2>
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
                                                    placeholder="Doe"
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
                                                    placeholder=""
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
                                <P variant={"destructive"}>{errMsg}</P>
                                <Button type="submit">
                                    {isLoading ? (
                                        <>
                                            Logging in <SyncLoader />
                                        </>
                                    ) : (
                                        <>Login</>
                                    )}
                                </Button>
                            </form>
                        </Form>
                        <CardFooter>
                            <Link to="/">Back to Home</Link>
                        </CardFooter>
                    </CardContent>
                </Card>
            </SectionContentWrapper>
        </SectionWrapper>
    );
};

export default LoginForm;
