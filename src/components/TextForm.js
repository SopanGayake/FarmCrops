import React, { useState } from 'react'

export default function TextForm(props) {
    const handeleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        // setText('New Upper String')
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handeleLoClick = () => {
        console.log("Lowercase was clicked " + text);
        // setText('New Upper String')
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handeleOnchange = (event) => {
        console.log("On changed");
        setText(event.target.value) // Fixed typo: targer -> target
    }
    const[text, setText] = useState('Enter text here')
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.Textarea}</label>
                <textarea className="form-control" value={text} onChange={handeleOnchange} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handeleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handeleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
  )
}
