import React,{ useState } from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
       // console.log("Uppercase clicked on " +text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick=()=>{
        // console.log("Uppercase clicked on " +text);
         let newText=text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to Lowercase","success");
     }
    const handleonChange=(event)=>{
       // console.log("Handle on change");
        setText(event.target.value);
    }
    const handleClearClick=(event)=>{
        let newText='';
         setText(newText);
         props.showAlert("Text Cleared","success");
     }

     const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard","success");

     }
     const handleExtraSpaces = () => {
      //  console.log('Remove Space');
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Space ","success");

     }
    const [text,setText]=useState('');
    
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
     
  <div className="mb-3">
  
    <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
  
  </div>
 
  <button  onClick={handleUpClick} className="btn btn-primary mx-2">Convert to Uppercase</button>
  <button  onClick={handleLoClick} className="btn btn-primary mx-2">Convert to Lowercase</button>
  <button  onClick={handleClearClick} className="btn btn-primary mx-2">Clear</button>
  <button  onClick={handleCopy} className="btn btn-primary mx-2">Copy</button>
  <button  onClick={handleExtraSpaces} className="btn btn-primary my-2">Remove ExtraSpace</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and  {text.length} characters</p>
        <p>{0.008 *text.split(" ").length }Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
