/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lzwkhlwXUBv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function Component() {
    return (
        <div className="flex h-screen bg-gray-100">
            <div className="flex w-1/2 bg-[#4f3ff0] text-white p-12">
                <div className="m-auto">
                    <div className="flex items-center space-x-2 mb-6">
                        <FolderIcon className="h-8 w-8" />
                        <span className="text-2xl font-bold">Storage</span>
                    </div>
                    <h1 className="text-5xl font-bold mb-4">
                        Manage your files the best way
                    </h1>
                    <p className="mb-12">
                        Awesome, we\'ve created the perfect place for you to
                        store all your documents.
                    </p>
                    <img
                        src="/placeholder.svg"
                        alt="Documents Illustration"
                        className="max-w-xs"
                    />
                </div>
            </div>
            <div className="flex w-1/2 items-center justify-center p-12">
                <div className="max-w-md w-full">
                    <h2 className="text-3xl font-bold mb-10">Login</h2>
                    <form>
                        <div className="space-y-6 mb-6">
                            <Input id="username" placeholder="Username" />
                            <Input
                                type="email"
                                id="email"
                                placeholder="Email"
                            />
                            <Input
                                type="password"
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember-me" />
                                <label
                                    htmlFor="remember-me"
                                    className="text-sm font-medium text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <Link
                                href="#"
                                className="text-sm text-[#4f3ff0]"
                                prefetch={false}>
                                Forgot password?
                            </Link>
                        </div>
                        <Button className="w-full bg-[#4f3ff0] text-white mb-4">
                            Login
                        </Button>
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="bg-gray-300 h-px flex-grow" />
                            <span className="text-sm text-gray-500">or</span>
                            <div className="bg-gray-300 h-px flex-grow" />
                        </div>
                        <div className="flex items-center justify-center space-x-4">
                            <ChromeIcon className="h-6 w-6 text-gray-600" />
                            <FacebookIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="text-center mt-6">
                            <span className="text-sm text-gray-600">
                                Don\'t have an account?
                            </span>
                            <Link
                                href="#"
                                className="text-sm text-[#4f3ff0]"
                                prefetch={false}>
                                {" "}
                                Create Account
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function ChromeIcon(props) {
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
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
        </svg>
    );
}

function FacebookIcon(props) {
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
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function FolderIcon(props) {
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
            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
        </svg>
    );
}
