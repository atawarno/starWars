import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [color, setColor] = useState('');
    const [text, setText] = useState('');
    const [fontSize, setFontSize] = useState('');
    const [display, setDisplay] = useState('');

    const getResult = () => {
        setDisplay(text)
    }

    console.log(color, fontSize);

    return (
        <div>
            <input type="color"
                   value={color}
                   onChange={(event => setColor(event.target.value))}/>
            <input type="text"
                   placeholder='input some text...'
                   value={text}
                   onChange={(e) => setText(e.target.value)}/>
            <input type="number"
                   placeholder='fontSize numeric'
                   value={fontSize}
                   onChange={(e) => setFontSize(e.target.value)}/>
            <button onClick={getResult}>gogogo</button>
            <div style={{
                color,
                fontSize: `${fontSize}px`
            }}>{display}</div>
        </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);