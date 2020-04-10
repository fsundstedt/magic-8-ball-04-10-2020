import React from 'react';

const Item = ({data}) => {

    return (
        <>
            <div>{data.question} {data.answer}</div>
        </>
    )
}

export default Item;