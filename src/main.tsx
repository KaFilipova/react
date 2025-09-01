import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

// компоненты пишутся с большой буквы. компоненты вызываются как теги </>
// props - это свойства, которые компонент принять на входе
// названия интерфейса (interface) начинается с большой буквы I. interface это описание обьекта
interface ITitleProps {
    text: string
}
type ContentProps = {
    text1: string
    text2: string
    year: number
}
const Title = (props: ITitleProps) => {
    console.log(props)
    return <h1>Hello {props.text}</h1>
}
const Content = (props: ContentProps) => {
    return (
        <>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <div> year first = {props.year}</div>
        </>
    )
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
