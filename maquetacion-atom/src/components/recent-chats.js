class RecentChats extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
  }

  connectedCallback() {
    this.loadData()
    this.render()
  }

  loadData() {
    this.data = [
      {
        name: 'Revisar barra de búsqueda',
        url: '#',
      },
      {
        name: 'Pueblos bonitos de Mallorca',
        url: '#',
      },
      {
        name: 'Ajustar botón CTA CSS',
        url: '#',
      },
      {
        name: 'Transferir dinero a Santander',
        url: '#',
      },
      {
        name: 'Mejorar calidad imagen',
        url: '#',
      },
      {
        name: 'Sangrado nasal leve',
        url: '#',
      },
      {
        name: 'Problema batería coche',
        url: '#',
      },
      {
        name: 'Postcreditos Insidious',
        url: '#',
      },
      {
        name: 'Hip trust, gluteos y pierna',
        url: '#',
      },
      {
        name: 'Reserva restaurante cumpleaños',
        url: '#',
      },
      {
        name: 'Dudas examen CSS',
        url: '#',
      },
      {
        name: 'Plan de entrenamiento semanal',
        url: '#',
      },
      {
        name: 'Receta de lentejas rápida',
        url: '#',
      },
      {
        name: 'Cómo hacer curriculum',
        url: '#',
      },
      {
        name: 'Traducir email al inglés',
        url: '#',
      }
    ]
  }

  render() {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      .recent-chats {
        height: 90%;
        margin-top: 1rem;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: hsl(0, 0%, 40%) transparent;
      }

      .recent-chats-container nav {
        display: flex;
        flex-direction: column;
      }

      .recent-chats-container nav a {
        padding: 0.5rem 0.75rem;
        border-radius: 0.5rem;
        color: hsl(0, 10%, 75%);
        text-decoration: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1rem;
      }

      .recent-chats-container nav a:hover {
        background-color: hsla(0, 0%, 100%, .08);
        color: hsl(0, 0%, 100%);
      }
    </style>
      <section class="recent-chats">
        <div class="recent-chats-container">
          <h2>Recientes</h2>
          <nav>
          </nav>
        </div>
    </section>
    `

    const nav = this.shadow.querySelector('nav')

    this.data.forEach(chat => {
      const link = document.createElement('a')
      link.href = chat.url
      link.textContent = chat.name
      nav.appendChild(link)
    })

  }
}

customElements.define('recent-chats-component', RecentChats);