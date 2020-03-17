import React from "react"
import { Login } from "./login";
import { Register } from "./register";

export class Welcome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          isLoginActive: true,
        }
    }

    changeState() {
      const {isLoginActive} = this.state;
      
      this.setState(prevState => ({ isLoginActive: !prevState.isLoginActive }))
  }

    render() {
        const { isLoginActive } = this.state;

        return (
            <div className="login"> 
                <div className="container">
                    {isLoginActive && <Login containerRef={(ref) => this.current = ref}/> }
                    {!isLoginActive && <Register containerRef={(ref) => this.current = ref}/> }
                </div>
                <Buttons active = {isLoginActive} containerRef={ref => this.buttons = ref} onClick={this.changeState.bind(this)}/>
            </div>
        );
    }

}

const Buttons = props => {
  return (
    <div>

      <div className={props.active ? "switch left" : "switch left select"} 
        ref={props.containerRef} 
        onClick={!props.active ? props.onClick : undefined}>
          
        <div className="inner-container">
          <div className="text">Login</div>
        </div>
      </div>

      <div className={props.active ? "switch right select" : "switch right"}
        ref={props.containerRef} 
        onClick={props.active ? props.onClick : undefined}>

        <div className="inner-container">
          <div className="text">Register</div>
        </div>
      </div>

    </div>
  )
}




