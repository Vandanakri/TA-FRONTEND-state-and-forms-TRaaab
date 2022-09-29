import React from "react";
import Cart from "./Cart";
import Products from "./Products";
import Filters from "./Filters";

import products from "../data/data.json";

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartToggle: false,
            selectedSizes: [],
            cartItems: [],
        };
    }

    handleSizes = (size) => {
        if (this.state.selectedSizes.includes(size)) {
            this.setState(prevState => ({
                selectedSizes: prevState.selectedSizes.filter(s => s !== size),
            }));
        } else {
            this.setState(prevState => ({
                selectedSizes: prevState.selectedSizes.concat(size),
            }));
        }
    };

    handleCartToggle = (sumItems) => {
        if (!this.state.cartToggle) {
            return (
                <>
                    <img src="./static/bag-icon.png" alt="" />
                    <span className="flex justify-center align-center count">{sumItems}</span>
                </>
            );
        } else {
            return (
                <>
                    <span>X</span>
                </>
            );
        }
    };

    handleToggle = () => {
        this.setState({ cartToggle: !this.state.cartToggle });
    };

    handleAddCartItems = (prod) => {
        let isPresent = this.state.cartItems.findIndex(p => p.id === prod.id) !== -1;

        if (isPresent) {
            this.incrementQuantity(prod.id);
        } else {
            this.setState((prevState) => ({
                cartItems: prevState.cartItems.concat({ ...prod, quantity: 1 }),
            }));
        }
    };

    incrementQuantity = (id) => {
        this.setState((prevState) => ({
            cartItems: prevState.cartItems.map(p => {
                if (p.id === id) {
                    return { ...p, quantity: p.quantity + 1 };
                }
                return p;
            })
        }));
    }

    decrementQuantity = (id) => {
        this.setState((prevState) => ({
            cartItems: prevState.cartItems.map(p => {
                if (p.id === id && p.quantity > 1) {
                    return { ...p, quantity: p.quantity - 1 };
                }
                return p;
            })
        }));
    }

    deleteItem = (id) => {
        this.setState((prevState) => {
            let updatedCartItems = prevState.cartItems.filter(p => {
                return p.id !== id;
            });
            return {
                cartItems: updatedCartItems,
            };
        });
    };

    render() {
        let sumItems = this.state.cartItems.reduce((acc, cv) => {
            acc = acc + cv.quantity;
            return acc;
        }, 0);

        return (
            <>
                <div className="container flex justify-between align-start">
                    <Filters products={products} selectedSizes={this.state.selectedSizes} handleSizes={(response) => { this.handleSizes(response) }} />
                    <Products products={products} selectedSizes={this.state.selectedSizes} handleAddCartItems={(response) => { this.handleAddCartItems(response) }} />
                    <aside>
                        <div
                            onClick={() => this.handleToggle()}
                            className={
                                !this.state.cartToggle
                                    ? "cart-toggle flex justify-center align-center cart-toggle-hide"
                                    : "cart-toggle flex justify-center align-center"
                            }
                        >
                            {this.handleCartToggle(sumItems)}
                        </div>
                        <Cart sumItems={sumItems} cartToggle={this.state.cartToggle} cartItems={this.state.cartItems} incrementQuantity={(response) => this.incrementQuantity(response)} decrementQuantity={(response) => this.decrementQuantity(response)} deleteItem={(response) => this.deleteItem(response)} />
                    </aside>
                </div>
            </>
        );
    }
}

export default Shop;