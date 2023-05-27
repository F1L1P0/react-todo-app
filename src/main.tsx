import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MainRouter } from './router/MainRouter'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
