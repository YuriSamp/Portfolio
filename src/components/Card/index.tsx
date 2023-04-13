import Image from 'next/image'

interface Props {
  src: string
  path: string
  name: string
  descricao: string
  tech1: string
  tech2: string
  tech3: string
}

function Card({ src, path, name, descricao, tech1, tech2, tech3 }: Props) {
  return (
    <div className='shadow-lg p-10 rounded-xl my-3 dark:border-2 hover:scale-105 ease-in-out duration-300 flex flex-col items-center'>
      <Image src={src} width={350} height={225} alt='foto pagina inicial restaurante' />
      <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>{name}</h3>
      <a className='py-2 text-lg text-teal-600 ' href={path} rel='noreferrer' target='_blank'>Ir para o projeto</a>
      <p className='py-2 dark:text-white'>{descricao}</p>
      <p className='py-2 text-gray-800 dark:text-white '> Tecnologias usadas:</p>
      <div className='flex flex-col sm:flex-row gap-3 md:gap-8 justify-center text-gray-800 py-1 dark:text-white'>
        <p className='border-2 p-2 border-teal-600 rounded-full w-24 flex justify-center'>{tech1}</p>
        <p className='border-2 p-2 border-teal-600 rounded-full w-24 flex justify-center'>{tech2}</p>
        <p className='border-2 p-2 border-teal-600 rounded-full w-24 flex justify-center'>{tech3}</p>
      </div>
    </div>
  )
}

export default Card
