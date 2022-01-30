
function App(props) {
  return (
    <div className="movies">
      <img className="movie-img" src={props.imageurl} />
      <p className="movie-description">{props.description}</p>
    </div>
  );
}

export default App;
