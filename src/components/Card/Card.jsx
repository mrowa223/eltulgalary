import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";

import "./Card.scss";

import A_Nareshev from "./images/A_Nareshev.png";

const Card = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowRight />,
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-full h-full flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden ">
        {/* Image Section */}
        <div className="relative w-full img-section h-full ">
          <img
            src={A_Nareshev}
            alt="Profile"
            className="w-full h-full object-cover img-item"
          />
          <div className=" bottom-0 w-full p-4 bg-white bg-opacity-90">
            <h2 className="text-lg">Ануар Нарешев Асхатович</h2>
            <p className="text-sm text-gray-600 text">
              «Ембімұнайгаз» АҚ-ы «Жайықмұнайгаз» МГӨБ-сы өндірістік-техникалық
              бөлімінің бастығы
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#!" className="text-black">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#!" className="text-black">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#!" className="text-black">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full sm:w-1/2 h-full p-8 content-section flex flex-col ">
          <Slider {...settings}>
            <div className="flex flex-col  justify-center">
              <h3 className="text-xl font-bold">Because SaaS Can't Drive</h3>
              <p className="text-gray-800 mt-4">
                Нарешев Ануар Асхарұлы Гурьев облысы Гурьев қаласында 1962 жылы
                дүниеге келген. 1979-1984 жылдары В.И.Ленин атындағы Казақ
                политехникалық институтының студенті. Еңбек жолын 1984 жылы
                «Жайықмұнайгаз» МГӨБ-да мұнай өндіру операторлы болып бастаған.
                1985 жылы «Жайықмұнайгаз» МГӨБ-сы Қамысты МГӨЦ-да шебер
                көмекшісі болып жалғастырған. 1985-1988 жылдары «Жайықмұнайгаз»
                МГӨБ-сы мұнай дайындау және айдау цехының шебері. 1988-1992
                жылдары өндірістік-техникалық бөлімінің, күрделі құрылыс
                бөлімінің, материалдық-техникалық қамту бөлімінің инженері
                жұмыстарын атқарған. 1992-1999 жылдары күрделі құрылыс жөніндегі
                бөлімнің бастығы, бастық орынбасары лауазымдарын атқарған.
              </p>
            </div>
            <div className="flex flex-col h-full justify-center">
              <h3 className="text-xl font-bold">Another Slide Title</h3>
              <p className="text-gray-800 mt-4">
                1999-2009 жылдары өндірістік-техникалық бөлімі бастығы,
                өндірістік-техникалық қызметінің басшысы. 2009-2011 жылдары
                «Жайықмұнайгаз» МГӨБ-ның бас инженері лауазымын атқарған.
                2011-2014 жылдары өндірістік-техникалық қызметінің басшысы. 2014
                жылдың сәуірінен бүгінге дейін «Ембімұнайгаз» АҚ-ы
                «Жайықмұнайгаз» МГӨБ-ның өндірістік-техникалық бөлімі бастығы
                болып жұмыс жасап келеді.
              </p>
            </div>
            <div className="flex flex-col h-full justify-center">
              <h3 className="text-xl font-bold">Another Slide Title</h3>
              <p className="text-gray-800 mt-4">
                А.А.Нарешев білікті маман ретінде жаңа технологияларды енгізді,
                атап айтқанда 2012 жылы С.Балғымбаев кен орнында газды дайындау
                қондырғысын енгізуге, 2014 жылдары кен орындарынан газ аралас
                сұйығын тасымалдау үшін көпфазалы сораптар қондырғысын іске
                қосуға, Забурын кен орнында полимерлік суландыру қондырғысын
                орнатуға және Оңтүстік-Шығыс Қамысты, С.Балғымбаев, Забурын кен
                орындарында кен қабаты қысымы жүйесін ұстап тұру мақсатында ГНК
                сораптарын енгізуге үлес қосты. А.А.Нарешев 2009 жылы
                «ҚазМұнайГаз» БӨ» АҚ-ның алғыс хатымен, 2014 жылы «Ембімұнайгаз»
                АҚ-ның алғыс хатымен, 2021 жылы «ҚазМұнайГаз» ҰК» АҚ-ның құрмет
                грамотасымен, 2022 жылы «Ембімұнайгаз» АҚ-на 100-жыл»
                мерейтойлық медалімен, 2023 жылы ҚР ЭМ-нің «Мұнай-газ саласының
                еңбек сіңірген қызметкері» төс белгісімен марапатталған
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Card;
