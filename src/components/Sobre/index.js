import { Container } from './styles'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export function Sobre() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <Container id="sobre">
      <div>
        <img
          data-aos="fade-right"
          src="/assets/ilustracaosobre.svg"
          alt="Ilustração sobre "
        />
        <div data-aos="fade-left">
          <h1>Sobre mim</h1>

          <p>
            <span>
              Desenvolvedor Web, apaixonado por <strong>tecnologia</strong>,{' '}
              <strong>café</strong>, <strong>games</strong> e{' '}
              <strong>muita música</strong>.
            </span>
            <span>
              Cursando <strong>Análise e Desenvolvimento de Sistemas</strong>{' '}
              pela Universidade Cidade de São Paulo.
            </span>
            <span>
              Em busca de uma oportunidade de{' '}
              <strong>estágio como Desenvolvedor Web</strong>.
            </span>
          </p>
        </div>
      </div>
    </Container>
  )
}
