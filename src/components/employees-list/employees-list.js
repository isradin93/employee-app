import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data }) => {
    console.log(data);
    const elements = data.map(item => {
        console.log(item);
        return (
            <EmployeesListItem {...item} />
            // <EmployeesListItem name={item.name} salary={item.salary} />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;