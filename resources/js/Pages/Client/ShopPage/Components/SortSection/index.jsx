import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import {
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Stack,
} from "@mui/material";
import React from "react";

const SortSection = () => {
    const { props, url } = usePage();
    const { search } = window.location; // Lấy query string hiện tại
    const searchParams = new URLSearchParams(search);

    console.log(props.asc);

    return (
        <Stack direction="row" gap="12px">
            <div className="flex-1"></div>
            <FormControl
                size="small"
                sx={{
                    width: 240,
                }}
            >
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.sort || "name"}
                    label="Sort"
                    onChange={(e) => {
                        searchParams.set("sort", e.target.value);
                        router.visit(`?${searchParams.toString()}`, {
                            preserveState: true,
                        });
                    }}
                >
                    <MenuItem value={"name"}>Sort by name product</MenuItem>
                    <MenuItem value={"price_total"}>Sort by price</MenuItem>
                </Select>
            </FormControl>
            <IconButton
                sx={{
                    borderRadius: "8px",
                    border: "1px solid black",
                    borderColor: "divider",
                }}
                onClick={() => {
                    if (
                        searchParams.get("asc") === "true" ||
                        searchParams.get("asc") === null
                    ) {
                        searchParams.set("asc", "false");
                    } else {
                        searchParams.set("asc", "true");
                    }

                    router.visit(`?${searchParams.toString()}`, {
                        preserveState: true,
                    });
                }}
            >
                <Icon
                    icon={
                        props.asc === "true" || props.asc === null
                            ? "solar:sort-from-bottom-to-top-linear"
                            : "solar:sort-from-top-to-bottom-linear"
                    }
                    width="24"
                    height="24"
                />
            </IconButton>
        </Stack>
    );
};

export default SortSection;
