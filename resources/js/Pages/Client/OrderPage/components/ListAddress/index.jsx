import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Modal,
    Radio,
    RadioGroup,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { Palette } from "resources/js/Theme/elements/palette";
import AddAddressModal from "./components/AddAddressModal";
import { MuiTheme } from "../../../../../Theme";

const ListAddress = ({ backAction, setStep, order, setOrder }) => {
    const { props } = usePage();
    const cities = props.cities;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        console.log("props", props);
    }, []);
    return (
        <>
            <AddAddressModal open={open} handleClose={handleClose} />
            <Stack gap={"32px"}>
                {props.auth.user.address?.map((addressItem) => (
                    <Box
                        key={addressItem}
                        sx={{
                            borderRadius: "16px",
                            boxShadow: "custom.card",
                            padding: "24px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            backgroundColor:
                                MuiTheme().palette.mode === "dark" &&
                                "background.default",
                        }}
                    >
                        <Stack
                            direction={"row"}
                            gap={"8px"}
                            alignItems={"center"}
                        >
                            <Typography
                                variant="subtitle2"
                                color="text.primary"
                            >
                                {addressItem.first_name.concat(
                                    " " + addressItem.last_name
                                )}
                            </Typography>
                            {addressItem.default && (
                                <Typography
                                    variant="captiontext"
                                    sx={{
                                        backgroundColor: "info.lighter",
                                        padding: "2px 6px",
                                        borderRadius: "4px",
                                        fontWeight: 600,
                                    }}
                                    color={"info.dark"}
                                >
                                    Default
                                </Typography>
                            )}
                        </Stack>
                        <Typography variant="body2" color={"text.secondary"}>
                            {addressItem.street_address} / {addressItem.city} / 
                            {addressItem.state}
                        </Typography>
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"8px"}
                        >
                            <Typography
                                variant="body2"
                                color={"text.secondary"}
                            >
                                +1 {addressItem.phone}
                            </Typography>
                            <div className="flex-1"></div>
                            <Button color="error">Delete</Button>
                            <Button
                                variant="outlined"
                                color="common"
                                onClick={() => {
                                    setOrder({
                                        ...order,
                                        address: addressItem,
                                    });
                                    setStep(2);
                                }}
                            >
                                Deliver to this address
                            </Button>
                        </Stack>
                    </Box>
                ))}
            </Stack>
            <Stack direction={"row"} marginTop={"32px"} alignItems={"center"}>
                <Button
                    color="common"
                    startIcon={
                        <Icon
                            icon="eva:arrow-back-fill"
                            width="28"
                            height="28"
                        />
                    }
                    onClick={() => backAction()}
                >
                    Back
                </Button>
                <div className="flex-1"></div>
                <Button
                    color="success"
                    startIcon={<Icon icon="eva:plus-fill" />}
                    onClick={handleOpen}
                >
                    New address
                </Button>
            </Stack>
        </>
    );
};

export default ListAddress;
