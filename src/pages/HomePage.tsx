import React from "react";
import HeaderComponent from "../components/HeaderComponent";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
      <p>You can add more content here.</p>
    </div>
  );
};

export default HomePage;
