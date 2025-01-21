import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router';
import './i18n';

import './index.scss';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
