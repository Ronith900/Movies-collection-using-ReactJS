import React, { Component } from "react";
import Like from "./common/likes";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    {
      label: "Trailer",
      key: "Trailer",
      content: movie => (
        <a href={movie["trailer"]}>
          <img
            src={movie["picURL"]}
            alt={movie["title"]}
            className="img-circle"
            width="75"
            height="75"
          />
        </a>
      )
    },
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      label: "Like",
      key: "Like",
      content: movie => (
        <Like liked={movie["liked"]} onClick={() => this.props.onLike(movie)} />
      )
    },
    // {
    //   label: "More Info",
    //   key: "More Info",
    //   content: movie => (
    //     <button
    //       type="button"
    //       className="btn btn-outline-info btn-sm"
    //       onClick={() => this.props.onMoreInfo(movie)}
    //     >
    //       View more{" "}
    //     </button>
    //   )
    // },
    {
      label: "Actions",
      key: "Actions",
      content: movie => (
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const {
      movies,
      onDelete,
      onLike,
      sortColumn,
      onSort
    } = this.props;

    return (
      <table className="table  table-striped text-center">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
