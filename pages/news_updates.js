import s from '../styles/News_updates.module.scss'
import { Data } from '../Data/News&Updates'

const News_updates = () => {

  return (
    <>
      <div className={s.Container}>
        {
          Data.map((value, index) => (
            <div className={s.Box} key={index}>
              <h1>{value.title}</h1>
              <p>{value.desc}</p>
              <h3>{value.type}</h3>
            </div>
          ))
        }
      </div>
    </>
  )

}


export default News_updates