import s from '../../styles/Projects.module.scss'
import { Types, Data } from '../../Data/Projects'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Projects = () => {

  const router = useRouter()

  const push = (id) => {
    router.push(`/projects/${id}`)
  }

  return (
    <>
      <Head>
        <title>SilenxIka-Projects</title>
      </Head>
      <div className={s.Container}>
        {
          Types.map((value, index) => (
            <div key={index} className={s.Box}>
              <h1>{value}</h1>
              <ul>
                {
                  Data.map((v, i) => {
                    if (v.type == value) {
                      return (
                        <li key={i}>
                          <img src={v.img}/>
                          <h1>{v.title}</h1>
                          <p>{v.desc}</p>
                          <button
                            onClick={() => push(i)}
                          >Check out</button>
                        </li>
                      )
                    }
                  })
                }
              </ul>
            </div>
          ))
        }
      </div>
    </>
  )

}

export default Projects