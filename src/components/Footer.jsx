import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/ConnerBluck"
          aria-label="My GitHub"
        >
          Conner Bluck
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version (Forked from <a href="http://github.com/hashirshoaeb/home">hashirshoaeb</a>).
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
