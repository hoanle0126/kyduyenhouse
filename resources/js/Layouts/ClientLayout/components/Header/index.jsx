import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";
import { Link, router, usePage } from "@inertiajs/react";
import {
    Avatar,
    Box,
    IconButton,
    Stack,
    Typography,
    Button,
    Badge,
} from "@mui/material";
import React from "react";
import SearchModal from "./components/SearchModal";
import AvatarHeader from "./components/AvatarHeader";

const ClientHeader = () => {
    const { props } = usePage();
    const [openSearch, setOpenSearch] = React.useState(false);
    React.useEffect(() => {
        console.log(props);
    }, []);

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
            <img
                src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/473055084_122204641466235489_8675126516273107006_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=B_bzvTVBjeUQ7kNvgFlm3T0&_nc_zt=23&_nc_ht=scontent.fdad3-5.fna&_nc_gid=AnvWLTXy0bUPQfsTJTLN7H3&oh=00_AYAjKjGfGBy9YeK2GfjIZuzilsSFNKzEMaSPEgXsOOQRQQ&oe=6790529C"
                className="w-[40px] h-[40px] rounded-full"
            ></img>
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
                    <IconButton onClick={() => setOpenSearch(true)}>
                        <Icon icon="eva:search-fill" width={24} height={24} />
                    </IconButton>
                    <IconButton
                        onClick={() => router.visit(route("checkout.index"))}
                        sx={{
                            marginRight: "12px",
                        }}
                    >
                        <Badge
                            badgeContent={props.auth.user.cart.products.length}
                            color="error"
                        >
                            <Icon
                                icon="solar:cart-5-broken"
                                width={24}
                                height={24}
                            />
                        </Badge>
                    </IconButton>
                    <AvatarHeader />
                </Stack>
            ) : (
                <Stack direction="row" gap="12px">
                    <Button
                        variant="outlined"
                        color="common"
                        onClick={() => router.visit(route("login"))}
                    >
                        Register
                    </Button>
                    <Button
                        variant="contained"
                        color="common"
                        onClick={() => router.visit(route("login"))}
                    >
                        Login
                    </Button>
                </Stack>
            )}
            <SearchModal
                open={openSearch}
                handleClose={() => setOpenSearch(false)}
            />
        </Box>
    );
};

export default ClientHeader;
