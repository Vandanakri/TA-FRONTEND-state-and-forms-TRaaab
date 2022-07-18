import React from 'react';

class Filters extends React.Component{
    constructor(props){
        super(props);
    }  

    handleSize = (size)=>{
        this.props.handleSizes(size);
    };
    
    render(){
        let sizes = this.props.products.reduce((acc, cv)=>{
            acc.push(cv.availableSizes);
            return acc; 
        }, []).flat(Infinity);
        let uniqueSizes = [...new Set(sizes)];

        return(
            <>
            <aside className="flex-24">
            <header className="flex justify-between align-center">
            <p>Sizes</p>
            </header>

            <ul className="flex justify-start align-center flex-wrap-yes">
                {uniqueSizes.map((size) => {
                return <li className={this.props.selectedSizes.includes(size) ? 'actives' : ''} onClick={()=>this.handleSize(size)}>{size}</li>;
                })}
            </ul>
            </aside>
            </>
        );
    }
}

export default Filters;