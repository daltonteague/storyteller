import React from "react"
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/auth'
import { connect } from 'react-redux'

class Login extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            username: "",
            password: ""
        }
    }

    

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
    
        this.setState({
          [name]: target.value
        });
      }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAuth(this.state.username, this.state.password)
        console.log(this.state.username)
        // if (!this.props.error) {
        //     window.open("/explore/","_self")
        // } else console.log(this.props.error)
            
    }

    render() {
        let errorMessage = null
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="base-container" ref={this.props.containerRef}>
                    <div className="header">Campfire Worlds</div>
                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    placeholder="Enter Username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="text" name="password" 
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    placeholder="Enter Password"/>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="submit" className="sub-btn">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        );
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
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);