import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component"; // Data Consumer
import hello from "./reducers/hello" // Reducer to Calculate & Generate Data
import todos from "./reducers/todos-reducer"
// import {createStore} from "redux"; // Storing Data from Reducers
import {configureStore} from "@reduxjs/toolkit";
import Todos from "./reducers/todos-component"
import {Provider} from "react-redux"; // Data Delivery
// const store = createStore(hello); // Data Storage
const store = configureStore({reducer: {hello, todos}})

const ReduxExamples = () => {
    return(
        <Provider store={store}>
        <div>
            <h2>Redux Examples</h2>
            <Todos/>
            <HelloReduxExampleComponent/>
        </div>
        </Provider>
    );
};

export default ReduxExamples;