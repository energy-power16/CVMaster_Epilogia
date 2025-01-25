import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'shared/hooks';

import styles from './ProgressBar.module.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export const ProgressBar = () => {
    const { t } = useTranslation();
    const state = useAppSelector((state) => state.appState.state);
    const progress = useAppSelector((state) => state.message.progress);

    const [isIdle, setIsIdle] = useState(state === 'idle');

    useEffect(() => {
        setIsIdle(state === 'idle');
    }, [state]);

    const wrapperClasses = classNames(styles.underInputWrapper, {
        [styles.idleFlex]: isIdle,
        [styles.fromScratchFlex]: !isIdle,
    });

    return (
        <>
            <div className={wrapperClasses}>
                <div className={styles.text}>
                    {t(isIdle ? 'answerToMakeResume' : 'questionsLeftToAnswer')}
                </div>
                {!isIdle && (
                    <div className={styles.progressBarWrapper}>
                        <div
                            className={styles.progress}
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>
                )}
            </div>
        </>
    );
};
