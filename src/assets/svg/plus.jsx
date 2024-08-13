import React from "react";

export default function Plus({ className }) {
  if (className === "fill") {
    return (
      <svg
        width="72"
        height="73"
        viewBox="0 0 72 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_433_5285)">
          <rect x="10" y="5" width="52" height="53" rx="15" fill="#514DFB" />
        </g>
        <path
          d="M36.2595 23.7051V38.7203"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28.752 31.2129H43.7671"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <filter
            id="filter0_d_433_5285"
            x="0"
            y="0"
            width="72"
            height="73"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="5" />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.315709 0 0 0 0 0.302051 0 0 0 0 0.984948 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_433_5285"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_433_5285"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  } else {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="10" fill="#514DFB" />
        <path
          d="M10 20H30"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 30V10"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
