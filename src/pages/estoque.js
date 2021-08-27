import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ImEqualizer } from "@react-icons/all-files/im/ImEqualizer"

const cars = [
  {
    name: "TOYOTA COROLLA",
    model: "2.0 VVT-IE FLEX XEI DIRECT SHIFT",
    value: "R$ 184.900",
    year: "2020/2021",
    km: "3500 km",
    city: "Rio de Janeiro - RJ",
    thumb:
      "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2021/202108/20210820/toyota-corolla-2.0-vvtie-flex-xei-direct-shift-wmimagem10394133457.jpg?s=fill&w=249&h=186&q=70",
  },
  {
    name: "TOYOTA COROLLA",
    model: "2.0 VVT-IE FLEX XEI DIRECT SHIFT",
    value: "R$ 184.900",
    year: "2020/2021",
    km: "3500 km",
    city: "Rio de Janeiro - RJ",
    thumb:
      "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2021/202108/20210820/toyota-corolla-2.0-vvtie-flex-xei-direct-shift-wmimagem10394133457.jpg?s=fill&w=249&h=186&q=70",
  },
  {
    name: "TOYOTA COROLLA",
    model: "2.0 VVT-IE FLEX XEI DIRECT SHIFT",
    value: "R$ 184.900",
    year: "2020/2021",
    km: "3500 km",
    city: "Rio de Janeiro - RJ",
    thumb:
      "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2021/202108/20210820/toyota-corolla-2.0-vvtie-flex-xei-direct-shift-wmimagem10394133457.jpg?s=fill&w=249&h=186&q=70",
  },
  {
    name: "TOYOTA COROLLA",
    model: "2.0 VVT-IE FLEX XEI DIRECT SHIFT",
    value: "R$ 184.900",
    year: "2020/2021",
    km: "3500 km",
    city: "Rio de Janeiro - RJ",
    thumb:
      "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2021/202108/20210820/toyota-corolla-2.0-vvtie-flex-xei-direct-shift-wmimagem10394133457.jpg?s=fill&w=249&h=186&q=70",
  },
  {
    name: "TOYOTA COROLLA",
    model: "2.0 VVT-IE FLEX XEI DIRECT SHIFT",
    value: "R$ 184.900",
    year: "2020/2021",
    km: "3500 km",
    city: "Rio de Janeiro - RJ",
    thumb:
      "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2021/202108/20210820/toyota-corolla-2.0-vvtie-flex-xei-direct-shift-wmimagem10394133457.jpg?s=fill&w=249&h=186&q=70",
  },
  {
    name: "TOYOTA COROLLA",
    model: "2.0 VVT-IE FLEX XEI DIRECT SHIFT",
    value: "R$ 184.900",
    year: "2020/2021",
    km: "3500 km",
    city: "Rio de Janeiro - RJ",
    thumb:
      "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2021/202108/20210820/toyota-corolla-2.0-vvtie-flex-xei-direct-shift-wmimagem10394133457.jpg?s=fill&w=249&h=186&q=70",
  },
]

const Estoque = () => {
  return (
    <Layout>
      <Seo title="Estoque" />
      <div className="flex justify-center items-center bg-gray-200">
        <div className="h-screen w-1/5 bg-white fixed left-0">1</div>
        <div className="flex flex-col h-screen w-full bg-gray-200 ml-60 h-full">
          <div className="w-full fixed mt-14 bg-white px-2 pt-5 pb-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ImEqualizer />
              <button className="border-2 rounded-xl px-4">
                Piracicaba-SP
              </button>
            </div>
            <div>
              <p className="m-0 text-tiny text-gray-400">MAIS RELEVANTES</p>
            </div>
          </div>
          <div className="mt-28 mx-4">
            <p className="text-gray-500 text-xs m-0">Home > carros</p>
            <h1 className="text-sm m-0 mt-4">
              Carros Novos e Usados em Todo o Brasil
            </h1>
            <p className="text-xs text-gray-500">289.472 carros encontrados</p>
          </div>
          <div className="px-20 grid grid-cols-3 bg-gray-200 gap-2 pb-10">
            {cars.map(car => (
              <div className="bg-white shadow-sm">
                <img src={car.thumb} className="w-full" />
                <div className="px-2">
                  <h1 className="text-xs m-0">{car.name}</h1>
                  <h1 className="text-xs text-gray-400 m-0">{car.model}</h1>
                  <h1 className="text-sm m-0 font-semibold">{car.value}</h1>
                  <div className="flex text-xs justify-between pr-8">
                    <p>{car.year}</p>
                    <p>{car.km}</p>
                  </div>
                  <div>
                    <p className="m-0 text-tiny">{car.city}</p>
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

export default Estoque
