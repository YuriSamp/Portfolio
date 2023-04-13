import Card from './Card'

function Projetos() {
  return (
    <section className='pb-8'>
      <div className='text-center'>
        <h2 className='text-5xl py-1 pt-3  text-teal-600'>Meus Projetos</h2>
        <p className='text-xl py-2 leading-8  dark:text-white'>Uma documentação do meu processo em desenvolvimento web se encontrea aqui, observe!</p>
      </div>
      <div className='md:grid lg:grid-cols-2 2xl:grid-cols-3 gap-5 pt-10'>
        <Card
          name={'To Do List'}
          src={'/Todo.png'}
          path={'https://todolistreact-seven.vercel.app'}
          descricao={'Esse foi o meu primeiro projeto em React, fiz ele para aprender a passar props e controlar o estado com useState'}
          tech1={'JavaScript'}
          tech2={'React'}
          tech3={'Css'}
        />
        <Card
          name={'Restaurante'}
          src={'/Beef.png'}
          path={'https://beef-and-meet.vercel.app'}
          descricao={'Desenvolvi esse projeto com o intuito de melhorar minhas habilidades no React-router-dom e treinar o metodo Filter do Array'}
          tech1={'TypeScript'}
          tech2={'React'}
          tech3={'Sass'}
        />
        <Card
          name={'Fintech'}
          src={'/mybank.png'}
          path={'https://mybank-theta.vercel.app'}
          descricao={'Desenvolvi esse projeto pensando em explorar mais o ecossistema React, no fim virou um lugar legal pra simular uma operação bancaria'}
          tech1={'TypeScript'}
          tech2={'React'}
          tech3={'Sass'}
        />
        <Card
          name={'Rick And Morty Tracker'}
          src={'/Rick2.png'}
          path={'https://earth-c-137.vercel.app'}
          descricao={'Desenvolvi esse projeto com o intuito criar um app com as informações de todos os personagens da série, para isso eu consumi a Api publica de Rick And Morty'}
          tech1={'TypeScript'}
          tech2={'React'}
          tech3={'Tailwind'}
        />
        <Card
          name={'Netflix Clone'}
          src={'/Netflix.png'}
          path={'https://netflix-clone-mu-topaz.vercel.app'}
          descricao={'Eu queria recriar a UI de algo famoso então optei pela netflix, foi um projeto bem bacana que eu consegui aprender mais sobre Next, varrer a documentação do tailwind e outras coisas'}
          tech1={'TypeScript'}
          tech2={'Next'}
          tech3={'Tailwind'}
        />
        <Card
          name={'Thrasher Magazine'}
          src={'/skate.png'}
          path={'https://skate-lake.vercel.app'}
          descricao={'Esse é o meu favorito porque eu andei muito de skate na minha adolescencia. Usei o react-hook-forms nele, algumas features do next e o carrinho de compra mais lindo que eu ja fiz'}
          tech1={'TypeScript'}
          tech2={'Next'}
          tech3={'Tailwind'}
        />
        <Card
          name={'Pomodoro'}
          src={'/pomodoro.png'}
          path={'https://pomodoro-pi-ten.vercel.app'}
          descricao={'Podomoro pra quem gosta de metodos de estudo, pra mim não funciona, mas foi legal de fazer e ate usei pela primeira vez o useRef'}
          tech1={'TypeScript'}
          tech2={'React'}
          tech3={'Tailwind'}
        />
        <Card
          name={'Magicandy'}
          src={'/magicandy.png'}
          path={'https://magicandy.vercel.app'}
          descricao={'Um e-commerce de uma confeitaria. Meu primeiro projeto full-stack e dessa vez eu fiz em dupla com meu amigo Carlos Eduardo'}
          tech1={'TypeScript'}
          tech2={'Next'}
          tech3={'Tailwind'}
        />
        <Card
          name={'Fyesta'}
          src={'/fyesta.png'}
          path={'https://fyesta.vercel.app'}
          descricao={'Um projeto fullstack onde eu crio uma aplicação para organização pessoal, totalmente open source com o intuito de ir aprendendo e melhorando as minhas habilidades em público'}
          tech1={'TypeScript'}
          tech2={'Next'}
          tech3={'Tailwind'}
        />
      </div>
    </section>
  )
}

export default Projetos
