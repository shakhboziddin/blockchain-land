import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import bull from '../images/bull.svg'
import btn from '../images/btn.png'

function Navbar() {
    const st = {
        navbar: 'flex w-full top-[40px] z-[9999] h-[65px] md:h-[80px] flex-col bg-[#0a0c1f] text-white items-center fixed',
        content: 'flex items-center justify-between w-[100%] md:w-[85%] lg:w-[80%] max-w-[95%]  m-[auto] py-[9px] px-[10px] shadow-lg',
        logo: 'w-[120px] md:w-[180px]',
        menu_nav: 'flex items-center',
        menu_nav_child: 'hidden lg:flex gap-[20px]',
        btn_div: 'flex items-center justify-center ml-[40px]  duration-[2s]',
        btn_border: 'w-[150px]',        
        btn: 'absolute top-[19px] text-[13px] lg:top-[28px] right-[120px] lg:right-[180px]',
        menu_btn: 'flex lg:hidden lg:absolute lg:top-[-199px] ml-[20px] cursor-pointer text-[30px]',
        phone_menu: 'lg:hidden bg-[#0a0c1fe6] backdrop-blur-[20px] shadow-lg min-h-[100vh] pb-[300px] relative z-[99999]  w-[100%] px-[20px] duration-[.3s]',
        phone_menu_btn: ' w-[100%] mt-[20px] text-[15px] cursor-pointer flex items-center justify-between border-b-2 border-[#1e293b] pb-[10px]',
        phone_hr: ''
    }




    const [menu, setMenu] = useState(false)
    return (
        <div className={st.navbar}>
            <div className={st.content}>
                <div>
                    <img className={st.logo} src={Logo} alt="" />
                </div>
                <div className={st.menu_nav}>
                    <div className={st.menu_nav_child}>
                        <Link to={'/marketplace'}>Marketplace</Link>
                        <Link to={'/marketplace'}>Metaverse</Link>
                        <Link to={'/marketplace'}>Airdrop</Link>
                        <Link to={'/marketplace'}>About</Link>
                        <Link to={'/marketplace'}>Support</Link>
                        <Link to={'/markeplace'}>Token</Link>
                    </div>

                    <div className={st.btn_div}>
                        <Link to={'/'}>
                        <img className={st.btn_border} src={btn} alt="" />
                        {/* <h4 href="" className={st.btn}>Get Citizenship</h4> */}
                        </Link>
                    </div>
                    <div className={st.menu_btn} style={{display: menu? 'none' : 'block'}} onClick={()=>setMenu(true)}>   
                        <AiOutlineMenu  />
                    </div>
                    <div className={st.menu_btn} style={{display: menu? 'block' : 'none'}} onClick={()=>setMenu(false)}>   
                        <AiOutlineMenu  />
                    </div>
                </div>


            </div>

            <div className={st.phone_menu} style={{transform: menu ? 'translateX(0)' : 'translateX(-1200px)'}}>
                <Link to={'/home'} className={st.phone_menu_btn}>
                <Link to={'/home'}>Marketplace</Link>
                <img src={bull} alt="" />
                </Link>
                <div className={st.phone_menu_btn}>
                <Link to={'/'}>Metaverse</Link>
                <img src={bull} alt="" />
                </div>
                <div className={st.phone_menu_btn}>
                <Link to={'/'}>Airdrop</Link>
                <img src={bull} alt="" />
                </div>
                <div className={st.phone_menu_btn}> 
                <Link to={'/'}>About</Link>
                <img src={bull} alt="" />
                </div>
                <div className={st.phone_menu_btn}>
                <Link to={'/'}>Support</Link>
                <img src={bull} alt="" />
                </div>
                <div className={st.phone_menu_btn}>
                <Link to={'/'}>Token</Link>
                <img src={bull} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar