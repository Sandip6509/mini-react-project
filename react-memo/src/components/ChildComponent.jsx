import React from 'react'

const ChildComponent = React.memo(({ count }) => {
    return (
        <div>
            <h3 className='text-slate-700 font-normal text-3xl'>Child Component</h3>
            <p className='text-slate-700 font-normal text-2xl'>Count: {count}</p>
        </div>
    )
})

export default ChildComponent