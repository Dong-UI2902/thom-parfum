import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import "../../styles/Roulette.scss";
import { useStore } from "../../context";
import Modal from "../Modal/Modal";

const RANDOM_ITEM1 = [0, 2, 1];
const RANDOM_ITEM2 = [0, 2, 3];
const RANDOM_ITEM3 = [2, 2, 4];
const RANDOM_ITEM4 = [2, 2, 0];
const RANDOM_ITEM5 = [2, 2, 3];
const RANDOM_ITEM6 = [2, 2, 1];
const RANDOM_ITEM7 = [6, 2, 2];
const RANDOM_ITEM8 = [6, 2, 0];
const RANDOM_ITEM9 = [3, 2, 2];

const data = [
  {
    option: "1 Voucher 300.000vnđ",
    image: {
      uri: "/assets/img/lucky/voucher.png",
      offsetY: 120,
      sizeMultiplier: 0.5,
    },
  },
  {
    option: "1 chai chiết 10ml bất kỳ",
    image: {
      uri: "/assets/img/lucky/10ml.png",
      offsetY: 150,
      sizeMultiplier: 0.8,
    },
  },
  {
    option: "Mất lượt",
    image: {
      uri: "/assets/img/lucky/sad.png",
      offsetY: 150,
      sizeMultiplier: 0.4,
    },
  },
  {
    option: "2 chai chiết 5ml bất kỳ",
    image: {
      uri: "/assets/img/lucky/chiet5ml.png",
      offsetY: 150,
      sizeMultiplier: 0.8,
    },
  },
  {
    option: "1 Combo đặc biệt (10ml + Voucher 300.000vnđ)",
    image: {
      uri: "/assets/img/lucky/combo.png",
      offsetY: 150,
      sizeMultiplier: 0.7,
    },
  },
  {
    option: "Mất lượt",
    image: {
      uri: "/assets/img/lucky/sad.png",
      offsetY: 150,
      sizeMultiplier: 0.4,
    },
  },
  {
    option: "Giảm 10%",
    image: {
      uri: "/assets/img/lucky/sale.png",
      offsetY: 150,
      sizeMultiplier: 0.6,
    },
  },
  {
    option: "1 chai chiết 10ml bất kỳ",
    image: {
      uri: "/assets/img/lucky/10ml.png",
      offsetY: 150,
      sizeMultiplier: 0.8,
    },
  },
  {
    option: "Dior Sauvage EDP 30ml",
    image: {
      uri: "/assets/img/lucky/30ml.png",
      offsetY: 140,
      sizeMultiplier: 0.8,
    },
  },
  {
    option: "Mất lượt",
    image: {
      uri: "/assets/img/lucky/sad.png",
      offsetY: 150,
      sizeMultiplier: 0.4,
    },
  },
];

const setItemIntoLocal = (item: number[]) => {
  localStorage.setItem("list_item", JSON.stringify(item));
};

const audioElement = new Audio("/assets/wheel-effect2.m4a");

