import React from "react"

import { AiOutlineFacebook } from "@react-icons/all-files/ai/AiOutlineFacebook";
import { BiMailSend } from "@react-icons/all-files/bi/BiMailSend";
import { FaFax } from "@react-icons/all-files/fa/FaFax";
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";

export const mainDepartmentItems = [
    {
      icon: <BiMailSend />,
      href: "mailto:biuro@kopalniagnejsu.pl",
      content: "biuro@kopalniagnejsu.pl",
    },
    {
      icon: <FiPhoneCall />,
      href: "tel:748177015",
      content: "+ 74 817 70 15",
    },
    {
      icon: <FaFax />,
      href: "fax:665065210",
      content: "665-065-210",
    },
  ]

  export const offerDepartmentItems = [
    {
      icon: <BiMailSend />,
      href: "mailto:lg@ozdobne.kopalniagnejsu.pl",
      content: "lg@ozdobne.kopalniagnejsu.pl",
    },
    {
      icon: <FiPhoneCall />,
      href: "tel:+48600184208",
      content: "+48 600 184 208",
    },
    {
      icon: <AiOutlineFacebook />,
      href: "https://www.facebook.com/Kopalnia-Gnejsu-Pomian%C3%B3w-Doboszowice-sp-z-oo-300349376653944/",
      content: "profil na Facebook'u",
    },
  ]