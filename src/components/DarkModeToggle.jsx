import React from 'react'

const DarkModeToggle = ({ isDarkMode, setIsDarkMode }) => {
  // TODO: Implement dark mode toggle logic
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <button onClick={handleToggle}>
      {/* TODO: Update this text from Dark to Light dynamically */}
      {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
