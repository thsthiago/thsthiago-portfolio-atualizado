import { Container } from './styles'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Link from 'next/link'

export function ItemProjeto({ ...dist }) {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <Container img={dist.img} data-aos="fade-right">
      <div></div>
      <div>
        <strong>Tecnologias</strong>
        <div>
          {dist.tecnologias.map((tec) => (
            <img src={`/icons/${tec}.svg`} key={tec} />
          ))}
        </div>
        <button type="button">
          <Link href={`/projetos/${dist.title}`}>Ver projeto</Link>
        </button>
        <h3>{dist.title}</h3>
      </div>
    </Container>
  )
}
