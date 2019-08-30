import React, { Component } from 'react';

class AddAvenger extends Component {
    state = {
        name: null,
        codename: null,
        age: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addAvenger(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={ this.handleChange } />
                    <label htmlFor="codename">Codename:</label>
                    <input type="text" id="codename" onChange={ this.handleChange } />
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={ this.handleChange } />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
};

export default AddAvenger;
