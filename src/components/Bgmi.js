import React, { Component } from 'react'
import Card from './Card'


export default class Bgmi extends Component {
    img = `data:image/jpeg;base64,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`;
    description = `Battlegrounds Mobile India is an online multiplayer battle royale game developed and published by Krafton. The game is exclusively for the Indian users. The game released on 2 July 2021 for Android devices, and on 18 August 2021 for iOS devices`;
    Card_Title = 'Battlegrounds Mobile India';
    className = "col-md-4";
    title = "Ckeck out";
    link = "https://www.battlegroundsmobileindia.com/";
    render() {
        return (
            <div className="row">
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
                <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />

            </div>
        )
    }
}