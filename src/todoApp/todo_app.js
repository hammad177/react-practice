//   constructor() {
//     super();
//     this.state = {
//       todos: [
//         { title: "hammad", edit: false },
//         { title: "saad", edit: false },
//       ],
//       value: "",
//     };
//   }

//   add_todo = () => {
//     let obj = { title: this.state.value };
//     this.setState({
//       todos: [...this.state.todos, obj],
//       value: "",
//     });
//   };

//   delete_todo = (index) => {
//     this.state.todos.splice(index, 1);
//     this.setState({
//       todos: this.state.todos,
//     });
//   };

//   edit_todo = (index) => {
//     this.state.todos[index].edit = true;
//     this.setState({
//       todos: this.state.todos,
//     });
//   };

//   handleChange = (e, index) => {
//     this.state.todos[index].title = e.target.value;
//     this.setState({
//       todos: this.state.todos,
//     });
//   };

//   update = (index) => {
//     this.state.todos[index].edit = false;
//     this.setState({
//       todos: this.state.todos,
//     });
//   };

//   render() {
//     let { value } = this.state;
//     return (
//       <div>
//         <input
//           value={value}
//           onChange={(e) => this.setState({ value: e.target.value })}
//           type="text"
//           placeholder="Enter values"
//         />
//         <button onClick={this.add_todo}>Add Item</button>
//         <ul>
//           {this.state.todos.map((val, ind) => {
//             return (
//               <li key={ind}>
//                 {val.edit ? (
//                   <input
//                     value={val.title}
//                     type="text"
//                     onChange={(e) => this.handleChange(e, ind)}
//                   />
//                 ) : (
//                   val.title
//                 )}
//                 {val.edit ? (
//                   <button onClick={() => this.update(ind)}>Update</button>
//                 ) : (
//                   <button onClick={() => this.edit_todo(ind)}>Edit</button>
//                 )}

//                 <button onClick={() => this.delete_todo(ind)}>Delete</button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
