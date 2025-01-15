import { Icon } from "@iconify/react";
import { Head, router } from "@inertiajs/react";
import {
    Avatar,
    Box,
    IconButton,
    MenuItem,
    MenuList,
    Popover,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Palette } from "resources/js/Theme/elements/palette";
// import DrawerSetting from "../../DrawerSetting";
import { MuiTheme } from "resources/js/Theme";

const AdminHeader = ({ title }) => {
    const [openSetting, setOpenSetting] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { t } = useTranslation();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <Box
            component="header"
            sx={{
                backgroundColor: "background.paper",
            }}
            className="h-[80px] flex justify-end items-center px-[40px] gap-[20px]"
        >
            <Head title={title} />
            <Stack sx={{ flexDirection: "row", gap: "12px" }}>
                <IconButton>
                    <Icon
                        icon="solar:chat-line-bold-duotone"
                        color={MuiTheme().palette.text.primary}
                    />
                </IconButton>
                <IconButton>
                    <Icon
                        icon="solar:bell-bing-bold-duotone"
                        color={MuiTheme().palette.text.primary}
                    />
                </IconButton>
                <IconButton onClick={() => setOpenSetting(true)}>
                    <Icon
                        icon="solar:settings-bold-duotone"
                        color={MuiTheme().palette.text.primary}
                    />
                </IconButton>
            </Stack>
            <Avatar
                onClick={handleClick}
                sx={{
                    overflow: "clip",
                    cursor: "pointer",
                    color: "text.primary",
                }}
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuList
                    sx={{
                        minWidth: "128px",
                        maxWidth: "160px",
                    }}
                >
                    <MenuItem
                        onClick={() => router.visit(route("client.profile"))}
                    >
                        <Icon icon="solar:user-circle-linear" />
                        <Typography variant="body2">
                            {t("admin.profile.title")}
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={() => router.post(route("logout"))}>
                        <Icon icon="solar:logout-2-broken" />
                        <Typography variant="body2">{t("logout")}</Typography>
                    </MenuItem>
                </MenuList>
            </Popover>
            {/* <DrawerSetting
                open={openSetting}
                onClose={() => setOpenSetting(!openSetting)}
            /> */}
        </Box>
    );
};

export default AdminHeader;
