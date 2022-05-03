import React from 'react'; //imr > so that we can use bable
import ReactDOM from 'react-dom';  //imrd
import './indexx.css'

const myname = "Sanohit Jessica"
const jage=21;
const sage=20;

ReactDOM.render(<React.Fragment> 
    <h1>This is headings</h1>
    <p>This is para</p>
    <p className='para'>My name is {myname}</p>
    <p style = {{color: 'red', backgroundColor: 'pink', width: '200px'}}>{`Sanohit age is ${sage} and Jessica age is ${jage}`}</p>
    </React.Fragment>, document.getElementById('root'));  // shortcut for react fragement <> </>
