import React from 'react'

type Props = { text1: string; text2: string; year: number }

const Content = (props: Props) => {
    return (
        <>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <div> year first = {props.year}</div>
        </>
    )
}

export default Content
