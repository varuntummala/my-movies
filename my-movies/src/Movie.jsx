import "./Movie.css";
import PropTypes from "prop-types";

//function ToDoItem(props) is also fine, just
//reference the text property with props.text in the <p> tag
function Movie({text}) {
    return (
        <div className="row gy-3">
            <div className="col-md-8 movie m-auto">
                <div className="row pt-3 text-box">
                    <p className="text">{text}</p>
                </div>
                <div className="row">
                    <div className="col-md-2 p-0">
                        <button className="btn btn-danger w-75 px-0 m-0 my-1">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Movie.defaultProps = {
    text: "Untitled To Do Item"
}

Movie.propTypes = {
    text: PropTypes.string.isRequired,
};
export default Movie;
