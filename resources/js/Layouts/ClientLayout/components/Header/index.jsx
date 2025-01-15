import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";
import { Link, usePage } from "@inertiajs/react";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

const ClientHeader = () => {
    const { props } = usePage();

    return (
        <Box
            component="header"
            sx={{
                backgroundColor: "background.paper",
                height: "66px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingX: "160px",
                position: "sticky",
                top: 0,
                left: 0,
                zIndex: 1000,
                boxShadow: "custom.card",
            }}
        >
            <img className="w-[40px] h-[40px] bg-black" />
            <Stack
                direction="row"
                sx={{
                    position: "absolute",
                    translate: "-50%",
                    left: "50%",
                    gap: "28px",
                    a: {
                        fontStyle: MuiTheme().typography.body1,
                    },
                }}
            >
                {[
                    { title: "Home", route: "landing" },
                    { title: "Shop", route: "shop.index" },
                    { title: "News", route: "shop.index" },
                    { title: "About us", route: "shop.index" },
                    { title: "Contact us", route: "shop.index" },
                ].map((navItem, navIndex) => (
                    <Link key={navIndex} href={route(navItem.route)}>
                        {navItem.title}
                    </Link>
                ))}
            </Stack>
            {props.auth.user ? (
                <Stack
                    direction="row"
                    sx={{
                        gap: "12px",
                    }}
                >
                    <IconButton>
                        <Icon icon="eva:search-fill" width={24} height={24} />
                    </IconButton>
                    <IconButton>
                        <Icon
                            icon="solar:cart-5-broken"
                            width={24}
                            height={24}
                        />
                    </IconButton>
                    <IconButton>
                        <Icon
                            icon="solar:settings-linear"
                            width="24"
                            height="24"
                        />
                    </IconButton>
                    <Avatar />
                </Stack>
            ) : (
                <Stack></Stack>
            )}
        </Box>
    );
};

export default ClientHeader;
