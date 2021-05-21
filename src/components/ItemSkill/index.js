import { useEffect } from 'react'
import { Container } from './styles'
import Aos from 'aos'
import 'aos/dist/aos.css'

export function ItemSkill({ ...dist }) {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <Container data-aos="fade-right">
      <div>
        <img src={dist.skill} />
        <span>{dist.title}</span>
      </div>
      <div>
        <span style={{ width: dist.porcetagem }}>
          <span>{dist.status}</span>
        </span>
        <span></span>
      </div>
    </Container>
  )
}
