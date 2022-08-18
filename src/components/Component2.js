import React, { Component } from 'react';

class Component2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName : "đâsdas",

        };
    }
    GetFirstName = (event) => {
     this.setState({firstName: event.target.value});
    }
    render() {
        return (
            <div style={{'display': 'flex', 'flex-direction': 'row', 'justifyContent': 'center','alignItems': 'center','height':'auto','marginTop':'100px'}}>
                <form action="" method="get">
                    <div class="form-group">
                      <label for="firstName">firstName </label>
                      <input type={"text"} value={this.state.firstName} name="firstName" id="firstName" class="form-control" placeholder="" onChange={(event) =>{this.GetFirstName(event)}} aria-describedby="helpId" />
                    </div>
                </form>
                <h1 id="helpId" class="text-muted">{this.state.firstName}</h1>
            </div>
        );
    }
}

export default Component2;