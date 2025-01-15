import { formatCurrency } from "@/Function/formatCurrency";
import { usePage } from "@inertiajs/react";
import { Box, Grid2, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import ProductCart from "./components/ProductCart";

const ProductSection = () => {
    const { props } = usePage();

    return (
        <Grid2 container spacing="20px">
            {props.products.data.map((shopItem, shopIndex) => (
                <Grid2 size={3} key={shopIndex}>
                    <ProductCart shopItem={shopItem} />
                </Grid2>
            ))}
        </Grid2>
    );
};

export default ProductSection;
