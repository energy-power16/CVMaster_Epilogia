import { FC } from 'react';
import { IconProps } from 'shared/types/types';

export const DownloadIcon: FC<IconProps> = ({
    width = 42,
    height = 42,
    fillColor = 'none',
    strokeColor = '#33363F',
    className = '',
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 42 42"
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M21 24.5L19.9393 25.5607L21 26.6213L22.0607 25.5607L21 24.5ZM22.5 8.75C22.5 7.92157 21.8284 7.25 21 7.25C20.1716 7.25 19.5 7.92157 19.5 8.75L22.5 8.75ZM11.1893 16.8107L19.9393 25.5607L22.0607 23.4393L13.3107 14.6893L11.1893 16.8107ZM22.0607 25.5607L30.8107 16.8107L28.6893 14.6893L19.9393 23.4393L22.0607 25.5607ZM22.5 24.5L22.5 8.75L19.5 8.75L19.5 24.5L22.5 24.5Z"
                fill={strokeColor}
            />
            <path
                d="M8.75 28L8.75 29.75C8.75 31.683 10.317 33.25 12.25 33.25L29.75 33.25C31.683 33.25 33.25 31.683 33.25 29.75V28"
                stroke={strokeColor}
                strokeWidth="3"
            />
        </svg>
    );
};
