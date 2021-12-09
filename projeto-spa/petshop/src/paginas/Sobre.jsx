import React from 'react'


import '../assets/css/componentes/cartao.css'

const Sobre = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Sobre Doguito</h2>
      </div>
      <section className="container flex flex--centro">
        <article className="cartao">
          O blog do doguito foi criado para o projeto em SPA!!!<br></br>
          Matéria de desenvolvimento web 2 (DW2A4) ministrada pelo professor Johnata Souza Santicioli
        </article>
        
      </section>
    </main>
  )
}

export default Sobre
