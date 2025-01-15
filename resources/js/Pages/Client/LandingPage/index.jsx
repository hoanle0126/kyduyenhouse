import EmblaCarousel from "@/Components/Carousel";
import ClientLayout from "@/Layouts/ClientLayout";
import { Icon } from "@iconify/react";
import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import React from "react";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = [
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
    },
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
    },
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
    },
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
    },
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
    },
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
    },
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
    },
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
    },
];
const SLIDES2 = [
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
        title: "Test1",
    },
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
        title: "Test1",
    },
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
        title: "Test1",
    },
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
        title: "Test1",
    },
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
        title: "Test1sadsadasdasdasdsadasdasdasdasdasdasd",
    },
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
        title: "Test1",
    },
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
        title: "Test1",
    },
    {
        href: "https://www.kyduyenhouse.com/pub/media/wysiwyg/Lifewave.jpg",
        title: "Test1",
    },
];

const LandingPage = () => {
    React.useEffect(() => {
        console.log(SLIDES);
    }, []);

    return (
        <ClientLayout>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "80px",
                    paddingBottom: "120px",
                }}
            >
                <Box sx={{ paddingX: "160px" }}>
                    <EmblaCarousel
                        slides={SLIDES}
                        options={OPTIONS}
                        height={600}
                        dots
                    />
                </Box>
                <Grid2 container spacing="40px" sx={{ paddingX: "160px" }}>
                    <Grid2 size={6}>
                        <Stack direction="row" gap="20px">
                            <Icon icon="bx:car" width={40} height={40} />
                            <Stack
                                sx={{
                                    gap: "4px",
                                    flexWrap: "wrap",
                                    flex: 1,
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Shipping
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textTransform: "uppercase",
                                        color: "text.secondary",
                                    }}
                                >
                                    FREE SHIPPING WITH $150 PURCHASE (ON
                                    SELECTED ITEMS) IN THE U.S. ONLY
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid2>
                </Grid2>
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
                                Featured Videos
                            </Typography>
                        </Box>
                    </center>
                    <EmblaCarousel
                        slides={SLIDES2}
                        options={OPTIONS}
                        numImage={5}
                        spacing={"40px"}
                        arrows
                    />
                </Box>
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
                                Featured Videos
                            </Typography>
                        </Box>
                    </center>
                    <Grid2 container spacing="40px">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <Grid2 size={3}>
                                <Stack gap={"4px"}>
                                    <Stack
                                        sx={{
                                            height: 360,
                                            position: "relative",
                                            img: {
                                                width: "100%",
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
                                        <img
                                            src="https://www.kyduyenhouse.com/pub/media/catalog/product/cache/b2c3c584477da1d1839ed14e34ef1d34/i/m/img_2305.jpg"
                                            alt=""
                                        />
                                    </Stack>
                                    <Typography
                                        variant="subtitle2"
                                        marginTop={"12px"}
                                        sx={{
                                            cursor: "pointer",
                                            "&:hover": {
                                                color: "info.main",
                                            },
                                        }}
                                    >
                                        Hebora Collagen Enrich Damas Rose Water
                                        (28 pouches)
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="error.main"
                                    >
                                        $140.00
                                    </Typography>
                                </Stack>
                            </Grid2>
                        ))}
                    </Grid2>
                </Box>
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
                                Featured Videos
                            </Typography>
                        </Box>
                    </center>
                    <Grid2 container spacing="40px">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <Grid2 size={3}>
                                <Stack gap={"4px"}>
                                    <Stack
                                        sx={{
                                            height: 360,
                                            position: "relative",
                                            img: {
                                                width: "100%",
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
                                        <img
                                            src="https://www.kyduyenhouse.com/pub/media/catalog/product/cache/b2c3c584477da1d1839ed14e34ef1d34/i/m/img_2305.jpg"
                                            alt=""
                                        />
                                    </Stack>
                                    <Typography
                                        variant="subtitle2"
                                        marginTop={"12px"}
                                        sx={{
                                            cursor: "pointer",
                                            "&:hover": {
                                                color: "info.main",
                                            },
                                        }}
                                    >
                                        Hebora Collagen Enrich Damas Rose Water
                                        (28 pouches)
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="error.main"
                                    >
                                        $140.00
                                    </Typography>
                                </Stack>
                            </Grid2>
                        ))}
                    </Grid2>
                </Box>
            </Box>
        </ClientLayout>
    );
};

export default LandingPage;
