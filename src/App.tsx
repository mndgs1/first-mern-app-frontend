import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoginForm from "./features/auth/Login";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import Prefetch from "./features/auth/Prefetch";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";
import useTitle from "./hooks/useTitle";
import DashLayout from "./components/dash/DashLayout";
import Public from "./components/landing/Public";

function App() {
    useTitle("Dan D. Repairs");
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route index element={<Public />} />
                <Route path="login" element={<LoginForm />} />
                <Route element={<PersistLogin />}>
                    {/* Protected Routes */}
                    <Route
                        element={
                            <RequireAuth
                                allowedRoles={[...Object.values(ROLES)]}
                            />
                        }>
                        <Route element={<Prefetch />}>
                            <Route path="dash" element={<DashLayout />}>
                                <Route
                                    element={
                                        <RequireAuth
                                            allowedRoles={[
                                                ROLES.Manager,
                                                ROLES.Admin,
                                            ]}
                                        />
                                    }>
                                    <Route path="users">
                                        <Route index element={<UsersList />} />
                                        <Route
                                            path=":id"
                                            element={<EditUser />}
                                        />
                                        <Route
                                            path="new"
                                            element={<NewUserForm />}
                                        />
                                    </Route>
                                </Route>

                                <Route path="notes">
                                    <Route index element={<NotesList />} />
                                </Route>
                            </Route>
                            {/* End Dash */}
                        </Route>
                    </Route>
                </Route>
                {/* End Protected Routes */}
            </Route>
        </Routes>
    );
}

export default App;
