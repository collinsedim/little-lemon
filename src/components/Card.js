import React from "react";

const Card = ({ name, description, price, image }) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        borderRadius: "16px 16px 0 0 ",
        overflow: "clip",
        width: "300px",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ height: "200px", objectFit: "cover", width: "100%" }}
      />
      <div style={{ padding: "16px" }}>
        <h3>{name}</h3>
        <p style={{ fontSize: "16px" }}>{description}</p>
        <p style={{ fontSize: "16px", fontWeight: "bold", textAlign: "right" }}>
          {price}
        </p>
      </div>
    </div>
  );
};

export default Card;
