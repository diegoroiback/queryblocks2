import React, { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./ClientsSlider.module.sass";
import cn from "classnames";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { clientslider } from "@/mocks/clientslider";
import type { Swiper as SwiperType } from 'swiper';

type ClientsSliderProps = {};

const ClientsSlider = ({}: ClientsSliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={cn("container", styles.container)}>
                <div className={styles.head} data-aos="fade-right">
                    <div className={styles.titles}>
                        <div className={cn("h2", styles.title)}>
                            Here’s what our <br />clients say
                        </div>
                    </div>
                    <div className={styles.info} data-aos="fade-left">
                        <p className={styles.paragraph}>
                            Top-notch software, award-winning design, revolutionary mobile apps. Listen to our clients and discover what’s possible for you.
                        </p>
                        <a className={styles.link}>Learn more</a>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    navigation
                    pagination={{
                        type: 'progressbar',
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    onSlideChange={(swiper: SwiperType) => setCurrentSlide(swiper.realIndex + 1)}
                >
                    {clientslider.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.item}>
                                <div className={styles.logo}>
                                    <img src={item.logo} alt="" />
                                </div>
                                <div className={styles.image}>
                                    <img src={item.img} alt="" />
                                </div>
                                <p className={styles.text}>{item.text}</p>
                                <div className={styles.client}>
                                    <p className={styles.name}>{item.clientName}</p>
                                    <p className={styles.position}>{item.clientPosition}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-counter">
                        {currentSlide} / {clientslider.length}
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default ClientsSlider;
