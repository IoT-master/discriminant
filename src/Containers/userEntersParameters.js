import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updatingAll} from '../Actions/index';
import {bindActionCreators} from 'redux';

class UserEntersQuadParams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            variableA: '',
            variableB: '',
            variableC: ''
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChangeA = this.onInputChangeA.bind(this);
        this.onInputChangeB = this.onInputChangeB.bind(this);
        this.onInputChangeC = this.onInputChangeC.bind(this);
    }

    onInputChangeA(event) {
        this.setState({variableA: event.target.value});
    }
    onInputChangeB(event) {
        this.setState({variableB: event.target.value});
    }
    onInputChangeC(event) {
        this.setState({variableC: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.changeAll(this.state.variableA, this.state.variableB, this.state.variableC);
        this.setState({
            variableA: '',
            variableB: '',
            variableC: '',
        });
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>Ax^2 + Bx + C = 0</div>
                <div>Enter A:
                    <input
                        onChange={this.onInputChangeA}
                        value={this.state.variableA}
                        type="number"
                    />
                </div>
                <div>Enter B:
                    <input
                        onChange={this.onInputChangeB}
                        value={this.state.variableB}
                        type="number"
                    />
                </div>
                <div>Enter C:
                    <input
                        onChange={this.onInputChangeC}
                        value={this.state.variableC}
                        type="number"
                    />
                </div>
                <button>Done!</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            changeAll: updatingAll
        },
        dispatch)
}



export default connect(null, mapDispatchToProps)(UserEntersQuadParams);