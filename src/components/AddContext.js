import axios from "axios";
import { createContext, useEffect, useState } from "react";

let AddContext = createContext();

export function AddProvider({ children }) {
    const [electronics, setElectronics] = useState([]);
    const [homeAppliances, setHomeAppliances] = useState([]);
    const [cloths, setCloths] = useState([]);
    const [productList, setProductList] = useState([]);
    const [totalData, setTotalData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Fetch product data from the API
    let getProductData = async () => {
        try {
            const [electronicsData, clothsData, homeAppliancesData] = await Promise.all([
                axios.get("http://localhost:8000/api/electronics"),
                axios.get("http://localhost:8000/api/cloths"),
                axios.get("http://localhost:8000/api/home-appliances")
            ]);
            setElectronics(electronicsData.data);
            setCloths(clothsData.data);
            setHomeAppliances(homeAppliancesData.data);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(totalData)

    // UseEffect to fetch product data once on component mount
    useEffect(() => {
        getProductData();
    }, []);

    // Update totalData whenever any of the product arrays change
    useEffect(() => {
        setTotalData([...electronics, ...homeAppliances, ...cloths]);
    }, [electronics, homeAppliances, cloths]);

    // Filter products based on search query
    const filterProduct = (products) => {
        const searchLower = searchQuery.toLowerCase();
        return products.filter(product => 
            product.title?.toLowerCase().includes(searchLower) ||
            product.brand?.toLowerCase().includes(searchLower) ||
            product.type?.toLowerCase().includes(searchLower) ||
            product.color?.toLowerCase().includes(searchLower) ||
            product.ram?.toLowerCase().includes(searchLower)
        );
    };

    // Filtered product list based on search query
    const filteredProducts = filterProduct(totalData);


    // Category filter function
    // let category = (data) => {
        
    // };

    return (
        <AddContext.Provider value={{ 
            totalData,
            productList, // Provide filtered products
            setCloths, 
            cloths, 
            homeAppliances, 
            setHomeAppliances, 
            electronics, 
            setElectronics, 
            searchQuery, 
            setSearchQuery, 
           
        }}>
            {children}
        </AddContext.Provider>
    );
}

export default AddContext;
