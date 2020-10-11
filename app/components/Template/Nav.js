import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/my_icon.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Marco Mencarelli</h2>
        <p><a href="mailto:marcomencarelli96@gmail.com">marcomencarelli96@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Chi sono:</h2>
      <p>
        Ciao, io sono Marco. Sono un ingenere informatico, abito a Genova e lavoro per l'ente ospedaliero ospedali Galliera.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">About</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Marco Mencarelli <Link to="/">marcomencarelli96@gmail.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
