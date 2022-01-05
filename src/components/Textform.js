import React, {useState} from 'react'

export default function Textform(props) {
    const [text, settext] = useState(" ");
    
   const handleonclick= () =>{
      // console.log("Uppercase was clicked");
       let newtext = text.toUpperCase();
     settext(newtext);
     props.showalert("Converted to UpperCase","success");
   }
   const handleupclick =() =>{
       let newtext =text.toLowerCase();
       settext(newtext);
       props.showalert("Converted to LowerCase","success");
   }
   const handlecapitalfirstclick =() =>{

   let newtext = text[0].toUpperCase() + text.slice(1);
   settext(newtext);
    
   }
   const handleclear =()=>{
       let newtext =' ';
       settext(newtext);
       props.showalert("Clear all text","success");
   }
   const handlecopy =()=>{
       var text=document.getElementById('mybox');
       text.select();
       navigator.clipboard.writeText(text.value);
       document.getSelection().removeAllRanges();
       props.showalert("copy to clipboard","success");
   }
  
   const handleonchange = (event) =>{
      // console.log("on change");
       settext(event.target.value);
   }
    return (
        <>
  <div className="container" style={{color:props.mode==='dark'?'white':'#222d56'}}>
    <h1 className='mb-4'>{props.heading}</h1>
     <div className="mb-3">
  
    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'rgb(96 62 126)':'white', color:props.mode==='dark'?'white':'#222d56'}} id="mybox" rows="8"></textarea>
   </div>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleonclick}>Convert to UpperCase</button>
   <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>Convert to LowerCase</button>
   <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecapitalfirstclick}>Convert to captilized</button>
   <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclear}>Clear</button>
   <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy your text</button>
  
  

  


  </div>

<div className="container my-3"  style={{color:props.mode==='dark'?'white':'#222d56'}}>
    <h2>You will text summary</h2>
    <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characteristics</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing Preview"}</p>

</div>
        </>
        
    )
}
