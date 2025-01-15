import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import {
    Grid2,
    Box,
    Button,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    styled,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { MuiTheme } from "resources/js/Theme";
import GeneralTab from "./components/GeneralTab";
import AdvancedTab from "./components/AdvancedTab";
import { uploadToCloudinary } from "resources/utils/uploadToCloudinary";
import { router, usePage } from "@inertiajs/react";
import { CustomTabPanel } from "@/Components/CustomTabPanel";
import AdminDefaultLayout from "resources/js/Layouts/AdminLayout/DefaultLayout";
import ImageThumbnail from "../../../../Components/ImageThumbnail";

const UpdateProductPage = () => {
    const [tab, setTab] = React.useState("1");
    const { props } = usePage();
    const [product, setProduct] = React.useState(props.product);
    const [currentFeature, setCurrentFeature] = React.useState({});
    const [currentIndex, setCurrentIndex] = React.useState(-1);

    const handleTab = (event, newValue) => {
        setTab(newValue);
    };

    const handleChange = (event, key) => {
        setCurrentFeature({ ...currentFeature, [key]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(route("products.update", product.id), product, {
            onSuccess: () => {
                router.visit(route("products.index"));
            },
        });
    };

    const handleSelectImage = async (e) => {
        const imgUrl = await uploadToCloudinary(e.target.files[0]);
        setProduct({
            ...product,
            thumbnail: imgUrl,
        });
    };

    React.useEffect(() => {
        console.log("Product ", product);
    }, [product]);

    return (
        <AdminLayout title={"Update product"}>
            <AdminDefaultLayout title={"Update product"}>
                <Grid2
                    container
                    spacing={"28px"}
                    sx={{ paddingBottom: "12px" }}
                >
                    <Grid2 size={3}>
                        <Stack gap={"28px"}>
                            <Box
                                sx={{
                                    boxShadow: "custom.card",
                                    borderRadius: "12px",
                                    padding: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "24px",
                                    paddingBottom: "40px",
                                }}
                            >
                                <Typography variant="h6">Thumbnail</Typography>
                                <ImageThumbnail
                                    src={product?.thumbnail}
                                    setSrc={(src) =>
                                        setProduct({
                                            ...product,
                                            thumbnail: src,
                                        })
                                    }
                                />
                                <Typography
                                    variant="captiontext"
                                    color={"text.disabled"}
                                    width={"90%"}
                                >
                                    Set the product thumbnail image. Only *.png,
                                    *.jpg and *.jpeg image files are accepted
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    boxShadow: "custom.card",
                                    borderRadius: "12px",
                                    padding: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "24px",
                                    paddingBottom: "40px",
                                }}
                            >
                                <Typography variant="h6">Category</Typography>
                                <FormControl fullWidth>
                                    <InputLabel
                                        id="demo-simple-select-label"
                                        color="custom"
                                    >
                                        Categories
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={props.categories[0]}
                                        label="Categories"
                                        onChange={handleChange}
                                        color="custom"
                                    >
                                        {props.categories.map(
                                            (category, index) => (
                                                <MenuItem
                                                    value={category}
                                                    key={index}
                                                >
                                                    <Stack
                                                        direction={"row"}
                                                        alignItems={"center"}
                                                        gap={"8px"}
                                                    >
                                                        <img
                                                            src={
                                                                category.thumbnail
                                                            }
                                                            alt=""
                                                            className="w-[16px] h-[16px]"
                                                        />
                                                        {category.name}
                                                    </Stack>
                                                </MenuItem>
                                            )
                                        )}
                                    </Select>
                                </FormControl>
                                <Button variant="outlined" color="inherit">
                                    Create new category
                                </Button>
                            </Box>
                        </Stack>
                    </Grid2>
                    <Grid2 size={9}>
                        <Box
                            sx={{
                                borderBottom: 1,
                                borderColor: "primary.lighter",
                            }}
                        >
                            <Tabs
                                value={tab}
                                onChange={handleTab}
                                sx={{
                                    "& .MuiButtonBase-root.MuiTab-root": {
                                        textTransform: "none",
                                        fontWeight: 600,
                                    },
                                }}
                            >
                                <Tab label="General" value="1" />
                                <Tab label="Advanced" value="2" />
                            </Tabs>
                        </Box>
                        <CustomTabPanel tab={tab} index={1}>
                            <GeneralTab
                                product={product}
                                setProduct={setProduct}
                            />
                        </CustomTabPanel>
                        <CustomTabPanel tab={tab} index={2}>
                            <AdvancedTab
                                product={product}
                                setProduct={setProduct}
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex}
                            />
                        </CustomTabPanel>
                        <Stack
                            sx={{
                                flexFlow: "row",
                                flexDirection: "row",
                                justifyContent: "right",
                                position: "sticky",
                                bottom: 24,
                                marginTop: "24px",
                            }}
                        >
                            <Button
                                variant="contained"
                                color="common"
                                sx={{ boxShadow: "main.z1" }}
                                endIcon={<Icon icon="eva:save-fill" />}
                                onClick={handleSubmit}
                            >
                                Save
                            </Button>
                        </Stack>
                    </Grid2>
                </Grid2>
            </AdminDefaultLayout>
        </AdminLayout>
    );
};

export default UpdateProductPage;
