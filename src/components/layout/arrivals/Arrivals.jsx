import React from "react";
import styles from "./Arrivals.module.css";
import { PRODUCTS_DATA } from "../../../data/products.js";
import Card from "../../../components/ui/card/Card.jsx";

const Arrivals = () => {
    return (
        <div className={styles.cards}>
            {PRODUCTS_DATA.map((product) => (
                <Card
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    img={product.img}
                />
            ))}
        </div>
    );
};

export default Arrivals;
