import { Icon } from "@iconify/react";
import { Box, Button, OutlinedInput, Stack, Typography } from "@mui/material";
import React from "react";

const ClientFooter = () => {
    return (
        <Stack
            direction="row"
            component="footer"
            sx={{
                width: "100%",
                backgroundColor: "background.neutral",
                paddingX: "160px",
                paddingY: "40px",
                gap: "120px",
            }}
        >
            <Stack
                sx={{
                    gap: "8px",
                }}
            >
                <Box
                    sx={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "grey.900",
                        marginBottom: "12px",
                    }}
                ></Box>
                <Typography>16165 Brookhurst St</Typography>
                <Typography>Fountain Valley CA 92708</Typography>
                <Stack direction="row" alignItems="center" gap="8px">
                    <Icon icon="eva:email-outline" width={24} height={24} />
                    <Typography variant="body2">
                        Kyduyenhouse88@gmail.com
                    </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" gap="8px">
                    <Icon icon="eva:phone-outline" width="24" height="24" />
                    <Typography variant="h6">1 (714) 585-3695</Typography>
                </Stack>
            </Stack>
            <Stack
                sx={{
                    gap: "28px",
                }}
            >
                <Typography variant="subtitle1">Categories</Typography>
                <Stack gap="12px">
                    <Typography variant="body2">NCKD Couture</Typography>
                    <Typography variant="body2">NCKD Couture</Typography>
                    <Typography variant="body2">NCKD Couture</Typography>
                    <Typography variant="body2">NCKD Couture</Typography>
                    <Typography variant="body2">NCKD Couture</Typography>
                </Stack>
            </Stack>
            <Stack
                sx={{
                    gap: "28px",
                }}
            >
                <Typography variant="subtitle1">Categories</Typography>
                <Stack gap="12px">
                    <Typography variant="body2">NCKD Couture</Typography>
                    <Typography variant="body2">NCKD Couture</Typography>
                    <Typography variant="body2">NCKD Couture</Typography>
                    <Typography variant="body2">NCKD Couture</Typography>
                    <Typography variant="body2">NCKD Couture</Typography>
                </Stack>
            </Stack>
            <Stack
                sx={{
                    gap: "28px",
                    flex: 1,
                    alignItems: "end",
                }}
            >
                <Typography variant="subtitle1">Contact Us</Typography>
                <Stack gap="12px" width={"100%"}>
                    <OutlinedInput size="small" fullWidth placeholder="Email" />
                    <OutlinedInput
                        size="small"
                        fullWidth
                        multiline
                        minRows={4}
                        placeholder="Content"
                    />
                    <Button variant="contained">Send</Button>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ClientFooter;
