import React from "react"

import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import { FaWhatsappSquare } from "@react-icons/all-files/fa/FaWhatsappSquare";
import { FaEnvelopeSquare } from "@react-icons/all-files/fa/FaEnvelopeSquare";

export const contactNav = [
    {
        href: "tel:571-901-144",
        content: "zadzwoń",
        style: null,
    },
    {
        href: "whatsapp://send?phone=48571901144",
        content: "napisz",
        style: true,
    }
]

export const contactItems = [

    {
        icon: <FaPhoneSquareAlt />,
        href: "tel:571-901-144",
        content: "571 901 144",
        alt: "Ventus Trade numer kontaktowy"
    },
    {
        icon: <FaEnvelopeSquare />,
        href: "mailto:auta@ventus-trade.pl",
        content: "auta@ventus-trade.pl",
        alt: "Ventus Trade mail kontaktowy"
    },
    {
        icon: <FaWhatsappSquare />,
        href: "whatsapp://send?phone=48571901144",
        content: "571 901 144",
        alt: "Ventus Trade numer Whatsapp"
    },
]
