import React from "react"

export const Button = ({ children, onClick }) => {
  return (
    <span
      style={{
        borderRadius: 7,
        backgroundColor: `#65B864`,
        color: "white",
        padding: '5px 12px'
      }}
    >
      {children}
    </span>
  )
}
