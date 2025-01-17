import { typography } from "@/Theme/elements/typography";
import { Box, GlobalStyles } from "@mui/material";
import React from "react";
import embla from "./elements/embla";
import { MuiTheme } from "resources/js/Theme";
import scrollbar from "./elements/scrollbar";

const GlobalStyle = ({ children }) => {
    return (
        <Box
            sx={{
                h1: typography.h1,
                h2: typography.h2,
                h3: typography.h3,
                h4: typography.h4,
                h5: typography.h5,
                h6: typography.h6,
                p: typography.body2,
                "ul,ol": {
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: "400",
                    letterSpacing: 0,
                },
                li: {
                    "&:not(:last-child)": {
                        marginBottom: "4px",
                    },
                    marginLeft: "40px",
                },
                ul: {
                    listStyleType: "disc",
                },
                ol: {
                    listStyleType: "decimal",
                },
                "& .MuiInputBase-input:focus": {
                    boxShadow: "none",
                },
                img: {
                    width: 400,
                    height: 400,
                },
            }}
        >
            {children}
        </Box>
    );
};

export default GlobalStyle;
