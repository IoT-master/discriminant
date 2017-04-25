import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayOut extends Component {

    discriminant(){
        return (Math.pow(this.props.b, 2)-4*this.props.a*this.props.c)
    }

    signOfDiscriminant(){
        if (this.discriminant() > 0) {
            return `You have two distinct roots`}
        else if (this.discriminant() < 0){
            return `You have imaginary roots`
        }
        else {
            return `You have two identical roots`
        }

    }

    render() {
        return (
            <div>
                <div>{this.props.a}</div>
                <div>{this.props.b}</div>
                <div>{this.props.c}</div>
                <div>{`The discriminate is:
                    ${this.discriminant()}`}
                </div>
                <div>{this.signOfDiscriminant()}</div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        a: state.variableSet.a,
        b: state.variableSet.b,
        c: state.variableSet.c
    }
}

export default connect(mapStateToProps)(DisplayOut);