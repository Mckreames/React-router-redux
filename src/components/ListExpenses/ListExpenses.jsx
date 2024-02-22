import React from 'react';

export default function ListExpenses(props) {
    console.log(props);
    console.log(props.match?.params?.id);
    const expenseType = props.match.params.id ?? 'all'

    return (
        <div>
            List Expenses
        </div>
    )
}