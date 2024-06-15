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
import { User } from "@/types";
import { EditIcon } from "lucide-react";
import { SaveIcon } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useUpdateUserMutation } from "./usersApiSlice";
// import useAuth from "@/hooks/useAuth";
// import EditActiveUserModal from "./EditActiveUserModal";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
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
    active: z.boolean(),
    role: z.string(),
});

const EditUserForm = ({ user }: { user: User }) => {
    // const { isAdmin, isManager } = useAuth();
    const [updateUser, { isLoading, isSuccess, isError, error }] =
        useUpdateUserMutation();

    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.roles[user.roles.length - 1],
            active: user.active,
        },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { username, firstName, lastName, email, active, role } = values;
        await updateUser({
            id: user.id,
            username,
            firstName,
            lastName,
            email,
            active,
            roles: [role],
        });
        setOpen(false);
    }

    useEffect(() => {
        if (isSuccess) {
            toast({
                title: `${user.firstName} ${user.lastName}`,
                description: "Was changed succesfully!",
            });
        }
        if (isError) {
            toast({
                title: `Oops there was a problem! ${error}`,
                variant: "destructive",
            });
        }
    }, [isSuccess, isError, error, user.firstName, user.lastName, toast]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={"ghost"} size={"icon"}>
                    <EditIcon className={"h-4 w-4"} />
                </Button>
            </DialogTrigger>
            <DialogContent
                onInteractOutside={(e) => {
                    e.preventDefault();
                }}>
                <DialogHeader className="mb-6">
                    <DialogTitle>
                        Edit {`${user.firstName} ${user.lastName}`}
                    </DialogTitle>
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
                                            <Input
                                                placeholder="shadcn"
                                                {...field}
                                            />
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
                                            defaultValue={
                                                user.roles[
                                                    user.roles.length - 1
                                                ]
                                            }>
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

                        <DialogFooter className="flex flex-col gap-2 justify-between">
                            {/* <EditActiveUserModal
                                user={user}
                                isManager={isManager}
                                isAdmin={isAdmin}
                                editUserModalOpen={open}
                                editUserModalSetOpen={setOpen}
                            /> */}
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
                                Save Changes
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
