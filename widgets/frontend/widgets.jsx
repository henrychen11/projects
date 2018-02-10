import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';

class Root extends React.Component {
    render(){
        return (
            <div className="background">
                <Clock />    
                <Tabs />
            </div>
        )
        
    }
}



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('main');
    ReactDOM.render(<Root />, root);
})