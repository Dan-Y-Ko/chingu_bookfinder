import React, { Component } from "react";

import "./App.css";
import Search from "./components/search/Search";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Search />
            </div>
        );
    }
}

export default App;
