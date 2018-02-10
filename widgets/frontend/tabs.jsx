import React from 'react';

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0
        }
    }

    render(){
        let display;
        if (this.state.index === 0){
            display = <div>This is the first tab</div>
        } else if (this.state.index === 1){
            display = <div>This is the second tab</div>
        } else {
            display = <div>This is the third tab</div>
        }
        return (
            <div className="tab-main">
                <header className="tab-header">
                    <ul>
                        <li onClick={() => this.setState({ index: 0 })}><h1>Tab 1</h1></li>
                        <li onClick={() => this.setState({ index: 1 })}><h1>Tab 2</h1></li>
                        <li onClick={() => this.setState({ index: 2 })}><h1>Tab 3</h1></li>
                    </ul>
                </header>

                <article className="tab-content">
                    {display}
                </article>

            </div>
        )
    }
}

export default Tabs;