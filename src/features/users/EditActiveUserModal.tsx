// import * as React from "react";
// import {
//     Dialog,
//     DialogContent,
//     DialogFooter,
//     DialogHeader,
//     DialogTrigger,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import type { User } from "@/types";
// import { H3 } from "@/components/typography/Heading";
// import { P } from "@/components/typography/Paragraph";

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useUpdateUserMutation } from "./usersApiSlice";
// import { useToast } from "@/components/ui/use-toast";

// const formSchema = z.object({
//     active: z.boolean(),
// });

// import { Form } from "@/components/ui/form";

// const EditActiveUserModal = ({
//     user,
//     isManager,
//     isAdmin,
//     editUserModalOpen,
//     editUserModalSetOpen,
// }: {
//     user: User;
//     isManager: boolean;
//     isAdmin: boolean;
//     editUserModalOpen: boolean;
//     editUserModalSetOpen: (arg: boolean) => void;
// }) => {
//     const [open, setOpen] = React.useState(false);

//     const [updateUser, { isLoading, isSuccess, isError, error }] =
//         useUpdateUserMutation();

//     const { toast } = useToast();
//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             active: user.active,
//         },
//     });
//     async function onSubmit(values: z.infer<typeof formSchema>) {
//         const { active } = values;
//         await updateUser({
//             id: user.id,
//             username: user.username,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             email: user.email,
//             active,
//         });
//         setOpen(false);
//     }

//     React.useEffect(() => {
//         if (isSuccess) {
//             toast({
//                 title: `${user.firstName} ${user.lastName}`,
//                 description: "Was changed succesfully!",
//             });
//         }
//         if (isError) {
//             toast({
//                 title: `Oops there was a problem! ${error}`,
//                 variant: "destructive",
//             });
//         }
//     }, [isSuccess, isError, error, user.firstName, user.lastName, toast]);

//     const handleActiveChange = () => {
//         editUserModalSetOpen(!editUserModalOpen);
//     };

//     if (user.active && (isManager || isAdmin)) {
//         return (
//             <Dialog open={open} onOpenChange={setOpen}>
//                 <DialogTrigger asChild>
//                     <Button variant={"destructive"}>Deactive User</Button>
//                 </DialogTrigger>

//                 <DialogContent>
//                     <DialogHeader>
//                         <H3>
//                             Deactivate user {user.firstName} {user.lastName}?
//                         </H3>
//                     </DialogHeader>
//                     <P variant="muted">
//                         Note, deactivated user will not be able to login!
//                     </P>
//                     <DialogFooter>
//                         <Button
//                             variant={"outline"}
//                             onClick={() => setOpen(!open)}>
//                             Back
//                         </Button>
//                         <Button
//                             variant={"destructive"}
//                             onClick={handleActiveChange}>
//                             Deactivate User
//                         </Button>
//                     </DialogFooter>
//                 </DialogContent>
//             </Dialog>
//         );
//     } else if (!user.active && (isManager || isAdmin)) {
//         return (
//             <Dialog>
//                 <DialogTrigger asChild>
//                     <Button>Activate User</Button>
//                 </DialogTrigger>
//                 <DialogContent>
//                     <H3>
//                         Activate user {user.firstName} {user.lastName}?
//                     </H3>
//                     <P variant="muted">
//                         Note, active user will be able to login again!
//                     </P>
//                 </DialogContent>
//                 <DialogFooter>
//                     <Button variant={"outline"}>Back</Button>
//                     <Button onClick={handleActiveChange}>Activate User</Button>
//                 </DialogFooter>
//             </Dialog>
//         );
//     } else {
//         return <></>;
//     }
// };

// export default EditActiveUserModal;
