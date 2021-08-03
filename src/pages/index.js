import React, {useState} from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"



import  Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const [activeMenuCar, setActiveMenuCar] = useState(true)
  const [activeMenuBike, setActiveMenuBike] = useState(false)
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const responsiveHeader = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 6000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
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

  const offers = [
    {
      title:"Ofertas até R$30mil"
    },
    {
      title:"Ofertas de R$30 mil a R$40 mil"
    },
    {
      title:"Ofertas de R$40 mil a R$50 mil"
    },
    {
      title:"Ofertas de R$50mil a R$60 mil"
    },
    {
      title:"Ofertas de R$60 mil ou mais"
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
        responsive={responsiveHeader}
        containerClass="carousel-container carousel-justify-center"
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
    <div className="md:flex md:flex-wrap md:justify-star shadow-lg w-auto max-w-4xl mx-auto md:px-8 b-20 bg-white transform -translate-y-8 rounded-sm bg-dark">
      <div className="flex md:pt-6 text-left ml-4">
          {menu.map(item => (
            <Link key={item.title} to={item.route ? item.route : "/"}>
              <button onClick={() => handleMenu(item)} className={`${item.active ? 'border-b-2 border-red-600 font-bold text-dark text-xs md:text-md' : 'text-gray-400'} mr-4 md:mr-8 text-xs md:text-md my-8`} value={item.title}>{item.title}</button>
            </Link>
        ))}

      </div>
      <div className="md:mx-4 md:w-full mr-6">
        <div className="md:mx-0 mx-4 md:flex md:items-center md:justify-start relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 pb-12 md:pb-0">
            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" className="w-4 h-4"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </span>
          <input type="search" className="border-2 w-full md:w-9/12 h-12 md:h-8 py-2 text-sm text-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder={activeMenuCar ? "Digite marca ou modelo do carro" : "Digite marca ou modelo do moto"} autoComplete="off"/>
          <button className="h-12 md:h-8 mt-2 md:mt-0 w-full md:w-auto md:ml-2 bg-red-600 text-white p-1 md:px-8 sm:px-6 rounded-md shadow-2">ver ofertas</button>
        </div>
      </div>
      <div className="m-4">
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
      <div className="w-auto max-w-4xl mx-auto b-20">
        <p>Categorias</p>
        <div>
          <Carousel responsive={responsive}>
            {offers.map(item => (
              <div key={ item.title } className="bg-gray-700 mr-4 p-10 text-white rounded-lg h-full font-bold text-lg" style={{
                background: "linear-gradient(135deg, rgba(6,6,6,1) 0%, rgba(121,13,9,1) 35%, rgba(250,26,0,1) 100%)" }}>
                <p>{item.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
