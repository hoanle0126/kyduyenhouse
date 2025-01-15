import { formatCurrency } from "@/Function/formatCurrency";
import { Icon } from "@iconify/react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

function RenderProduct(props) {
    const { row, value, rows } = props;

    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: "12px",
            }}
        >
            <img
                src={row.thumbnail}
                className="w-[70px] h-[70px] rounded-[12px]"
            />
            <Stack>
                <Typography variant="subtitle2">{row.name}</Typography>
            </Stack>
        </Box>
    );
}

function RenderQuantity(props) {
    const { row, rows, setRows } = props;

    function addQuantity() {
        setRows((preCarts) => {
            const updateCarts = preCarts.map((cart) => {
                if (cart.id == row.id) {
                    return { ...cart, quantity: cart.quantity + 1 };
                }
                return cart;
            });

            return updateCarts;
        });
    }

    function decQuantity() {
        setRows((preCarts) => {
            const updateCarts = preCarts.map((cart) => {
                if (cart.id == row.id) {
                    return { ...cart, quantity: cart.quantity - 1 };
                }
                return cart;
            });

            return updateCarts;
        });
    }

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                gap: "4px",
            }}
        >
            <Stack
                sx={{
                    border: "1px solid black",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                    padding: "4px",
                    borderColor: "divider",
                    borderRadius: "8px",
                }}
            >
                <IconButton
                    size="small"
                    sx={{ borderRadius: "8px" }}
                    onClick={() => decQuantity()}
                    disabled={row.quantity == 1}
                >
                    <Icon icon="eva:minus-fill" width={16} height={16} />
                </IconButton>
                <Typography>{row.quantity}</Typography>
                <IconButton
                    size="small"
                    sx={{ borderRadius: "8px" }}
                    onClick={() => addQuantity()}
                    disabled={row.quantity == row.stock.remain}
                >
                    <Icon icon="eva:plus-fill" width={16} height={16} />
                </IconButton>
            </Stack>
            <Typography variant="captiontext" color={"text.secondary"}>
                available: {row.stock.remain}
            </Typography>
        </Box>
    );
}

function RenderAction(props) {
    const { row } = props;

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                height: "100%",
            }}
        >
            <IconButton onClick={() => test()}>
                <Icon icon="solar:trash-bin-trash-bold" />
            </IconButton>
        </Box>
    );
}

const DataGridHeader = (rows, setRows) => {

    return [
        {
            field: "name",
            headerName: "Product",
            flex: 1,
            renderCell: (value, row) => <RenderProduct {...value} />,
        },
        {
            field: "price_value",
            headerName: "Price",
            width: 90,
            valueGetter: (value, row) => {
                return formatCurrency(value);
            },
        },
        {
            field: "quantity",
            headerName: "Quantity",
            width: 150,
            renderCell: (params) => (
                <RenderQuantity {...params} rows={rows} setRows={setRows} />
            ),
        },
        {
            field: "total",
            headerName: "Total Price",
            width: 130,
            headerAlign: "right",
            align: "right",
            valueGetter: (value, row) => {
                return formatCurrency(row.price_value * row.quantity);
            },
        },
        {
            field: "action",
            headerName: "",
            sortable: false, // Disable sorting
            width: 100,
            disableColumnMenu: true,
            renderCell: RenderAction,
        },
    ];
};

export default DataGridHeader;
