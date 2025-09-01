import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Content } from './Content'
import Title from './title'
interface ITitleProps {
    text: string
}

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="TS" />
            <Content
                text1={
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo esse consectetur debitis, porro aperiam eius odio molestias repudiandae ducimus laboriosam, nihil voluptates.'
                }
                text2={' Ipsum laborum beatae nihil ullam facilis in sunt!'}
                year={2025}
            />
        </>
    )
}
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
