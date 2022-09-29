import React from 'react';

class Cart extends React.Component {

    constructor(props) {
        super(props);
    }


    handleCheckout = (subTotal) => {
        alert(`Your bill amount is :  ${subTotal}`);
    }

    render() {

        let subTotal = this.props.cartItems.reduce((acc, cv) => {
            acc += cv.price * cv.quantity;
            return acc;
        }, 0).toFixed(2);


        if (!this.props.cartToggle) {
            return null;
        }
        return (
            <>
                <div className='cart'>
                    <h1 className='cart-head cart-hide'>
                        <img src='./static/bag-icon.png' />
                        <span className='flex justify-center align-center count'>{this.props.sumItems}</span>
                    </h1>


                    <ul className='items'>

                        {this.props.cartItems.map(item => {
                            return (
                                <>
                                    <li className='flex-100 flex justify-between align-center'>
                                        <div className='flex-20'>
                                            <img className='full-width' src={`./static/products/${item.sku}_1.jpg`} />
                                        </div>
                                        <div className='flex-60'>
                                            <h2>{item.title}</h2>
                                            <p>{item.style}</p>
                                            <p>Quantity: {item.quantity}</p>
                                        </div>
                                        <div className='flex-18'>
                                            <span onClick={() => this.props.deleteItem(item.id)} className='kattam'>X</span>
                                            <h5 className='paise'>$ {item.price}</h5>
                                            <p className='flex justify-between align-center'>
                                                <span onClick={() => this.props.decrementQuantity(item.id)} className='btnba'>-</span>
                                                <span onClick={() => this.props.incrementQuantity(item.id)} className='btnba'>+</span>
                                            </p>
                                        </div>
                                    </li>
                                </>
                            );
                        })}
                    </ul>
                    
                    <article className='checkout'>
                        <h6>SUBTOTAL <span>$ {subTotal}</span></h6>
                        <button onClick={() => { this.handleCheckout(subTotal) }}>CHECKOUT</button>
                    </article>
                </div>
            </>
        );
    }

}

export default Cart;