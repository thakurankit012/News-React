import { Pagination } from "react-bootstrap";

function CustomPagination(props) {
  const { currentPage, totalPages, onPageChange, darkMode } = props;

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageItems = () => {
    const pageItems = [];

    for (let i = 1; i <= totalPages; i++) {
      pageItems.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => onPageChange(i)}
          style={{
            backgroundColor: darkMode ? "#333" : "#fff", // Adjust background color based on dark mode
            color: darkMode ? "#fff" : "#000", // Adjust text color based on dark mode
          }}
        >
          {i}
        </Pagination.Item>
      );
    }

    return pageItems;
  };

  return (
    <div className={`d-flex justify-content-center ${darkMode ? "bg-dark" : "bg-light"}`}>
      <Pagination>
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => handlePageClick(currentPage - 1)}
          style={{ backgroundColor: darkMode ? "#333" : "#fff" }} // Adjust background color based on dark mode
        />
        {renderPageItems()}
        <Pagination.Next
          disabled={currentPage === totalPages}
          onClick={() => handlePageClick(currentPage + 1)}
          style={{ backgroundColor: darkMode ? "#333" : "#fff" }} // Adjust background color based on dark mode
        />
      </Pagination>
    </div>
  );
}

export default CustomPagination;
