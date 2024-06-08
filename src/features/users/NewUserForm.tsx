import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogFooter,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

import { Input } from "@/components/ui/input";
import { SaveIcon } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAddNewUserMutation } from "./usersApiSlice";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    role: z.string(),
});

const EditUserForm = () => {
    const [addNewUser, { isLoading, isSuccess, isError, error }] =
        useAddNewUserMutation();

    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            role: "",
            password: "",
        },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("shoot");
        const { username, firstName, lastName, email, role, password } = values;
        if (!role) {
            await addNewUser({
                username,
                password,
                firstName,
                lastName,
                email,
                roles: ["Employee"],
            });
        }
        await addNewUser({
            username,
            password,
            firstName,
            lastName,
            email,
            roles: [role],
        });
        setOpen(false);
    }

    useEffect(() => {
        if (isSuccess) {
            toast({
                title: `New User Created!`,
            });
        }
        if (isError) {
            toast({
                title: `Oops there was a problem! ${error}`,
                variant: "destructive",
            });
        }
    }, [isSuccess, isError, toast, error]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Create User</Button>
            </DialogTrigger>
            <DialogContent
                onInteractOutside={(e) => {
                    e.preventDefault();
                }}>
                <DialogHeader className="mb-6">
                    <DialogTitle>New User</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form
                        aria-disabled={isLoading}
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 mb-6">
                        <div className="flex gap-4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Role</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Role" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Employee">
                                                    Employee
                                                </SelectItem>
                                                <SelectItem value="Manager">
                                                    Manager
                                                </SelectItem>
                                                <SelectItem value="Admin">
                                                    Admin
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-3">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
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
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter className="flex flex-col gap-2 justify-between">
                            <Button
                                variant={"outline"}
                                onClick={() => setOpen(!open)}
                                type="button">
                                Cancel
                            </Button>
                            <Button
                                variant={"primary"}
                                className="gap-1"
                                type="submit">
                                Create User
                                <SaveIcon className="h-4 w-4" />
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default EditUserForm;
