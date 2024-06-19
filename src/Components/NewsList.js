import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";

const NewsList = (props) => {
  const { category, searchTerm, darkMode } = props; // Receive darkMode from props
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const { newsData, loading, error } = useNewsData(category, searchTerm);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);

  return (
    <Container>
      <Row>
        {currentArticles?.map((article) => (
          <Col xl={16} md={5} lg={7} key={article.url}>
            <Card
              className="mb-4"
              style={{
                backgroundColor: darkMode ? "#333" : "#fff", // Adjust background color based on dark mode
                color: darkMode ? "#fff" : "#000", // Adjust text color based on dark mode
              }}
            >
              <Card.Img src={article.image} variant="top" />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Card.Link
                  href={article.url}
                  style={{ color: darkMode ? "#fff" : "#007bff" }} // Adjust link color based on dark mode
                >
                  Read More
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Container>
  );
};

export default NewsList;
