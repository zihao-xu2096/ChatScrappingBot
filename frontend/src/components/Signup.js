import React, { useState } from 'react'
import './css-styles/Signup.css'
import { Link } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js';
 // Instantiated outside of function because it is not dependent on state or props of component

export default function Signup() {
    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        retypepassword: ""
    });
    const handlePassCompare = () =>{
        if (formdata.password != formdata.retypepassword) {
            
            alert('Passwords do not match')
            return false
        }
        else {
            alert('Success')
            return true
        }
    }

    const handleName = (event) => {
        setFormData({
            ...formdata,
            name: event.target.value
        })
    }

    const handleEmail = (event) => {
        setFormData({
            ...formdata,
            email: event.target.value
        })
    }

    const handlePassword = (event) =>{
        setFormData({
            ...formdata,
            password: event.target.value
        })
    }


    const handleRetypePassword = (event) =>{
        setFormData({
            ...formdata,
            retypepassword: event.target.value
        })
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        if (handlePassCompare() === true){
            try {
                await supabase.auth.signUp({email: formdata.email, password: formdata.password})
                console.log(handlePassCompare())
            } catch (error) {
                console.log(error)
            }
        }

    }

    return (
    <section class="vh-100 bg-image">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card bg-dark text-white" id="card">
                            <div class="card-body p-5">
                            <h2 class="text-uppercase text-center mb-5">Create an account</h2>
                                <form onSubmit={handleSignup}>

                                    <div class="form-outline mb-4">
                                    <input type="text" id="form3Example1cg" class="form-control form-control-lg" onChange={handleName} value={formdata.name}/>
                                    <label class="form-label" for="form3Example1cg">Your Name</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                    <input type="email" id="form3Example3cg" class="form-control form-control-lg" onChange={handleEmail} value={formdata.email}/>
                                    <label class="form-label" for="form3Example3cg">Your Email</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                    <input type="password" id="form3Example4cg" class="form-control form-control-lg" onChange={handlePassword} value={formdata.password}/>
                                    <label class="form-label" for="form3Example4cg">Password</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                    <input type="password" id="form3Example4cdg" class="form-control form-control-lg" onChange={handleRetypePassword} value={formdata.retypepassword}/>
                                    <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                                    </div>

                                    <div class="form-check d-flex justify-content-center mb-5">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                    <label class="text-center form-check-label" for="form2Example3g">
                                        I agree all statements in <a href="https://zyro.com/ca/tools/terms-and-conditions-generator" className='text-white'>Terms of service</a>
                                    </label>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                    <button class="btn btn-outline-light btn-lg px-5" type="submit">Sign up</button>
                                    </div>
                                    
                                    <p class="text-center mb-0">Already have an account? <Link to="/login" className="text-white-50 fw-bold">Log in</Link>
                                    </p>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
