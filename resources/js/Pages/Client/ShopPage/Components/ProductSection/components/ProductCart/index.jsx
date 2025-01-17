import convertText from "@/Function/converText";
import { formatCurrency } from "@/Function/formatCurrency";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { Box, IconButton, Rating, Stack, Typography } from "@mui/material";
import React from "react";

const ProductCart = ({ shopItem }) => {
    const [hover, setHover] = React.useState(false);

    return (
        <Stack
            sx={{
                width: "100%",
                height: "100%",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    backgroundColor: "background.neutral",
                    position: "relative",
                    zIndex: 0,
                    cursor: "pointer",
                    "&:hover": {
                        "&::before": {
                            position: "absolute",
                            content: "''",
                            backgroundColor: "grey.900",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            zIndex: 100,
                            opacity: 0.1,
                        },
                    },
                }}
                onMouseEnter={() => {
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                }}
            >
                <img
                    src={shopItem.thumbnail}
                    alt=""
                    className="w-full aspect-square select-none"
                />
                {hover && (
                    <Stack
                        sx={{
                            position: "absolute",
                            top: 0,
                            gap: "8px",
                            padding: "4px",
                            svg: {
                                color: "text.primary",
                                width: 24,
                                height: 24,
                                zIndex: 100,
                                "&:hover": {
                                    color: "info.main",
                                },
                            },
                        }}
                    >
                        <Icon
                            icon="eva:search-fill"
                            onClick={() =>
                                router.visit(
                                    route("shop.show", shopItem.key_name)
                                )
                            }
                        />
                        <Icon
                            icon="solar:cart-5-broken"
                            onClick={() => {
                                router.post(
                                    route("cart.store", props.product.id),
                                    {
                                        quantity: 1,
                                    }
                                );
                            }}
                        />
                    </Stack>
                )}
            </Box>
            <Stack
                gap="2px"
                paddingTop="8px"
                sx={{ height: "100%" }}
            >
                <Typography
                    variant="subtitle1"
                    sx={{
                        cursor: "pointer",
                        flex: 1,
                        "&:hover": {
                            color: "info.main",
                        },
                    }}
                    onClick={() =>
                        router.visit(route("shop.show", shopItem.key_name))
                    }
                >
                    {shopItem.name}
                </Typography>
                <Rating value={shopItem.rating} readOnly />
                <Stack direction="row" gap="8px">
                    <Typography variant="body2">
                        {formatCurrency(shopItem.price)}
                    </Typography>
                    {/* <Typography variant="body2" color="error.main">
                        {formatCurrency(
                            shopItem.price -
                                (shopItem.price * shopItem.sales?.value) / 100
                        )}{" "}
                        {shopItem.rating}
                    </Typography> */}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ProductCart;
