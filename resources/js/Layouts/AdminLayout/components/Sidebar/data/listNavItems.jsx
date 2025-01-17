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
                    to: "admin.orders",
                    active: url.includes("/orders"),
                },
                {
                    name: "Design",
                    icon: "solar:paint-roller-bold",
                    to: "designs.index",
                    active: url.includes("/designs"),
                },
            ],
        }
    ];
};

export default ListNavItems;
