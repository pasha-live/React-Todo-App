import React, { Component } from "react";

export default class HeaderApp extends Component {
    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.label)
        this.setState({
            label: ''
        })
    }

    render() {

        return (
            <form className='header' onSubmit={this.onSubmit}>
                <h1>Todos</h1>
                <input
                    type='text'
                    className="new-todo"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done?"
                    value={this.state.label}>
                </input>
            </form>)
    }
}