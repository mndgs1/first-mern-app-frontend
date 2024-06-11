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
    FormDescription,
} from "@/components/ui/form";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { User } from "@/types";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAddNewNoteMutation } from "./notesApiSlice";
import { Textarea } from "@/components/ui/textarea";
import { Check, ChevronsUpDown } from "lucide-react";
import { getUserFullName } from "@/helpers/getUserFullName";
import { useGetUsersQuery } from "../users/usersApiSlice";

const formSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters."),
    text: z.string().min(2, "Description must be at least 5 characters."),
    client: z.string().min(2, "Client name must be at least 2 characters."),
    user: z.string().min(2, "You must assign an employee"),
});

const NewNoteForm = () => {
    const [addNewNote, { isLoading, isSuccess, isError, error }] =
        useAddNewNoteMutation();

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map((id) => data?.entities[id]) as User[],
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            text: "",
            client: "",
            user: "",
        },
    });

    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);

    const getUserFullNameById = (id: string) => {
        const user = users?.find((user) => user.id === id) as User | undefined;
        return user
            ? getUserFullName(user.firstName, user.lastName)
            : "User not found";
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        await addNewNote({ ...values });
        setOpen(false);
    };

    useEffect(() => {
        if (isSuccess) {
            toast({
                title: "Note Created successfully!",
            });
        }
        if (isError) {
            toast({
                title: `Oops there was a problem! ${error}`,
                variant: "destructive",
            });
        }
    }, [isSuccess, isError, error, toast]);

    const userSelect = users ? (
        <FormField
            control={form.control}
            name="user"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>Employee</FormLabel>
                    <FormControl>
                        <Input {...field} className="hidden" />
                    </FormControl>
                    <Popover
                        open={popoverOpen}
                        onOpenChange={() => setPopoverOpen(!popoverOpen)}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={popoverOpen}
                                onClick={() => setPopoverOpen(!popoverOpen)}
                                className="justify-between max-w-60"
                                type="button">
                                {field.value
                                    ? getUserFullNameById(field.value)
                                    : "Select Employee..."}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0 max-w-60">
                            <Command>
                                <CommandInput placeholder="Search Employee..." />
                                <CommandList>
                                    <CommandEmpty>
                                        No employee found.
                                    </CommandEmpty>
                                    <CommandGroup>
                                        {users.map((user) => (
                                            <CommandItem
                                                key={user.id}
                                                value={getUserFullNameById(
                                                    user.id.toString()
                                                )}
                                                onSelect={() => {
                                                    form.setValue(
                                                        "user",
                                                        user.id.toString()
                                                    );
                                                    setPopoverOpen(false);
                                                }}>
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        field.value === user.id
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    )}
                                                />
                                                {getUserFullNameById(
                                                    user.id.toString()
                                                )}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <FormDescription>
                        This Employee will be assigned to complete this task
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    ) : (
        <div>No users found.</div>
    );

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button type="button">Create New Note </Button>
            </DialogTrigger>
            <DialogContent onInteractOutside={(e) => e.preventDefault()}>
                <DialogHeader className="mb-6">
                    <DialogTitle>Create Note</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form
                        aria-disabled={isLoading}
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 mb-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="John's Computer"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="text"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="h-[120px]"
                                            placeholder="Describe the job"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {userSelect}
                        <FormField
                            control={form.control}
                            name="client"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Client</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="John Doe"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter className="flex flex-col gap-2 justify-between">
                            <Button
                                variant="outline"
                                onClick={() => setOpen(!open)}
                                type="button">
                                Cancel
                            </Button>
                            <Button
                                variant="primary"
                                className="gap-1"
                                type="submit">
                                Create Note
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default NewNoteForm;
