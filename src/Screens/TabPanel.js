import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Mobile from "../Components/Mobile";
import Television from "../Components/Televison";
import Camera from "../Components/Camera";
import Laptop from "../Components/Laptop";
import Cart from "../Components/Cart";

const tabStyle = {
  color: "blue",
  ":active": {
    color: "#ffffff",
    borderBottom: "green"
  }
};

export default class TabComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };
  }

  componentDidMount() {}

  increment = (item, index) => {
    console.log("inc");
    if (item.quantity < item.stockAvailable) {
      // item.quantity = item.quantity + 1;
      let cart = this.state.cart;
      cart[index].quantity += 1;
      this.setState({ cart });
      this.forceUpdate();
      console.log(this.state.cart[index].quantity);
    }
  };
  decrement = (item, index) => {
    console.log("dec");
    if (item.quantity == 1) {
      this.removeFromCart(index);
    } else if (item.quantity > 1) {
      let cart = this.state.cart;
      // let quantityValue = this.state.quantityValue - 1;
      cart[index].quantity -= 1;
      this.setState({ cart });
      this.forceUpdate();
      console.log(this.state.cart[index].quantity);
    }
  };

  addToCart = item => {
    let cart = this.state.cart;
    let flag = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].productName === item.productName) {
        if (cart[i].quantity < item.stockAvailable) {
          cart[i].quantity += 1;
          this.setState({ cart }); // TODO: this searching should actually be for product id since there can be multiple products available with same name
        }
        flag = true;
        break;
      }
    }

    if (flag == false) {
      let cartItem = {
        productName: item.productName,
        price: item.price,
        quantity: 1,
        stockAvailable: item.stockAvailable,
        deliveryTime: item.deliveryTime
      };
      cart.push(cartItem);
      this.setState({ cart });
      console.log(this.state.cart);
    }
  };

  removeFromCart = index => {
    let cart = this.state.cart;
    cart.splice(index, 1);
    this.setState({ cart });
  };

  render() {
    return (
      <div>
        <Tabs
          style={{
            backgroundColor: "#F2F2F2",
            paddingLeft: 15,
            paddingRight: 15,
            color: "#B4C5D4"
          }}
        >
          <TabList className="tablistStyle">
            <Tab style={tabStyle}>Mobile</Tab>
            <Tab>Laptop</Tab>
            <Tab>Camera</Tab>
            <Tab>Television</Tab>
          </TabList>

          <TabPanel>
            <Mobile addToCart={this.addToCart} />
            <Cart
              cart={this.state.cart}
              removeFromCart={this.removeFromCart}
              increment={this.increment}
              decrement={this.decrement}
            />
          </TabPanel>
          <TabPanel>
            <Laptop addToCart={this.addToCart} />
            <Cart
              cart={this.state.cart}
              removeFromCart={this.removeFromCart}
              increment={this.increment}
              decrement={this.decrement}
            />
          </TabPanel>
          <TabPanel>
            <Camera addToCart={this.addToCart} />
            <Cart
              cart={this.state.cart}
              removeFromCart={this.removeFromCart}
              increment={this.increment}
              decrement={this.decrement}
            />
          </TabPanel>
          <TabPanel>
            <Television addToCart={this.addToCart} />
            <Cart
              cart={this.state.cart}
              removeFromCart={this.removeFromCart}
              increment={this.increment}
              decrement={this.decrement}
            />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
