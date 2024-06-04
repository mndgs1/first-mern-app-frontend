import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState("Notes");
    const [sortColumn, setSortColumn] = useState({
        key: "status",
        order: "dsc",
    });
    const [search, setSearch] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);
    const notes = useMemo(
        () => [
            {
                employee: "John Doe",
                title: "Project Kickoff",
                description: "Discuss project requirements and timeline",
                client: "Acme Inc",
                date: "2023-05-01",
                deadline: "2023-06-30",
                status: "In Progress",
            },
            {
                employee: "Jane Smith",
                title: "Design Review",
                description: "Review wireframes and mockups",
                client: "Globex Corp",
                date: "2023-04-15",
                deadline: "2023-05-31",
                status: "Done",
            },
            {
                employee: "Bob Johnson",
                title: "Development Sprint",
                description: "Implement new features",
                client: "Stark Industries",
                date: "2023-03-01",
                deadline: "2023-04-30",
                status: "In Progress",
            },
            {
                employee: "Sarah Lee",
                title: "QA Testing",
                description: "Perform end-to-end testing",
                client: "Umbrella Corp",
                date: "2023-02-20",
                deadline: "2023-03-15",
                status: "Done",
            },
            {
                employee: "Tom Wilson",
                title: "Client Meeting",
                description: "Discuss project progress",
                client: "Stark Industries",
                date: "2023-01-10",
                deadline: "2023-02-28",
                status: "In Progress",
            },
            {
                employee: "John Doe",
                title: "Project Kickoff",
                description: "Discuss project requirements and timeline",
                client: "Acme Inc",
                date: "2023-05-01",
                deadline: "2023-06-30",
                status: "In Progress",
            },
            {
                employee: "Jane Smith",
                title: "Design Review",
                description: "Review wireframes and mockups",
                client: "Globex Corp",
                date: "2023-04-15",
                deadline: "2023-05-31",
                status: "Done",
            },
            {
                employee: "Bob Johnson",
                title: "Development Sprint",
                description: "Implement new features",
                client: "Stark Industries",
                date: "2023-03-01",
                deadline: "2023-04-30",
                status: "In Progress",
            },
            {
                employee: "Sarah Lee",
                title: "QA Testing",
                description: "Perform end-to-end testing",
                client: "Umbrella Corp",
                date: "2023-02-20",
                deadline: "2023-03-15",
                status: "Done",
            },
            {
                employee: "Tom Wilson",
                title: "Client Meeting",
                description: "Discuss project progress",
                client: "Stark Industries",
                date: "2023-01-10",
                deadline: "2023-02-28",
                status: "In Progress",
            },
            {
                employee: "John Doe",
                title: "Project Kickoff",
                description: "Discuss project requirements and timeline",
                client: "Acme Inc",
                date: "2023-05-01",
                deadline: "2023-06-30",
                status: "In Progress",
            },
            {
                employee: "Jane Smith",
                title: "Design Review",
                description: "Review wireframes and mockups",
                client: "Globex Corp",
                date: "2023-04-15",
                deadline: "2023-05-31",
                status: "Done",
            },
            {
                employee: "Bob Johnson",
                title: "Development Sprint",
                description: "Implement new features",
                client: "Stark Industries",
                date: "2023-03-01",
                deadline: "2023-04-30",
                status: "In Progress",
            },
            {
                employee: "Sarah Lee",
                title: "QA Testing",
                description: "Perform end-to-end testing",
                client: "Umbrella Corp",
                date: "2023-02-20",
                deadline: "2023-03-15",
                status: "Done",
            },
            {
                employee: "Tom Wilson",
                title: "Client Meeting",
                description: "Discuss project progress",
                client: "Stark Industries",
                date: "2023-01-10",
                deadline: "2023-02-28",
                status: "In Progress",
            },
            {
                employee: "John Doe",
                title: "Project Kickoff",
                description: "Discuss project requirements and timeline",
                client: "Acme Inc",
                date: "2023-05-01",
                deadline: "2023-06-30",
                status: "In Progress",
            },
            {
                employee: "Jane Smith",
                title: "Design Review",
                description: "Review wireframes and mockups",
                client: "Globex Corp",
                date: "2023-04-15",
                deadline: "2023-05-31",
                status: "Done",
            },
            {
                employee: "Bob Johnson",
                title: "Development Sprint",
                description: "Implement new features",
                client: "Stark Industries",
                date: "2023-03-01",
                deadline: "2023-04-30",
                status: "In Progress",
            },
            {
                employee: "Sarah Lee",
                title: "QA Testing",
                description: "Perform end-to-end testing",
                client: "Umbrella Corp",
                date: "2023-02-20",
                deadline: "2023-03-15",
                status: "Done",
            },
            {
                employee: "Tom Wilson",
                title: "Client Meeting",
                description: "Discuss project progress",
                client: "Stark Industries",
                date: "2023-01-10",
                deadline: "2023-02-28",
                status: "In Progress",
            },
            {
                employee: "John Doe",
                title: "Project Kickoff",
                description: "Discuss project requirements and timeline",
                client: "Acme Inc",
                date: "2023-05-01",
                deadline: "2023-06-30",
                status: "In Progress",
            },
            {
                employee: "Jane Smith",
                title: "Design Review",
                description: "Review wireframes and mockups",
                client: "Globex Corp",
                date: "2023-04-15",
                deadline: "2023-05-31",
                status: "Done",
            },
            {
                employee: "Bob Johnson",
                title: "Development Sprint",
                description: "Implement new features",
                client: "Stark Industries",
                date: "2023-03-01",
                deadline: "2023-04-30",
                status: "In Progress",
            },
            {
                employee: "Sarah Lee",
                title: "QA Testing",
                description: "Perform end-to-end testing",
                client: "Umbrella Corp",
                date: "2023-02-20",
                deadline: "2023-03-15",
                status: "Done",
            },
            {
                employee: "Tom Wilson",
                title: "Client Meeting",
                description: "Discuss project progress",
                client: "Stark Industries",
                date: "2023-01-10",
                deadline: "2023-02-28",
                status: "In Progress",
            },
            {
                employee: "John Doe",
                title: "Project Kickoff",
                description: "Discuss project requirements and timeline",
                client: "Acme Inc",
                date: "2023-05-01",
                deadline: "2023-06-30",
                status: "In Progress",
            },
            {
                employee: "Jane Smith",
                title: "Design Review",
                description: "Review wireframes and mockups",
                client: "Globex Corp",
                date: "2023-04-15",
                deadline: "2023-05-31",
                status: "Done",
            },
            {
                employee: "Bob Johnson",
                title: "Development Sprint",
                description: "Implement new features",
                client: "Stark Industries",
                date: "2023-03-01",
                deadline: "2023-04-30",
                status: "In Progress",
            },
            {
                employee: "Sarah Lee",
                title: "QA Testing",
                description: "Perform end-to-end testing",
                client: "Umbrella Corp",
                date: "2023-02-20",
                deadline: "2023-03-15",
                status: "Done",
            },
            {
                employee: "Tom Wilson",
                title: "Client Meeting",
                description: "Discuss project progress",
                client: "Stark Industries",
                date: "2023-01-10",
                deadline: "2023-02-28",
                status: "In Progress",
            },
            {
                employee: "John Doe",
                title: "Project Kickoff",
                description: "Discuss project requirements and timeline",
                client: "Acme Inc",
                date: "2023-05-01",
                deadline: "2023-06-30",
                status: "In Progress",
            },
            {
                employee: "Jane Smith",
                title: "Design Review",
                description: "Review wireframes and mockups",
                client: "Globex Corp",
                date: "2023-04-15",
                deadline: "2023-05-31",
                status: "Done",
            },
            {
                employee: "Bob Johnson",
                title: "Development Sprint",
                description: "Implement new features",
                client: "Stark Industries",
                date: "2023-03-01",
                deadline: "2023-04-30",
                status: "In Progress",
            },
            {
                employee: "Sarah Lee",
                title: "QA Testing",
                description: "Perform end-to-end testing",
                client: "Umbrella Corp",
                date: "2023-02-20",
                deadline: "2023-03-15",
                status: "Done",
            },
            {
                employee: "Tom Wilson",
                title: "Client Meeting",
                description: "Discuss project progress",
                client: "Stark Industries",
                date: "2023-01-10",
                deadline: "2023-02-28",
                status: "In Progress",
            },
        ],
        []
    );
    const users = useMemo(
        () => [
            {
                id: 1,
                name: "John Doe",
                email: "john@example.com",
                role: "Employee",
            },
            {
                id: 2,
                name: "Jane Smith",
                email: "jane@example.com",
                role: "Manager",
            },
            {
                id: 3,
                name: "Bob Johnson",
                email: "bob@example.com",
                role: "Admin",
            },
            {
                id: 4,
                name: "Sarah Lee",
                email: "sarah@example.com",
                role: "Employee",
            },
            {
                id: 5,
                name: "Tom Wilson",
                email: "tom@example.com",
                role: "Employee",
            },
        ],
        []
    );
    const filteredNotes = useMemo(() => {
        return notes
            .filter((note) => {
                return (
                    note.employee
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    note.title.toLowerCase().includes(search.toLowerCase()) ||
                    note.description
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    note.client.toLowerCase().includes(search.toLowerCase()) ||
                    note.status.toLowerCase().includes(search.toLowerCase())
                );
            })
            .sort((a, b) => {
                if (sortColumn.order === "asc") {
                    return a[sortColumn.key] > b[sortColumn.key] ? 1 : -1;
                } else {
                    return a[sortColumn.key] < b[sortColumn.key] ? 1 : -1;
                }
            });
    }, [notes, search, sortColumn]);

    const handleSort = (key) => {
        if (sortColumn.key === key) {
            setSortColumn({
                key,
                order: sortColumn.order === "asc" ? "desc" : "asc",
            });
        } else {
            setSortColumn({ key, order: "asc" });
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="flex h-screen w-full">
            <div
                className={`flex flex-col border-r bg-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 ${
                    isExpanded ? "w-60" : "w-16"
                }`}>
                <div className="flex h-16 items-center justify-between px-4 border-b dark:border-gray-700">
                    <Link
                        to="#"
                        className="flex items-center gap-2 font-semibold text-lg">
                        <span
                            className={`transition-all duration-300 ${
                                isExpanded ? "block" : "hidden"
                            }`}>
                            Dashboard
                        </span>
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                        onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? (
                            <ChevronLeftIcon className="h-4 w-4" />
                        ) : (
                            <ChevronRightIcon className="h-4 w-4" />
                        )}

                        <span className="sr-only">Toggle sidebar</span>
                    </Button>
                </div>
                <nav
                    className={`flex flex-col gap-2 items-center py-4 ${
                        isExpanded ? "px-4" : ""
                    }`}>
                    <Button
                        variant={
                            activeSection === "Notes" ? "primary" : "ghost"
                        }
                        onClick={() => setActiveSection("Notes")}
                        size={isExpanded ? "default" : "icon"}
                        className={`transition-all duration-300 ${
                            isExpanded ? "justify-start w-full gap-2" : ""
                        }`}>
                        <FileTextIcon className="h-5 w-5" />
                        <span
                            className={`transition-all duration-300 ${
                                isExpanded ? "block" : "hidden"
                            }`}>
                            Notes
                        </span>
                    </Button>
                    <Button
                        variant={
                            activeSection === "Users" ? "primary" : "ghost"
                        }
                        onClick={() => setActiveSection("Users")}
                        className={`justify-start gap-2 w-full transition-all duration-300 ${
                            isExpanded ? "flex" : "justify-center"
                        }`}>
                        <UsersIcon className="h-5 w-5" />
                        <span
                            className={`transition-all duration-300 ${
                                isExpanded ? "block" : "hidden"
                            }`}>
                            Users
                        </span>
                    </Button>
                </nav>
            </div>
            <div className="flex-1 overflow-auto">
                <header className="flex h-16 items-center justify-between px-6 border-b bg-gray-100 dark:bg-gray-800 dark:border-gray-700 w-full z-10">
                    <div className="relative">
                        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input
                            type="search"
                            placeholder="Search notes..."
                            className="pl-8 pr-4 py-2 rounded-md bg-white dark:bg-gray-950"
                            value={search}
                            onChange={handleSearch}
                        />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="z-20">
                            <Button variant={"outline"} size={"icon"}>
                                <Avatar>
                                    <AvatarImage src="asd" />
                                    <AvatarFallback>
                                        <User />
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                {/* MAIN */}
                <main>
                    {activeSection === "Notes" && (
                        <div className="p-6 space-y-6">
                            <div className="flex items-center justify-between">
                                <h1 className="text-2xl font-bold">Notes</h1>
                                <div className="flex items-center gap-4">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="shrink-0">
                                                <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                                                Sort by
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            className="w-[200px]"
                                            align="end">
                                            <DropdownMenuRadioGroup
                                                value={sortColumn.key}>
                                                <DropdownMenuRadioItem value="employee">
                                                    Employee
                                                </DropdownMenuRadioItem>
                                                <DropdownMenuRadioItem value="title">
                                                    Title
                                                </DropdownMenuRadioItem>
                                                <DropdownMenuRadioItem value="description">
                                                    Description
                                                </DropdownMenuRadioItem>
                                                <DropdownMenuRadioItem value="client">
                                                    Client
                                                </DropdownMenuRadioItem>
                                                <DropdownMenuRadioItem value="date">
                                                    Date
                                                </DropdownMenuRadioItem>
                                                <DropdownMenuRadioItem value="deadline">
                                                    Deadline
                                                </DropdownMenuRadioItem>
                                            </DropdownMenuRadioGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    <Button size="sm">Add Note</Button>
                                </div>
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleSort("employee")
                                            }>
                                            Employee
                                            {sortColumn.key === "employee" && (
                                                <span className="ml-1">
                                                    {sortColumn.order === "asc"
                                                        ? "\u2191"
                                                        : "\u2193"}
                                                </span>
                                            )}
                                        </TableHead>
                                        <TableHead
                                            className="cursor-pointer"
                                            onClick={() => handleSort("title")}>
                                            Title
                                            {sortColumn.key === "title" && (
                                                <span className="ml-1">
                                                    {sortColumn.order === "asc"
                                                        ? "\u2191"
                                                        : "\u2193"}
                                                </span>
                                            )}
                                        </TableHead>
                                        <TableHead
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleSort("description")
                                            }>
                                            Description
                                            {sortColumn.key ===
                                                "description" && (
                                                <span className="ml-1">
                                                    {sortColumn.order === "asc"
                                                        ? "\u2191"
                                                        : "\u2193"}
                                                </span>
                                            )}
                                        </TableHead>
                                        <TableHead
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleSort("client")
                                            }>
                                            Client
                                            {sortColumn.key === "client" && (
                                                <span className="ml-1">
                                                    {sortColumn.order === "asc"
                                                        ? "\u2191"
                                                        : "\u2193"}
                                                </span>
                                            )}
                                        </TableHead>
                                        <TableHead
                                            className="cursor-pointer"
                                            onClick={() => handleSort("date")}>
                                            Date
                                            {sortColumn.key === "date" && (
                                                <span className="ml-1">
                                                    {sortColumn.order === "asc"
                                                        ? "\u2191"
                                                        : "\u2193"}
                                                </span>
                                            )}
                                        </TableHead>
                                        <TableHead
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleSort("deadline")
                                            }>
                                            Deadline
                                            {sortColumn.key === "deadline" && (
                                                <span className="ml-1">
                                                    {sortColumn.order === "asc"
                                                        ? "\u2191"
                                                        : "\u2193"}
                                                </span>
                                            )}
                                        </TableHead>
                                        <TableHead
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleSort("status")
                                            }>
                                            Status
                                            {sortColumn.key === "status" && (
                                                <span className="ml-1">
                                                    {sortColumn.order === "asc"
                                                        ? "\u2191"
                                                        : "\u2193"}
                                                </span>
                                            )}
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredNotes.map((note, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                {note.employee}
                                            </TableCell>
                                            <TableCell>{note.title}</TableCell>
                                            <TableCell>
                                                {note.description}
                                            </TableCell>
                                            <TableCell>{note.client}</TableCell>
                                            <TableCell>{note.date}</TableCell>
                                            <TableCell>
                                                {note.deadline}
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                        note.status ===
                                                        "In Progress"
                                                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                                                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                                    }`}>
                                                    {note.status}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                    {activeSection === "Users" && (
                        <div className="p-6 space-y-6">
                            <h1 className="text-2xl font-bold">Users</h1>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Role</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {users.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>
                                                <Badge
                                                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                        user.role === "Employee"
                                                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                                                            : user.role ===
                                                              "Manager"
                                                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                                                    }`}>
                                                    {user.role}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                </main>
                {/* MAIN */}
            </div>
        </div>
    );
};

export default Dashboard;

function ArrowUpDownIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m21 16-4 4-4-4" />
            <path d="M17 20V4" />
            <path d="m3 8 4-4 4 4" />
            <path d="M7 4v16" />
        </svg>
    );
}

function ChevronLeftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
        </svg>
    );
}

function ChevronRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}

function FileTextIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
        </svg>
    );
}

function Package2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    );
}

function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
}

function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}
