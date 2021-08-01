/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const textFooter = [
    {
      comprar: [
        {
          texto: "Carros usados ou seminovos"
        },
        {
          texto:"Carros novos"
        },
        {
          texto:"Motos usadas ou seminovas"
        },
        {
          texto:"Motos novas"
        }
      ],
      vender: [
        {
          texto: "Vender meu veículo"
        },
        {
          texto:"Vender minha moto"
        },
      ],
      servicos: [
        {
          texto: "Tabela"
        },
        {
          texto:"0km"
        },
      ]
    }
  ]

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer>
          <div className="flex flex-wrap md:justify-between items-center text-white bg-gray-700 text-xs">
            <div className="m-4">
              <p className="m-0 font-bold text-sm">Comprar</p>
              {textFooter.map(item => (
                item.comprar.map(item => (
                  <p className="my-1">{item.texto}</p>
                ))
              ))}
            </div>
            <div className="m-4">
              <p className="m-0 font-bold text-sm">Vender</p>
              {textFooter.map(item => (
                item.vender.map(item => (
                  <p className="my-1">{item.texto}</p>
                ))
              ))}
            </div>
            <div className="m-4">
              <p className="m-0 font-bold text-sm">Serviços</p>
              {textFooter.map(item => (
                item.servicos.map(item => (
                  <p className="my-1">{item.texto}</p>
                ))
              ))}
            </div>
          </div>
          <div className="bg-gray-600 text-white text-xs p-3">
            <p className="m-0">©2021 Webmotores Piracicaba S.A Todos os direitos reservados</p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
