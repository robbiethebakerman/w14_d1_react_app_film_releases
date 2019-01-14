import React, {Component} from 'react';
import FilmLink from './FilmLink';

class FilmList extends Component {

  render() {

    const filmLinkNodes = this.props.data.map(filmLink => {
      return <FilmLink key={filmLink.id} url={filmLink.url}>{filmLink.name}</FilmLink>
    });

    return (
      <div className="film-list">
        {filmLinkNodes}
      </div>
    );

  }

}

export default FilmList;
