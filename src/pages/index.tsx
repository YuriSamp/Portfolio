import Head from 'next/head'
import { BsFillMoonStarsFill, BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'
import Image from 'next/image'
import deved from '../../public/dev-ed-wave.png';
import { useState } from 'react';
import Projetos from '../components';
import Link from 'next/link';


export const Home = () => {

  const [DarkMode, setDarkMode] = useState(false);

  return (
    <div className={DarkMode ? "dark" : ""} >
      <Head>
        <title>Yuri Portofolio</title>
        <meta name="description" content="Um pouco da minha evolução como desenvolvedor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-[#FCFBF4] px-7 md:px-20 lg:px-40 min-h-screen dark:bg-[#050505]'>
        <nav className='py-10 mb-12 flex justify-between'>
          <ul className='flex gap-7'>
            <li>
              <Link href='https://twitter.com/Yuri_Sampa' rel='noreferrer' target="_blank">
                <BsTwitter className='dark:fill-white w-7 h-7 hover:fill-gray-400' />
              </Link>
            </li>
            <li>
              <Link href='https://www.linkedin.com/in/yurisamp/' rel='noreferrer' target="_blank">
                <BsLinkedin className='dark:fill-white w-7 h-7 hover:fill-gray-400' />
              </Link>
            </li>
            <li>
              <Link href='https://github.com/YuriSamp' rel='noreferrer' target='_blank'>
                <BsGithub className='dark:fill-white w-7 h-7 hover:fill-gray-400' />
              </Link>
            </li>
          </ul>
          <ul className='flex items-center gap-4 md:gap-8 lg:gap-12'>
            <li className='hover:scale-110 ease-in-out duration-300'><BsFillMoonStarsFill onClick={() => setDarkMode(!DarkMode)} className='cursor-pointer text-2xl dark:fill-white' /></li>
            <li className='hover:scale-110 ease-in-out duration-300 w-'><a
              href='CV-Yuri-03_2023.pdf'
              download="yuri-cv"
              className='bg-cyan-700 text-white px-4 py-2 rounded-md dark:bg-gradient-to-r from-cyan-500 to-teal-400 dark:text-black'>Curriculo
            </a>
            </li>
          </ul>
        </nav>

        <div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} fill alt='Foto personagem acendando' className='object-cover' />
          </div>
        </div>
        <div className='text-center pt-10 pb-12'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Yuri Sampaio</h2>
          <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Software Engineer</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-100'>Sou apaixonado em tecnologia e em programar coisas que reflitam minha personalidade. Saber que eu posso sempre aprender mais é o que me motiva
            a estudar todo dia</p>
        </div>
        <Projetos />
        <section className='flex flex-col items-center py-10'>
          <h2 className='text-5xl py-4 text-teal-600 md:text-6xl'>Sobre mim</h2>
          <article className='py-6 w-3/4 xl:w-2/4 text-xl dark:text-white'>
            Olá! Eu sou um desenvolvedor de software com o foco em Front-end,
            estou estudando há um pouco mais de 1 ano, escolhi essa carreira porque desde pequeno eu sempre tive curiosidade por aprender como as coisas funcionavam por
            trás da interface do usuário, portanto busco sempre me especializar e entregar a melhor experiência que o usuario possa vir a ter com minhas criações.
          </article>
          <article className='py-6 w-3/4 xl:w-2/4 text-xl dark:text-white'>
            Constantemente estou estudando para melhorar os meus conhecimentos e ficar antenado nas tecnologias do mercado,
            no momento eu to vendo Astro, Solid JS e Golang, porque eu quero entender conceitos diferentes que possam ampliar minha maneira de escrever codigo,
            entretanto o React/Next é o meu foco.
          </article>
          <article className='py-6 w-3/4 xl:w-2/4 text-xl dark:text-white'>
            Uma das coisas que eu faço no meu tempo vago é tentar contribuir com projetos open-source, jogar video-game e ouvir música, se precisar entrar em contato comigo é só me chamar em
            alguma rede social
          </article>
        </section>
      </main>
    </div>
  )
}

export default Home
