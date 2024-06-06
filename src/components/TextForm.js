import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
  const handleUpClick=()=>{
    //console.log("uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLoClick=()=>{
    //console.log("uppercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
  }
    const countWords=(text)=>{
     if(text){
    const words= text.trim().split(/\s+/);
    return words.length; }
    else{ return 0;}
    }
  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value)
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  
  const handleExtraSpace=()=>{
    let newText="";
    if(text){
       newText = text.trim().replace(/\s+/g," ");}
    else{
      newText= "";}

    setText(newText);
    //let newText=text.replace(/\s/g, "");
    //setText(newText);
  //let newText=text.split(/[  ]+/);
    //setText(newText.join(" "));
    
  }
  const handleClearClick=()=>{
    let newText='';
    setText(newText)
  }
  const [text, setText] = useState("Enter the text here ");
  return (
    <>
<div className="container"  style={{color : props.mode==='dark'?'black':'white'}}>
  <h1>{props.heading}</h1>
  <div className="mb-3" >
  <textarea className="form-control" value={text} onChange={handleOnChange } style={{backgroundColor : props.mode==='dark'?'white':'#AFF6FF'}} id="myBox" rows="8" >      
  </textarea>
  </div>
    <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to uppercase</button>
    <button className="btn btn-primary mx-2  my-1" onClick={handleLoClick} >Convert to lowerCase</button>
    <button className="btn btn-secondary mx-2  my-1 " onClick={handleCopy} >Copy Text</button>
    <button className="btn btn-warning mx-2  my-1" onClick={handleExtraSpace} >Remove extra space</button>
    <button className="btn btn-success mx-2  my-1" onClick={handleClearClick} >Clear</button>
</div>
      
  <div className="container my-3" style={{color : props.mode==='dark'?'black':'white'}}>
    <h2>Your Text Summary</h2>
    <p> {countWords(text)} words and {text.length} characters</p>
    <p> {0.008*countWords(text)} minutes read </p>
    <h2>preview</h2>  
    <p> { text}</p>
  </div>

    
  </>
  )
}

//text.split(" ").length
//text.split(" ").length
//#AFF6FF