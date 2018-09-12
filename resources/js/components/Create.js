import React, {Component} from 'react'

export default class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: ''
        }
    }

    handleChangeTitle(e) {
        this.setState(
            {title: e.target.value}
        )
    }

    handleChangeDescription(e) {
        this.setState(
            {description: e.target.value}
        )
    }

    handleSubmit(e) {
        e.preventDefault()
        const todo = {
            title: this.state.title,
            description: this.state.description
        }

        let url = 'http://react.local/posts'
        axios.post(url, todo)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Title:</label>
                                <input type="text" className="form-control"
                                       onChange={this.handleChangeTitle.bind(this)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Description:</label>
                                <input type="text" className="form-control col-md-6"
                                       onChange={this.handleChangeDescription.bind(this)}/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <button className="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}