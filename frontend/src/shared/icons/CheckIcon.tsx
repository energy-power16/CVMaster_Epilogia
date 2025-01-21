import { FC } from 'react';
import { IconProps } from 'shared/types/types';

export const CheckIcon: FC<IconProps> = ({
    width = 32,
    height = 27,
    fillColor = 'none',
    strokeColor = '#33363F',
    className = '',
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 32 27"
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M2 15.8L10.9411 24.6134C11.1514 24.8206 11.4944 24.8016 11.6804 24.5724L30 2"
                stroke={strokeColor}
                stroke-width="4"
                stroke-linecap="round"
            />
        </svg>
    );
};
