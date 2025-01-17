import React from "react";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./components/ArrowButton";
import useEmblaCarousel from "embla-carousel-react";
import { usePage } from "@inertiajs/react";
import {
    alpha,
    Box,
    Button,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";

const options = { align: "start" };
const SLIDE_COUNT = 6;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const CategorySection = () => {
    const { props } = usePage();
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

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
                        Our Categories
                    </Typography>
                </Box>
            </center>
            <Box
                sx={{
                    width: "100%",
                    position: "relative",
                }}
            >
                <Box sx={{ overflow: "hidden" }} ref={emblaRef}>
                    <Box
                        sx={{
                            backfaceVisibility: "hidden",
                            display: "flex",
                            touchAction: "pan-y pinch-zoom",
                            marginLeft: "calc(40px * -1)",
                        }}
                    >
                        {props.categories.map((item, index) => (
                            <Box
                                sx={{
                                    flex: "0 0 calc(100% / 4)",
                                    paddingLeft: "40px",
                                }}
                                key={index}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "400px",
                                        position: "relative",
                                        userSelect: "none",
                                        "&::before": {
                                            position: "absolute",
                                            content: "''",
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "20px",
                                            backgroundColor: alpha(
                                                MuiTheme().palette.text.primary,
                                                0.2
                                            ),
                                        },
                                    }}
                                >
                                    <img
                                        src={item.thumbnail}
                                        className="w-full h-full rounded-[20px]"
                                    />
                                    <Stack
                                        sx={{
                                            position: "absolute",
                                            bottom: "20px",
                                            left: "50%",
                                            translate: "-50%",
                                            gap: "12px",
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            color="background.paper"
                                            textAlign="center"
                                        >
                                            {item.name}
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            color="common_light"
                                            onClick={() => console.log("clock")}
                                        >
                                            Learn More
                                        </Button>
                                    </Stack>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <IconButton
                    sx={{
                        position: "absolute",
                        left: "-60px",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Icon
                        icon="eva:arrow-ios-back-fill"
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                        width={60}
                        height={60}
                    />
                </IconButton>
                <IconButton
                    sx={{
                        position: "absolute",
                        right: "-132px",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Icon
                        icon="eva:arrow-ios-forward-fill"
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                        width={60}
                        height={60}
                    />
                </IconButton>
            </Box>
        </Box>
    );
};

export default CategorySection;
