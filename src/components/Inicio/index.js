import { useCallback, useState } from 'react'
import { Container, Header } from './styles'
import {
  FaBolt,
  FaBook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaTools,
  FaUser
} from 'react-icons/fa'
import { Link } from 'react-scroll'

export function Inicio() {
  const [bars, setBars] = useState(false)

  const activebars = useCallback(() => {
    setBars(!bars)
  }, [bars])

  return (
    <Container>
      <div>
        <Header bars={bars}>
          <img src="/assets/Logo.png" alt="Logo" />
          <div onClick={() => activebars()}>
            <div></div>
          </div>
          <nav>
            <a href="#" onClick={() => activebars()}>
              <FaHome />
              Home
            </a>
            <Link
              to="sobre"
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => activebars()}>
              <FaBook />
              Sobre
            </Link>

            <Link
              to="skills"
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => activebars()}>
              <FaBolt />
              Skills
            </Link>

            <Link
              to="projetos"
              smooth={true}
              duration={500}
              onClick={() => activebars()}>
              <FaTools />
              Projetos
            </Link>

            <Link
              to="contatos"
              smooth={true}
              duration={500}
              onClick={() => activebars()}>
              <FaUser />
              Contatos
            </Link>
          </nav>
        </Header>

        <div>
          <div>
            <h1>Thiago Cabral</h1>
            <h3>Desenvolvedor Web</h3>
            <div>
              <a target="_blank" href="https://github.com/thsthiago">
                <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/thsthiago-cabral/">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div>
            <img src="/assets/lua.gif" alt="Lua" />
            <img src="/assets/rocket.png" alt="rocket" />
          </div>
        </div>
      </div>
    </Container>
  )
}
