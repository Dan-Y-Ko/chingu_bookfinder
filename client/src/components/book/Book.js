import React, { Component } from "react";

export class Book extends Component {
    render() {
        return (
            <div className="card col-md-5 container__card">
                <div className="row">
                    <div className="col-md-4">
                        {this.props.book.volumeInfo.imageLinks ? (
                            <img
                                src={
                                    this.props.book.volumeInfo.imageLinks
                                        .thumbnail
                                }
                                className="card-img"
                                alt="..."
                            />
                        ) : (
                            " "
                        )}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title card__title">
                                {this.props.book.volumeInfo.title}
                            </h5>
                            <p className="card-text card__author">
                                By: {this.props.book.volumeInfo.authors}
                            </p>
                            <p className="card-text card__publisher">
                                Published By:{" "}
                                {this.props.book.volumeInfo.publisher}
                            </p>

                            <a
                                href={this.props.book.volumeInfo.infoLink}
                                className="btn btn-success"
                            >
                                See this Book
                            </a>
                            <button
                                onClick={() => console.log(this.props.book)}
                            >
                                Bookmark
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;
