import React from "react"

import { FaCity } from "@react-icons/all-files/fa/FaCity"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaFacebookMessenger } from "@react-icons/all-files/fa/FaFacebookMessenger"
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall"
import { FiPhoneForwarded } from "@react-icons/all-files/fi/FiPhoneForwarded"
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { SiMinutemailer } from "@react-icons/all-files/si/SiMinutemailer"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { FaMap } from "@react-icons/all-files/fa/FaMap"
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"

export const DefaultIcon = ({ label }) => {
    switch (label) {
        case "facebook":
        case "facebookFooter":
            return (
                <FaFacebookF />
            )
        case "mail":
        case "mailFooter":
            return (
                <SiMinutemailer />
            )

        case "instagram":
        case "instagramFooter":
            return (
                <FaInstagram />
            )
        case "whatsapp":
        case "whatsappFooter":
            return (
                <FaWhatsapp />
            )

        case "deliveryPhone":
        case "deliveryPhoneFooter":
            return (
                <FiPhoneForwarded />
            )

        case "phone":
        case "phoneFooter":
            return (
                <FiPhoneCall />
            )

        case "messenger":
        case "messengerFooter":
            return (
                <FaFacebookMessenger />
            )
        case "twitter":
        case "twitterFooter":
            return (
                <FaTwitter />
            )

        case "gitHub":
        case "gitHubFooter":
            return (
                <FaGithub />
            )

        case "linkedin":
        case "linkedinFooter":
            return (
                <FaLinkedinIn />
            )
        case "city":
        case "cityFooter":
            return (
                <FaCity />
            )
        case "street":
        case "streetFooter":
            return (
                <FaMap />
            )
        case "zipCode":
        case "zipCodeFooter":
            return (
                <FaMapMarkerAlt />
            )
        default:
            return <FaMapMarkerAlt />
    }
}

