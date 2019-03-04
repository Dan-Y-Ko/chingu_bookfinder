import axios from "axios";

import { FETCH_BOOKS } from "./types";

export const fetchBooks = term => async dispatch => {
    const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${term}`
    );

    dispatch({ type: FETCH_BOOKS, payload: res.data.items });
};
