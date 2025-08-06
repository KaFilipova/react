import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// jsx

const h1 = <h1 id="title">Hello React.js</h1>
const list = (
    <ul>
        <li>listitem1</li>
        <li>listitem2</li>
    </ul>
)

const content = (
    <div>
        {h1}
        {list}
    </div>
)

createRoot(document.getElementById('root')!).render(
    <StrictMode>{list}</StrictMode>
)
