import React from "react"
import PropTypes from "prop-types"

const Button = ({type, action, content}) => {
  if (type === "primary") {
    return (
      <button 
        onClick={action}
        style={{ backgroundColor: "#ff3d4b" }}
        className="py-2 md:py-3 px-6 my-2 mr-4 rounded-full text-white text-base md:text-lg border-2 border-transparent shadow
        transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      >{content}</button>
    )
  } else if (type === "secondary") {
    return (
      <button 
        onClick={action}
        style={{ border: "2px solid #ff3d4b", color: "#ff3d4b" }}
        className="py-2 md:py-3 px-6 my-2 mr-4 rounded-full text-white text-base md:text-lg font-medium shadow
        transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      >{content}</button>
    )
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired
}

export default Button;