import React from 'react'
import ProductsList from './components/ProductsList/ProductsList'
import Header from './components/Header/Header'

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
      name: 'Chaise',
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
    {
      id: 7,
      name: 'Vélo',
      price: 1200,
      image: 'images/velo.jpg',
    },
    {
      id: 8,
      name: 'Machine à café',
      price: 1150,
      image: 'images/machine-a-cafe.jpg'
    },
    {
      id: 9,
      name: 'Smartphone',
      price: 760,
      image: 'images/smartphone.jpg'
    },
    {
      id: 10,
      name: 'Lecteur de vinyle',
      price: 100,
      image: 'images/lecteur-vinyle.jpg'
    },
    {
      id: 11,
      name: 'Tondeuse à gazon',
      price: 325,
      image: 'images/tondeuse.jpg'
    },
    {
      id: 12,
      name: 'Robot Patissier',
      price: 175,
      image: 'images/robot-patissier.jpg'
    }
  ]

  return (
    <div className="app">
      <Header /> 
      <ProductsList products={products}/>
    </div>
  )
}

export default App;
