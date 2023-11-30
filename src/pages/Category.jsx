import { ItemListContainer } from "../components";
import { LoaderComponent } from "../components";
import { useParams } from "react-router-dom";
import { ProductsData } from "../data/productsData";
import { useEffect, useState } from "react";
import { getProductsbyCategory } from "../data/productsData";

export const Category = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    const { categoryId } = useParams();
    useEffect(()=>{
        LoaderComponent(true);
        getProductsbyCategory(categoryId)
        .then((Category) =>{
            setFilteredProducts(Category);
        })
        .catch((err) =>{
            console.log(err);
        })
        .finally(()=>{
            LoaderComponent(false);
        });
    },[categoryId]);

    return <ItemListContainer products={filteredProducts} />;
};