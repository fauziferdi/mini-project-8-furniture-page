import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import ServiceFirstComponent from "../components/ServiceFirstComponent";
import ServiceSecondComponent from "../components/ServiceSecondComponent";
import CategoryComponent from "../components/CategoryComponent";
import FooterComponent from "../components/FooterComponent";
import ProductComponent from "../components/ProductComponent";
import SubscribeComponent from "../components/SubscribeComponent";
import TestimonnialComponent from "../components/TestimonnialComponent";
import NavbarComponent from "../components/NavbarComponent";

const HomePage: React.FC = () => {
  return (
    <div>
      <NavbarComponent />
      <HeaderComponent />
      <ServiceFirstComponent />

      <CategoryComponent />
      <ServiceSecondComponent />
      <ProductComponent />

      <TestimonnialComponent />
      <SubscribeComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
