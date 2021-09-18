import React from 'react'
import Card from './Card'

export default function Coc() {
    const img = 'https://th.bing.com/th/id/AMMS_c1e28cb1eb1cc869e06a1142e52ed9d1?pid=ImgDet&rs=1';
    const description = 'Clash of Clans is a freemium mobile strategy video game developed and published by Finnish game developer Supercell. The game was released for iOS platforms on August 2, 2012, and on Google Play for Android on October 7, 2013';
    const Card_Title = 'Clash of Clans';
    const className = "col-md-4";
    const title = "Ckeck out";
    const link = "https://supercell.com/en/games/clashofclans/";
    return (
        <div className="row">
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
            <Card title={Card_Title} className={className} description={description} btnTitle={title} imgSrc={img} link={link} />
        </div>
    )
}
