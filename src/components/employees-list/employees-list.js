import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDeleteClick }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;

        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDeleteClick={() => onDeleteClick(id)}
            />
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