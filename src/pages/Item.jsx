import React from "react";
import { ItemDetailContainer } from "../components";
import { LoaderComponent } from "../components";
import { useParams } from "react-router-dom";
import { ProductsData } from "../data/productsData";
import { useEffect, useState } from "react";


export const Item = () => {
    const { id } = useParams();
    useEffect(()=>{
        LoaderComponent(true);
        getProduct(id)
        .then((item) =>{
            setProduct(item);
        })
        .catch((err) =>{
            console.log(err);
        })
        .finally(()=>{
            LoaderComponent(false);
        });
    },[id]);

    const productFiltered = ProductsData.filter(
        (product) => product.id === id
    );
    return <ItemDetailContainer product={productFiltered[0]} />;
};

