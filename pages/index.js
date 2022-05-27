import s from '../styles/Home.module.scss'
import Head from 'next/head'
import Skills from '../Data/Skills'
import Reviews from '../Data/Reviews'
import Navbar_Data from '../Data/Navbar'
import Link from 'next/link'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import { Suspense } from 'react'
import Cat from '../Components/Cat'

const Home = () => {

  return (

    <>
      <div className={s.Container}>
        <Head>
          <title>SilenxIka-Home</title>
          <meta name="description" content="I am Silenx a self taught full stack developer, this website is sort of track record of my learnings, i code myself in multiple languages and so on" />
        </Head>
        <div className={s.Head}>
            <Canvas className={s.Canvas}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} />
              <OrbitControls enableZoom={true} />
              <Cat/>
              <Suspense fallback={null}></Suspense>
            </Canvas>
          <img src="/img/Home_Page/Banner.png" />

        </div>

        <div className={s.Links}>
          {
            Navbar_Data.map((value, index) => (
              <Link href={value.path} key={index}>
                <span>{value.pathName}</span>
              </Link>
            ))
          }
        </div>

        <div className={s.Info}>

          <h1>Hello there! Silenx here!</h1>

          <p>I'm Silenx’ i'm a learning dev. I like physics and chemistry which are absolutely not related to coding :P’ i like coding’programming’ watching anime’ physics’ playing games and solving real life problems as long as they're not related to my own life.. Jk.

            <br /><br />

            I started my journey with coding plugins for a game popularly known as "Minecraft" using Bukkit API’ as obvious as it is’ my first language was java and i feel quite comfortable with it! After that i started working with python, js and other languages like that, I've been learning all these for about years. You can check my skills down below!</p>

        </div>

        <div className={s.Skills}>

          <h1>Teck Stack</h1>

          {
            Skills.map((value, index) => (
              <div className={s.Item} key={index}>

                <h3>{value.title}</h3>

                <ul>
                  {
                    value.list.map((v, i) => (
                      <li key={Math.random() + i}>
                        <img src={`/img/Home_Page/Skills/${v.img}.png`} />
                        <span>{v.name}</span>
                      </li>
                    ))
                  }

                </ul>

              </div>
            ))
          }
        </div>

        <div className={s.Reviews}>

          <h1>Reviews</h1>

          <ul>
            {
              Reviews.map((value, index) => (
                <li key={index}>
                  <img src={value.img} />
                  <h4>{value.name}</h4>
                  <p>"{value.msg}"</p>
                  <a href={value.link} target={'_blank'}>Check this out!</a>
                </li>
              ))
            }
          </ul>

        </div>

      </div>
      <div className={s.Balloons}>
        <div className={s.Item}>
          <div className={`${s.One} ${s.Balls}`}></div>
          <hr className={s.one} />
        </div>
        <div className={s.Item}>
          <div className={`${s.Two} ${s.Balls}`}></div>
          <hr className={s.two} />
        </div>
        <div className={s.Item}>
          <div className={`${s.Three} ${s.Balls}`}></div>
          <hr className={s.three} />
        </div>
      </div>
      <div className={`${s.Balloons} ${s.Second}`}>
        <div className={s.Item}>
          <div className={`${s.One} ${s.Balls}`}></div>
          <hr className={s.one} />
        </div>
        <div className={s.Item}>
          <div className={`${s.Two} ${s.Balls}`}></div>
          <hr className={s.two} />
        </div>
        <div className={s.Item}>
          <div className={`${s.Three} ${s.Balls}`}></div>
          <hr className={s.three} />
        </div>
      </div>
    </>
  )

}

export default Home