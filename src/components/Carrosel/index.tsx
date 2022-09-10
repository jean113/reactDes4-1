import { Img } from "@chakra-ui/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import "swiper/css/navigation";

export default function Carrosel()
{
    return(
        <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Link href="/continent/europa">
                    <Img src="/images/carrousel/europa.svg"
                        _hover={{
                            cursor: "pointer"
                        }}
                        h={[250,480]}
                    />
                </Link> 
            </SwiperSlide>
            <SwiperSlide>
                <Link href="/continent/africa">
                    <Img src="/images/carrousel/africa.svg"
                        _hover={{
                            cursor: "pointer"
                        }}
                        h={[250,480]}
                    />
                </Link> 
            </SwiperSlide>
            <SwiperSlide>
                <Link href="/continent/americaNorte">
                    <Img src="/images/carrousel/americaNorte.svg"
                        _hover={{
                            cursor: "pointer"
                        }}
                        h={[250,480]}
                    />
                </Link> 
            </SwiperSlide>
            <SwiperSlide>
                <Link href="/continent/americaSul">
                    <Img src="/images/carrousel/americaSul.svg"
                        _hover={{
                            cursor: "pointer"
                        }}
                        h={[250,480]}
                    />
                </Link> 
            </SwiperSlide>
            <SwiperSlide>
                <Link href="/continent/asia">
                    <Img src="/images/carrousel/asia.svg"
                        _hover={{
                            cursor: "pointer"
                        }}
                        h={[250,480]}
                    />
                </Link> 
            </SwiperSlide>
            <SwiperSlide>
                <Link href="/continent/oceania">
                    <Img src="/images/carrousel/oceania.svg"
                        _hover={{
                            cursor: "pointer"
                        }}
                        h={[250,480]}
                    />
                </Link> 
            </SwiperSlide>


      </Swiper>
    );
}