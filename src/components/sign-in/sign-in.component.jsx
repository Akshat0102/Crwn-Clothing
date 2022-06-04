import React from "react";
import './sign-in.styles.scss';
import { signInWithGoogle } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import ButtonInput from "../button-input/button-input.component";

class SignIn extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span className="subtitle">Sign In with your Email and Password</span>
                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput name="email"
                        type="email"
                        value={this.state.email}
                        label="Email"
                        handleChange={this.handleChange} required />
                    <FormInput name="password"
                        type="password"
                        label="Password"
                        value={this.state.password}
                        handleChange={this.handleChange} required />
                    <div className="buttons">
                        <ButtonInput type="submit">Sign In</ButtonInput>
                        <ButtonInput onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</ButtonInput>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;