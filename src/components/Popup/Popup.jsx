import React from 'react'
import styles from '../../components/Popup/Popup.module.css'
import email from '../../assets/contact/emailIcon.png'

const Popup = ({onClick}) => {
  return (
    <div>  <button  className={styles.btnsubmit} onClick={onClick}><img src={email} alt="Email Icon"/>Email Sent, Send Again?!</button></div>
  )
}

export default Popup