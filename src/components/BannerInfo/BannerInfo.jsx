import React from 'react'
import './BannerInfo.styles.css'
import cartao from '../../assets/Logos/cartao.png'
import email2 from '../../assets/Logos/email2.png'
import caminhao from '../../assets/Logos/caminhao.png'

const BannerInfo = () => {
  return (
    <div className='banner'>
        <div className='cartao-banner'>
            <h3> PARCELAMENTOS EM ATÉ 3X </h3>
            <img src={cartao} alt='cartão de crédito ícone'></img>
        </div>
        <div className='email-banner'>
            <h3> TROCAS E RECLAMAÇÕES VIA EMAIL </h3>
            <img src={email2} alt='email ícone'></img>
        </div>
        <div className='frete-banner'>
            <h3> ENVIOS PARA TODO O PARANÁ </h3>
            <img src={caminhao} alt='caminhão ícone'></img>
        </div>
    </div>
  )
}

export default BannerInfo