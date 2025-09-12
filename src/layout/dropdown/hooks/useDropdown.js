import { useEffect, useState } from "react"

export const useDropdown = (defaultValue = "English") => {
    const [selected, setSelected] = useState(defaultValue);
    const [open, setOpen] = useState(false);
    const handleSelect = (value) => {
        setSelected(value);
        setOpen(false);
    }
    return { selected, open, setOpen, handleSelect }
}