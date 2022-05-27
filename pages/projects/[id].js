import { useRouter } from 'next/router'
import s from '../../styles/ProjectsID.module.scss'
import { Data } from '../../Data/Projects'

const ID = ()=> {

  const router = useRouter()

  const id = router.query?.id

  const item = Data[id]

  return(
    <>
    <div className={s.Container}>
      <img src={item?.img}/>
      <h1>{item?.title}</h1>
      <p>{item?.fullDesc}</p>
      <a href={item?.link} target='_blank' rel='noreferrer'>Check it out!</a>
      <a
        onClick={()=>{
          router.back()
        }}
      >Go back</a>
    </div>
    <div className={s.Cat_One}>
        <hr />
        <img src="/img/Contact_Page/cat_two.gif"/>
      </div>
      <div className={s.Cat_Two}>
        <img src="/img/Contact_Page/cat_one.gif"/>
        <hr />
      </div>
    </>
  )

}

export default ID