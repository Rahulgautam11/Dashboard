import React, { useState } from 'react'
import './Style.scss'
import ProductList from './ProductList'
import Data from '../Data/data.json';


const Dashboard = () => {
    const [product, setProduct] = useState()
    const handleProduct = (value) => {
        setProduct(value)
    }

    return (
        <section className='Container'>
            <div className="wrap_container">
                <div className="left_section">
                    <div className="header_wrap">
                        <h3>PRODUCTS</h3>
                        <h3>PRICE</h3>
                        <h3>QUANTITY</h3>
                        <h3>TOTAL</h3>
                    </div>

                    <ProductList product={product} setProduct={setProduct} />
                </div>


                <div className="border"></div>
                <div className="right_section">
                    {

                        Data ? Data?.map((item, key) => {
                            return (

                                <figure className="img_wrap" key={key} onClick={() => handleProduct(item)}>
                                    {console.log(item.image)}
                                    <img src={item.image} alt="image" />
                                    <div className="overlay">
                                        <figcaption className="product_name" >{item.name}</figcaption>
                                    </div>
                                </figure>
                            )
                        }) : "Loading..."
                    }
                </div>
            </div>
        </section>
    )
}

export default Dashboard