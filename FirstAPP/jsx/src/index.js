//import React & React Dom
import React from 'react';
import ReactDOM from 'react-dom';


//Create React componant
const App = () => {
 const buttonText ={text:'click me'}
    return (
        <div>
            <label htmlFor="name" className="label">Enter your Name</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}
            </button>
        </div>
    );
}

//Take the react componmant and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);