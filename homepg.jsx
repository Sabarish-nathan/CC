import React from "react";

function App() {
  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: "#f9f9f9",
      textAlign: "center",
    },
    header: {
      backgroundColor: "#fff",
      padding: "20px",
    },
    searchBar: {
      display: "flex",
      justifyContent: "center",
      margin: "20px",
    },
    searchInput: {
      padding: "10px",
      margin: "5px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    searchButton: {
      padding: "10px 20px",
      margin: "5px",
      border: "none",
      backgroundColor: "#007bff",
      color: "#fff",
      borderRadius: "5px",
      cursor: "pointer",
    },
    partnerLogos: {
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
    },
    partnerLogoItem: {
      margin: "0 10px",
      color: "#555",
    },
    mainSection: {
      display: "flex",
      justifyContent: "space-around",
      padding: "40px",

    },
    feature: {
      textAlign: "center",
      width: "30%",
    },
    featureImage: {
      width: "50px",
      marginBottom: "10px",
    },
    footer: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "20px",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <h1>We compare hotel prices and find the best deals</h1>

        <p>We'll do the searching.You do the saving.</p>

        {/* Search Bar */}
        <div style={styles.searchBar}>
          <input type="text" placeholder="Where to?" style={styles.searchInput} />
          <input type="date" placeholder="Check in" style={styles.searchInput} />
          <input type="date" placeholder="Check out" style={styles.searchInput} />
          <input type="number" placeholder="2 Guests, 1 Room" style={styles.searchInput} />
          <button style={styles.searchButton}>Search</button>
        </div>

        {/* Partner logos */}
        <div style={styles.partnerLogos}>
          <span style={styles.partnerLogoItem}>Hotels.com</span>
          <span style={styles.partnerLogoItem}>Booking.com</span>
          <span style={styles.partnerLogoItem}>Trip.com</span>
        </div>
      </header>

      {/* Main Section */}
      <main style={styles.mainSection}>
        <div style={styles.feature}>
        <img src="https://atlas-content-cdn.pixelsquid.com/stock-images/stickman-searching-vnJL6OD-600.jpg" alt="Search" style={{ ...styles.featureImage, width: '200px', height: '200px' }} />
          <br></br><button>Search hotels in just a few seconds.</button>
        </div>

        <div style={styles.feature}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqemOaJAdGeJ1fYq8nrVm7u2oTQgtx1b3ouA&s" alt="Compare" style={{...styles.featureImage, width: '400px',height: '200px'}} />
          <button>Compare hotel prices.</button>
        </div>

        <div style={styles.feature}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWDesEU5Ps9fJTYrF8OWoW6mq0FsknLGYhg&s" alt="Save" style={{...styles.featureImage, width: '200px',hieght:'200px'}} />
          <br></br><button>Save your money</button>
        </div>
      </main>

      {/* Footer */}
      <div>
        <h2>Discover the best time to book your next stay</h2>
      </div>
      
    </div>
  );
}

export default App;
