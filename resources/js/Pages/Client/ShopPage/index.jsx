import ClientLayout from "@/Layouts/ClientLayout";
import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";
import { Link, router, usePage } from "@inertiajs/react";
import {
    alpha,
    Avatar,
    Box,
    Breadcrumbs,
    Button,
    Checkbox,
    FormControl,
    Grid2,
    IconButton,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Pagination,
    Rating,
    Select,
    Slide,
    Slider,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import marksRating from "./DetailPage/marksRating";
import { InertiaProgress } from "@inertiajs/progress";
import { formatCurrency } from "@/Function/formatCurrency";
import PriceSlider from "@/Components/PriceSlider";
import FilterSection from "./Components/FilterSection";
import SortSection from "./Components/SortSection";
import ProductSection from "./Components/ProductSection";
import convertText from "@/Function/converText";

const ShopPage = () => {
    const { props } = usePage();
    const [age, setAge] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const { search } = window.location; // Lấy query string hiện tại
    const searchParams = new URLSearchParams(search);

    React.useEffect(() => {
        console.log(
            "ads",
            convertText("Tinh dầu thông đỏ Samsung - Kumkang Pine - Max_500mg (180 viên) 금강 적송원")
        );
    }, []);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <ClientLayout>
            <Stack
                sx={{
                    gap: "40px",
                }}
            >
                <Stack>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "text.secondary",
                            display: "flex",
                            alignItems: "center",
                            paddingX: "160px",
                            paddingY: "40px",
                        }}
                    >
                        <Typography variant="h4" color="background.paper">
                            Shop
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "background.neutral",
                            display: "flex",
                            alignItems: "center",
                            paddingX: "160px",
                            paddingY: "20px",
                        }}
                    >
                        <Breadcrumbs
                            aria-label="breadcrumb"
                            sx={{
                                fontSize: MuiTheme().typography.body2,
                                ".current": {
                                    color: "text.primary",
                                },
                            }}
                        >
                            <Link underline="hover" color="inherit" href="/">
                                Home
                            </Link>
                            <Link className="current">Shop</Link>
                        </Breadcrumbs>
                    </Box>
                </Stack>
                <Stack
                    sx={{
                        paddingX: "160px",
                        paddingBottom: "80px",
                        flexDirection: "row",
                        gap: "40px",
                    }}
                >
                    <FilterSection />
                    <Stack flex={1} gap="20px">
                        <SortSection />
                        <ProductSection />
                        <Stack alignItems="center" marginTop="20px">
                            <Pagination
                                count={props.products.meta.last_page}
                                page={Number(searchParams.get("page")) || 1}
                                onChange={(e, value) => {
                                    searchParams.set("page", value);
                                    router.visit(
                                        `?${searchParams.toString()}`,
                                        {
                                            preserveState: true,
                                        }
                                    );
                                }}
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </ClientLayout>
    );
};

export default ShopPage;
