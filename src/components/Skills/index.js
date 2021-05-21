import { ItemSkill } from '../ItemSkill'
import { Container } from './styles'

export const Skills = () => (
  <Container id="skills">
    <img src="/assets/wave-top.png" />
    <h1>Skills</h1>
    <div>
      <ItemSkill
        skill="/icons/node.svg"
        porcetagem="30%"
        status="30%"
        title="Node JS | Estudando"
      />

      <ItemSkill
        skill="/icons/nextjs.svg"
        porcetagem="30%"
        status="30%"
        title="Next JS | Estudando"
      />

      <ItemSkill
        skill="/icons/reactjs.svg"
        porcetagem="50%"
        status="50%"
        title="React JS | Estudando"
      />

      <ItemSkill
        skill="/icons/typescript.svg"
        porcetagem="50%"
        status="50%"
        title="TypeScript | Estudando"
      />

      <ItemSkill
        skill="/icons/html.svg"
        porcetagem="85%"
        status="85%"
        title="HTML"
      />

      <ItemSkill
        skill="/icons/javascript.svg"
        porcetagem="80%"
        status="80%"
        title="Javascript"
      />

      <ItemSkill
        skill="/icons/css.svg"
        porcetagem="85%"
        status="85%"
        title="CSS"
      />

      <ItemSkill
        skill="/icons/jquery.svg"
        porcetagem="40%"
        status="40%"
        title="JQuery"
      />
    </div>
    <img src="/assets/wave-top.png" />
  </Container>
)
