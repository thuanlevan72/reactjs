import React, { Component } from 'react';

class Component4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: 0,
            gender: "",
            country: "",

        };

    }
    RenderHander = (event) => {
        const {name, value} = event.target;
        return (
            this.setState({[name]: value})
        )
    };
    render() {
        return (
            <div style={{'with': '60%', height: 'auto',textAlign: 'center', marginTop: '100px','marginLeft': '20%','marginRight': '20%'}}>
                 <form action="">
                    <div class="form-group">
                      <label for="">Name</label>
                      <input type="text" name="name" id="" onChange={(e)=>this.RenderHander(e)} class="form-control" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div class="form-group">
                      <label for="">Age</label>
                      <input type="number" name="age" id="" onChange={(e)=>this.RenderHander(e)} class="form-control" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-check">
                            <label className="form-check-label">
                            <input type="radio" class="form-check-input" onChange={(e)=>this.RenderHander(e)}  name="gender"  value="Male" checked={this.state.gender === "Male"}/>
                            Nam
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <label className="form-check-label">
                            <input type="radio" class="form-check-input" onChange={(e)=>this.RenderHander(e)} name="gender" id="" value="Female" checked={this.state.gender === "Female"}/>
                            Nữ
                          </label>
                    </div>
                    <div class="form-group">
                      <label for="">Địa chỉ</label>
                      <select class="form-control" name="country" id="" onChange={(e)=>this.RenderHander(e)}>
                        <option>---- vui lòng nhập vào địa chỉ ----</option>
                        <option value={"Hà nội"}>Hà nội</option>
                        <option value={"Thanh Hóa"}>Thanh Hóa</option>
                        <option value={"Hạ Long"}>Hạ Long</option>
                      </select>
                    </div>
                 </form>
                 <b4-title-container style={{'with': '60%', height: 'auto',textAlign: 'left', marginTop: '100px','marginLeft': '20%','marginRight': '20%'}}>
                    <div class="list-group">
                    <li class="list-group-item list-group-item-action warning">Họ và tên: {this.state.name}</li>
                        <li class="list-group-item list-group-item-action active">Age: {this.state.age}</li>
                        <li class="list-group-item list-group-item-action active">Giới Tính: {this.state.gender}</li>
                        <li class="list-group-item list-group-item-action active">Địa Chỉ: {this.state.country}</li>

                    </div>
                 </b4-title-container>
            </div>
        );
    }
}

export default Component4;