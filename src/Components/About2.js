import React, { useState } from "react";

const About2 =()=>{
    const [data, setData] = useState({
        transDate:'26/12/2021',
        amount:30000,
        transID: 'TR9012'

    })
    const updateData=()=>{
        setData({amount:35000})
    }

    console.log(data)
    return (
        <div>
            <div>
                <p>Transaction Date: {data.transDate}, Amount:{data.amount}</p>
                <button onClick={updateData}>Update </button>

            </div>
        </div>
    )
}
export default About2;