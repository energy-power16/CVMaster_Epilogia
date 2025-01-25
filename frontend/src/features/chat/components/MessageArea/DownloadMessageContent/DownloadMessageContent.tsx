import { DownloadIcon, FileIcon } from 'shared/icons';

import styles from './DownloadMessageContent.module.scss';
import { useAppSelector } from 'shared/hooks';
import { BASE_URL } from 'shared/constants/constants';

export const DownloadMessageContent = () => {
    const chatId = useAppSelector((state) => state.message.currentChatId);

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <FileIcon className={styles.titleIcon} />
                <span className={styles.titleText}>Resume.pdf</span>
            </div>
            <a
                className={styles.downloadIconWrapper}
                href={`${BASE_URL}/api/download/${chatId}`}
            >
                <DownloadIcon className={styles.downloadIcon} />
            </a>
        </div>
    );
};
