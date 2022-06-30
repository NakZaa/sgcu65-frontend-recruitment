import React from "react";

export const TwitterLogo = ({ ...restProps }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <g filter="url(#filter0_d)">
      <circle cx="32" cy="28" r="24" fill="white" />
      <path
        d="M43.643 20.937C42.808 21.307 41.911 21.557 40.968 21.67C41.941 21.0878 42.669 20.1715 43.016 19.092C42.1019 19.635 41.1014 20.0172 40.058 20.222C39.3564 19.4729 38.4271 18.9763 37.4143 18.8095C36.4016 18.6426 35.3621 18.8148 34.4572 19.2993C33.5524 19.7837 32.8328 20.5534 32.4102 21.4887C31.9875 22.4241 31.8855 23.4728 32.12 24.472C30.2677 24.379 28.4556 23.8976 26.8014 23.0589C25.1472 22.2203 23.6879 21.0432 22.518 19.604C22.118 20.294 21.888 21.094 21.888 21.946C21.8876 22.713 22.0764 23.4683 22.4379 24.1447C22.7993 24.8212 23.3222 25.3981 23.96 25.824C23.2203 25.8005 22.4969 25.6006 21.85 25.241V25.301C21.8499 26.3768 22.222 27.4194 22.9032 28.252C23.5843 29.0846 24.5326 29.6559 25.587 29.869C24.9008 30.0547 24.1813 30.0821 23.483 29.949C23.7805 30.8746 24.36 31.684 25.1404 32.2639C25.9208 32.8438 26.8629 33.1652 27.835 33.183C26.1848 34.4784 24.1469 35.1811 22.049 35.178C21.6774 35.1781 21.3061 35.1564 20.937 35.113C23.0665 36.4822 25.5454 37.2088 28.077 37.206C36.647 37.206 41.332 30.108 41.332 23.952C41.332 23.752 41.327 23.55 41.318 23.35C42.2293 22.691 43.0159 21.8749 43.641 20.94L43.643 20.937Z"
        fill="#F178B6"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="64"
        height="64"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
