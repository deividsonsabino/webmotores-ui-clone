import React, {useState} from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const [activeMenuCar, setActiveMenuCar] = useState(true)
  const [activeMenuBike, setActiveMenuBike ] = useState(false)
  
  const menu = [
    {
      title: "Comprar Carros",
      placeholder: "Digite marca ou modelo do carro",
      active:activeMenuCar
    },
    {
      title: "Comprar Motos",
      placeholder: "Digite marca ou modelo de moto",
      active:activeMenuBike
    },
    {
      title: "Quero Vender",
      route: "/Vender"
    },
    {
      title: "Quero Financiar",
      route: "/Financiar"
    },
  ]
  
  const last = [
    {
      brand: "FORD",
      model: "FIESTA",
      city:"Piracicaba - SP"
    },
    {
      brand: "HYUNDAI",
      model: "HB20",
      city:"Piracicaba - SP"
    },
    {
      brand: "VOLKSWAGEN",
      model: "JETTA",
      city:"Piracicaba - SP"
    },
    {
      brand: "PEUGEOT",
      model: "308",
      city:"Piracicaba - SP"
    },
  ]
  
  const handleMenu = (item) => {
    if (item.title === "Comprar Carros") {
      setActiveMenuCar(!activeMenuCar)
      if (activeMenuBike) {
        setActiveMenuBike(false)
      }
    } else if (item.title === "Comprar Motos") {
      setActiveMenuBike(!activeMenuBike)
      if (activeMenuCar) {
        setActiveMenuCar(false)
      } 
    }
  }

  return (
  <Layout>
    <Seo title="Home" />
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
    >
      <div>
        <img src="https://tpc.googlesyndication.com/simgad/10817619479245791022?" alt="banner" />
      </div>
      <div>
        <img src="https://tpc.googlesyndication.com/simgad/14415723953216398405?" alt="banner" />
      </div>
      <div>
        <img src="https://tpc.googlesyndication.com/simgad/1044702841224719890?" alt="banner" />
      </div>
    </Carousel>
    <div className="shadow-lg w-auto max-w-4xl mx-auto md:px-8 b-20 bg-white transform -translate-y-3 rounded-sm">
      <div className="flex pt-6 pl-4 text-left">
          {menu.map(item => (
            <Link key={item.title} to={item.route ? item.route : "/"}>
              <button onClick={() => handleMenu(item)} className={`${item.active ? 'border-b-2 border-red-600 font-bold text-dark' : 'text-gray-400'} mr-8 text-md my-8`} value={item.title}>{item.title}</button>
            </Link>
        ))}

      </div>
      <div className="mx-4">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 pb-8 md:pb-0">
            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" className="w-4 h-4"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </span>
          <input type="search" name="q" className="border-2 w-full md:w-9/12 h-8 py-2 text-sm text-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder={activeMenuCar ? "Digite marca ou modelo do carro" : "Digite marca ou modelo do moto"} autoComplete="off"></input>
          <button className="mt-2 md:mt-0 w-full md:w-auto md:ml-2 bg-red-600 text-white p-1 px-2 rounded-md shadow-2">ver ofertas</button>
        </div>
      </div>
      <div className="m-4 w-full">
        <p className="text-center md:text-left m-0 text-gray-500 text-sm font-bold">Suas últimas buscas</p>
        <div className="block md:flex">
          {last.map(item => (
            <div key={item.brand} className="rounded-md mr-6 my-2">
              <div className="bg-gray-600 text-white text-center px-10 py-2">
                <p className="m-0 text-xs">{item.brand}</p>
                <p className="m-0 font-extrabold">{item.model}</p>
              </div>
              <div className="rounded-sm border-2 flex justify-center items-center p-4">
                <div>
                  <button className="border-2 rounded-2xl text-gray-400 text-sm px-2">{item.city}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default IndexPage
