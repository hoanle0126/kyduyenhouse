import EmblaCarousel from "@/Components/Carousel";
import ClientLayout from "@/Layouts/ClientLayout";
import { Icon } from "@iconify/react";
import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import CategorySection from "./sections/CategorySection";
import ProductSection from "./sections/ProductSection";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = [
    {
        href: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/473095703_122204644424235489_7813512586840984910_n.png?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Hk0KEqzsjgMQ7kNvgEdH5Ma&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=AywLfLSPIBj2TSZrbKog6JT&oh=00_AYBEhnESE4PW5yN1RwYlB_XPVcyE7HSR5vRsngsHbq-LsQ&oe=67907291",
    },
    {
        href: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/473692186_122206697258235489_3217970761642490673_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=W1AihddWWUMQ7kNvgF3bKrk&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=AwN5HdrT-w61ymF75e_XFmN&oh=00_AYANBhAQ6o7UbsdLkb8vTXTn6h77A5I8K0qQBz53YjBzXA&oe=67905C74",
    },
    {
        href: "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/474128330_122206697294235489_426943290357681172_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4Fo4yv-L7GwQ7kNvgE0s8Cl&_nc_zt=23&_nc_ht=scontent.fdad3-5.fna&_nc_gid=AptB1NS-6942JG0hyY_cxtD&oh=00_AYDdb1kuJ09hTJfoG94fCbxhnVs6FmB2O8SKr2FqeZom2Q&oe=679051B7",
    },
];

const LandingPage = () => {
    return (
        <ClientLayout>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "120px",
                    paddingBottom: "120px",
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                    }}
                >
                    <EmblaCarousel
                        slides={SLIDES}
                        options={OPTIONS}
                        height={600}
                    />
                    <Grid2
                        container
                        spacing="40px"
                        sx={{
                            position: "absolute",
                            bottom: "-40px",
                            backgroundColor: "background.paper",
                            width: "calc(100vw - 320px)",
                            left: "50%",
                            translate: "-50%",
                            boxShadow: "custom.card",
                            padding: "20px",
                        }}
                    >
                        {[
                            {
                                icon: "bx:car",
                                title: "Shipping",
                                description: "FREE SHIPPING",
                            },
                            {
                                icon: "solar:verified-check-bold",
                                title: "100% Original",
                                description: "With a commitment",
                            },
                            {
                                icon: "solar:tag-price-bold",
                                title: "Reasonable Price",
                                description: "With a commitment",
                            },
                        ].map((serviceItem, serviceIndex) => (
                            <Grid2 key={serviceIndex} size={4}>
                                <Stack direction="row" gap="20px">
                                    <Icon
                                        icon={serviceItem.icon}
                                        width={40}
                                        height={40}
                                    />
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
                                            {serviceItem.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                textTransform: "uppercase",
                                                color: "text.secondary",
                                            }}
                                        >
                                            {serviceItem.description}
                                        </Typography>
                                    </Stack>
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
