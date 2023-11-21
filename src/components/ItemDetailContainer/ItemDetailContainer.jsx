import React from "react";
import { Card } from "react-bootstrap";

export const ItemDetailContainer = ({ product }) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100vw",
                justifyContent: "space-around",
            }}
        >
            <Card
                key={product.id}
                style={{ width: "18rem", margin: 20, height: "300px" }}
            >
                <Card.Img variant="top" src={product.image} style={{width: "200px", heigth: "200px"}} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};
