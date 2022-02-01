import logo from './logo.svg';
import './App.css';

import BigCard from './components/BigCard/BigCard'
import ButtonImg from './components/ButtonImg/ButtonImg'
import SmallCard from './components/SmallCard/SmallCard'

function App() {
  const bio = 'Tenho 20 anos e estou estudando para trabalhar com Desenvolvimento Web Fullstack. Iniciei meus estudos em 2019, mas apenas em 2021 decidi fazer disso minha profissão.'

  return (
    <div className="App">
      <h1>Dados Pessoais</h1>
      <BigCard
        src='https://images2.imgbox.com/57/05/OtnsSGNf_o.jpg'
        title='Célio Júnior'
        text={bio} />
      <ButtonImg
        href='#'
        src='https://image.flaticon.com/icons/png/512/117/117472.png'
        text='Ver Mais' />
      <SmallCard
        src='http://cdn.onlinewebfonts.com/svg/img_237869.png'
        title='Email'
        text='celiojunior0110@gmail.com' />
      <SmallCard
        src='https://png.pngitem.com/pimgs/s/146-1466755_nearby-transparent-background-address-icon-hd-png-download.png'
        title='Endereço'
        text='Rua A' />

      <h1>Experiências Profissionais</h1>
      <BigCard
        src='https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png'
        title='Lebenu'
        text='Formando desenvolvedores para o mercado de trabalho.' />
      <BigCard
        src='https://i.pinimg.com/originals/9c/b2/86/9cb2863a009b49fcc03161032e9e5baf.png'
        title='NASA'
        text='Apontando defeitos.' />

      <h1>Competências</h1>
      <SmallCard
        src='https://cdn2.iconfinder.com/data/icons/seo-and-marketing-9/125/5-512.png'
        title='Front-end'
        text='HTML5, CSS3, Javascript, React e Jest.'/>
      <SmallCard
        src='https://media.istockphoto.com/vectors/backend-coding-icon-simple-outline-vector-of-web-design-development-vector-id1095763636'
        title='Back-end'
        text='Node.js, Typescript, MySQL, AWS e Firebase.'/>

      <h1>Minhas Redes Sociais</h1>
      <ButtonImg
        href='#'
        src='https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png'
        text='Facebook' />
      <ButtonImg
        href='#'
        src='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png'
        text='Twitter' />
    </div>
  );
}

export default App;
