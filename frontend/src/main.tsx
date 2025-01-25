import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { LanguageWrapper } from 'components/LanguageWrapper/LanguageWrapper';

import './i18n';

import './index.scss';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <LanguageWrapper>
                <App />
            </LanguageWrapper>
        </BrowserRouter>
    </Provider>,
);
