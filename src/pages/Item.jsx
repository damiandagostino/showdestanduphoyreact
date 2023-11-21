import React from "react";
import { ItemDetailContainer } from "../components";
import { useParams } from "react-router-dom";
import { ProductsData } from "../data/productsData";

export const Item = () => {
    const { id } = useParams();

    const productFiltered = ProductsData.filter(
        (product) => product.id === id
    );
    return <ItemDetailContainer product={productFiltered[0]} />;
};

