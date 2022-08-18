import React, { Component } from 'react';

class Component1 extends Component {
    render() {
        return (
                 <div>
      <form action="" method="get">
        <div class="form-group">
          <label for="">First Name</label>
          <input type="text" name="First_Name" id="" class="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" class="text-muted">thông báo lỗi tại đây</small>
        </div>
        <div class="form-group">
          <label for="">Last Name</label>
          <input type="text" name="Last_Name" id="" class="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" class="text-muted">thông báo lỗi tại đây</small>
        </div>
        <div class="form-group">
          <label for="">Info</label>
          <textarea class="form-control" name="Info" id="" rows="3"></textarea>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="Genders" id="" value="1" checked/>
            Nam
          </label>
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="Genders" id="" value="0"/>
            Nữ
          </label>
        </div>
        <button type="submit" class="btn btn-primary"></button>
      </form>
    </div>

        );
    }
}

export default Component1;