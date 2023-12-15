import React from "react";
import Card from "react-bootstrap/Card";

import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";
import { ItemQuantitySelector } from "../components";

export const ItemDetailContainer = () => {
    const { productId } = useParams();

    const { product, loading, error } = useSingleProduct(productId);

    return (
        <Card key={product.id} style={{ width: "18rem", margin: 20 }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
            </Card.Body>
            <ItemQuantitySelector />
        </Card>
    );
};
