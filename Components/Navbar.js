import s from '../styles/Navbar.module.scss'
import Navbar_Data from '../Data/Navbar'
import Link from 'next/link'
import { useState,useEffect } from 'react'


const Navbar = () => {

  const [lastScrollY, setLastScrollY] = useState(0)
  const [opacity, setOpacity] = useState(1)

  const Scroll = () => {

    if (lastScrollY < window.scrollY) {
      // console.log(lastScrollY + "  " + window.scrollY)
      //going down
      // console.log('down')
      setOpacity(0)
    } else {
      // console.log(lastScrollY + "  " + window.scrollY)
      //going up
      // console.log('up')
      setOpacity(1)
    }
    lastScrollY = window.scrollY;
    // console.log("LastScrollY Updated: "+lastScrollY)
  }

  useEffect(() => {
    setLastScrollY(window.screenY)
    // console.log("LastScrullYInitial: "+window.screenY)
    window.addEventListener('scroll', Scroll)
    return () => {
      window.removeEventListener('scroll', Scroll)
    }
  }, [])

  const [left,setLeft] = useState(-200)

  return (
    <>
      <div className={s.Mobile} style={{opacity:opacity}} >
        <img src="/img/Navbar/cat.png" />
        <img src="/img/Navbar/menu_open.png" 
          onClick={(e)=>{
            if(left==-200){
              setLeft(0)
            }else{setLeft(-200)}
          }}
        />

      </div>
      <div className={s.FullMobile}
        style={{
          left:`${left}%`
        }}
      >
        {
          Navbar_Data.map((value,index)=>(
            <Link href={value.path} key={index}>
              <a onClick={()=>{setLeft(-200)}}>{value.pathName}</a>
            </Link>
          ))
        }
      </div>
      <div className={s.Pc} style={{opacity:opacity}}>
        <img src="/img/Navbar/cat.png"/>
        {
          Navbar_Data.map((value,index)=>(
            <Link href={value.path} key={index}>
              <a>{value.pathName}</a>
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default Navbar