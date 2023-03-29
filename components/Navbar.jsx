import Link from 'next/link'
import styles from '../styles/navbar.module.css'

function Navbar() {
  return (
    <>
    <div className={styles.div1}>
        <Link href="/" className={styles.elem1}>home</Link>
        <Link href="/about" className={styles.elem1}>about</Link>
        <Link href="/about" className={styles.elem1}>about</Link>
        
    </div>

    </>
  )
}

export default Navbar
