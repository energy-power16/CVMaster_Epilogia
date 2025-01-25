import { selectCurrentAppState } from '@redux/appState/selectors';
import { Gradient } from 'components/Gradient/Gradient';
import { ChatWrapper } from 'features/chat';
import { MessageArea } from 'features/chat/components/MessageArea/MessageArea';
import { useAppSelector } from 'shared/hooks';

export const Chat = () => {
    const state = useAppSelector(selectCurrentAppState);

    return (
        <>
            <ChatWrapper />
            {state !== 'idle' && <MessageArea />}
            <Gradient />
        </>
    );
};
