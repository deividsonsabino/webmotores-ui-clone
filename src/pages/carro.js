import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const carro = {
  nome: "Civic",
  desc: "2.0 lxr 16v flex 4p automático",
  marca: "honda",
  ano: "2013/2014",
  carroceria: "Sedã",
  cor: "Preto",
  licenciado: "sim",
  km: 142.0,
  combustivel: "Gasolina e álcool",
  troca: "Sim",
  cambio: "Automático",
  finalPlaca: 2,
  ipvaPago: "Sim",
  valor: "66.990",
  fotos: [
    {
      url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202107/20210722/honda-civic-2.0-lxr-16v-flex-4p-automatico-wmimagem15344860898.jpg?s=fill&w=552&h=414&q=60",
    },
    {
      url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202107/20210722/honda-civic-2.0-lxr-16v-flex-4p-automatico-wmimagem15344899926.jpg?s=fill&w=552&h=414&q=60",
    },
    {
      url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202107/20210722/honda-civic-2.0-lxr-16v-flex-4p-automatico-wmimagem1534492806.jpg?s=fill&w=552&h=414&q=60",
    },
    {
      url: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202107/20210722/honda-civic-2.0-lxr-16v-flex-4p-automatico-wmimagem15344956138.jpg?s=fill&w=552&h=414&q=60",
    },
  ],
}

