import { Avatar, Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import AdminHeader from "./components/Header";
import AdminSidebar from "./components/Sidebar";

const AdminLayout = ({ children, title }) => {
    return (
        <div className="flex">
            <AdminSidebar />
            <div className="flex-1 w-[0vw]">
                <AdminHeader title={title} />
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;
