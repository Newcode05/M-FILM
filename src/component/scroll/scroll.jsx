import { useState, useRef } from "react";

function Scroll({ children, customClass }) {
    const [isDown, setIsDown] = useState(false);
    const [start, setStart] = useState(0);
    const [scroll, setScroll] = useState(0);
    const containerRef = useRef(null);
    const handleDown = (e) => {
        setIsDown(true);
        if (containerRef.current) {
            setStart(e.pageX - containerRef.current.offsetLeft);
            setScroll(containerRef.current.scrollLeft);
        }
    }
    const handleUp = () => {
        setIsDown(false);
    }
    const handleLeave = () => {
        setIsDown(false);
    }
    const handleMove = (e) => {
        e.preventDefault();
        if (!isDown) return;
        else {
            const x = e.pageX - containerRef.current.offsetLeft;
            const scrollX = (x - start) * 0.5;
            containerRef.current.scrollLeft = scroll - scrollX;
        }
    }
    return (
        <div style={{ userSelect: 'none', WebkitUserSelect: 'none' }} ref={containerRef}
            className={customClass}
            onMouseDown={(e) => handleDown(e)}
            onMouseUp={handleUp}
            onMouseLeave={handleLeave}
            onMouseMove={(e) => handleMove(e)}
        >{children}</div>
    )
}
export { Scroll }