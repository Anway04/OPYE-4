"use client"
import styles from "../styles/DealsCardFrame.module.css"
import { useCallback } from "react"
import DealsCards from "./DealsCards";
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import { fwdArrow, bkdArrow } from "../../public";
import { deal } from "@/assets/constants";

const DealsCardFrame = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})
  const scrollPrev = useCallback(() => {    if (emblaApi) emblaApi.scrollPrev()  }, [emblaApi])
  const scrollNext = useCallback(() => {    if (emblaApi) emblaApi.scrollNext()  }, [emblaApi])
  return (
    <>
    <div className={`${styles.dealFrame}`}>
      {deal.map((deal, index) => (
        <DealsCards key={index} imageUrl={deal.dealImg} dealName={deal.dealName} dealDescription={deal.dealDesc} />
      ))}
    </div>
    <div className={`${styles.embla} ${styles.caraousel}`} ref={emblaRef}>
      <div className={styles.embla__container}>
        {deal.map((deal, index) => (
          <div key={index} className={styles.embla__slide}>
            <DealsCards imageUrl={deal.dealImg} dealName={deal.dealName} dealDescription={deal.dealDesc} />
          </div>
        ))}
      </div>
      <div className={`${styles.arrow}`}>
        <button className={`embla__prev`} onClick={scrollPrev}>
          <Image src={bkdArrow} height={20} width={20} />
        </button>
        <button className={`embla__next`} onClick={scrollNext}>
        <Image src={fwdArrow} height={20} width={20} />
        </button>
      </div>
    </div>
    </>
  )
}

export default DealsCardFrame;