import PriceSlider from "@/Components/PriceSlider";
import { router, usePage } from "@inertiajs/react";
import { Stack, Typography } from "@mui/material";
import React from "react";

const FilterPrice = () => {
    const { props } = usePage();
    const { search } = window.location; // Lấy query string hiện tại
    const searchParams = new URLSearchParams(search);

    return (
        <Stack gap="20px">
            <Typography
                variant="h6"
                sx={{
                    position: "relative",
                    "&::before": {
                        content: "''",
                        position: "absolute",
                        width: "60px",
                        height: "2px",
                        backgroundColor: "text.primary",
                        bottom: 0,
                    },
                }}
            >
                Filter by Price
            </Typography>
            <PriceSlider
                action={(range) => {
                    searchParams.set("price", `${range[0]}-${range[1]}`);
                    router.visit(`?${searchParams.toString()}`, {
                        preserveState: true,
                    });
                }}
                rangeValue={searchParams.get("price") || [0, 200]}
            />
        </Stack>
    );
};

export default FilterPrice;
