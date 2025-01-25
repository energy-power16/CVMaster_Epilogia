import { Layout } from 'components/Layout/Layout';
import { Chat } from 'pages/Chat';
import { Route, Routes } from 'react-router';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Chat />} />
            </Route>
        </Routes>
    );
};
