import { Container } from './styles'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export function Contatos() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <Container id="contatos">
      <h2>Contatos</h2>
      <div>
        <div data-aos="fade-right">
          <div>
            <h2>Me mande um e-mail.</h2>
            <p>Logo logo eu respondo...haha😉</p>
            <a target="_blank" href="mailto:thiagocabral477@gmail.com">
              <span>Email:</span> thiagocabral477@gmail.com
            </a>
            <div>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/thsthiago-cabral/">
                <FaLinkedin />
              </a>
              <a target="_blank" href="https://github.com/thsthiago">
                <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5511991147553">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <img
          src="/assets/ilustracaocontatos.svg"
          alt="Ilustracao de contatos"
          data-aos="fade-left"
        />
      </div>
    </Container>
  )
}
