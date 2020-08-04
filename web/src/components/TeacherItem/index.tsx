import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface TeacherItem {
  title: string;
}

// const TeacherItem: React.FC<TeacherItem> = (props) => {
  function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/31214155?s=400&u=8a6655a5cef16970b7ea14923c589de988617e28&v=4" alt="Murilo Marega" />
        <div>
          <strong>Murilo Marega</strong>Quimica
            </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="Entrar em contato" />
              Entrar em contato
            </button>
      </footer>

    </article>
  )
}

export default TeacherItem;