import Movie from "./Movie.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Collection.css";
import PropTypes from "prop-types";

function Collection(props) {
    return (
        <>
            <div className="collection container board  mt-3">
                <div className="row text-center">
                    <h1>{props.text} Movie List:</h1>
                    <p>
                        Click 'Add' to add a new Movie and click a Movie to cross it off!
                    </p>
                </div>
                <div className="row justify-center text-center">
                    <Movie text={props.movies[0]}/>
                    <Movie text={props.movies[1]}/>
                    <Movie text={props.movies[2]}/>
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                    <div className="col-md-6 ">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Write Movie here..."
                                aria-label="Movie"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-primary h-100 m-0" type="button">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Collection.defaultProps = {
    movies: ["Untitled Movie","Untitled Movie","Untitled Movie"]
}

Collection.propTypes = {
    movies: PropTypes.isRequired,
};

Collection.defaultProps = {
    text: "Untitled To Do Item"
}

Collection.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Collection;
