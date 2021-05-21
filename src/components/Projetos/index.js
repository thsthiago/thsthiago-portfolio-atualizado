import { ItemProjeto } from '../ItemProjeto'
import { Container } from './styles'

export const Projetos = () => (
  <Container id="projetos">
    <h2>Projetos</h2>

    <div>
      <div>
        <ItemProjeto
          title="Pomodoro.Dev"
          chave="0"
          img="/projetos/projeto 1/img1.svg"
          tecnologias={['nextjs', 'reactjs']}
        />
        <ItemProjeto
          title="Site wdc"
          chave="1"
          img="/projetos/projeto 2/imgprincipal.svg"
          tecnologias={['html', 'css', 'javascript']}
        />
        <ItemProjeto
          title="Viaja Tour"
          chave="2"
          img="/projetos/projeto 3/imgprincipal.svg"
          tecnologias={['html', 'css', 'javascript']}
        />
        <ItemProjeto
          title="Cartour"
          chave="3"
          img="/projetos/projeto 4/imgprincipal.svg"
          tecnologias={['html', 'css', 'javascript', 'php', 'mysql']}
        />
      </div>
    </div>
  </Container>
)
