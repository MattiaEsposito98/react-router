import style from './Card.module.css'
export default function Card({ name, description }) {
  return (
    <div className={style.cardList}>
      <h2 className={style.titleCard}>{name}</h2>
      <p>{description}</p>
    </div>
  )
}