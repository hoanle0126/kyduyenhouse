import React from "react";
import { DotButton, useDotButton } from "./CarouselDotButton";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Box, Grid2, Typography } from "@mui/material";

const EmblaCarousel = (props) => {
    const { slides, options, spacing, height, numImage, dots, arrows } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: 3000 }),
    ]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <Box component="section" className="embla">
            <Box className="embla__viewport" ref={emblaRef}>
                <Box className="embla__container">
                    {slides.map((slideItem, slideIndex) => (
                        <Box
                            className="embla__slide"
                            key={slideIndex}
                            sx={{
                                flex: `0 0 ${numImage ? 100 / numImage : 100}%`,
                                img: {
                                    height: height,
                                    aspectRatio: height || "1 / 1",
                                },
                                marginRight: spacing,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "12px",
                            }}
                        >
                            <img src={slideItem.href} alt="" />
                            {slideItem.title && (
                                <Typography
                                    variant="body2"
                                    sx={{
                                        overflowWrap: "break-word",
                                        width: 200,
                                    }}
                                >
                                    {slideItem.title}
                                </Typography>
                            )}
                        </Box>
                    ))}
                </Box>
            </Box>

            <div className="embla__controls">
                {arrows && (
                    <div className="embla__buttons">
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />
                        <NextButton
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                        />
                    </div>
                )}

                {dots && (
                    <div className="embla__dots">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={"embla__dot".concat(
                                    index === selectedIndex
                                        ? " embla__dot--selected"
                                        : ""
                                )}
                            />
                        ))}
                    </div>
                )}
            </div>
        </Box>
    );
};

export default EmblaCarousel;
