import React, {useState} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart"
import { HiOutlineChatAlt2 } from "@react-icons/all-files/hi/HiOutlineChatAlt2"
import {IoIosNotificationsOutline} from "@react-icons/all-files/io/IoIosNotificationsOutline"


function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  const handleIcon = (icon) => {
    switch (icon.name) {
      case "FaRegHeart":
        return (<FaRegHeart size="15"/>)
      case "HiOutlineChatAlt2":
        return (<HiOutlineChatAlt2 size="20" />)
      case "IoIosNotificationsOutline":
        return (<IoIosNotificationsOutline className="text-red-600" size="20" />)
      default:
        return icon.title
    }
  }

    return (
    <header>
        <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto md:px-8 px-4">
          <Link to="/">
            <p className="mt-5">{siteTitle}</p>
          </Link>

          <button
            className="items-center block px-3 py-2 md:hidden"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <nav className={`${isExpanded ? `block` : `hidden`
            } md:block md:items-center w-full md:w-auto`}
          >
            {[
              {
                route: `/`,
                title: `comprar`
              },
              {
                route: `/`,
                title: `Vender`
              },
              {
                route: `/`,
                title: `Serviços`
              },
              {
                route: `/`,
                title: `Ajuda`
              },
              {
                route: `/`,
                title: `Entrar`,
              },              {
                route: `/`,
                name: `FaRegHeart`
              },              {
                route: `/`,
                name: `HiOutlineChatAlt2`
              },              {
                route: `/`,
                name: `IoIosNotificationsOutline`
              },
              
              
            ].map((link) =>
              <Link
                className="block mt-4 text-gray-400 text-sm no-underline md:inline-block md:mt-0 md:ml-6"
                key={link.title}
                to={link.route}
              >
                {handleIcon(link)} 
              </Link>
            )}
          </nav>
        </div>
      </header >
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
