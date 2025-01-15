import { router, usePage } from "@inertiajs/react";
import { Avatar, Checkbox, Stack, Typography } from "@mui/material";
import React from "react";

const FilterCategory = () => {
    const { props, url } = usePage();
    const { search } = window.location; // Lấy query string hiện tại
    const searchParams = new URLSearchParams(search);

    React.useEffect(() => {
        console.log(url.includes("?"));
    }, []);

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
                Filter by Category
            </Typography>
            <Stack
                sx={{
                    "& .filter__class": {
                        paddingY: "8px",
                        borderBottom: "1px solid black",
                        borderColor: "divider",
                        "&:first-child": {
                            paddingTop: 0,
                            paddingBottom: "8px",
                        },
                    },
                }}
            >
                {props.categories.map((filterItem, filterIndex) => (
                    <Stack
                        key={filterIndex}
                        direction="row"
                        className="filter__class"
                        sx={{
                            gap: "4px",
                            alignItems: "center",
                            color: "text.secondary",
                        }}
                    >
                        <Checkbox
                            disableRipple
                            sx={{
                                padding: 0,
                            }}
                            color="common"
                            onChange={() => {
                                searchParams.set("category", filterItem.id);
                                router.visit(`?${searchParams.toString()}`, {
                                    preserveState: true,
                                });
                            }}
                            checked={
                                filterItem.id + "" ===
                                searchParams.get("category")
                            }
                        />
                        <Avatar
                            src={filterItem.thumbnail}
                            sx={{
                                width: 24,
                                height: 24,
                            }}
                        />
                        <Typography flex={1} variant="body2">
                            {filterItem.name}
                        </Typography>
                        <Typography variant="body2">(42)</Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default FilterCategory;
