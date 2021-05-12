import React, { Component } from "react";
import Table from "../common/table";
import Like from "../common/like";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      label: "State",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      label: "Options",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />

      // <table class="table">
      //   <TableHeader
      //     columns={this.columns}
      //     sortColumn={sortColumn}
      //     onSort={onSort}
      //   />
      //   <TableBody columns={this.columns} data={movies} />
      // </table>

      /* <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <th>{movie.title}</th>
              <th>{movie.genre.name}</th>
              <th>{movie.numberInStock}</th>
              <th>{movie.dailyRentalRate}</th>
              <th>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </th>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody> */
    );
  }
}

export default MoviesTable;
