import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>Trello Mimic</h1>

      <h2>A simple project management application in React</h2>
      <ol>
        <li>To see the board, <Link to="board">click here</Link>.</li>
        <li>To view the source code, <a href="https://github.com/kakarukeys/trello_mimic">go here</a>.</li>
      </ol>
    </div>
  );
};

export default HomePage;
