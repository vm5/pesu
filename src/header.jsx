import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './animations.css';

const Header = () => {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade-slide">
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logoContainer}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoXq5BNiH504yKJKJ_bjVjjxqXlXRwWYUjQ&s" alt="PES Logo" style={styles.logo} />
            <h1 style={styles.title}>PES Connect</h1>
          </div>
          <span style={styles.time}>{currentTime}</span>
        </div>
        <div style={styles.contentRow}>
          <div style={styles.textContainer}>
            <ul style={styles.list}>
              <li style={styles.listItem}>PES Connect is a platform designed to bridge the gap between current students of the university who are eligible for placements and want to seek necessary guidance and support from PES alumni who happen to work in the same organization as the one they are wishing to apply for.</li>
              <li style={styles.listItem}>Whether you are a student looking to connect with alumni working in companies you are applying to, or an alumni wishing to provide guidance and support, PES Connect is here to help.</li>
              <li style={styles.listItem}>Join us to foster connections and support the next generation of professionals.</li>
              <li style={styles.listItem}>Our platform not only provides students with valuable networking opportunities but also allows alumni to give back to the community by sharing their experiences and insights.</li>
              <li style={styles.listItem}>Together, we can create a supportive environment where everyone thrives and achieves their career goals.</li>
            </ul>
          </div>
          <div style={styles.imageContainer}>
            <img src="https://www.pessat.com/img/video-cover.jpg" alt="PES Campus" style={styles.image} />
          </div>
        </div>
      </header>
    </CSSTransition>
  );
};

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f1f1f1',
    borderBottom: '1px solid #ccc',
    fontSize: '32px',
    fontFamily: 'Coneria',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    color: 'grey',
    fontSize: '28px',
    position: 'relative',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '24px',
  },
  authContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: '20px',
    top: '10px',
  },
  button: {
    marginLeft: '10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
    bottom: '40px',
  },
  time: {
    fontSize: '18px',
    color: 'grey',
    position: 'relative',
    right: '20px',
    bottom: '10px',
  },
  contentRow: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '10px',
    justifyContent: 'space-between',
    width: '100%',
  },
  textContainer: {
    flex: '1 1 40%',
    margin: '0 20px',
    fontSize: '16px',
    textAlign: 'left',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  listItem: {
    color: 'brown',
    fontWeight: 'bold',
    fontSize: '18px',
    fontFamily: 'Coneria',
    marginBottom: '10px',
  },
  imageContainer: {
    flex: '1 1 20%',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
};

export default Header;
