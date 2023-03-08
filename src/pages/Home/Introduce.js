import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

function Introduce() {
  const st = {
    main: "text-white p-[30px]",

    introduce_video:
      "bg-[url('https://blockchain.land/assets/image/section-bg/video-bg.webp')] w-[80%] h-[200px] bg-contain mx-[auto] my-[30px] flex items-center justify-center bg-no-repeat",
    introduce_video_icon: "text-[50px] mt-[70px]",
    introduce_head_h1: "text-[25px] font-[500]",
    introduce_head_p: "text-[15px]",
    blockchains:
      "bg-[url('https://blockchain.land/assets/image/blockchain_land/listed-bg.webp')] h-[110vh] bg-no-repeat bg-center",
    blockchains_head_h1: "text-[25px] font-[500] mb-[20px]",
    blockchains_head_p: "text-[15px]",
    blockchains_cards:
      "flex items-center justify-center flex-col gap-[30px] mt-[30px]",
    blockchains_card_bmb:
      "bg-[url('https://blockchain.land/assets/image/mobile-view/listed/listed-card-02-m.svg')] w-[70%] h-[200px] bg-contain bg-no-repeat m-auto flex items-center justify-center text-[30px]",
    blockchains_card_ethereum:
      "bg-[url('https://blockchain.land/assets/image/mobile-view/listed/listed-card-01-m.svg')]  w-[70%] h-[200px] bg-contain bg-no-repeat m-auto flex items-center justify-center text-[30px]",
    blockchains_card_lycan:
      "bg-[url('https://blockchain.land/assets/image/mobile-view/listed/listed-card-03-m.svg')] w-[70%] h-[200px] bg-contain bg-no-repeat m-auto flex items-center justify-center text-[30px]",
  };
  return (
    <div className={st.main}>
      <div className={st.introduce}>
        <div className={st.introduce_head}>
          <h1 className={st.introduce_head_h1}>
            INTRODUCING THE WORLD'S FIRST MULTIVERSE METAVERSE
          </h1>
          <p className={st.introduce_head_p}>
            Blockchain Land is taking major leaps in metaverse space, being the
            first multiverse metaverse gives blockchain access to endless
            opportunities. Blockchain Land has created an ecosystem for
            everyone, right from minting a planet to owning citizenship. It
            promises to create an economy for everyone be it businesses, high
            net worth individuals, or creators.
          </p>

          <div className={st.introduce_video}>
            <a href="https://www.youtube.com/watch?v=Cw7oLMzyMGQ">
              <AiFillPlayCircle className={st.introduce_video_icon} />
            </a>
          </div>
        </div>
      </div>

      <div className={st.blockchains}>
        <div className={st.blockchains_head}>
          <h1 className={st.blockchains_head_h1}>LISTED BLOCKCHAINS</h1>
          <p className={st.introduce_head_p}>
            Blockchain Land is a peer-to-peer network supported by very
            powerful, unshakable, and secure blockchains like ETH, BNB and LYC
            handled without any intermediation of third parties.
          </p>
        </div>
        <div className={st.blockchains_cards}>
          <div className={st.blockchains_card_bmb}>
            <h1>BNB</h1>
          </div>
          <div className={st.blockchains_card_ethereum}>
            <h1>ETHEREUM</h1>
          </div>
          <div className={st.blockchains_card_lycan}>
            <h1>LYCAN</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
