import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

// Sample dataset aligned with the dropdown options
const initialProducts = [
  { id: 1, name: "Apple", category: "Fruits", inStock: true},
  { id: 2, name: "Banana", category: "Fruits", inStock: true},
  { id: 3, name: "Milk", category: "Dairy", inStock: true},
  { id: 4, name: "Yogurt", category: "Dairy", inStock: true},
]

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false)

  // TODO: Implement state for cart management
  const [cart, setCart] = useState([])

  // TODO: Implement state for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Helper function to append a product to the cart state array
  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }

  // Filter products based on dropdown selection
  const filteredProducts = initialProducts.filter(product => {
    if (selectedCategory === 'all') return true
    return product.category === selectedCategory
  })

  // Optional background styling adjustment for visual feedback
  const appStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    minHeight: '100vh',
    padding: '20px'
  }

  return (
    <div style={appStyle}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* TODO: Implement category filter dropdown */}
      <label htmlFor="category-select">Filter by Category: </label>
      <select 
        id="category-select"
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Render ProductList with filtered items and add-to-cart handler */}
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />

      {/* TODO: Implement and render Cart component */}
      <Cart cartItems={cart} />
    </div>
  )
}

export default App
