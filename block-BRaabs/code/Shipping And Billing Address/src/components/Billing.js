import React from 'react';

class Billing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping: {
        address: "",
        zip: "",
        city: "",
        country: ""
      },
      billing: {
        address: "",
        zip: "",
        city: "",
        country: ""
      },
      isSame: false
    }
  }
  copyBilling = ({ target }) => {
    if (target.checked) {
      this.setState({ copy: true });
      this.state.shipping.address = this.state.address;
      this.state.shipping.zip = this.state.zip;
      this.state.shipping.city = this.state.city;
      this.state.shipping.country = this.state.country;
    } else {
      this.setState({ copy: false });
      this.state.shipping.address = '';
      this.state.shipping.zip = '';
      this.state.shipping.city = '';
      this.state.shipping.country = '';
    }
  };
 
 handleShipping = ({ target }) => {
    const { name, value } = target;
    this.setState(state => ({
      shipping: { ...state.shipping, [name]: value }
    }));
  };

  handleCheckbox = () => {
    this.setState(({ isSame }) => ({ isSame: !isSame }));
  };

  render() {
    const { isSame, billing, shipping } = this.state;
    const billingData = isSame ? shipping : billing;
    return (
      <>
        <h1> 📑 Learning About Forms</h1>
        <section className="flex justify-content align-items">
          <div className="flex-45">
            <h2>Shipping Address</h2>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              onChange={this.handleShipping}
              placeholder="e.g New Delhi Vasnat Vihar"
            />
            <label htmlFor="zipcode">ZIP/Postal Code</label>
            <input
              type="text"
              name="zipcode"
              onChange={this.handleShipping}
              placeholder="e.g. 176057"
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              onChange={this.handleShipping}
              placeholder="e.g New Delhi"
            />
            <label htmlFor="country">Country</label>
            <input
              name="country"
              onChange={this.handleShipping}
              type="text"
              placeholder="e.g India"
            />
          </div>
          <div className="flex-45">
            <h2>Billing Address</h2>
            <label className="checkbox">
                  <input onChange={this.handleCheckbox} type="checkbox" /> Same
                  as the Shipping Address?
                </label>
            <label htmlFor="address">Address</label>
            <input
                  value={billingData.address}
                  className="input"
                  type="text"
                  placeholder="e.g New Delhi Vasnat Vihar"
                />
            <label htmlFor="zipcode">ZIP/Postal Code</label>
            <input
                  value={billingData.zip}
                  className="input"
                  type="text"
                  placeholder="e.g. 176057"
                />
            <label htmlFor="city">City</label>
            <input
                  value={billingData.city}
                  className="input"
                  type="text"
                  placeholder="e.g New Delhi"
                />
            <label htmlFor="country">Country</label>
            <input
                  className="input"
                  value={billingData.country}
                  type="text"
                  placeholder="e.g India"
                />
          </div>
        </section>
      </>
    );
  }
}

export default Billing;