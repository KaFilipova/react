import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Content from './Content'
interface ITitleProps {
    text: string
}

const Title = (props: ITitleProps) => {
    console.log(props)
    return <h1>Hello {props.text}</h1>
}

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="TS" />
            <Content
                text1={'hello world1'}
                text2={'hello  world 2'}
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
