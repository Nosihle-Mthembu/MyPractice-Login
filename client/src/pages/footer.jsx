function Footer() {
    return (
      <>
        <footer style={{height: "100px",
    width: "100%",
    position: "relative",
    bottom: 0,
    backgroundColor: "#333",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10
    }}>
          <p className="footer-text" style={{ margin: 0, textAlign: "center", lineHeight: 1.5}}>
            Footer format : © API Nosihle Mthembu API Workshop. All rights reserved.
          </p>
        </footer>
      </>
    );
  }
  
  export default Footer;