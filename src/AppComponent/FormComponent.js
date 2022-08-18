import React, { useState } from "react";


const SelectCheck = [
    
      {
        id:1,
        status: "đã có ngưởi yêu",
      },
      {
        id:2,
        status: "Chưa có ngưởi yêu",
      },
      {
        id:3,
        status: "sắp có ngưởi yêu",
      },
      {
        id:4,
        status: "sắp có ngưởi yêu",
      }

    
]

function FormComponent() {
  const  [indexs,setIndexs] = useState([]);

  const GetNguoiYeu= (val) =>{
const checkIndex = indexs.includes(val);
   if(checkIndex){
    setIndexs(x=>{
        return  x.filter(item=>item !== val);
    });
   }else{
    setIndexs(x=>[...x,val]);
   }
  }
console.log(indexs);
  return (
    <div>
        <form action="">
            {SelectCheck.map((x)=><div className="form-check" key={x.id}>
                <label className="form-check-label">
                <input type="checkbox" className="form-check-input" onClick={()=>GetNguoiYeu(x.id)} name="" id="" value={indexs.includes(SelectCheck) === true}  />
                {x.status}
              </label>
            </div>)}
        </form>
    </div>
  )
}
export default FormComponent