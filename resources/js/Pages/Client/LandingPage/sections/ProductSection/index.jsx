import { formatCurrency } from "@/Function/formatCurrency";
import { Icon } from "@iconify/react";
import { usePage } from "@inertiajs/react";
import { Box, Button, Grid2, Rating, Stack, Typography } from "@mui/material";
import React from "react";

const ProductSection = () => {
    const { props } = usePage();

    console.log("props", props);

    return (
        <Box
            sx={{
                paddingX: "160px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
            }}
        >
            <center>
                <Box
                    sx={{
                        position: "relative",
                        display: "inline-block",
                        "&::before": {
                            position: "absolute",
                            content: "''",
                            width: "60px",
                            height: "2px",
                            backgroundColor: "text.primary",
                            top: "50%",
                            left: "-68px",
                        },
                        "&::after": {
                            position: "absolute",
                            content: "''",
                            width: "60px",
                            height: "2px",
                            backgroundColor: "text.primary",
                            top: "50%",
                            right: "-68px",
                        },
                    }}
                >
                    <Typography variant="h4" textTransform="uppercase">
                        Genuine Ky Duyen House products
                    </Typography>
                </Box>
            </center>
            <Grid2 container spacing="40px">
                {props.products.data.map((item, index) => (
                    <Grid2 size={3}>
                        <Stack gap={"4px"} height={"100%"}>
                            <Stack
                                sx={{
                                    position: "relative",
                                    img: {
                                        width: "100%",
                                        aspectRatio: "1 / 1",
                                    },
                                    cursor: "pointer",
                                    justifyContent: "center",
                                    "&:hover": {
                                        "&::before": {
                                            content: "''",
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            backgroundColor: "grey.900",
                                            opacity: 0.1,
                                            width: "100%",
                                            height: "100%",
                                        },
                                    },
                                }}
                            >
                                <img src={item.thumbnail} alt="" />
                            </Stack>
                            <Typography
                                variant="subtitle2"
                                marginTop={"12px"}
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: "info.main",
                                    },
                                    flex: 1,
                                }}
                            >
                                {item.name}
                            </Typography>
                            <Rating value={item.rating} readOnly />
                            <Typography variant="h6" color="error.main">
                                {formatCurrency(item.price)}
                            </Typography>
                        </Stack>
                    </Grid2>
                ))}
            </Grid2>
            <Stack alignItems="end">
                <Button
                    color="common"
                    endIcon={<Icon icon="eva:arrow-forward-fill" />}
                >
                    View more
                </Button>
            </Stack>
        </Box>
    );
};

export default ProductSection;
