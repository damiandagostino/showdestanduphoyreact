import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100vw",
                justifyContent: "space-around",
            }}
        >
            {products.map((product) => {
                return (
                    <Card
                        key={product.id}
                        style={{ width: "18rem", margin: 20, height: "400px" }}
                    >
                        <Link to={`/item/${product.id}`} style={{display: "flex",justifyContent: "center",}} >
                            <Card.Img variant="top" src={product.image} style={{width: "220px", heigth: "220px"}} />
                        </Link>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};