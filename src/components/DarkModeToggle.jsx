import React from 'react'

const DarkModeToggle = ({ isDarkMode, setIsDarkMode }) => {
  // TODO: Implement dark mode toggle logic
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <button onClick={handleToggle}>
      {/* TODO: Update this text from Dark to Light dynamically */}
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
