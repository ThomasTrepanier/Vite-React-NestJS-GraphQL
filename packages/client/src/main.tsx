import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider, cacheExchange, createClient, fetchExchange } from 'urql';

const client = createClient({
    url: 'http://localhost:3000/graphql',
    exchanges: [cacheExchange, fetchExchange],
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider value={client}>
            <App />
        </Provider>
    </React.StrictMode>
);
