import React, { Component } from "react";
import Book from "../book/Book";

export class Books extends Component {
    render() {
        return (
            <div className="row">
                {this.props.books.map(book => {
                    return book.map(singleBook => {
                        return <Book book={singleBook} />;
                    });
                })}
            </div>
        );
    }
}

export default Books;
