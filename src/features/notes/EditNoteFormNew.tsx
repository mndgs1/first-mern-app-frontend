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
import { Note, User } from "@/types";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useUpdateNoteMutation } from "./notesApiSlice";
import { Textarea } from "@/components/ui/textarea";
import useAuth from "@/hooks/useAuth";
import { Check, ChevronsUpDown, SaveIcon, EditIcon } from "lucide-react";
import { useGetUsersQuery } from "../users/usersApiSlice";
import { getUserFullName } from "@/helpers/getUserFullName";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters."),
    text: z.string().min(2, "Description must be at least 5 characters."),
    client: z.string().min(2, "Client name must be at least 2 characters."),
    user: z.string(),
    completed: z.boolean(),
});

const EditNoteForm = ({ note }: { note: Note }) => {
    const { isAdmin, isManager } = useAuth();
    const [updateNote, { isLoading, isSuccess, isError, error }] =
        useUpdateNoteMutation();

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map((id) => data?.entities[id]),
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: note.title,
            text: note.text,
            client: note.client,
            user: note.user,
            completed: note.completed,
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
        await updateNote({ id: note.id, ...values });
        setOpen(false);
    };

    useEffect(() => {
        if (isSuccess) {
            toast({
                title: note.title,
                description: "Was changed successfully!",
            });
        }
        if (isError) {
            toast({
                title: `Oops there was a problem! ${error}`,
                variant: "destructive",
            });
        }
    }, [isSuccess, isError, error, note.title, toast]);

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
                <Button variant="ghost" size="icon" type="button">
                    <EditIcon className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent onInteractOutside={(e) => e.preventDefault()}>
                <DialogHeader className="mb-6">
                    <DialogTitle>Edit {note.title}</DialogTitle>
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
                        {(isAdmin || isManager) && userSelect}
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
                        <FormField
                            control={form.control}
                            name="completed"
                            render={({ field }) => (
                                <FormItem className="rounded-md p-3 border inline-block">
                                    <div className="flex flex-row items-center space-x-2 space-y-0 ">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormLabel>Mark as completed</FormLabel>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <DialogFooter className="flex flex-col gap-2 justify-between">
                            <Button variant="destructive" type="button">
                                Delete
                            </Button>
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
                                Save Changes <SaveIcon className="h-4 w-4" />
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default EditNoteForm;
