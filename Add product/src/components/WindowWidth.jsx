import React, { useState, useEffect } from "react";

function windowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="bg-pink-900 mx-4 my-4 px-4 py-2 text-white rounded">
            <h2> Let' Check out Your Window Width: {windowWidth}px</h2>
            {windowWidth > 768 ? (
                <p>This is a wide screen layout.</p>
            ) : (
                <p>This is a mobile-friendly layout.</p>
            )}
        </div>
    );
}

export default windowWidth;
