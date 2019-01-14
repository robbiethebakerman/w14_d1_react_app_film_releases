import React, {Component} from 'react';

class FilmLink extends Component {

  render() {
    return (
      <li className="film-link">
        <a href={this.props.url}>{this.props.children}</a>
      </li>
    );
  }

}

export default FilmLink;
