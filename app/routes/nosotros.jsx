import imagen from '../../public/img/nosotros.jpg'
import style from '../styles/nosotros.css'

export function meta() {
  return [
    {
      title: "GuitarLA - Nosotros",
    },
  ];
}

export function links() {
  return [
    {
      rel:'stylesheet',
      href: style
    }, 
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />

        <div> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe, temporibus magnam, tempore, at laborum ad ratione adipisci et qui sint dolores suscipit? Quidem mollitia ipsa harum animi error sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe, temporibus magnam, tempore, at laborum ad ratione adipisci et qui sint dolores suscipit? Quidem mollitia ipsa harum animi error sunt?</p> 

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe, temporibus magnam, tempore, at laborum ad ratione adipisci et qui sint dolores suscipit? Quidem mollitia ipsa harum animi error sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe, temporibus magnam, tempore, at laborum ad ratione adipisci et qui sint dolores suscipit? Quidem mollitia ipsa harum animi error sunt?</p> 

        </div>
      </div>

    </main>
  )
}

export default Nosotros;
