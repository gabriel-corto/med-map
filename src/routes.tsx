import { createBrowserRouter } from "react-router-dom";
import { Landing } from "./_pages/start/start";
import { AuthLayout } from "./_layouts/auth";
import { SignUp } from "./_pages/auth/sign-up";
import { SignIn } from "./_pages/auth/sign-in";
import { PharmacyLayout } from "./_layouts/pharmacy";
import { Medicinals } from "./_pages/app/pharmacy/medicinals/medicinal";
import { Deposits } from "./_pages/app/pharmacy/deposits/deposit";
import { Pendings } from "./_pages/app/pharmacy/pendings/pending";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Landing />,
  },
  {
    path: "",
    element: <PharmacyLayout />,
    children: [
      { path: "/medicamentos", element: <Medicinals /> },
      { path: "/depositos", element: <Deposits /> },
      { path: "/pendentes", element: <Pendings /> },
    ],
  },
  {
    path: "",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);
