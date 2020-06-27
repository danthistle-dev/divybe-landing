import React from "react"
import PropTypes from "prop-types"

const Feature = ({ children, title, content }) => {
  return (
    <div style={{ maxWidth: "300px"}} className="flex flex-col m-0 sm:m-4 p-4 rounded transition duration-300 ease-in-out hover:bg-white hover:shadow-lg transform hover:scale-105">
      {children}
      <h1 className="font-medium text-2xl mt-4 text-gray-800">{title}</h1>
      <p className="mt-2 text-gray-800">{content}</p>
    </div>
  )
}

Feature.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Feature