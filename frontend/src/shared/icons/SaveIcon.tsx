import { FC } from 'react';
import { IconProps } from 'shared/types/types';

export const SaveIcon: FC<IconProps> = ({
    width = 34,
    height = 34,
    fillColor = 'none',
    strokeColor = '#33363F',
    className = '',
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 34 34"
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M22.6665 29.75V25.25C22.6665 23.3644 22.6665 22.4216 22.0807 21.8358C21.4949 21.25 20.5521 21.25 18.6665 21.25H13.9165C12.0309 21.25 11.0881 21.25 10.5023 21.8358C9.9165 22.4216 9.9165 23.3644 9.9165 25.25V29.75"
                stroke={strokeColor}
                strokeWidth="3"
            />
            <path
                d="M9.9165 11.3334H16.9998"
                stroke={strokeColor}
                strokeWidth="3"
                strokeLinecap="round"
            />
            <path
                d="M4.25 10.25C4.25 7.42157 4.25 6.00736 5.12868 5.12868C6.00736 4.25 7.42157 4.25 10.25 4.25H23.2549C23.6637 4.25 23.868 4.25 24.0518 4.32612C24.2356 4.40224 24.3801 4.54676 24.6691 4.83579L29.1642 9.33088C29.4532 9.61991 29.5978 9.76443 29.6739 9.9482C29.75 10.132 29.75 10.3363 29.75 10.7451V23.75C29.75 26.5784 29.75 27.9926 28.8713 28.8713C27.9926 29.75 26.5784 29.75 23.75 29.75H10.25C7.42157 29.75 6.00736 29.75 5.12868 28.8713C4.25 27.9926 4.25 26.5784 4.25 23.75V10.25Z"
                stroke={strokeColor}
                strokeWidth="3"
            />
        </svg>
    );
};
