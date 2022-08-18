import React, {useEffect, useState} from 'react'
const styteCss = {
    textAlign: 'center',
    width: '1000px',
    marginTop: '20px',
}
const body = [
    {
        id: '1',
        title: 'photos',
    },
    {
        id: '2',
        title: 'posts',
    },
    {
        id: '3',
        title: 'todos',
    }
]
function CallApi() {
  const  [title,setTitle] = useState("");
  const  [datas,setDatas] = useState([]);
  const  [title2,setTitle2] = useState("photos");
  const [showButton,setShowButton] = useState(false);
  useEffect(() => { 
    fetch(`https://jsonplaceholder.typicode.com/${title2}`)
    .then((response) => response.json())
    .then((data)=>setDatas(data));
   },[title2]);
   useEffect(() => {
    const evenScroll = window.addEventListener("scroll", () =>{
        setShowButton(window.scrollY > 200);
    }, [])
    
    return ()=>{
        window.removeEventListener("scroll",evenScroll);
    }
   })
//    let scrollToTop = () => {
//    const timeOut = null;
//     if(document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
//         window.scrollBy(0,-50);
//         timeOut = setTimeout(scrollToTop(),1000);
        
//     }else{
//         clearTimeout(timeOut);
//     }
//    }
  return (
    <>
    <div style={{Transition: '2s'}}>
        <div class="form-group">
          <label for="">Tên Title</label>
          <input type="text" name="" value={title} onChange={(x)=>setTitle(()=>{
            document.title = x.target.value;
            return x.target.value;
          })} id="" class="form-control" placeholder="" aria-describedby="helpId" />
        </div>
        <div className="div-button-container">
           {
            body.map((x)=>{
                return <button type="button" onClick={()=> setTitle2(x.title)} name="" id="" className={title2 === x.title ? "btn btn-danger btn-lg btn-block active" : "btn btn-primary btn-lg btn-block"} key={x.id}>{x.title}</button>
            })
           }
        </div>
        <div style={styteCss}>
            <ul>
                {datas.map((item, index) => {
                    return  <li style={{textAlign: 'left'}} key={index}>{item.title}</li>
                }) }
                <li></li>
            </ul>
        </div>
        {showButton && <p name="" id="" class="btn btn-primary"countdown role="button" style={{ position: 'fixed', bottom:'20px', right:'20px' }}> bấm vào đây</p>}
    </div>
    </>
  )
}

export default CallApi