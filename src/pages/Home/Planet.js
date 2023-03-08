import React from "react";
import btn2 from "../../images/btn2.png";
function Planet() {
  const st = {
    meta: "flex gap-[10px]",
    planet:
      "bg-[url('https://blockchain.land/assets/image/mobile-view/mint-planet-bg-m.png')] bg-cover h-[80vh] p-[30px] bg-center",
    country_bg:
      "bg-[url('https://blockchain.land/assets/image/blockchain_land/mint-country-bg.webp')] w-full h-[100vh] bg-cover bg-center bg-no-repeat p-[13px]",
    btn2: "w-[150px] mt-[20px] cursor-pointer",
    img_main: "",
    main_header: "text-[27px] font-serif",
    header_h1: "text-[40px] my-[5px] font-[500]",
    link_evm: "text-blue-600 font-serif text-[16px] my-[15px]",
    planet_content: "mt-[50px]",
    country_head: "mt-[80px]",
    country: "mt-[-20px] p-[25px]",
    valley_header: "mt-[400px]",
    valley_header_div: "flex items-center gap-[5px] text-[20px] pl-[10px]",
    valley_icon: "w-[30px]",
    valley_header_h1: "text-[40px] font-[500] pl-[10px]",
    valley_bg:
      "h-[100vh] bg-[url('https://blockchain.land/assets/image/mobile-view/mint-city-bg-m.png')] bg-no-repeat bg-contain  w-full pt-[60px] px-[25px]",
      valley_p: "mb-[30px]",
      valley_btn: "w-[100px]",
      valley_btn_img: "w-[150px]"
  };

  return (
    <div className="text-white">
      <div className={st.planet}>
        <div className={st.planet_content}>
          <div className={st.meta}>
            <img
              src="https://blockchain.land/assets/image/small-elements/planet-icon.svg"
              className={st.img_main}
              alt=""
            />
            <h2 className={st.main_header}>METAVERSE</h2>
          </div>
          <h1 className={st.header_h1}>PLANET</h1>
          <p className={st.link_evm}>Complete EVM compatibility</p>
          <div className={st.content}>
            <p>
              A planet is the biggest parcel in Blockchain Land. It's like
              owning a parallel world of your own. In the Blockchain Land
              universe, only 7 planets can be minted, The first planet would be
              minted by the creators of Blockchain Land. Whenever a planet will
              be minted on Blockchain Land 5% of the total supply of BCL will be
              burned. Planet owners can create their infrastructure using assets
              on our marketplace, they can also sell and trade land on their
              planet.
            </p>
          </div>
          <div className={st.country_head}>
            <div className={st.meta}>
              <img
                src="https://blockchain.land/assets/image/small-elements/country-icon.svg"
                alt=""
              />
              <h2 className={st.main_header}>MINT YOUR</h2>
            </div>
            <h1 className={st.header_h1}>COUNTRY</h1>
          </div>
        </div>
      </div>
      <div className={st.country_bg}>
        <div className={st.country}>
          <p>
            A country is a mid-tier parcel that can be minted on Blockchain
            Land. Countries are part of the planet, each country could be
            dedicated to various sectors like media & entertainment,
            cryptocurrency, real estate, fashion, apparel, etc. A country could
            be bought from the planet owners or creators of Blockchain Land.
            Countries could be capitalized on by businesses to take their
            business into the virtual world and cater to our digital citizens.
          </p>
          <img src={btn2} className={st.btn2} alt="" />
        </div>
        <div className={st.valley_header}>
          <div className={st.valley_header_div}>
            <img
              src="https://blockchain.land/assets/image/small-elements/city-icon.svg"
              className={st.valley_icon}
              alt=""
            />
            <h4>Mint Your</h4>
          </div>
          <h1 className={st.valley_header_h1}>VALLEY</h1>
        </div>
      </div>
      <div className={st.valley_bg}>
        <p className={st.valley_p}>
          A valley is the smallest parcel that can be minted on Blockchain Land.
          Valleys coexist within the countries, A valley could be bought from
          the planet/ country owners or creators of Blockchain Land. Owners can
          create their infrastructure using NFTs and assets which are available
          on our marketplace. Valleys are a great opportunity for influencers,
          SMEs, brands, etc.
        </p>
        <a href="#" className={st.valley_btn}>
          <img src={btn2} alt="" className={st.valley_btn_img} />
        </a>
      </div>
    </div>
  );
}

export default Planet;
