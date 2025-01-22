import { FC } from 'react';
import { IconProps } from 'shared/types/types';

export const EnglishFlagIcon: FC<IconProps> = ({
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
            <g clipPath="url(#clip0_31_68)">
                <path d="M0 0H36V24.0003H0V0Z" fill="white" />
                <path
                    d="M20.25 -0.000366211H15.75V9.7496H0V14.2496H15.75V23.9996H20.25V14.2496H36V9.7496H20.25V-0.000366211Z"
                    fill="#D80027"
                />
                <path
                    d="M27.688 16.1737L36 20.7916V16.1737H27.688ZM21.913 16.1737L36 23.9998V21.7868L25.8966 16.1737H21.913ZM32.2477 23.9998L21.913 18.2578V23.9998H32.2477Z"
                    fill="#0052B4"
                />
                <path
                    d="M21.913 16.1737L36 23.9998V21.7868L25.8966 16.1737H21.913Z"
                    fill="white"
                />
                <path
                    d="M21.913 16.1737L36 23.9998V21.7868L25.8966 16.1737H21.913Z"
                    fill="#D80027"
                />
                <path
                    d="M6.3521 16.1735L0 19.7025V16.1735H6.3521ZM14.087 17.1687V23.9996H1.79234L14.087 17.1687Z"
                    fill="#0052B4"
                />
                <path
                    d="M10.1034 16.1737L0 21.7868V23.9998L14.087 16.1737H10.1034Z"
                    fill="#D80027"
                />
                <path
                    d="M8.31199 7.8257L0 3.20785V7.8257H8.31199ZM14.087 7.8257L0 -0.000366211V2.21265L10.1034 7.8257H14.087ZM3.7523 -0.000366211L14.087 5.74164V-0.000366211H3.7523Z"
                    fill="#0052B4"
                />
                <path
                    d="M14.087 7.8257L0 -0.000366211V2.21265L10.1034 7.8257H14.087Z"
                    fill="white"
                />
                <path
                    d="M14.087 7.8257L0 -0.000366211V2.21265L10.1034 7.8257H14.087Z"
                    fill="#D80027"
                />
                <path
                    d="M29.6479 7.82602L36 4.29703V7.82602H29.6479ZM21.913 6.83081V-0.00012207H34.2077L21.913 6.83081Z"
                    fill="#0052B4"
                />
                <path
                    d="M25.8966 7.82583L36 2.21277V-0.000244141L21.913 7.82583H25.8966Z"
                    fill="#D80027"
                />
            </g>
            <defs>
                <clipPath id="clip0_31_68">
                    <rect width="36" height="24" rx="5" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
