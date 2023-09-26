import React from 'react'

const RecieptPopUp = ({ setreceipt, setProduct, setcount, Item, Subtotal, TotalEUR, VatValue, DiscountInp, setVatValue, setDiscountInp }) => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

    const ClosePopUp = () => {
        setreceipt(false)
        setProduct()
        setcount(1)
        setDiscountInp(0)
        setVatValue(0)
    }

    return (
        <div className='Receipt_Container'>
            <div className="receipt_card">
                <div className="header_receipt"><p>Receipt</p></div>
                <div className="receipt_body">
                    <h3 className="sale_num mb-12">Sale No .:.: 00102</h3>
                    <p className="date_time_warp">Date: {formattedDate}</p>
                    <div className="item_header">
                        <div className="product_wrap">
                            <p>&#35;</p>
                            <p>Products</p>
                        </div>
                        <p className='item_header_text'>Quantity</p>
                        <p className='item_header_text'>SubTotal</p>
                    </div>
                    <div className="item_header padding_bottom">
                        <div className="product_wrap">
                            <p>1</p>
                            <p>Products</p>
                        </div>
                        <p className='item_quantity'>{Item}</p>
                        <p className='item_header_text'>{Subtotal} INR</p>
                    </div>
                    <div className="Total_wrap">
                        <p className='item_total_text'>Total Item</p>
                        <p className='item_total_text'>{Item} Total</p>
                        <p className='item_total_text'>{TotalEUR} INR</p>
                    </div>
                    <div className="Total_wrap">
                        <p className='item_total_text'></p>
                        <p className='item_total_text'>Discount</p>
                        <p className='item_total_text'>{DiscountInp}%</p>
                    </div>
                    <div className="Total_wrap">
                        <p className='item_total_text'></p>
                        <p className='item_total_text'>VAT</p>
                        <p className='item_total_text'>{VatValue}%</p>
                    </div>
                </div>

                <div className="button_receipt_wrap">
                    <button onClick={ClosePopUp}>Close</button>
                </div>

            </div>
        </div>
    )
}

export default RecieptPopUp