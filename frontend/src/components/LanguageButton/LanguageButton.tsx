import { ReactNode, useEffect, useRef, useState } from 'react';
import {
    RussianFlagIcon,
    EnglishFlagIcon,
    ExpandArrowIcon,
} from 'shared/icons';
import { Language, useAppLanguage } from 'shared/hooks/useAppLanguage';
import classNames from 'classnames';

import styles from './LanguageButton.module.scss';

export const LanguageButton = () => {
    const { t, i18n, changeLanguagePersistently } = useAppLanguage();
    const [isExpanded, setIsExpanded] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    const optionWrapperRef = useRef<HTMLDivElement>(null);

    const renderCurrentLangIcon = () => {
        if (i18n.language === 'ru') {
            return <RussianFlagIcon />;
        } else {
            return <EnglishFlagIcon />;
        }
    };

    const handleClick = () => {
        setIsExpanded((prevState) => !prevState);
    };

    const handleOptionClick = (newLanguage: 'ru' | 'en') => {
        changeLanguagePersistently(newLanguage);
        setIsExpanded(false);
    };

    type Option = {
        icon: ReactNode;
        text: string;
        lang: Language;
    };

    const options: Option[] = [
        {
            icon: <RussianFlagIcon />,
            text: 'Ru',
            lang: 'ru',
        },
        {
            icon: <EnglishFlagIcon />,
            text: 'En',
            lang: 'en',
        },
    ];

    useEffect(() => {
        if (optionWrapperRef.current) {
            if (isExpanded) {
                optionWrapperRef.current.style.height = `${optionWrapperRef.current.scrollHeight}px`;
            } else {
                optionWrapperRef.current.style.height = '0px';
            }
        }
    }, [isExpanded]);

    useEffect(() => {
        const handleMouseClick = (event: MouseEvent) => {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target as Node)
            ) {
                setIsExpanded(false);
            }
        };

        window.addEventListener('click', handleMouseClick);

        return () => {
            window.removeEventListener('click', handleMouseClick);
        };
    }, []);

    return (
        <div className={styles.selectWrapper} ref={selectRef}>
            <div className={styles.triggerWrapper} onClick={handleClick}>
                <span className={styles.triggerIcon}>
                    {renderCurrentLangIcon()}
                </span>
                <span className={styles.triggerText}>{t('language')}</span>
                <ExpandArrowIcon
                    className={classNames(styles.triggerExpandIcon, {
                        [styles.expanded]: isExpanded,
                    })}
                />
            </div>
            <div className={styles.optionsWrapper} ref={optionWrapperRef}>
                {options.map((option, index) => (
                    <div
                        className={classNames(styles.option, {
                            [styles.chosen]: i18n.language === option.lang,
                        })}
                        key={index}
                        onClick={() => handleOptionClick(option.lang)}
                    >
                        {option.icon}
                        <span>{option.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
