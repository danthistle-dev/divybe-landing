import React from "react"
import PropTypes from "prop-types"

const Link = ({type, url, content}) => {
  if (type === "primary") {
    return (
      <a 
        href={url}
        style={{ backgroundColor: "#ff3d4b" }}
        className="py-2 md:py-3 px-6 my-2 mr-4 rounded-full text-white text-base md:text-lg border-2 border-transparent shadow
        transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      >{content}</a>
    )
  } else if (type === "secondary") {
    return (
      <a 
        href={url}
        style={{ border: "2px solid #ff3d4b", color: "#ff3d4b" }}
        className="py-2 md:py-3 px-6 my-2 mr-4 rounded-full text-white text-base md:text-lg font-medium shadow
        transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      >{content}</a>
    )
  }
}

Link.propTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Link;