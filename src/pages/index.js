import { Contatos } from '../components/Contatos'
import { Inicio } from '../components/Inicio'
import { Projetos } from '../components/Projetos'
import { Skills } from '../components/Skills'
import { Sobre } from '../components/Sobre'
import { Footer } from '../components/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Thiago Cabral | Desenvolvedor Web</title>
      </Head>
      <Inicio />
      <Sobre />
      <Skills />
      <Projetos />
      <Contatos />
      <Footer />
    </>
  )
}
