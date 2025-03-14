import { createBrowserRouter } from "react-router-dom"

import { Landing } from "./pages/landing"

import { AuthLayout } from "./layouts/auth"
import { SignUp } from "./pages/auth/sign-up"
import { SignIn } from "./pages/auth/sign-in"
import { Recovery } from "./pages/auth/recovery"
import { ResetPassword } from "./pages/auth/reset-password"

import { PharmacyLayout } from "./layouts/pharmacy"
import { Home } from "./pages/app/pharmacy/home"
import { Deposits } from "./pages/app/pharmacy/deposits"
import { Orders } from "./pages/app/pharmacy/orders"
import { VisitDeposit } from "./pages/app/pharmacy/visit-deposit"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "recovery", element: <Recovery /> },
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },

  {
    path: "/pharmacy",
    element: <PharmacyLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "deposits", element: <Deposits /> },
      { path: "orders", element: <Orders /> },
      { path: "view-deposit", element: <VisitDeposit /> },
    ],
  },
])
