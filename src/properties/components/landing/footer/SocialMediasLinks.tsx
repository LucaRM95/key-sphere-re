import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

export const SocialMediasLinks = () => {
  return (
    <div className="flex justify-between gap-5">
        <FaFacebook />
        <FaXTwitter />
        <FaLinkedinIn />
        <FaInstagram />
    </div>
  )
}
