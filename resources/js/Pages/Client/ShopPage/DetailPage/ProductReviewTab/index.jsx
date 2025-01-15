import ReviewModal from "@/Components/ReviewModal";
import { formatDate } from "@/Function/formatDate";
import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import {
    Avatar,
    Box,
    Button,
    IconButton,
    LinearProgress,
    Pagination,
    Rating,
    Stack,
    Typography,
    Grid2,
} from "@mui/material";
import React from "react";

const ProductReviewTab = () => {
    const { props } = usePage();
    const [open, setOpen] = React.useState(false);
    const [like, setLike] = React.useState({
        like: 0,
        dislike: 0,
    });

    const handleLikeDislike = (id, type) => {
        router.put(
            route("reviews.update", id),
            { like: type },
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    // Cập nhật lại trạng thái sau khi yêu cầu thành công
                    setLikeState((prevState) => ({
                        ...prevState,
                        [type]: prevState[type] === id ? null : id,
                    }));
                },
            }
        );
    };

    const userLikedOrDisliked = (likes, reactionType) => {
        return likes?.some((likeItem) => likeItem[reactionType] === 1);
    };

    const hasProductInOrder = (user, productId) => {
        return user.orders.some((order) =>
            order.products.some((product) => product.id === productId)
        );
    };

    return (
        <Box>
            <Grid2
                container
                borderBottom={"1px dashed"}
                borderColor={"divider"}
            >
                <Grid2 size={4} paddingY={"40px"}>
                    <Stack alignItems={"center"} gap={"8px"}>
                        <Typography variant="subtitle2" color="text.primary">
                            Average rating
                        </Typography>
                        <Typography variant="h2" color="text.primary">
                            {parseFloat(props.product.rating).toFixed(2)}
                            /5
                        </Typography>
                        <Rating value={props.product.rating} size="large" />
                        <Typography
                            variant="captiontext"
                            color={"text.disabled"}
                        >
                            ({props?.product.reviews?.length} reviews)
                        </Typography>
                    </Stack>
                </Grid2>
                <Grid2
                    size={4}
                    sx={{
                        borderLeft: "1px",
                        borderRight: "1px",
                        borderColor: "divider",
                        borderStyle: "dashed",
                    }}
                    paddingY={"40px"}
                >
                    <Stack
                        alignItems={"center"}
                        justifyContent={"space-around"}
                        height={"100%"}
                    >
                        {[5, 4, 3, 2, 1].map((it) => (
                            <Stack
                                key={it}
                                direction={"row"}
                                sx={{
                                    width: "100%",
                                    justifyContent: "center",
                                    paddingX: "40px",
                                    alignItems: "center",
                                    gap: "16px",
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    color="text.primary"
                                >
                                    {it} Star
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={
                                        props.product.reviews?.length === 0
                                            ? 0
                                            : (props.product.reviews?.filter(
                                                  (reviewItem) =>
                                                      reviewItem.rating === it
                                              )?.length /
                                                  props.product.reviews
                                                      ?.length) *
                                              100
                                    }
                                    color="common"
                                    sx={{
                                        flex: 1,
                                        borderRadius: "90px",
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    color={"text.secondary"}
                                >
                                    {
                                        props?.product.reviews.filter(
                                            (reviewItem) =>
                                                reviewItem.rating === it
                                        )?.length
                                    }
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Grid2>
                <Grid2 size={4} paddingY={"40px"}>
                    <Stack
                        alignItems={"center"}
                        gap={"8px"}
                        justifyContent={"center"}
                        height={"100%"}
                    >
                        <Button
                            color="common"
                            variant="contained"
                            startIcon={<Icon icon="solar:pen-bold" />}
                            onClick={() => setOpen(true)}
                        >
                            Write your review
                        </Button>
                        <ReviewModal
                            open={open}
                            onClose={() => setOpen(false)}
                        />
                    </Stack>
                </Grid2>
            </Grid2>
            <Stack
                sx={{
                    paddingY: "40px",
                    gap: "40px",
                }}
            >
                {props.product.reviews?.map((it, itemIndex) => (
                    <Stack key={itemIndex} direction={"row"} gap={"16px"}>
                        <Stack sx={{ width: 240, alignItems: "center" }}>
                            <Avatar
                                sx={{
                                    width: 64,
                                    height: 64,
                                    marginBottom: "20px",
                                }}
                            />
                            <Typography variant="subtitle1">
                                {it?.user?.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                color={"text.secondary"}
                            >
                                {formatDate(it?.created_at)}
                            </Typography>
                        </Stack>
                        <Stack
                            sx={{ flex: 1, paddingRight: "60px", gap: "8px" }}
                        >
                            <Stack direction="row" alignItems="center">
                                <Rating value={it.rating} readOnly />

                                <div className="flex-1"></div>
                                <IconButton>
                                    <Icon icon="solar:menu-dots-bold" />
                                </IconButton>
                            </Stack>
                            {/* {hasProductInOrder(it?.user, props?.product?.id) && (
                                <Stack
                                    direction={"row"}
                                    alignItems={"center"}
                                    gap={"4px"}
                                >
                                    <Icon
                                        icon="solar:verified-check-bold"
                                        color={MuiTheme().palette.success.main}
                                    />
                                    <Typography
                                        variant="captiontext"
                                        color={"success.main"}
                                    >
                                        Verified purchase
                                    </Typography>
                                </Stack>
                            )} */}
                            <Typography variant="body2">
                                {it?.comment}asd
                            </Typography>
                        </Stack>
                    </Stack>
                ))}
            </Stack>
        </Box>
    );
};

export default ProductReviewTab;
