import React, { Component } from "react";
import { connect } from "react-redux";

import "./Search.css";
import Books from "../books/Books";
import * as actions from "../../actions";

export class Search extends Component {
    state = {
        term: ""
    };

    onInputChange = e => {
        this.setState({ term: e.target.value });
    };

    searchSubmit = e => {
        e.preventDefault();

        if (this.state.term.length === 0) {
            return "Please enter a search";
        }

        this.props.fetchBooks(this.state.term);
    };

    render() {
        return (
            <>
                <div className="jumbotron">
                    <div className="title">Book Finder</div>
                    <form className="container__search">
                        <input
                            className="input__search"
                            type="search"
                            name="search"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                        <button
                            type="submit"
                            className="button__search"
                            onClick={this.searchSubmit}
                        >
                            Search
                        </button>
                    </form>
                </div>
                <Books books={this.props.books} />;
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

export default connect(
    mapStateToProps,
    actions
)(Search);
