import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

// компоненты пишутся с большой буквы. компоненты вызываются как теги </>

const Title = () => {
    return <h1>Hello App.js</h1>
}
const Content = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                vel distinctio veniam odit quas suscipit veritatis
                necessitatibus, impedit at, praesentium sapiente error dicta
                blanditiis earum reprehenderit mollitia recusandae maxime
                aliquid.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis tempora fuga, quas laboriosam dolore cumque, sed
                optio aspernatur impedit expedita officiis animi odio id maiores
                ipsa, accusamus nesciunt quo! Quidem?
            </p>
        </>
    )
}
function App() {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
