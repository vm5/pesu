import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './animations.css';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade-slide">
      <footer style={styles.footer}>
        <p>&copy; {year} PES Connect. All rights reserved</p>
        <div style={styles.links}>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Contributors</a>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Privacy Policies</a>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Contact Us</a>
        </div>
        <div style={styles.additionalContent}>
          <p>PES Connect : Your go to platform to connect with alumni of PES University. Stay connected with your queries and concerns and stay in touch!</p>
        </div>
      </footer>
    </CSSTransition>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f1f1f1',
    borderTop: '1px solid #ccc',
    position: 'relative',
    bottom: 0,
    width: '100%',
    fontWeight: 'bold',
    fontFamily : 'Coneria',
    color: 'brown',
    fontSize : '20px'
  },
  links: {
    marginTop: '10px',
  },
  link: {
    margin: '0 10px',
    textDecoration: 'none',
    fontWeight: 'normal',
    color : 'blue',
  },
  additionalContent: {
    marginTop: '20px',
    fontWeight: 'normal'
  }
};

export default Footer;
