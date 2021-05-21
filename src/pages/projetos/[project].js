import Link from 'next/link'
import { Container, Carousel, Loader } from '../../styles/styles'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useCallback, useState } from 'react'
import { Footer } from '../../components/Footer'
import Head from 'next/head'
import api from '../../services/api'

export default function Project({ projects }) {
  const [img, setImg] = useState(0)
  const [arrow, setArrow] = useState(true)

  const before = useCallback(() => {
    if (img <= 0) return setImg(projects.images.length - 1)
    setImg(img - 1)
    setArrow(false)
  }, [projects, img])

  const next = useCallback(() => {
    if (img === projects.images.length - 1) return setImg(0)
    setImg(img + 1)
    setArrow(true)
  }, [projects, img])

  if (!projects.images) {
    return <Loader />
  }

  return (
    <Container>
      <Head>
        <title>{projects.titulo}</title>
      </Head>

      <div>
        <Link href="/">
          <a>
            <FaLongArrowAltLeft size={20} />
            Voltar
          </a>
        </Link>

        {projects.links[1] && (
          <a target="_blank" href={projects.links[1]}>
            Ver deploy
            <FaLongArrowAltRight size={20} />
          </a>
        )}
      </div>

      <Carousel arrow={arrow}>
        <button onClick={() => before()}>
          <IoIosArrowBack />
        </button>
        <button onClick={() => next()}>
          <IoIosArrowForward />
        </button>

        <div>
          <img src={projects.images[img]} />
        </div>
      </Carousel>

      <div>
        <h3>{projects.titulo}</h3>
        <p>{projects.descricao}</p>
      </div>

      <div>
        <h3>Tecnologias</h3>
        <div>
          {projects.icons.map((icon) => (
            <img src={icon} key={icon} />
          ))}
        </div>
      </div>

      <div>
        <h3>Links</h3>
        <a target="_blank" href={projects.links[0]}>
          <span>Repositório: </span>
          {projects.links[0]}
        </a>
        {projects.links[1] && (
          <a target="_blank" href={projects.links[1]}>
            <span>Deploy: </span>
            {projects.links[1]}
          </a>
        )}
      </div>
      <Footer />
    </Container>
  )
}

export const getStaticPaths = async () => {
  const { data } = await api.get('projetos/projetos')

  const paths = data.map((project) => {
    return {
      params: {
        project: project.titulo
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async (ctx) => {
  const { project } = ctx.params

  const { data } = await api.get(`projetos/${project}`)

  const projects = {
    titulo: data[0].titulo,
    descricao: data[0].descricao,
    icons: data[0].icons,
    tecnologias: data[0].tecnologias,
    images: data[0].images,
    links: data[0].links
  }

  return {
    props: {
      projects
    },
    revalidate: 60 * 60 * 72
  }
}
