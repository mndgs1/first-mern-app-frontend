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
import { Note } from "@/types";
import { EditIcon } from "lucide-react";
import { SaveIcon } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useUpdateNoteMutation } from "./notesApiSlice";
import { useGetNotesQuery } from "../notes/notesApiSlice";
import useAuth from "@/hooks/useAuth";

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    text: z.string().min(2, {
        message: "Description must be at least 5 characters.",
    }),
    client: z.string().min(2, {
        message: "Client name must be at least 2 characters.",
    }),
    user: z.string(),
});

const EditNoteForm = ({ note }: { note: Note }) => {
    const { isAdmin, isManager } = useAuth();
    const [updateNote, { isLoading, isSuccess, isError, error }] =
        useUpdateNoteMutation();

    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: note.title,
            text: note.text,
            client: note.client,
            user: note.user,
        },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { title, text, client, user } = values;
        console.log(values);
        // await updateNote({
        //     id: note.id,
        //     title,
        //     firstName,
        //     lastName,
        //     email,
        //     active,
        //     users: [user],
        // });
        setOpen(false);
    }

    useEffect(() => {
        if (isSuccess) {
            toast({
                title: note.title,
                description: "Was changed succesfully!",
            });
        }
        if (isError) {
            toast({
                title: `Oops there was a problem! ${error}`,
                variant: "destructive",
            });
        }
    }, [isSuccess, isError, error, note.title, toast]);

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
                    <DialogTitle>Edit {`${note.title}`}</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form
                        aria-disabled={isLoading}
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 mb-6">
                        <div className="flex gap-4">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Title</FormLabel>
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
                        </div>

                        <DialogFooter className="flex flex-col gap-2 justify-between">
                            <Button variant={"destructive"}>Delete</Button>
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

export default EditNoteForm;
