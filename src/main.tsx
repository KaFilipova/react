import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// jsx

const h1 = <h1 id="title">Hello React.js</h1>
let a = 10
let b = 'hello test'
const list = (
    <ul>
        <li>listitem1 {a + 10 + 10}</li>
        <li>listitem2 {b}</li>
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
