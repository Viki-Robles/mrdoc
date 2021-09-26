import React, { useState, Fragment } from "react";
import booking from "../NavBar/images/booking.svg";
import contract from "../NavBar/images/contract.svg";
import doctor from "../NavBar/images/doctor.svg";
import dashboard from "../NavBar/images/dashboard.svg";
import { Link } from "react-router-dom";
import { SIGN_UP_PAGE_PATH } from "../../config/paths";

const LINKS = [
  { label: "Dashboard", href: "/dashboard", icon: dashboard },
  { label: "Treatments", href: "/treatments", icon: doctor },
  { label: "Bookings", href: "/bookings", icon: booking },
  { label: "Contract", href: "", icon: contract },
];
export default function NavBar(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);

  return <Fragment></Fragment>;
}
