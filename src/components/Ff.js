import React from 'react'
import Card from './Card'

export default function FreeFire() {
    const img = 'https://staticg.sportskeeda.com/editor/2021/08/0df43-16294457447907-800.jpg';
    const description = 'The Free Fire 4th anniversary events started From 20th August 2021 and will continue till 5th September 2021';
    const Card_Title = 'Free fire 4th aniversary!';
    const className = "col-md-4";
    const title = "Ckeck out";
    const link = "https://ff.garena.com/news/article/en/485/";
    return (
        <>
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
            </div>

        </>
    )
}
