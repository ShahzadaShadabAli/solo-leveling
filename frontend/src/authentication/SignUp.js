import axios from "axios";
import { Form, useActionData } from "react-router-dom"
import useAuthContext from "../hooks/useAuthContext";
import useLogin from "../hooks/useLogin";

const SignUp = () => {
    const data = useActionData()
    const login = useLogin(data)
    if (data && data.message) {
        login()
    }
    return (
        <div className="sign-up-screen">
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Register Today</h3>
                                <p>Fill in the data below.</p>
                                <Form className="requires-validation" method="post" action="/signup" novalidate>

                                    <div className="col-md-12">
                                        <input className="form-control" type="text" name="name" placeholder="Full Name" required />
                                        <div className="valid-feedback">Username field is valid!</div>
                                        <div className="invalid-feedback">Username field cannot be blank!</div>
                                    </div>

                                    <div className="col-md-12">
                                        <input className="form-control" type="email" name="email" placeholder="E-mail Address" required />
                                        <div className="valid-feedback">Email field is valid!</div>
                                        <div className="invalid-feedback">Email field cannot be blank!</div>
                                    </div>

                                    <div className="row">
                                    <div className="col-md-6">
                                        <input className="form-control" type="password" name="password" placeholder="Password" required />
                                        <div className="valid-feedback">Password field is valid!</div>
                                        <div className="invalid-feedback">Password field cannot be blank!</div>
                                    </div>

                                    <div className="col-md-6">
                                        <input className="form-control" type="password" name="con_password" placeholder="Confirm Password" required />
                                        <div className="valid-feedback">Password field is valid!</div>
                                        <div className="invalid-feedback">Password field cannot be blank!</div>
                                    </div>
                                    </div>

                                    <div className="form-button mt-3">
                                        <button id="submit" type="submit" className="btn btn-danger">Register</button>
                                    </div>

                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export const handleRegisterSubmit = async ({ request }) => {
    const data = await request.formData()
    console.log(data)
    const name = data.get('name')
    const email = data.get('email')
    const password = data.get('password')
    const con_password = data.get('con_password')

    if (con_password !== password) {
        return "Passwords Do Not Match"
    }
    const registration_data = { name, email, password }
    try {
        const response = await axios.post('/user/signup', registration_data)
        const user = response.data
        return {message: true, data: user}
    } catch (error) {
        return {message: false, data: error.message}
    }
}

export default SignUp;