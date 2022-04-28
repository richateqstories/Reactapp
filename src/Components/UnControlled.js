import React,{useRef} from "react";

export default function UnControlled(){
    const username = useRef(null)
    const password = useRef(null)

    const submitHandler = (event)=>{
        event.preventDefault()
        const loginDet ={
            uname:username.current.value,
            pwd:password.current.value,
        }
        console.log(loginDet)
    }
    return(
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    Username:<input type='text' name='username' ref={username} /><br/>
                    Password:<input type='password' name='password' ref={password} /><br/>
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
        </div>
    )

}
