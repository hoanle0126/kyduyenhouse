import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { ThemeProvider } from "@mui/material";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { MuiTheme } from "./Theme";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import GlobalStyle from "./Components/GlobalStyle";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ThemeProvider theme={MuiTheme()}>
                    <App {...props} />
                    <GlobalStyle />
                </ThemeProvider>
            </LocalizationProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
