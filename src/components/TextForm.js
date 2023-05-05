import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text here');
    const handleUpClick = () =>{
        let ff = text.toUpperCase()
        setText(ff)
    }

    const handleOnChange = (event) =>{
        console.log('onchane event hit')
        setText(event.target.value)
    }

    const handleClearClick = ()=>{
        setText('')
    }

    const handleCopyClick = ()=>{
        var copyText = document.getElementById("box");
        copyText.select();
        // copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
    }




    return (
        <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="box" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="box" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-3" onClick={handleCopyClick}>Copy</button>
        </div>
        <div className="container my-3">
            <h1>Your test summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
        </div>

        <h2>Preview</h2>
        <div>{text}</div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}
