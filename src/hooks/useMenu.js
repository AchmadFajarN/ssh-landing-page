import { useState, useEffect } from "react";

export const useMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return { isMenuOpen, toggle }
}