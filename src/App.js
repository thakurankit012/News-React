import { useState } from "react";
import {
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Container,
} from "react-bootstrap";

import NewsList from "./Components/NewsList";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent default form submission
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar
        bg={darkMode ? "dark" : "light"}
        variant={darkMode ? "dark" : "light"}
        expand="lg"
        className="mb-4"
        style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
      >
        <Container>
          <Navbar.Brand
            href="/"
            className={`fw-bold fs-4 ${darkMode ? "text-light" : "text-dark"}`}
          >
           havel News 
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Dropdown>
                <Dropdown.Toggle
                  variant={darkMode ? "outline-light" : "outline-primary"}
                  style={{ fontWeight: "bold" }}
                >
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleCategoryClick("world")}>
                    World
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("business")}
                  >
                    Business
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("technology")}
                  >
                    Technology
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryClick("sports")}>
                    Sports
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("entertainment")}
                  >
                    Entertainment
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>

            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                name="search"
                style={{ borderRadius: "0.25rem" }}
              />

              <Button
                variant={darkMode ? "outline-light" : "outline-primary"}
                type="submit"
                style={{ borderRadius: "0.25rem" }}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>

          <Button
            variant={darkMode ? "outline-light" : "outline-primary"}
            className="ms-auto"
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </Container>
      </Navbar>

      <div
        className="main-container"
        style={{
          backgroundColor: darkMode ? "#111" : "#fff",
          color: darkMode ? "#fff" : "#000",
          minHeight: "100vh",
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <Container>
          <Row>
            <Col
              xs={12}
              md={3}
              style={{
                padding: "20px",
                background: darkMode ? "#333" : "#f8f9fa",
                borderRadius: "0.25rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                color: darkMode ? "#fff" : "#000",
              }}
            >
              <h3>Topics</h3>
              <Nav className="flex-column">
                <Nav.Link onClick={() => handleCategoryClick("world")}>
                  World
                </Nav.Link>
                <Nav.Link onClick={() => handleCategoryClick("business")}>
                  Business
                </Nav.Link>
                <Nav.Link onClick={() => handleCategoryClick("technology")}>
                  Technology
                </Nav.Link>
                <Nav.Link onClick={() => handleCategoryClick("sports")}>
                  Sports
                </Nav.Link>
                <Nav.Link onClick={() => handleCategoryClick("entertainment")}>
                  Entertainment
                </Nav.Link>
              </Nav>
            </Col>

            <Col xs={12} md={9}>
              <NewsList category={category} searchTerm={searchTerm} darkMode={darkMode} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
