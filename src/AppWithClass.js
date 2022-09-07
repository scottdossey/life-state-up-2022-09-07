import React from 'react';

class IncrementButton extends React.Component {
    render() {
        return (<button onClick={this.props.handleIncrementButton}>
                    Increase Count
                </button>);
    }
}

class ViewCount extends React.Component {
    render() {
        return (
            <div>{this.props.count}</div>        
        );
    }
}

class AppWithClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleIncrementButton() {
        //setState----doesn't update the state immediately...
        //Every call to setState that happens over a period 
        //of time can change different state properties.
        console.log("HandleIncrementButton")
        //It is actually considered incorrect in REACT
        //to use a setState to set a value based upon
        //the previous version of value in this way.
        this.setState( (state, props) => {
             return { count: state.count+1 }
        });
        this.setState( (state, props) => {
            return { count: state.count+1 }
        });           
        
    }

    render() {
        return (
            <div>
                <ViewCount count={this.state.count}/>
                <IncrementButton handleIncrementButton={this.handleIncrementButton.bind(this)}/>
            </div>
        );
    }
}

export default AppWithClass;