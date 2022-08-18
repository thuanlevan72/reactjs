import React, { Component } from 'react';

class Component3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Gender: "",
        };
    }
    SetGenders = (event) =>{
        console.log(event.target.className);
        this.setState({Gender: event.target.value});
    }
    render() {
        return (
            <div style={{'with': '80%', height: 'auto',textAlign: 'center', marginTop: '100px','marginLeft': '10%','marginRight': '10%'}}>
                <div className="topMain">
                    <form action="">
                        <div className="form-check">
                            <label className="form-check-label">
                            <input type="radio" class="form-check-input"  className="Gender" onChange={(event) => this.setState({Gender: event.target.value})}  value="male" checked={this.state.Gender === 'male'} />
                            Nam
                          </label>
                          <label className="form-check-label">
                            <input type="radio" class="form-check-input" className="Gender" id="" value="female" onChange={(event) => this.SetGenders(event)} checked={this.state.Gender === 'female'}/>
                            Nữ
                          </label>
                        </div>
                    </form>
                </div>
                <div className="ResMain" style={{with: '80%', height: '100px', marginTop: '10px'}}>
                    <h3>You are a {this.state.Gender}</h3>
                </div>
            </div>
        );
    }
}

export default Component3;