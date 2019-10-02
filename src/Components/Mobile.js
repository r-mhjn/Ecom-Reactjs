import React from "react";
import Axios from "axios";
import Progress from "./Progress";
import { Link } from "react-router-dom";
import { positions } from "@material-ui/system";
const ip = require("../ipAddress");

export default class Mobiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this._getProducts();
  }

  _getProducts = async () => {
    await Axios.get(`http://${ip.default}:5050/user/products/mobiles`)
      .then(res => {
        this._saveProducts(res.data[0]);
        console.log(this.state.products);
      })
      .catch(err => console.log("Error while fetching mobiles " + err));
  };

  _saveProducts = async data => {
    await this.setState({ products: data.products, isLoading: false });
  };

  render() {
    if (this.state.isLoading === true) {
      return (
        <div
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {" "}
          <Progress />
        </div>
      );
    }
    return (
      <div>
        <div
          id="main-div"
          className="productDiv"
          style={{
            maxWidth: "1000px",
            margin: "30px 0px",
            padding: "10px",
            // border: "2px solid black",
            position: "relative",
            float: "left"
          }}
        >
          <div className="container-fluid">
            <div className="row">
              {this.state.products.map((item, index) => {
                return (
                  <div key={index} className="col-xs-6 col-sm-4 col-lg-4">
                    <div
                      className="card"
                      style={{ margin: "20px auto", backgroundColor: "#fff" }}
                    >
                      <img
                        src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.productName}</h5>
                        <p className="card-text" style={{ color: "#B8B8B8" }}>
                          <strong>Price: </strong>
                          {item.price}
                          <br />
                          <strong>Delivery Time: </strong>
                          {item.deliveryTime}
                          <br />
                        </p>
                        <button
                          to="#"
                          className="btn addProductBtn"
                          onClick={() => {
                            this.props.addToCart(item);
                          }}
                        >
                          Add To Cart
                        </button>
                        <div
                          className="card-footer"
                          style={{ padding: "15px" }}
                        >
                          <small
                            style={{
                              fontSize: "15px",
                              color: item.stockAvailable === 0 ? "red" : "green"
                            }}
                          >
                            Stock Availability: {item.stockAvailable}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
