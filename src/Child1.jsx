import React, { memo } from 'react'

import { useSelector } from 'react-redux'

const Child1 = () => {

    const { count } = useSelector(store => store.counter)
    // console.log('Child1.jsx', count)c
    return (
        <div>
            <h1>{count}</h1>
            

        </div>
    )
}

export default memo(Child1)