import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Table from './Table'
import Form from './form'


class App extends Component {
  state = {
    tableData: [
      // {name:'江湖1', job:'1'},
      // {name:'江湖2', job:'2'},
      // {name:'江湖3', job:'3'},
      // {name:'江湖4', job:'4'},
      // {name:'江湖5', job:'5'},
      // {name:'江湖6', job:'6'},
    ]
  }

  // 删除
  removeCharacter = index =>{
    const {tableData} = this.state
    this.setState({
      tableData:tableData.filter((row, i) => {
        return i !== index
      })
    })
  }

  // 更新
  handleSubmit = tableData => {
    console.log('触发')
    console.log(this.state.tableData)
    console.log(tableData)
    this.setState({tableData:[...this.state.tableData,tableData]})
  }
  render() {
    const { tableData } = this.state
    return (
      <div className="App">
        <Table tableData={tableData} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <Table />
//     </div>
//   );
// }

export default App;
