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
       props.showalert("copy to clipboard","success");
   }
  
   const handleonchange = (event) =>{
      // console.log("on change");
       settext(event.target.value);
   }
    return (
        <>
  <div className="container" style={{color:props.mode==='dark'?'white':'#222d56'}}>
    <h1>{props.heading}</h1>
     <div className="mb-3">
  
    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#222d56'}} id="mybox" rows="8"></textarea>
   </div>
   <button className="btn btn-primary mx-1" onClick={handleonclick}>Convert to UpperCase</button>
   <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to LowerCase</button>
   <button className="btn btn-primary mx-1" onClick={handlecapitalfirstclick}>Convert to captilized</button>
   <button className="btn btn-primary mx-1" onClick={handleclear}>Clear</button>
   <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy your text</button>
  
  

  


  </div>

<div className="container my-3"  style={{color:props.mode==='dark'?'white':'#222d56'}}>
    <h2>You will text summary</h2>
    <p>{text.split(' ').length} words and {text.length} characteristics</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something into above textbox to preview it here"}</p>

</div>
        </>
        
    )
}
