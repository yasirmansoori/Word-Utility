import React, { useState } from 'react'
import Case from '../images/case.png'
import Dustbin from '../images/dustbin.png'
export default function TextForm(props) {
    const [text, setText] = useState('Start typing, or copy and paste your document here...');
    const [undotext, setUndoText] = useState('Start typing, or copy and paste your document here...');
    const handleupclick = () => {
        // console.log("Uppercase Was Clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        // props.showAlert("Converted to Uppercase", "success");
    }
    const handlelowclick = () => {
        // console.log("Uppercase Was Clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        // props.showAlert("Converted to lowercase", "success");

    }
    const handlesentence = () => {
        let newtext = text.toLowerCase();
        let firstLetter = newtext[0].toUpperCase();
        newtext = firstLetter + newtext.substring(1);
        setText(newtext);
    }
    const handletitle = () => {
        let newtext = text.split(" ");
        newtext = newtext.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        newtext = newtext.join(" ");
        setText(newtext);
    }
    const handleclear = () => {
        // console.log("Uppercase Was Clicked" + text);
        let newtext = ('');
        setText(newtext);
        // props.showAlert("Text Area Successfully Cleared", "success");
    }
    const handleundo = () => {
        let newtext = text;
        console.log(newtext);
    }
    const handleonchange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" >
                <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                    <div>
                        <label htmlFor="myBox" className="form-label"><p>{text.split(" ").filter((element) => { return element.length != 0 }).length} Words and {text.length} Characters</p> </label>
                        <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="5"> </textarea>
                    </div>
                    <div className="buttons">
                        <button className="case btn btn-primary " onClick={handleundo} ><img src={Dustbin} alt="" /></button>
                        <button className="case btn btn-primary " onClick={handleclear} ><img src={Dustbin} alt="" /></button>
                        <div className="btn-group">
                            <button type="button" className="case btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                <img src={Case} alt="" />
                            </button>
                            <ul className="dropdown-menu">
                                <li><a onClick={handlesentence} className="dropdown-item" href="#">Sentence Case</a></li>
                                <li><a onClick={handletitle} className="dropdown-item" href="#">Title Case</a></li>
                                <li><a onClick={handleupclick} className="dropdown-item" href="#">UPPERCASE</a></li>
                                <li><a onClick={handlelowclick} className="dropdown-item" href="#">lowercase</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}
