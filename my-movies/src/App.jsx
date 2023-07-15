import Collection from "./Collection.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <>
            <div className="container board mt-3 justify-center">
                <div className="row text-center">
                    <h1>My Favourite Movie Collections</h1>
                    <p>
                        Click Add to add a new Movie Collection and click a Collection to cross it off!
                    </p>
                </div>
                <div className="row justify-center text-center">
                    <Collection text={"Action Collection"} movies={["Maverick","Presidioo","Package"]}/>
                    <Collection text={"Romance Collection"} movies={["Casablanca","Romeo and Juliet","Life is Beautiful"]}/>
                    <Collection text={"War Collection"} movies={["Dunkirk","1917","Imitation Game"]}/>
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                    <div className="col-md-6 ">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Write Collection Name here..."
                                aria-label="CollectionInput"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-primary h-100 m-0" type="button">
                                    Add a Movie Collection
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
