import React from "react";
import {Route} from "react-router-dom"
import TodoList from "./pages/TodoList";
import Detail from "./pages/Detail";

function App() {
    return (
        <div>
            <Route path="/" exact>
                <TodoList />
            </Route>
            <Route path="/detail">
                <Detail />
            </Route>

        </div>
    )
}

export default App;