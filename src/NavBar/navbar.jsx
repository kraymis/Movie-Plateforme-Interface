import React from 'react'
import style from "../NavBar/nav.module.css"

export const Navbar = () => {
  return (
    <div className={style.navbar}>
     <nav>
      <div className={style.logo_and_list}>
      <div className={style.logo}>
        <a href="">Kraymis</a>
      </div>
      <div className={style.list}>
      <ul>
        <li>Home</li>
        <li>Series</li>
        <li>Movies</li>
        <li>Kids</li>
      </ul>
      </div>

      </div>
      <div className={style.searchField}>
      <input type="text" placeholder='search'/>
      </div>
     </nav>
    </div>
  )
}
