import { usePage } from "@inertiajs/react";
import React from "react";
import { useTranslation } from "react-i18next";

const ListNavItems = () => {
    const { url } = usePage();
    const { t } = useTranslation();

    return [
        {
            name: "Overview",
            items: [
                {
                    name: "Dashboard",
                    icon: "solar:chart-bold-duotone",
                    to: "home.index",
                    active: "/" == url,
                },
            ],
        },
        {
            name: "Management",
            items: [
                {
                    name: "User",
                    icon: "solar:users-group-rounded-bold-duotone",
                    to: "users.index",
                    active: url.includes("/users"),
                },
                {
                    name: "Products",
                    icon: "solar:bag-2-bold-duotone",
                    to: "products.index",
                    active: url.includes("/products"),
                },
                {
                    name: "Categories",
                    icon: "solar:widget-bold-duotone",
                    to: "categories.index",
                    active: url.includes("/categories"),
                },
                {
                    name: "Orders",
                    icon: "solar:cart-large-4-bold-duotone",
                    to: "orders.index",
                    active: url.includes("/orders"),
                },
                {
                    name: "Blogs",
                    icon: "solar:documents-bold-duotone",
                    to: "blogs.index",
                    active: url.includes("/blogs"),
                },
            ],
        },
        {
            name: "Other",
            items: [
                {
                    name: "Profile",
                    icon: "solar:user-id-bold-duotone",
                    to: "profile.index",
                    active: url.includes("/profile"),
                },
                {
                    name: "Setting",
                    icon: "solar:settings-bold-duotone",
                    to: "setting.index",
                    active: url.includes("/setting"),
                },
            ],
        },
    ];
};

export default ListNavItems;
