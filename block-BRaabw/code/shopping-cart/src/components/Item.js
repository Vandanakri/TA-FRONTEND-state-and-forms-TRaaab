import React from 'react';

class Item extends React.Component{
    constructor(props){
            super(props);
    }

    addToCart = (details)=>{
            this.props.handleAddCartItems(details);
    }


    render(){
        return(
            <>
            <article className='item'>
                {this.props.details.isFreeShipping ? <><span  className='shipping'>Free Shipping</span> </> : null} 
                <div className='image'>   
                    <img src={`./static/products/${this.props.details.sku}_1.jpg`}/>
                </div>
                <h4>{this.props.details.title}</h4>
                <div className='underline'></div>
                <p>{this.props.details.currencyFormat}<span className='doller'>{Math.floor(this.props.details.price)}</span>.<span className='cents'>{(this.props.details.price- Math.floor(this.props.details.price)).toFixed(3).substring(2)}</span></p>
                <button onClick={()=>{this.addToCart(this.props.details)}}  >Add To Cart</button>
            </article>
            </>
        );
    }
}

export default Item;