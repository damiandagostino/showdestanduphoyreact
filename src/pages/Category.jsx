import { ItemListContainer } from "../components";
import { LoaderComponent } from "../components";
import { useParams } from "react-router-dom";
import { ProductsData } from "../data/productsData";
import { useEffect, useState } from "react";


export const Category = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    const { categoryId } = useParams();
    useEffect(()=>{
        LoaderComponent(true);
        getProductsbyCategory(categoryId)
        .then((Category) =>{
            setProduct(Category);
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