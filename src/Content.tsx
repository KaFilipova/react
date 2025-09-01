import React from 'react'
import classes from './Content.module.css'

type Props = { text1: string; text2: string; year: number }
console.log(classes)
export const Content = (props: Props) => {
    let data = true
    return (
        <>
            <p>{props.text1}</p>
            <p className={`${classes.content}`}> {props.text2}</p>
            <div> year first = {props.year}</div>
        </>
    )
}

export default Content
