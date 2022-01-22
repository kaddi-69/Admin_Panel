import React from "react";
import one from "./one.png";
import two from "./two.png";
import three from "./three.png";
import four from "./four.png";
import five from "./five.png";
import Colapsed from "../Collapsed/Colapsed";
import Taransition from "./Taransition";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Products.css";
import Header from "../Main_Ui/Header/Header";

function Products() {
  const data = [
    {
      id: 1,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_24.jpg",
      title: "Nike React Infinity Run Fly",
      prise: "$24.82",
      pic: two,
    },
    {
      id: 2,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_23.jpg",
      title: "Nike React Art3mis",
      prise: " $81.16",
      pic: three,
    },
    {
      id: 3,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_22.jpg",
      title: "NikeCourt Royale",
      prise: " $13.55",
      pic: four,
    },
    {
      id: 4,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_21.jpg",
      title: "Nike Air Zoom SuperRep",
      prise: "$89.32",
      pic: five,
    },
  ];
  const zv = [
    {
      id: 5,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_20.jpg",
      title: "Nike Air Zoom Pegasus 37 P",
      prise: "$24.82",
      pic: five,
    },
    {
      id: 6,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_19.jpg",
      title: "NikeCourt Royale",
      prise: " $41.77",
      pic: five,
    },
    {
      id: 7,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_18.jpg",
      title: "Nike Air Max 270 React ENG",
      prise: " $91.29",
      pic: two,
    },
    {
      id: 8,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_17.jpg",
      title: "Nike Air Max Up",
      prise: " $95.59",
      pic: five,
    },
  ];
  const dugui = [
    {
      id: 9,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_16.jpg",
      title: "Nike DBreak-Type",
      prise: " $10.29",
      pic: five,
    },
    {
      id: 10,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_15.jpg",
      title: "Nike Air Zoom Tempo ",
      prise: "$77.22",
      pic: one,
    },
    {
      id: 11,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_14.jpg",
      title: "Nike Air Force 1 Shadow ",
      prise: " $93.74",
      pic: one,
    },
    {
      id: 12,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_13.jpg",
      title: "Nike React Infinity Run Fly",
      prise: "$24.82",
      pic: two,
    },
  ];
  const dbgifb = [
    {
      id: 13,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_12.jpg",
      title: "Nike Air Force 1 07 LX",
      prise: "$24.42",
      pic: five,
    },
    {
      id: 14,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_11.jpg",
      title: "Nike Air Zoom BB NXT",
      prise: "$24.82",
      pic: five,
    },
    {
      id: 15,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_14.jpg",
      title: "Nike Air Force 1 Shadow ",
      prise: " $93.74",
      pic: one,
    },
    {
      id: 5,
      src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_20.jpg",
      title: "Nike Air Zoom Pegasus 37 P",
      prise: "$24.82",
      pic: five,
    },
  ];

  return (
    <div className="supppper">
      <Header />
      <h2
        style={{
          marginTop: "30px",
          fontSize: "1.5rem",
          fontFamily: "Public Sans, sans-serif",
        }}
      >
        Products
      </h2>
      <div className="ghhgh">0</div>
      <AddShoppingCartIcon id="cart" />
      <div className="mainnnn">
        <Colapsed sx={{ marginRight: "20px" }} />
        <Taransition />
      </div>
      <div className="mainn">
        {data.map((e) => {
          return (
            <div className="main" key={e.id}>
              <div className="submain">
                <div className="ig">
                  <img src={e.src} id="jhv" />
                </div>
                <div className="footer">
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {e.title}...
                  </a>
                  <div className="subf">
                    <img src={e.pic} style={{ height: "15px" }} />
                    <h3>{e.prise}</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {zv.map((e) => {
          return (
            <div className="main" key={e.id}>
              <div className="submain">
                <div className="ig">
                  <img src={e.src} id="jhv" />
                </div>
                <div className="footer">
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {e.title}...
                  </a>
                  <div className="subf">
                    <img src={e.pic} style={{ height: "15px" }} />
                    <h3>{e.prise}</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {dugui.map((e) => {
          return (
            <div className="main" key={e.id}>
              <div className="submain">
                <div className="ig">
                  <img src={e.src} id="jhv" />
                </div>
                <div className="footer">
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {e.title}...
                  </a>
                  <div className="subf">
                    <img src={e.pic} style={{ height: "15px" }} />
                    <h3>{e.prise}</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {dbgifb.map((e) => {
          return (
            <div className="main" key={e.id}>
              <div className="submain">
                <div className="ig">
                  <img src={e.src} id="jhv" />
                </div>
                <div className="footer">
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {e.title}...
                  </a>
                  <div className="subf">
                    <img src={e.pic} style={{ height: "15px" }} />
                    <h3>{e.prise}</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
