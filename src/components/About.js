import React,{useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle]=useState({
        color:'black',
        backgroundColor: 'white'
        }
        )
      const [btntext, setBtnText]=useState("Enable Dark Mode")
      const toggleStyle=()=>
      {
        if(myStyle.color==='black')
        {
        setMyStyle({
        color:'white',
          backgroundColor:'black',
          border: '1px solid white'
        })
          setBtnText("enable light mode")
        }
          else
        
        {setMyStyle(
          {
          color:'black',
          backgroundColor:'white',
      
          }
        )
          setBtnText("enable dark mode");
          }
        }
  return (
    <div className="container"style={myStyle}>
    <h2 className="my-2">About Us</h2>
  <div className="accordion " id="accordionExample">
    <div className="accordnpion-item">
      <h2 className="accordion-header">
        <button className="accordion-button"style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>ANALYZE YOUR TEXT</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStyle}>
          TextUtils gives you a way to analyze your text quickly and efficiently. Be it <strong>words count</strong> or words manipulation like <strong>UPPER to lower</strong> or <strong>lower to UPPER CASE</strong>, it's usefull for any of these matching purpose. You can even see <strong>how much average time it would take to read</strong> the input texts.
          <strong>Preview is also provided. </strong>
        </div></div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>FREE TO USE</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStyle}>
          TextUtil is free character counting tool that provide instant character count and word count statics for a given texts. It reports the count of the words, characters.
          this is suitable for writng in a given word limit.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>BROWSER COMPATIBILITY</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStyle}>
          This word counter software works in any web browser such as Chrome ,Firefox ,Internet Explorer ,Safari,Opera mini. It suits to count the characters in facebook, blog, books,execl documents, pdf document etc.</div>
           
      </div>
    </div>
  </div>
<div className="container my-3">
<button onClick ={toggleStyle} type="button" className="btn btn-primary">{btntext}</button></div>
   
</div>
  )
}
