import React, {useState} from 'react'
const RamDomGitCode = ["Iphone 13", "Iphone 14", "Iphone 15","có cái nịt", "Iphone 16", "Iphone 17"];

function GitCode() {

const [codes, setCode] = useState(-1);
const GetCodes = () => {
   let indexRamDomGitCode = Math.floor(Math.random() * RamDomGitCode.length);
   return setCode(x=> x = indexRamDomGitCode);
}
  return (

    <div>
        <h1>{RamDomGitCode[codes] || "phần thưởng đạt được"}</h1>
        <button onClick={()=>GetCodes()}>nhận thưởng</button>
    </div>
  )
}

export default GitCode