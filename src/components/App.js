import React from 'react';
import MovieList from './MovieList';
import Search from './Search';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' },
      ]
    }
  }

  render() {

    let appStyle = {
      borderStyle: 'solid',
      width: '75%'
    };

    let movieListStyle = {

    };

    return (
      <div style={appStyle}>
        <div style={{ backgroundColor: '#D3D3D3', borderStyle: 'solid' }}>
          <h2>MovieList</h2>
        </div>
        <div style={movieListStyle}>
          <div>
            <Search />
          </div>
          <div>
            <MovieList movies={this.state.movies} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
