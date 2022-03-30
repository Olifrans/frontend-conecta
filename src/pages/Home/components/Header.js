import React from 'react'
import '../../Home/style.css'

export default function Header() {
  return (
    <header className="header">
      <div className="toolbar">

        <div>
          <span>Direita -Olifrans Dev React Net Core</span>
          <a href="/"> Dev React Net Core</a>
        </div>

        <div>
          <button>Novo Post</button>
          <span>Imagem01</span>
          <span>Imagem02</span>
        </div>
      </div>
      
    </header>
  )
}
