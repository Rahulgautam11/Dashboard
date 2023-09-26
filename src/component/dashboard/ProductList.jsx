import React, { useState } from 'react'
import Quantity from './Quantity'
import RecieptPopUp from './RecieptPopUp'

const ProductList = ({ product, setProduct }) => {
    const Data = product
    const [receipt, setreceipt] = useState()
    const [VatValue, setVatValue] = useState(0)
    const [DiscountInp, setDiscountInp] = useState(0)
    const [count, setcount] = useState(1)
    const Total = ((count) * (Data?.price))
    const Item = (Data ? count : "0")
    const Subtotal = (Data ? (Total / 1000).toFixed(3) : "0.000")
    const VAT = ((Subtotal * VatValue) / 100).toFixed(3)
    const Discount = ((Subtotal * DiscountInp) / 100).toFixed(3)
    const TotalEUR = (parseFloat(Subtotal) + parseFloat(VAT) + parseFloat(Discount)).toFixed(3)
    const HandleDelete = () => {
        setProduct()
        setcount(1)
        setDiscountInp(0)
        setVatValue(0)
    }
    const HandleReciept = () => {
        if (Data) {
            setreceipt(true)
        }
    }
    const handleDiscount = (v) => {
        const value = v.target.value
        setDiscountInp(value)
    }
    const HandleVat = (v) => {
        const value = v.target.value
        setVatValue(value)
    }
    return (
        <div className='product_list_container mt-20'>

            <div className="product_list_main">
                {
                    Data ?
                        <div className="product_list">
                            <div className='product_wrap'>
                                <div className='cross_icon_wrap' onClick={() => HandleDelete(Data)}><i className="cross_icon" /></div>
                                <p className='product_name'>{Data.name}</p>
                            </div>
                            <p className='price'>{Data.price}</p>
                            <Quantity count={count} setcount={setcount} />
                            <p className='total_wrap'>{Total} INR</p>
                        </div> :
                        <div className="Empty_product">
                            <p>THERE ARE NO PRODUCT</p>
                        </div>
                }
            </div>
            <div className='bottom_container'>
                <div className="product_detail_wrap mb-20">
                    <div className="product_detail_item">
                        <div className="text_wrap">
                            <p className="text">SubTotal</p>
                        </div>
                        <div className="item_wrap">
                            <p className="number">{Subtotal} EUR</p>
                            <p className="total">{Item} items</p>
                        </div>
                    </div>
                    <div className="product_detail_item">
                        <div className="text_wrap">
                            <p className="text">VAT Tax</p>
                        </div>
                        <div className="item_wrap">
                            <div className='percentage_input_wrap'>
                                <input type='number' className="number_input" value={VatValue} onChange={HandleVat} />
                                <span className='percentage_icon'>%</span>
                            </div>
                            <p className="total">{VAT} EUR</p>
                        </div>
                    </div>
                    <div className="product_detail_item">
                        <div className="text_wrap">
                            <p className="text">Discount</p>
                        </div>
                        <div className="item_wrap">
                            <div className='percentage_input_wrap'>
                                <input type='number' className="number_input" value={DiscountInp} onChange={handleDiscount} />
                                <span className='percentage_icon'>%</span>
                            </div>
                            <p className="total">{Discount} EUR</p>
                        </div>
                    </div>
                    <div className="product_detail_item">
                        <div className="text_wrap">
                            <p className="text">Total</p>
                        </div>
                        <div className="item_wrap">
                            <p className="number_EUR">{TotalEUR} EUR</p>
                            <p className="total"></p>
                        </div>
                    </div>
                </div>
                <div className="button_wrap">
                    <button className='cancel_btn' onClick={() => HandleDelete(Data)}>CANCEL SALE</button>
                    <button className='proceed_btn' onClick={HandleReciept}>PROCEED SALE</button>
                </div>
            </div>
            {
                receipt &&
                <RecieptPopUp
                    setreceipt={setreceipt}
                    setProduct={setProduct}
                    setcount={setcount}
                    Item={Item}
                    TotalEUR={TotalEUR}
                    Subtotal={Subtotal}
                    DiscountInp={DiscountInp}
                    VatValue={VatValue}
                    setDiscountInp={setDiscountInp}
                    setVatValue={setVatValue}
                />
            }
        </div>
    )
}

export default ProductList