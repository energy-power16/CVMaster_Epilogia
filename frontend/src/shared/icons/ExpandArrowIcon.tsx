import { FC } from 'react';
import { IconProps } from 'shared/types/types';

export const ExpandArrowIcon: FC<IconProps> = ({
    width = 24,
    height = 24,
    fillColor = 'none',
    strokeColor = '#AAAAAA',
    className = '',
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M18 9L12 15L6 9" stroke={strokeColor} stroke-width="2" />
        </svg>
    );
};
