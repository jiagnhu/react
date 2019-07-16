import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>江湖</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.tableData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}> 删除 </button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}

class Table extends Component {
    render() {
        const { tableData, removeCharacter } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody tableData={tableData} removeCharacter={removeCharacter}/>
            </table>
        )
    }
}

export default Table;