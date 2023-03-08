import React from "react";
import btn2 from "../../images/btn2.png";
import village from "../../images/land_village.webp";

function Land() {
  const st = {
    land: "text-white",
    land_header: "text-white p-[25px]",
    land_header_h1: "text-[40px] font-[500] w-[50%]",
    land_header_p: "text-[15px] my-[30px]",
    land_header_btn_img: "w-[150px]",
    land_credit_cards_img: "w-full my-[100px]", 
    citizenship: "p-[25px] my-[50px]",
    citizenship_header_h1: "text-[40px]",
    citizenship_header_p: "text-[15px] my-[30px]",
    app: "p-[25px]",
    app_heading_h3: "line_app text-[18px] font-[400]",
    app_heading_h1: "text-[23px] font-[400] my-[15px]",
    app_heading_p: "text-[15px] my-[10px]",
    app_icons: "flex gap-[50px]",
    app_icon: "flex items-center  gap-[14px] text-[14px] w-[100%] my-[30px]",
    play_store: "w-[150px] my-[30px]",
    explore: "p-[30px]",
    explore_head_img: "mb-[60px]",
    explore_head:
      "flex  text-[20px] gap-[15px] items-center line_app my-[3 5px]",
    explore_head_h1: "text-[23px] mt-[15px] w-[40%]",
    explore_head_p: "my-[20px] text-[15px]",
  };
  return (
    <div className={st.land}>
      <div className={st.land_header}>
        <h1 className={st.land_header_h1}>BUY YOUR LAND</h1>
        <p className={st.land_header_p}>
          Creating your infrastructure has never been so engaging and easy.
          Design your parcel using assets that are available on our marketplace.
          You can also create your assets.
        </p>
        <a href="#" className={st.land_header_btn}>
          <img src={btn2} className={st.land_header_btn_img} alt="" />
        </a>
        <div className={st.land_village_div}>
          <img src={village} alt="" />
        </div>
      </div>
      <img
        src="https://blockchain.land/assets/image/mobile-view/citizenship-bg-m.png"
        className={st.land_credit_cards_img}
        alt=""
      />

      <div className={st.citizenship}>
        <h1 className={st.citizenship_header_h1}>DIGITAL GLOBAL CITIZENSHIP</h1>
        <p className={st.citizenship_header_p}>
          Digital citizenship is a decentralized unique identity which gives
          users access to the virtual universe. With digital citizenship in
          place, users can experience and be a part of the planet, country &
          valley. Allowing them to explore the infrastructure and experience the
          virtual world. Users can also buy and sell NFTs using their digital
          citizenship rights.
        </p>
        <a href="#">
          <img src={btn2} className={st.land_header_btn_img} alt="" />
        </a>
        <img
          src="https://blockchain.land/assets/image/download/app_down.webp"
          className={st.citizenship_img}
          alt=""
        />
      </div>

      <div className={st.app}>
        <div className={st.app_heading}>
          <h3 className={st.app_heading_h3}>Download Our App</h3>
          <h1 className={st.app_heading_h1}>
            EXPLORE THE NEW WORLD ANYTIME, ANYWHERE
          </h1>
          <p className={st.app_heading_p}>
            Experience an incredible world of metaverse with marvelous features
            of our Mobile App and make your journey more adventurous.
          </p>

          <div className={st.app_icons}>
            <div>
              {" "}
              <div className={st.app_icon}>
                <img
                  src="https://blockchain.land/assets/image/download/reality.svg"
                  className={st.app_icon_img}
                  alt=""
                />
                <h4 className={st.app_icon_h4}>AUGMENTED REALITY</h4>
              </div>
              <div className={st.app_icon}>
                <img
                  src="https://blockchain.land/assets/image/download/arena.svg"
                  className={st.app_icon_img}
                  alt=""
                />
                <h4 className={st.app_icon_h4}>ARENA</h4>
              </div>
            </div>
            <div>
              <div className={st.app_icon}>
                <img
                  src="https://blockchain.land/assets/image/download/nft.svg"
                  className={st.app_icon_img}
                  alt=""
                />
                <h4 className={st.app_icon_h4}>NFT MARKETPLACE</h4>
              </div>
              <div className={st.app_icon}>
                <img
                  src="https://blockchain.land/assets/image/download/meta.svg"
                  className={st.app_icon_img}
                  alt=""
                />
                <h4 className={st.app_icons_h4}>METAVERSE</h4>
              </div>
            </div>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.blockchain.land">
            <img
              src="https://blockchain.land/assets/image/download/google_play.svg"
              className={st.play_store}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className={st.explore}>
        <img
          src="https://blockchain.land/assets/image/download/explore.webp"
          className={st.explore_head_img}
          alt=""
        />
        <div className={st.explore_content}>
          <div className={st.explore_head}>
            <img
              src="https://blockchain.land/assets/image/download/mixed_reality.svg"
              className={st.explore_icon_img}
              alt=""
            />
            <h3 className={st.explore_h3}>Augmented Reality</h3>
          </div>
          <h1 className={st.explore_head_h1}>EXPLORE MIXED REALITY</h1>
          <p className={st.explore_head_p}>
            Convert your imagination into the reality and have an interactive
            experience of physical and digital worlds with Augmented reality.
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.blockchain.land">
            <img
              src="https://blockchain.land/assets/image/download/google_play.svg"
              className={st.play_store}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Land;
