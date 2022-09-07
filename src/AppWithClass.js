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
        this.setState({count: this.state.count+1});
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