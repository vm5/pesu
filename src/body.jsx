import React, { useState } from 'react';

const Body = () => {
  const [company, setCompany] = useState('');
  const [alumni, setAlumni] = useState([]);

  const handleSearch = () => {
    // Dummy data for alumni
    const dummyAlumni = [
      { name: 'John Doe', email: 'john.doe@gmail.com', company: 'Company A', image: 'https://via.placeholder.com/50' },
      { name: 'Jane Smith', email: 'jane.smith@gmail.com', company: 'Company B', image: 'https://via.placeholder.com/50' },
      { name: 'Alice Johnson', email: 'alice.johnson@gmail.com', company: 'Company A', image: 'https://via.placeholder.com/50' },
    ];

    // Filter alumni based on the company name
    const filteredAlumni = dummyAlumni.filter(alumnus => alumnus.company.toLowerCase() === company.toLowerCase());
    setAlumni(filteredAlumni);
  };

  const handleConnect = (email) => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  };

  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <h2 style={styles.heading}>Student Search</h2>
        <input
          type="text"
          placeholder="Enter Company Name"
          style={styles.input}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <button style={styles.button} onClick={handleSearch}>Search</button>
      </section>
      <section style={styles.section}>
        <h2 style={styles.heading}>Connect</h2>
        {alumni.length > 0 ? (
          <ul style={styles.list}>
            {alumni.map((alumnus, index) => (
              <li key={index} style={styles.listItem}>
                <img src={alumnus.image} alt={alumnus.name} style={styles.image} />
                {alumnus.name} - 
                <button style={styles.connectButton} onClick={() => handleConnect(alumnus.email)}>Connect</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No alumni found. Please search by company name.</p>
        )}
      </section>
    </main>
  );
};

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
    flexGrow: 1
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ccc',
    padding: '40px',
    borderRadius: '8px',
    width: '25%',
    minWidth: '200px'
  },
  heading: {
    fontWeight: 'bold'
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #999'
  },
  button: {
    marginBottom: '10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  connectButton: {
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginLeft: '10px'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  listItem: {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  image: {
    marginRight: '10px',
    borderRadius: '50%',
    width: '50px',
    height: '50px'
  }
};

export default Body;
