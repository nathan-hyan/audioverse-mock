import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Checkout,
  Landing,
  PrinterSelection,
  PurchaseComplete,
} from "@screens";

import "./main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/printer-selection",
    element: <PrinterSelection />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/purchase-complete",
    element: <PurchaseComplete />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
