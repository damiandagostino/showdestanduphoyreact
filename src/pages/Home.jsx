import React from 'react';
import { ItemListContainer } from "../components";
import { ProductsData } from "../data/productsData";

export const Home = () => {

    return <ItemListContainer products={ProductsData} />;
};