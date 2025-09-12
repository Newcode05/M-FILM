import React, { useState, cloneElement } from "react";
import { usePopper } from "react-popper";
import stylesModule from "./tooltip.module.css"
export const Tooltip = ({ content, placement = "top", children }) => {
    const [visible, setVisible] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
        placement: "bottom",
        modifiers: [
            { name: "offset", options: { offset: [0, 10] } },
            { name: "arrow", options: { element: arrowElement } },
            {
                name: 'preventOverflow',
                options: {
                    boundary: 'viewport', // hoặc 'clippingParents', 'window'
                    padding: 8,
                },
            },
        ],
    });

    // Cập nhật lại popper khi hiện
    React.useEffect(() => {
        if (visible && update) update();
    }, [visible]);

    const childWithProps = cloneElement(children, {
        ref: setReferenceElement,
        onMouseEnter: () => setVisible(true),
        onMouseLeave: () => setVisible(false),
    });

    return (
        <>
            {childWithProps}
            {visible && (
                <div
                    ref={setPopperElement}
                    style={{
                        ...styles.popper,
                        margin: 0,
                        backgroundColor: "rgba(100,100,100,0.5)",
                        boxSizing: "border-box",
                        color: "white",
                        padding: "8px 10px",
                        border: "none",
                        borderRadius: 4,
                        fontSize: 12,
                        zIndex: 9999,
                    }}
                    {...attributes.popper}
                >
                    {content}
                    <div ref={setArrowElement} style={styles.arrow} className={stylesModule.arrow}>
                        <svg width="12" height="6" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,6 L6,0 L12,6 Z" fill="rgba(100,100,100,0.5)" />
                        </svg>
                    </div>

                </div>

            )}
        </>
    );
};
