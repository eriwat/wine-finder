import React from "react";

export default function Spinner() {
    return (
        <svg
            className="spinner"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 100 100"
            fill="none"
        >
            <circle
                cx="50"
                cy="50"
                r="35"
            />
            <path
                d="M85 50 A35 35 0 0 1 15 50"
                stroke="#3b82f6"
                strokeWidth="10"
                strokeLinecap="round"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    dur="0.4s"
                    repeatCount="indefinite"
                />
            </path>
        </svg>
    )

};

