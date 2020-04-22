import React from "react"
import * as actions from '../../store/actions/auth'
import { connect } from 'react-redux'

class Register extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            username: "",
            email: "",
            password: ""
        }
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        
        this.setState({
          [name]: target.value
        });
      }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAuth(this.state.username, this.state.email, this.state.password)
        console.log(this.state.username)
        
        if (!this.props.error) {
            window.open("/login/","_self")
        } else console.log(this.props.error)
            
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
                    <div className="base-container" ref={this.props.containerRef}>
                        <div className="header">Campfire Worlds</div>
                        <div className="content">
                            <div className="form">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name="username"
                                            onChange={this.handleChange}
                                            placeholder="username"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email"
                                            onChange={this.handleChange}
                                            placeholder="email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="text" name="password" 
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                            placeholder="password"/>
                                </div>
                            </div>

                        </div>
                        <div className="footer">
                            <button type="submit" className="sub-btn">
                                Register
                            </button>
                        </div>
                    </div>
            </form>
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password) => dispatch(actions.authRegister(username, email, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);