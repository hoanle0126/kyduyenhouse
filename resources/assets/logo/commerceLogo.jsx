import React from "react";

const CommerceLogo = ({ color, size }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || "28"}
            height={size || "28"}
            viewBox="0 0 32 32"
        >
            <g fill={color || "#48D68F"}>
                <path d="m22.07 12.489l6.086-3.498L16 1.994L3.845 8.99v13.996l6.092 3.507l-.007-7.015L16 22.974V15.99l-6.07-3.5L16 8.994z" />
                <path d="m22.07 19.466l6.086 3.52L16 30.006v-7.033z" />
            </g>
        </svg>
    );
};

export default CommerceLogo;
