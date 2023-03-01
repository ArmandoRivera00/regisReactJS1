import React from "react";

export default function Form() {
    return(
        <section>
            <div className="register">
                <div className="col-1"></div>
                <h2>Sign In</h2>
                <span>register and enjoy the service!</span>

                <form id='form' className='flex flex-col'>
                    <input type="text" placeholder='Full name'/>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='password'/>
                    <input type="text" placeholder='confirm password'/>

                    <button className='btn'> Sign in</button>
                </form>
                <div className="col-2"></div>
            </div>
        </section>
    )
}