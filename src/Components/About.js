import React, { useState } from "react";
function About(){
    let transDetails = [
      {transDate:'24/3/2022',user:'Rajesh',id:'raj001'},
      {transDate:'25/3/2022',user:'Naresh',id:'nar002'},
      {transDate:'26/3/2022',user:'Priya',id:'pr003'},]

    const [counter, setcounter] = useState(0)
    // counter will hold will hold the initialstate and setcounter is used to update the state
    const [data, setData] = useState(transDetails)

    const incrCtr =()=>{
      setcounter(counter+1)
    }

    return(
      <div>
        <p>Counter: {counter}</p>
        <button onClick={incrCtr}>Increment</button>
        <div>
          {
                data.map(ele=>(
                    <div key = {ele.id}>
                      <p>{ele.transDate}</p>
                      <p>{ele.user}</p>
                      <p>{ele.id}</p>

                    </div>

            ))
          }

        </div>
     
      </div>
    )
}

export default About