import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import ServiceFirstComponent from "../components/ServiceFirstComponent";
import ServiceSecondComponent from "../components/ServiceSecondComponent";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <ServiceFirstComponent />
      <ServiceSecondComponent />
    </div>
  );
};

export default HomePage;
