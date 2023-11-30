export const ProductsData = [
    {
        id: "Show-1",
        name: "Desastre Stand Up",
        image: "../../src/assets/img/desastrestandup.jpeg",
        price: 2000,
        description: "Unico show que cumple con el etiquetado frontal. Si tiene etiqueta esta bueno!",
        cantidad: 1,
        category: "Shows de stand up",
    },
    {
        id: "Show-2",
        name: "After Wakanda",
        image: "../../src/assets/img/afterwakanda.jpg",
        price: 1500,
        description: "Cuando queres seguirla un rato mas nostoros te hacemos el agunte. Venite!",
        cantidad: 1,
        category: "Rotativos",
    },
    {
        id: "Show-3",
        name: "Cosas de Cabrito",
        image: "../../src/assets/img/cosasdecabrito.jpg",
        price: 1800,
        description: "Meee, gusta reir, meee, gusta aplaudir, teeenes que venir!",
        cantidad: 1,
        category: "Unipersonal",
    },
    {
        id: "Show-4",
        name: "El Kaputt",
        image: "../../src/assets/img/elotrostandupkaputt.jpeg",
        price: 1600,
        description: "El kaputt es un desafio para los comediantes, tienen 4 min para hacerte reir, si no lo logran KAPUTT!! ",
        cantidad: 1,
        category: "Open Mics",
    },
    {
        id: "Show-5",
        name: "Otra Orbita",
        image: "../../src/assets/img/otraorbita.jpeg",
        price: 2500,
        description: "Dos comediantes suben, solo uno sobrevive. Veni a elegir al ganador",
        cantidad: 1,
        category: "Shows Gratis",
    },
];

export const getProducts =() => {
    return new Promise((res, rej) =>{
        setTimeout(()=>{
        res(ProductsData);
    },1000);
    });
};
export const getProductsbyCategory = (category) => {
    return new Promise((res)=>{
        const productos = ProductsData.filter(
            (products)=> products.category === category
        );
        setTimeout(()=>{
            res(productos);
        },1000);
    });
};
export const getProduct = (id) => {
    return new Promise((resolve) => {
        const productoFiltrado = ProductsData.find((p) => p.id === id);
        setTimeout(()=> {
            resolve(productoFiltrado);
        },1000);
    });
};
