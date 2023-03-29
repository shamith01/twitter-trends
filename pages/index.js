import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import img1 from '../public/image/pic1.jpg'
import img2 from '../public/image/pic2.jpg'

const index = () => {
  return (<>
  {/* <Navbar/> */}
    <div className={styles.container1}>
    <div className={styles.conte1}>
      <h1 className={styles.mtitle}>Twitter Trendings </h1>
      <div className={styles.content2}>
      <Image
      src={img1}
      className={styles.img}
      alt="pic1"
      />
      <h2 className={styles.title}>From Mudumalai Reserve to Los Angeles, the heartwarming story of Raghu and Ammu and their dear caregivers. 

#TheElephantWhisperers won #Oscars95 for the Best Documentary Short Film ! Congratulations #India.</h2>


<h2 className={styles.trend}>Trending #tags on Twitter</h2>

<h4>#karnatakaElections2023</h4>
<h4>#RahulGhandi</h4>
<h4>#IPL2023</h4>
<h4>#DigitalFasting</h4>

      </div>
      <div className={styles.content2}>
      <Image
      src={img2}
     
      className={styles.img}
      alt="pic1"
      />
      <h2 className={styles.title}>आदिशक्ति माँ दुर्गा के आठवें स्वरूप माँ महागौरी की उपासना के पावन पर्व #दुर्गाष्टमी की आप सभी को हार्दिक शुभकामनाएँ 🌟
</h2>


<h2 className={styles.trend}>Trending #tags on twitter</h2>

<h4>#DurgaAshtami</h4>
<h4>#दुर्गा_अष्टमी</h4>
<h4>#IPL2023</h4>
<h4>#Sant Shri Asharamji Ashram</h4>

      </div>
       
       

      </div>
     
    </div>
    
      
  </>
  )
}

export default index
