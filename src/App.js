import React from 'react'
import ProductsList from './components/ProductsList/ProductsList'

const App = () => {
  const products = [
    {
      id: 1,
      name: 'Aspirateur',
      price: 200,
      image: 'images/aspirateur.jpg',
    },
    {
      id: 2,
      name: 'Bureau',
      price: 60,
      image: 'images/bureau.jpg',
    },
    {
      id: 3,
      name: 'Appareil Photo',
      price: 150,
      image: 'images/camera.jpg',
    },
    {
      id: 4,
      name: 'chaise',
      price: 35,
      image: 'images/chaise.jpg',
    },
    {
      id: 5,
      name: 'Sofa',
      price: 450,
      image: 'images/sofa.jpg',
    },
    {
      id: 6,
      name: 'Télévision',
      price: 650,
      image: 'images/tv.jpg',
    },
  ]

  return (
    <div className="app">
      <h1>Ma boutique</h1>
      <ProductsList products={products}/>
    </div>
  )
}

export default App;
