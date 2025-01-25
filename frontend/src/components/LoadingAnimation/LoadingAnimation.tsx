import { FC, useEffect, useState } from 'react';
import styles from './LoadingAnimation.module.scss';
import classNames from 'classnames';

export type LoadingAnimationProps = {
    animationSpeed?: number;
};

export const LoadingAnimation: FC<LoadingAnimationProps> = ({
    animationSpeed = 300,
}) => {
    const [circles, setCircles] = useState([
        'circle-dark',
        'circle-medium',
        'circle-light',
    ]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCircles((prevCircles) => [
                prevCircles[2],
                prevCircles[0],
                prevCircles[1],
            ]);
        }, animationSpeed);

        return () => {
            clearInterval(intervalId);
        };
    }, [animationSpeed]);

    return (
        <div className={styles.circlesWrapper}>
            {circles.map((circleColor, index) => (
                <div
                    className={classNames(styles.circle, styles[circleColor])}
                    key={index}
                ></div>
            ))}
        </div>
    );
};
