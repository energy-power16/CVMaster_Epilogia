import { FC } from 'react';
import { IconProps } from 'shared/types/types';

export const SearchArrowIcon: FC<IconProps> = ({
    width = 45,
    height = 45,
    fillColor = 'none',
    strokeColor = '#121212',
    className = '',
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 45 45"
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M30.058 15.4743L31.558 15.4743L31.558 13.9743L30.058 13.9743L30.058 15.4743ZM15.3252 28.0858C14.7395 28.6716 14.7395 29.6213 15.3252 30.2071C15.911 30.7929 16.8608 30.7929 17.4466 30.2071L15.3252 28.0858ZM31.558 26.412L31.558 15.4743L28.558 15.4743L28.558 26.412L31.558 26.412ZM30.058 13.9743L19.1203 13.9743V16.9743L30.058 16.9743L30.058 13.9743ZM28.9974 14.4137L15.3252 28.0858L17.4466 30.2071L31.1187 16.535L28.9974 14.4137Z"
                fill={strokeColor}
            />
        </svg>
    );
};