const SecondPage = () => (
  <Layout>
    <Seo title="Carro" />
    <Carousel responsive={responsive}>
      {carro.fotos.map(item => (
        <div className="mr-2">
          <img src={item.url} />
        </div>
      ))}
    </Carousel>
    <div className="md:flex max-w-8xl mx-auto md:px-2">
      <div className="md:w-3/5 mr-2">
        <div className="flex flex-col pt-10 bg-white rounded-lg md:transform md:-translate-y-14 rounded-sm w-full shadow-xl">
          <div className="px-10">
            <div className="md:flex justify-between">
              <div>
                <p className="m-0 text-3xl font-bold uppercase">
                  {carro.marca}{" "}
                  <span className="text-red-600">{carro.nome}</span>
                </p>
                <p className="m-0 uppercase text-xs">{carro.desc}</p>
              </div>
              <div>
                <button className="px-3 border-2 border-red-600 rounded-3xl text-tiny font-bold">
                  CarDelivery
                </button>
              </div>
            </div>
            <div className="flex mt-5">
              <div className="md:mr-14 mr-8">
                <div className="mb-3">
                  <p className="m-0 text-xs text-gray-400">Ano</p>
                  <p className="m-0 font-bold text-sm">{carro.ano}</p>
                </div>
                <div className="mb-3">
                  <p className="m-0 text-xs text-gray-400">Carroceria</p>
                  <p className="m-0 font-bold text-sm">{carro.carroceria}</p>
                </div>
                <div className="mb-3">
                  <p className="m-0 text-xs text-gray-400">Cor</p>
                  <p className="m-0 font-bold text-sm">{carro.cor}</p>
                </div>
                <div>
                  <p className="m-0 text-xs text-gray-400">Licenciado</p>
                  <p className="m-0 font-bold text-sm">{carro.licenciado}</p>
                </div>
              </div>
              <div className="md:mr-14 mr-8">
                <div className="mb-3">
                  <p className="m-0 text-xs text-gray-400">KM</p>
                  <p className="m-0 font-bold text-sm">{carro.km}</p>
                </div>
                <div className="mb-3">
                  <p className="m-0 text-xs text-gray-400">Combustível</p>
                  <p className="m-0 font-bold text-sm">{carro.combustivel}</p>
                </div>
                <div className="mb-3">
                  <p className="m-0 text-xs text-gray-400">Aceita troca</p>
                  <p className="m-0 font-bold text-sm">{carro.troca}</p>
                </div>
              </div>
              <div>
                <div className="mb-3">
                  <p className="m-0 text-xs text-gray-400">Câmbio</p>
                  <p className="m-0 font-bold text-sm">{carro.cambio}</p>
                </div>
                <div className="mb-3">
                  <p className="m-0 text-xs text-gray-400">Final de placa</p>
                  <p className="m-0 font-bold text-sm">{carro.finalPlaca}</p>
                </div>
                <div>
                  <p className="m-0 text-xs">IPVA pago</p>
                  <p className="m-0 font-bold text-sm">{carro.ipvaPago}</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full bg-gray-200 my-8" />
          <div className="w-full px-10">
            <p className="text-xs">Sobre os diferenciais do anúncio</p>
            <div className="md:flex items-center justify-between">
              <div className="flex flex-col text-sm">
                <p className="m-0 font-bold">Vieochamda</p>
                <p className="m-0 md:text-tiny">
                  Agende um horário para ver o carro em vídeo!
                </p>
              </div>
              <div>
                <button className="bg-red-600 text-white text-xs px-4 py-0 h-8 text-tiny rounded-lg font-semibold md:my-0 my-4 w-full md:w-auto">
                  Agendar videochamado
                </button>
              </div>
            </div>
            <div className="flex my-8">
              <div>
                <p className="font-semibold text-md m-0">CarDelivery</p>
              </div>
              <div className="ml-20">
                <p className="font-semibold text-md m-0">CarDelivery</p>
              </div>
            </div>
          </div>
          <hr className="w-full bg-gray-200 my-4" />
          <div className="flex flex-col justify-center px-10 py-5">
            <p className="m-0 my-1 text-xs text-gray-400">Sobre este carro</p>
            <p className="m-0 text-sm">
              EUROCAR MULTIMARCAS - TETO SOLAR / SISTEMA DE ENTRETENIMENTO C/
              NAVEGADOR, BLUETOOTH, ESPELHAMENTO DE CELULAR, ENTRADA USB E
              CÂMERA DE RÉ / CARREGADOR WIRELESS P/ SMARTPHONE / ACESSÓRIOS
              ORIGINAIS HONDA COLOCADOS NA CONCESSIONÁRIA (EXTENSOR DA LANTERNA
              TRASEIRA, SOLEIRAS E FRISOS) / FREIO DE ESTACIONAMENTO ELÉTRICO /
              BANCOS DO MOTORISTA C/ AJUSTES ELÉTRICOS / MODO ECO/ SENSOR DE
              LUMINOSIDADE / FARÓIS FULL LED.Procure um de nossos consultores de
              vendas para qualquer dúvida ou esclarecimento. Outros Opcionais:
              Farol de neblina, Direção Elétrica, Comando de áudio no volante,
              Banco bi-partido, Controle de estabilidade, Distribuição
              eletrônica de frenagem, Kit Multimídia, Pára-choques na cor do
              veículo.
            </p>
          </div>
        </div>
        <div className="flex flex-col px-10 pt-10 md:mb-5 bg-white md:transform md:-translate-y-10 rounded-lg shadow-xl">
          <div>
            <p className="m-0 my-1 text-xs text-gray-400">Itens de veículo</p>
            <div className="grid md:grid-cols-4 grid-cols-2 font-semibold">
              <p className="m-0 mr-4 my-2 md:text-md text-xs">Airbag</p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">Alarme</p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">Ar quente</p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">
                Banco com regulagem de altura
              </p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">
                Computador de bordo
              </p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">
                Controle de tração
              </p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">
                Desembaçador traseiro
              </p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">
                Ar condicionado
              </p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">
                Encosto de cabeça traseiro
              </p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">Freio ABS</p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">
                Controle automático de velocidade
              </p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">
                Retrovisores elétricos
              </p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">
                Rodas de liga leve
              </p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">
                Sensor de estacionamento
              </p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">Teto solar</p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">
                Retrovisor fotocrômico
              </p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">
                Travas elétricas
              </p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">
                Vidros elétricos
              </p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">
                Volante com regulagem de altura
              </p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">
                Bancos em couro
              </p>
              <p className="m-0 mr-4 my-2 md:text-md text-xs">GPS</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-10 pt-10 md:mb-5 bg-gray-800 text-white md:transform md:-translate-y-10 rounded-lg shadow-xl">
          <p className="text-xs">Compare os preços</p>
          <div className="flex">
            <div className="w-1/4">
              <p className="m-0 text-tiny">Valor anunciado</p>
              <p className="m-0 font-bold">R$ {carro.valor}</p>
            </div>
            <div className="w-2/4">
              <p className="m-0 text-xs font-bold">Webmotores Piracicaba</p>
              <p className="m-0 font-bold">R$ {carro.valor}</p>
              <p className="m-0 text-tiny">
                Valor médio de carros iguais a este anunciado na Webmotores
                Piracicaba
              </p>
            </div>
            <div className="w-1/4">
              <p className="m-0 font-bold">fipe</p>
              <p className="m-0 font-bold">R$ {carro.valor}</p>
              <p className="m-0 text-tiny">Valor deste carro na Tabela Fipe</p>
            </div>
          </div>
          <p className="my-10 text-xs">
            Consulte aqui{" "}
            <b>{carro.nome} na tabela FIPE Webmotores Piracicaba</b> do seu
            estado
          </p>
        </div>
        <div className="flex flex-col p-10 md:mb-10 bg-white md:transform md:-translate-y-10 rounded-lg shadow-xl">
          <div className="mt-5">
            <p className="m-0 text-2xl font-bold">
              Quer financiar esse veículo?
            </p>
            <p className="m-0 text-xs">
              Para ver as parcelas, precisamos de alguns dados
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 my-5">
            <input
              placeholder="Nome*"
              type="text"
              className="rounded-sm border-2 border-gray-300 h8"
            />
            <input
              placeholder="Data de Nascimento*"
              type="text"
              className="rounded-sm border-2 border-gray-300 h8"
            />
            <input
              placeholder="CPF*"
              type="text"
              className="rounded-sm border-2 border-gray-300 h8"
            />
            <input
              placeholder="E-mail*"
              type="text"
              className="rounded-sm border-2 border-gray-300 h8"
            />
            <input
              placeholder="Telefone*"
              type="text"
              className="rounded-sm border-2 border-gray-300 h8"
            />
            <input
              placeholder="Selecione um estado"
              type="text"
              className="rounded-sm border-2 border-gray-300 h8"
            />
          </div>
          <div className="my-5">
            <p className="m-0">*Todos os campos são obrigatórios</p>
            <p className="m-0 text-tiny">
              *Para realizar sua simulação, suas informações serão
              compartilhadas com a Santander Financiamentos, parceira Webmotors
            </p>
          </div>
          <hr className="w-full" />
          <div className="md:flex justify-between">
            <div className="flex items-center">
              <input type="checkbox" />
              <p className="m-0 ml-1 text-tiny">
                Quero receber descontos, ofertas, brindes e comunicações da
                Webmotores Piracicaba
              </p>
            </div>
            <button className="bg-red-600 px-2 h-8 rounded-md text-white text-tiny md:w-auto ">
              Ver Condições
            </button>
          </div>
          <hr className="w-full my-5" />
          <p className="m-0 text-tiny">Quer entender mais sobre o Financiamento</p>
          <p className="m-0 text-tiny font-bold">Conheça</p>
        </div>
      </div>
      <div className="h-full md:w-2/5 flex justify-center bg-white rounded-lg md:transform md:-translate-y-14 rounded-sm md:px-6 px-8 px-4 py-6 shadow-xl w-lg">
        <div>
          <div className="flex items-center justify-between">
            <p className="m-0 text-2xl font-semibold">R${carro.valor}</p>
            <button className="bg-red-600 text-white w-xs h-6 text-tiny rounded-lg px-2 font-semibold">
              Ver Parcelas
            </button>
          </div>
          <p className="text-xs mt-3">Envie uma mensagem ao vendedor</p>
          <div className="flex flex-wrap">
            <input
              className="focus:border-purple-600 text-xs my-1 border-2 rounded-md h-8 w-full"
              placeholder="Nome*"
            />
            <input
              className="focus:border-purple-600 text-xs my-1 border-2 rounded-md h-8 w-full"
              placeholder="E-mail*"
            />
            <input
              className="focus:border-purple-600 text-xs my-1 border-2 rounded-md h-8 w-full"
              placeholder="Telefone*"
            />
            <input
              className="focus:border-purple-600 text-xs my-1 border-2 rounded-md h-20 w-full"
              placeholder="Olá, tenho interesse no veículo. Por favor entre em contato."
            />
          </div>
          <div className="flex text-xs my-3">
            <div>
              <p className="m-0 md:text-lg text-2xl font-semibold mr-2">
                CarDelivery
              </p>
              <p className="m-0 md:text-tiny text-sm font-semibold">
                Receba seu carro em casa{" "}
                <span className="m-0 text-red-600">Saiba mais</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap md:items-center md:justify-center">
            <div className="flex my-4">
              <input
                type="checkbox"
                className="bg-red-500 checked:border-transparent"
              />
              <p className="ml-2 m-0 md:text-tiny text-sm text-gray-400">
                Avisar o vendedor que tenho interesse no CarDelivery para este
                veículo.
              </p>
            </div>
            <div className="flex">
              <input type="checkbox" />
              <p className="ml-2 m-0 md:text-tiny text-sm font-bold">
                Quero receber contatos da Webmotors por e-mail, WhatsApp e
                outros canais.
              </p>
            </div>
            <button className="bg-red-600 text-white font-semibold md:text-sm rounded-lg py-2 md:my-4 my-10 px-4 h-12 w-full">
              Enviar mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
