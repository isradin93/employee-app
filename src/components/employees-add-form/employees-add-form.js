import { Component } from 'react/cjs/react.production.min';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        };
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    // handleNameChange = e => {
    //     this.setState({
    //         name: e.target.value
    //     });
    // };

    // handleSalaryChange = e => {
    //     this.setState({
    //         salary: e.target.value
    //     });
    // };

    render() {

        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What is his name?"
                        name="name"
                        value={name}
                        onChange={this.handleInputChange}
                    />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $?"
                        name="salary"
                        value={salary}
                        onChange={this.handleInputChange}
                    />

                    <button type="submit"
                        className="btn btn-outline-light">Add</button>
                </form>
            </div>
        );
    }
};

export default EmployeesAddForm;