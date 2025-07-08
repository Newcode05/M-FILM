import { useState, useRef, useEffect } from "react";


export const useSort = (defaultValue) => {
    const [selected, setSelected] = useState(defaultValue);
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    const handleSelect = ( option) => {
     
        setSelected(option);
        setOpen(false);
    }
    useEffect(() => {
        const handleClickOut = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOut);
        return () => document.removeEventListener("mousedown", handleClickOut);
    }, []);
 
    return { selected, open, wrapperRef, setOpen, handleSelect }
}