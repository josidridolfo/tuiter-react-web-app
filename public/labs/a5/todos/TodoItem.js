const TodoItem = (todo) => {
    // Used for iterating over a simple list
    // return(`
    //    <li>${todo}</li>
    // `);

    // Used for iterating over a list of objects with properties

    //return (`
    //    <li>
    //    ${todo.title}
    //    (${todo.status})
    //    </li>`);

    // Used for iterating of a list of objects with properties,
    // with checkboxes.
    return(`
    <li>
        <input type="checkbox" 
            ${todo.done ? 'checked' : ''}/>
            ${todo.title}
            (${todo.status})
            </li>`
    );
}
export default TodoItem;