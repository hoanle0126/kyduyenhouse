import React from "react";

const convertText = (text) => {
    return text
        .toLowerCase() // Chuyển thành chữ thường
        .normalize("NFD") // Chuẩn hóa ký tự (dùng để xử lý dấu tiếng Việt)
        .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu tiếng Việt
        .replace(/[^a-z0-9\s]/g, "") // Loại bỏ ký tự đặc biệt
        .trim() // Loại bỏ khoảng trắng ở đầu và cuối
        .replace(/\s+/g, "-"); // Thay khoảng trắng bằng dấu gạch ngang
};

export default convertText;
