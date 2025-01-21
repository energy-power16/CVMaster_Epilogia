import { FC } from 'react';
import { IconProps } from 'shared/types/types';

export const RussianFlagIcon: FC<IconProps> = ({
    width = 36,
    height = 24,
    className = '',
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 36 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g clip-path="url(#clip0_31_57)">
                <path
                    d="M0 -0.000366211V23.9996H36V-0.000366211H0Z"
                    fill="white"
                />
                <path
                    d="M0 5C0 2.23857 2.23858 0 5 0H31C33.7614 0 36 2.23858 36 5V19.0003C36 21.7617 33.7614 24.0003 31 24.0003H5C2.23858 24.0003 0 21.7617 0 19.0003V5Z"
                    fill="#0052B4"
                />
                <path d="M0 0H36V7.99981H0V0Z" fill="white" />
                <path d="M0 15.9998H36V23.9996H0V15.9998Z" fill="#D80027" />
            </g>
            <defs>
                <clipPath id="clip0_31_57">
                    <rect width="36" height="24" rx="5" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
