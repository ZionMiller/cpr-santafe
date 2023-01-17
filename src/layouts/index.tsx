import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const IndexLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="content flex flex-col h-screen justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default IndexLayout;