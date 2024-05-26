import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewPage = ( match ) => {
  const [cake, setCake] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
 // const [stars, setStars] = useState(0);

  useEffect(() => {
    const fetchCake = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/SinglePage/${match.userData}`);
        setCake(response.data);
    
      } catch (error) {
        console.error('Error fetching cake data:', error);
      }
    };

    fetchCake();
  }, [match.userData]);

console.log(match.userData)

  const handleAddToCart = () => {
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleQuantityChange = (change) => {
    setQuantity(quantity + change);
  };

//   const handleStarClick = (rating) => {
//     setStars(rating);
//   };

  const handleGoBack = () => {
    window.history.back(); 
  };

  if (!cake) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="view-page"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        className="back-button-container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "50px",
          marginLeft: "50px",
        }}
      >
        <button
          className="back-button"
          onClick={handleGoBack}
          style={{
            borderRadius: "50%",
            padding: "10px",
            backgroundColor: "#766487",
            border: "none",
          }}
        >
          Back
        </button>
      </div>
      <div
        className="cake-details-container"
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginTop: "20px",
          marginRight: "180px",
          marginLeft: "20px",
        }}
      >
        <div className="cake-image" style={{ marginRight: "50px" }}>
          <img
            src={require(`../../proimage/${cake.image}`)}
            alt={cake.name}
            style={{ height: "300px", width: "300px", borderRadius: "10px" }}
          />
        </div>
        <div className="cake-details" style={{ marginTop: "20px" }}>
          <h2 style={{ fontFamily: "Amaranth", color: "#766487" }}>
            {cake.name}
          </h2>
          <p className="description" style={{ fontFamily: "Manjari" }}>
            {cake.description}
          </p>
          <p className="price" style={{ fontFamily: "Manjari" }}>
            Price: ${cake.price}
          </p>
          <div
            className="quantity-section"
            style={{ display: "flex", alignItems: "center" }}
          >
            <p style={{ marginRight: "10px", fontFamily: "Manjari" }}>
              Quantity :
            </p>
            <button
              onClick={() => handleQuantityChange(-1)}
              style={{
                backgroundColor: "#766487",
                border: "none",
                borderRadius: "50%",
              }}
            >
              -
            </button>
            <span style={{ margin: "0 10px" }}>{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              style={{
                backgroundColor: "#766487",
                border: "none",
                borderRadius: "50%",
              }}
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            style={{
              marginRight: "10px",
              fontFamily: "Manjari",
              backgroundColor: "#766487",
              border: "none",
              height: "40px",
            }}
          >
            Add to Cart
          </button>
          <button
            onClick={handleToggleFavorite}
            style={{
              marginRight: "10px",
              fontFamily: "Manjari",
              backgroundColor: "#766487",
              border: "none",
              height: "40px",
            }}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
          <div className="customer-reviews" style={{ marginTop: "20px" }}>
            <p style={{ fontFamily: "Manjari" }}>Customer Reviews:</p>
            {/* <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                // <span
                //   key={star}
                //   style={{
                //     color: star <= stars ? "gold" : "#ddd",
                //     cursor: "pointer",
                //   }}
                //   onClick={() => handleStarClick(star)}
                // >
                //   &#9733;
                // </span>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
