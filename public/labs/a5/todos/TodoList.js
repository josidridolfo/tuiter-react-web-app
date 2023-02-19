import TodoItem from "./TodoItem.js";
import todos from "./todos.js";

const TodoList = () => {
    // Iterating without a loop (dumb)
//    return(`
//       <ul>
//           ${TodoItem("Buy milk")}
//           ${TodoItem("Pickup the kids")}
//           ${TodoItem("Walk the dog")}
//       </ul>
//   `);
    // Using Map to iterate over an array
    return (`
        <ul>
        ${todos.map(todo =>
        {return(TodoItem(todo));
        }).join("")}
        </ul>`)
}
export default TodoList;