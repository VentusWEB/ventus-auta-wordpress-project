import React from "react"

import { ImFacebook2 } from "@react-icons/all-files/im/ImFacebook2";
import { SiGooglemybusiness } from "@react-icons/all-files/si/SiGooglemybusiness";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";

export const footerIcons = [
    { icon: (<FaPhoneSquareAlt />), title: "telefon kontaktowy", link: "tel:748177015" },
    { icon: (<ImFacebook2 />), title: "facebook", link: "https://www.facebook.com/Kopalnia-Gnejsu-Pomian%C3%B3w-Doboszowice-sp-z-oo-300349376653944/" },
    { icon: (<SiGooglemybusiness />), title: "wizytówka google", link: "https://www.google.com/maps/place/Kopalnia+gnejsu/@50.4992395,16.9664319,15z/data=!4m5!3m4!1s0x0:0x19ce455603782150!8m2!3d50.4992395!4d16.9664319" }
]


export const footerInfo = [
    /*     { title: "Mapa strony", link: "/sitemap/sitemap-index.xml" }, */
    { title: "Polityka prywatności", link: "/polityka-prywatnosci" },
    { title: "Coppyright © 2021", link: "/#" },
]



