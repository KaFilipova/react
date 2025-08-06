import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const h1 = createElement('h1', { id: 'title' }, 'Hello React')
const list = createElement('ul', null, createElement('li', null, 'listitem'))
const content = (
    <div>
        {h1}
        {list}
    </div>
)

createRoot(document.getElementById('root')!).render(
    <StrictMode>{content}</StrictMode>
)
