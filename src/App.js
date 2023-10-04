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
    }
  ]

  return (
    <div className="app">
      <div className="header">
        <h1>Ma boutique</h1>
        <div className="header-nav">
          <p>Accueil</p>
          <p>Mon Panier</p>
        </div>        
      </div>    
      <ProductsList products={products}/>
    </div>
  )
}

export default App;
