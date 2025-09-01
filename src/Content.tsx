import React from 'react'
import './Content.css'

type Props = { text1: string; text2: string; year: number }

export const Content = (props: Props) => {
    let data = true
    return (
        <>
            <p
                style={{
                    color: data ? 'yellow' : 'white',
                    backgroundColor: 'green',
                }}
            >
                {props.text1}
            </p>
            <p>{props.text2}</p>
            <div> year first = {props.year}</div>
        </>
    )
}

export default Content
