import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {INCREMENT, DECREMENT, ADD, SUB, CLS, add, sub} from './actions';
import {store} from './store';
//import App from './container';
import ReactComponent from 'react';
/********************************************************************/
let make = store.dispatch;

make(add(5,5));


make({ type: 'CLS' });

make({ type: 'INCREMENT' });

make({ type: 'INCREMENT' });

make({ type: 'DECREMENT' });

//alert("Привет");

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
class App extends ReactComponent {
    render() {
        return <div>Привет из App</div>
    }
};

render(<App/>,document.getElementById('root'));
