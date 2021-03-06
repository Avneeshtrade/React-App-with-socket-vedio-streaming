import React,{useEffect,useState} from 'react';
import style from './style/QRCode.module.css';

const GenerateQRCode = () =>{
    const [temp, setTemp] = useState("");
    const [word, setWord] = useState("");
    const [size, setSize] = useState(400);
    const [bgColor, setBgColor] = useState("ffffff");
    const [qrCode, setQrCode] = useState("");
    
    // Changing the URL only when the user
    // changes the input
    useEffect(() => {
      setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
    }, [word, size, bgColor]);
    
    // Updating the input word when user
    // click on the generate button
    function handleClick() {
      setWord(temp);
    }
    
    return (
      <div className={style.App}>
        <h1>QR Code Generator</h1>
        <div className={style.inputBox}>
          <div className="gen">
            <input type="text" onChange={
              (e) => {setTemp(e.target.value)}}
              placeholder="Enter text to encode" />
            <button className={style.button} 
              onClick={handleClick}>
              Generate
            </button>
          </div>
          <div className={style.extra}>
            <h5>Background Color:</h5>
            <input type="color" onChange={(e) => 
            { setBgColor(e.target.value.substring(1)) }} />
            <h5>Dimension:</h5>
            <input type="range" min="200" max="600"
             value={size} onChange={(e) => 
             {setSize(e.target.value)}} />
          </div>
        </div>
        <div className={style.outputBox}>
          <img src={qrCode} alt="" />
          <a href={qrCode} download="QRCode">
            <button type="button">Download</button>
          </a>
        </div>
      </div>
    );
  
}
export default GenerateQRCode;