const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [gifts, setGifts] = useState<any>([]);
  const { setGift, getGift } = useStore();
  const [active, setActive] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [tempGift, setTempGift] = useState(data[1]);
  const [listItems, setListItems] = useState([RANDOM_ITEM1]);

  const randomListItem = () => {
    const temp = localStorage.getItem("list_item");
    if (!temp) {
      const key = Math.floor(Math.random() * 9);
      switch (key) {
        case 0:
          setItemIntoLocal(RANDOM_ITEM1);
          break;
        case 1:
          setItemIntoLocal(RANDOM_ITEM2);
          break;
        case 2:
          setItemIntoLocal(RANDOM_ITEM3);
          break;
        case 3:
          setItemIntoLocal(RANDOM_ITEM4);
          break;
        case 4:
          setItemIntoLocal(RANDOM_ITEM5);
          break;
        case 5:
          setItemIntoLocal(RANDOM_ITEM6);
          break;
        case 6:
          setItemIntoLocal(RANDOM_ITEM7);
          break;
        case 7:
          setItemIntoLocal(RANDOM_ITEM8);
          break;
        default:
          setItemIntoLocal(RANDOM_ITEM9);
      }
    } else {
      setListItems(JSON.parse(temp));
    }
  };

  const getGiftFromLocal = () => {
    const arrGifts = getGift();

    if (arrGifts) {
      const list = JSON.parse(arrGifts);
      setGifts(list);
    }
  };

  const getRootId = () => {
    const rootId = document.getElementById("root");
    return rootId;
  };

  const openModal = () => {
    const rootId = getRootId();
    // @ts-ignore: Object is possibly 'null'.
    rootId.style.height = "100vh";
    // @ts-ignore: Object is possibly 'null'.
    rootId.style.overflow = "hidden";
    setModalOpen(true);
  };

  const closeModal = () => {
    const rootId = getRootId();
    // @ts-ignore: Object is possibly 'null'.
    rootId.style.height = "unset";
    // @ts-ignore: Object is possibly 'null'.
    rootId.style.overflowY = "unset";
    setModalOpen(false);
  };

  useEffect(() => {
    randomListItem();
    getGiftFromLocal();
  }, []);

  const handleSpinClick = () => {
    const arrGifts = getGift();
    randomListItem();

    if (arrGifts) {
      const list = JSON.parse(arrGifts);
      setGifts(list);

      if (list.length >= 3) {
        return setActive(true);
      }
    }

    setMustSpin(true);
    audioElement.play();
  };

  return (
    <div className="roulette">
      <div className="roulette-container">
        <img className="outerBorder" src="/assets/img/lucky/rou_on_high.png" />
        {listItems.length >= 0 && (
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={Number(listItems[gifts.length])}
            data={data}
            spinDuration={0.4}
            outerBorderColor={"#f2f2f2"}
            outerBorderWidth={0}
            innerBorderColor={"#ffff"}
            radiusLineColor={"#dedede"}
            radiusLineWidth={1}
            fontSize={15}
            textColors={["#ffffff"]}
            backgroundColors={["#E6EFEB", "#029862"]}
            onStopSpinning={() => {
              setMustSpin(false);
              setGifts((prev: any) => [
                ...prev,
                data[Number(listItems[gifts.length])],
              ]);
              setGift(data[Number(listItems[gifts.length])]);
              setTempGift(data[Number(listItems[gifts.length])]);
              openModal();
              audioElement.pause();
            }}
            pointerProps={{
              src: "/assets/img/lucky/pointer.png",
              style: {
                transform: "rotate(-132deg)",
                right: "13px",
                top: "18px",
                opacity: 0,
              },
            }}
          />
        )}
        {/* <img className="pointer" src="/assets/img/lucky/pointer.png" /> */}
        <button
          className="button roulette-button"
          disabled={active}
          onClick={handleSpinClick}
        >
          <img src="/assets/img/lucky/roll.png" />
        </button>
      </div>
      <div className="roulette_time">
        Lượt quay: <strong>{3 - gifts.length}</strong>
      </div>

      {/* <div className="narciso mt-20">
        <button
          className={`buy ${!active ? 'animation' : 'out'}`}
          onClick={handleSpinClick}
          disabled={active}
        >
          {active ? 'Hết lượt' : 'Quay Ngay'}
        </button>
      </div> */}
      <div className="gift">
        <div className="gift_title">kết quả vòng quay</div>
        <div>
          {gifts.length > 0
            ? "Phần thưởng sẽ được đính kèm vào đơn đặt hàng!"
            : "Quay vòng quay may mắn để nhận các ưu đãi hấp dẫn"}
        </div>
        <div className="gift__box">
          {gifts.length > 0 && (
            <div>
              {gifts.map((item: any, index: number) => {
                if (item?.option !== "Mất lượt") {
                  return (
                    <div className="gift_item" key={item?.option}>
                      <div className="gift_item-image">
                        <img src={item?.image.uri} />
                      </div>
                      <div className="gift_item-desc">{item?.option}</div>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>

        {/* <div className="gift_item">
          <div className="gift_item-image">
            <img src="/assets/img/lucky/voucher.png" />
          </div>
          <div className="gift_item-desc">Voucher 300k</div>
        </div> */}
      </div>
      {/* {!mustSpin ? data[prizeNumber].option : ''} */}
      <Modal gift={tempGift} openModal={modalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Roulette;
