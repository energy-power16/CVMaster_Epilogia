import { FC } from 'react';
import { IconProps } from 'shared/types/types';

export const FeatherPenIcon: FC<IconProps> = ({
    width = 38,
    height = 38,
    fillColor = 'none',
    strokeColor = '#374957',
    className = '',
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 38 38"
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M9.50002 33.2501L9.20064 28.46C8.50487 17.3277 17.346 7.91675 28.5 7.91675V7.91675L26.5726 9.45871C25.1198 10.621 24.3933 11.2021 23.789 11.8531C22.1424 13.6268 21.0705 15.8568 20.7142 18.2506C20.5834 19.1293 20.5834 20.0595 20.5834 21.92V21.92C20.5834 23.4028 20.5834 24.1442 20.4119 24.7108C19.9364 26.2817 18.5497 27.4027 16.9141 27.5384C16.3241 27.5874 15.5992 27.4321 14.1494 27.1214L9.50002 26.1251"
                stroke={strokeColor}
                strokeWidth="2.4"
            />
        </svg>
    );
};
