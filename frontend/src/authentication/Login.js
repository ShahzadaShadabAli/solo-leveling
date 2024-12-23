import { Form, useActionData } from "react-router-dom"
import axios from "axios"
import useLogin from "../hooks/useLogin"
import { useEffect, useState } from "react"

const Login = () => {

 
    const data = useActionData()
    console.log(data)
    const login = useLogin(data)
    if (data && data.status) {
        login()
    }
    return (
        <div className="login-screen">
            <div className="sign-up-screen">
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Login Now</h3>
                                <Form className="requires-validation" novalidate action="/login" method="post">

                                    <div className="col-md-12">
                                        <input className="form-control" type="email" name="email" placeholder="E-mail Address" required />
                                        <div className="valid-feedback">Email field is valid!</div>
                                        <div className="invalid-feedback">Email field cannot be blank!</div>
                                    </div>

                                    <div className="row">
                                    <div className="col-md-12">
                                        <input className="form-control" type="password" name="password" placeholder="Password" required />
                                        <div className="valid-feedback">Password field is valid!</div>
                                        <div className="invalid-feedback">Password field cannot be blank!</div>
                                    </div>
                                    <div className="col-md-12">
                                    
                                      </div>

                                    </div>
                                        {data && !data.status && <div className="text-danger">{data.data}</div>}
                                    <div className="form-button mt-3">
                                        <button id="submit" type="submit" className="btn btn-danger">Login</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
}

export const handleLoginSubmit = async ({ request }) => {
    const data = await request.formData()
    const email = data.get('email')
    const password = data.get('password')
    try {
        const response = await axios.post('/user/login', {email, password})
        return {status: true, data:response.data}
    } catch (error) {
        return {status: false, data:error.message}
    }
}
 
export default Login;