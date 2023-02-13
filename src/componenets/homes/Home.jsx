import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./home.scss";
const Home = ({ click }) => {
  const dep = 1;
  const [first, setfirst] = useState([]);
  useEffect(() => {
    setfirst([
      {
        title: "Modern Glass Villa",
        img: "house-2.jpeg",
        features: {
          country: "Canada",
          rooms: "6 rooms",
          area: "450m",
          price: "$2,750,000",
        },
      },
      {
        title: "Beautiful Family House",
        img: "house-1.jpeg",
        features: {
          country: "USA",
          rooms: "5 rooms",
          area: "325m",
          price: "$1,200,000",
        },
      },
      {
        title: "Cozy Country House",
        img: "house-3.jpeg",
        features: {
          country: "UK",
          rooms: "4 rooms",
          area: "250m",
          price: "$850,000",
        },
      },
      {
        title: "Modern Family Appartment",
        img: "house-4.jpeg",
        features: {
          country: "Italy",
          rooms: "3 rooms",
          area: "300m",
          price: "$620,000",
        },
      },
      {
        title: "Country Side House",
        img: "house-5.jpeg",
        features: {
          country: "Japan",
          rooms: "5 rooms",
          area: "220m",
          price: "$500,000",
        },
      },
      {
        title: "Beautiful Family House",
        img: "house-6.jpeg",
        features: {
          country: "Austria",
          rooms: "7 rooms",
          area: "500m",
          price: "$2,200,000",
        },
      },
    ]);
  }, [dep]);

  return (
    <div className="home">
      {first?.map((res, ind) => {
        return <Card props={res} click={onclick} />;
      })}
    </div>
  );
};

export default Home;
