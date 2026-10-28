import { useState } from "react";
import './form.css';
function Notes(){
    const [info , setInfo] = useState([]);
    const [topic, settopic] = useState("");
const [detail, setDetail] = useState("");
 
    function Addlistner(e){
        e.preventDefault();

         const newCopy = [...info];
        newCopy.push({topic , detail});
        setInfo(newCopy); 
       

        
        settopic("");
        setDetail("");
        
    }
    function DeleteNote(idx){
        const copyInfo = [...info];
       copyInfo.splice(idx,1);

       setInfo(copyInfo);
    }
    return(
        <div>
           
            <h1>Make Notes </h1>
            <form onSubmit={(e)=>{
                Addlistner(e);
            }}>
                <label htmlFor='topic'>Topic  </label>
                <input type='text' placeholder='Enter your topic' id="topic" name="topic" value={topic} onChange={(e)=>{
                settopic(e.target.value);
                }}></input>

                <label htmlFor="detail"> Description  </label>
                <input type="text" placeholder="Topic Description" id="detail" name="Detail" value={detail} onChange={(e)=>{
                setDetail(e.target.value);
                }}></input>

                <button > Submit  </button>
            </form>
           
            <div className="line"></div>


                   <h3> Your Notes Section</h3>
            <div className="notes">

                 {info.map(function(el , idx){
                    return  <div  key={idx} className="card" >
                        
                        <h3 className="heading">{el.topic}</h3>
                        <p className="detail">{el.detail}</p>
                        <button onClick={()=>{
                            DeleteNote(idx);
                        }} className="dltbtn">Delete</button>
                    </div> ; 
                   })}      
            </div>
        </div>
    )
}
export default Notes ; 