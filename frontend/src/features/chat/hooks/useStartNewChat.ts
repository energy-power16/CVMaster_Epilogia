import { changeAppState } from '@redux/appState/slice';
import { resetMessages } from '@redux/messages/slice';
import { useAppDispatch } from 'shared/hooks';

export const useStartNewChat = () => {
    const dispatch = useAppDispatch();

    const handleStartNewChat = () => {
        dispatch(resetMessages());
        dispatch(changeAppState('idle'));
    };

    return { handleStartNewChat };
};
