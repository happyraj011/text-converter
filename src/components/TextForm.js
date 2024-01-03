import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("uppercase is clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase","success");
    }
    const handleLowClick =()=>{
      console.log("lowercase is clicked"+ text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted To Lowercase","success");
  }
  const handleClearClick =()=>{
    console.log("Clear text"+ text);
    let newText=" "
    setText(newText);
    props.showAlert("Clear All The Text","success");
}
    const handleOnChange =(event)=>{
        console.log("onchange");
        setText(event.target.value);
      
    }
    const handleExtraSpaces = () => {
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("all extra spaces was revomed","success");
    }
    const handlecopy = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Copy to Clipboard","success");

    }
    const [text,setText]=useState('');
    
  return (
   
      <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 className='mb-8'>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="15"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary nx-2 my-1" onClick={handleUpClick}>Convert into uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert into lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Delete extra spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecopy}>Copy text</button>
      </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 >Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    
    </>
  );
}
