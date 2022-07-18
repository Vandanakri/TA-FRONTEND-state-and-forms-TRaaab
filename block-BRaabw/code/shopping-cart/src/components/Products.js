import React from 'react';
import Item from './Item';

class Products extends React.Component{
    constructor(props){
        super(props);

        this.state={
            sort: '',
        }
    }


    handleSort = ({target})=>{
        this.setState({sort: target.value});
    };
    
    handleSortedProducts = (sort,selectedSizes, products)=>{
        var sortedProducts = [...products];
        
        if(selectedSizes.length > 0){
            sortedProducts = sortedProducts.filter((p)=>{
                for(let sz of selectedSizes){
                    if(p.availableSizes.includes(sz)){
                        return true;
                        
                    }
                }
            });
        }

        if(sort === 'lowtohigh'){
            sortedProducts = sortedProducts.sort((a,b)=>a.price - b.price); 
            return sortedProducts;
        }else if(sort === 'hightolow'){
            sortedProducts = sortedProducts.sort((a,b)=>b.price - a.price); 
            return sortedProducts;
        }else{
            return sortedProducts;
        } 
    }

    render(){
         let {sort} =this.state;
         let products = this.handleSortedProducts(sort,this.props.selectedSizes, this.props.products);
        return(
            <>
            <main className="flex-75">
            <header className="flex justify-between align-center">
                <p>{products.length} Product(s) Available</p>
                <p>
                <label htmlFor="sort">
                    Sort By:{" "}
                </label>
                <select  value={this.state.sort} onChange={(event)=>{this.handleSort(event)}}  id="sort">
                    <option value="">Select Order</option>
                    <option value="lowtohigh">Low To High</option>
                    <option value="hightolow">High To Low</option>
                </select>
                </p>
            </header>
            <div className="jjt flex justify-start align-start flex-wrap-yes">
            {products.map((elem) => {
                return (
                    <>
                    <Item numbers={this.props.products.length} details={elem} handleAddCartItems={(response)=>{this.props.handleAddCartItems(response)}} />
                    </>
                );
            })}
            
            </div>
            </main>
            </>
        );
    }

}


export default Products;