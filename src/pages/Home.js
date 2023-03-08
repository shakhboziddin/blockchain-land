import React from "react";
import vid from "../videos/home.mp4";
import { Link } from "react-router-dom";
import Planet from "./Home/Planet";
import Land from "./Home/Land";
import Introduce from "./Home/Introduce";

function Home() {
  const st = {
    main: "pt-[70px] overflow-hidden  ",
    video_bg: "w-full h-[100vh] top-[70px] relative z-[-10]",
    video: "object-cover w-full h-[700px]",
    shadow:
      "bg-[#000] absolute  shadow-2xl shadow-black h-[110px] bg-cover w-full soya",
    bg_content: "absolute px-[15px] text-white z-[90] top-[180px]",
    head2: "w-[60%]",
    head1: "text-[40px] w-[50%] font-[500] line",
    btn_div:
      "bg-[url('https://blockchain.land/assets/image/btn-bg/btn-black.svg')] bg-no-repeat h-[40px]  w-[140px] bg-contain flex items-center justify-center text-white",
    bg_content2:
      "bg-[url('https://blockchain.land/assets/image/hero/hero-card-bg.svg')] p-[20px] h-[150px] text-white flex items-center justify-start w-[340px] bg-no-repeat bg-contain absolute top-[450px] left-[100px]",
    bottom_content:
      "w-[80%] bg-[url('https://blockchain.land/assets/image/hero/metaverse_mobile.png')] h-[600px] bg-no-repeat bg-contain",
    header: "text-[20px] mb-[40px]",
    bottom_head: "flex items-center justify-center relative top-[440px]",
    live_img: "w-[90px] absolute left-[20px] top-[40px]",
    bottom_content2: "absolute top-[120px] left-[20px]",
    bg_content2_h1: "w-[80%] text-[19px] mb-[20px] text-[#e5e5e]",
    advice:
      "h-[70px] border w-[90%] mx-[auto] mt-[650px] text-white flex items-center justify-between border-x-0 border-1 border-slate-700",
    advice_content: "flex items-center justify-between w-full",
  };

  return (
    <div className={st.main}>
      <div className={st.shadow}></div>
      <div className={st.video_bg}>
        <video src={vid} className={st.video} autoPlay loop muted></video>
      </div>

      <div className={st.bg_content}>
        <h2 className={st.head2}>
          Allowing your businesses to scale upglobally and across blockchains!
        </h2>
        <h1 className={st.head1}>Blockchain Land</h1>

        <div className={st.btn_div}>
          <Link to="/">Connect Wallet</Link>
        </div>

        <div className={st.bg_content2}>
          <h1 className={st.header}>
            The First-Ever <br /> MultiChain Metaverse
          </h1>
        </div>

        <div div className={st.bottom_head}>
          <div className={st.bottom_content}>
            <img
              src="https://blockchain.land/assets/image/hero/live.webp"
              className={st.live_img}
              alt=""
            />

            <div className={st.bottom_content2}>
              <h1 className={st.bg_content2_h1}>
                Now, Blockchain Land Metaverse{" "}
                <span className="text-[#ca96cc]">Marketplace </span> Is Live.
                Reach To Your Virtual Destination.
              </h1>
              <div className={st.btn_div}>
                <Link to="/">Explore Now →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={st.advice}>
        <div className={st.advice_content}>
          <h3>Ethereum</h3>
          <img
            src="https://blockchain.land/assets/image/small-elements/chain-blue-mark.svg"
            alt=""
            className="w-[10px]"
          />
          <h3>Binance Smart Chain</h3>
          <img
            src="https://blockchain.land/assets/image/small-elements/chain-blue-mark.svg"
            alt=""
            className="w-[10px]"
          />
          <h3>Lyan Chain</h3>
        </div>
      </div>

      <Planet />
      <Land />
      <Introduce />
    </div>
  );
}

export default Home;
