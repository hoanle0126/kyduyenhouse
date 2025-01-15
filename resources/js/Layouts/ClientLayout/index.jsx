import React from "react";
import ClientHeader from "./components/Header";
import { Box, Stack, Typography } from "@mui/material";
import ClientFooter from "./components/Footer";
import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";

const ClientLayout = ({ children }) => {
    return (
        <>
            <Stack
                sx={{
                    width: "100%",
                    height: "40px",
                    flexDirection: "row",
                    backgroundColor: "text.primary",
                    alignItems: "center",
                    paddingX: "160px",
                    gap:"20px"
                }}
            >
                <Stack direction="row" gap="4px" alignItems="center">
                    <Icon
                        icon="eva:email-outline"
                        width="20"
                        height="20"
                        color={MuiTheme().palette.background.paper}
                    />
                    <Typography variant="body2" color="background.paper">
                        info@gmail.com
                    </Typography>
                </Stack>
                <Stack direction="row" gap="4px" alignItems="center">
                    <Icon
                        icon="eva:phone-outline"
                        width="20"
                        height="20"
                        color={MuiTheme().palette.background.paper}
                    />
                    <Typography variant="body2" color="background.paper">
                        0123456789
                    </Typography>
                </Stack>
            </Stack>
            <ClientHeader />
            <Box sx={{ minHeight: "calc(100vh - 66px)" }}>{children}</Box>
            <ClientFooter />
        </>
    );
};

export default ClientLayout;
