import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function LeftSideLogin() {
    return (
        <>
            <div className="left_side">

                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    loop={true}
                 
                    pagination={{
                        clickable: true,
                        el: ".custom_lines",
                        bulletClass: "line",
                        bulletActiveClass: "active",
                        renderBullet: function (index, className) {
                            return `<div class="${className}"></div>`;
                        },
                    }}
                    className="login_swiper"
                >

                    <SwiperSlide>
                        <div className="swiper_slide">
                            <div className="title">
                                Искусство оформления окон от профессионалов
                            </div>
                            <div className="text">
                                Производство премиальных штор и лучший учебный центр в Центральной Азии.
                            </div>
                            <div className="custom_lines">
                                <div className="line active"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper_slide">
                            <div className="title">
                                Лучшие дизайнерские решения для вашего дома
                            </div>
                            <div className="text">
                                Создаем уникальные интерьеры и обучаем будущих специалистов.
                            </div>
                            <div className="custom_lines">
                                <div className="line"></div>
                                <div className="line active"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper_slide">
                            <div className="title">
                                Премиальное качество и современные технологии
                            </div>
                            <div className="text">
                                Индивидуальный подход к каждому проекту и высокий уровень сервиса.
                            </div>
                            <div className="custom_lines">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line active"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </>
    );
}