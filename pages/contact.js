import Head from 'next/head'
import { useState } from 'react'
import s from '../styles/Contact.module.scss'
import { addDoc,collection } from 'firebase/firestore'
import { db } from '../utils/firebase'

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const add = async () =>{
    addDoc(collection(db, 'mails'),{
      user:{
        name:name,
        email:email,
        msg:msg
      }
    }).then(()=>{
      alert('Message was sent!')
      setEmail('')
      setMsg('')
      setName('')
    })
  }

  return (
    <>
    <Head>
      <title>SilenxIka-Contact</title>
    </Head>
      <div className={s.Container}>
        <h3>Wanna work with us? a collab for a project? or maybe a commercial?<br />Let us Know!</h3>

        <form onSubmit={(e)=>{
          e.preventDefault()
          add()
        }}>
          <label htmlFor="name">Tell us your name?</label>
          <input type="text" name="name" id="name" placeholder='Name goes here...'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }} />
          <label htmlFor="email">Push in yo' Email?</label>
          <input type="email" name="email" id="email" placeholder='Email goes here...'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }} />
          <label htmlFor="msg">Tell us your message or idea?</label>
          <textarea name="msg" id="msg" cols="20" rows="10" placeholder='Type your message or idea here!'
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value)
            }}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={s.Cat_One}>
        <hr />
        <img src="/img/Contact_Page/cat_one.gif"/>
      </div>
      <div className={s.Cat_Two}>
        <img src="/img/Contact_Page/cat_two.gif"/>
        <hr />
      </div>
    </>
  )

}

export default Contact