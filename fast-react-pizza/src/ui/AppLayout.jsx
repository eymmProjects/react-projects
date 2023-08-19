import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Loader from "./Loader";
function AppLayout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";

  return (
    <div>
      <Header />
      {isLoading && <Loader />}

      <main>
        <h1>Content</h1>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
