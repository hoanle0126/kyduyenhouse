import React from "react";
import { useTranslation } from "react-i18next";

const HandleTranslate = ({ children }) => {
    const { t, i18n } = useTranslation();

    React.useEffect(() => {
        i18n.changeLanguage("en"); // Thay đổi ngôn ngữ
    }, []);

    return <>{children}</>;
};

export default HandleTranslate;
