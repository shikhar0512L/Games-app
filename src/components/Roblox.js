import React, { Component } from 'react';
import Card from './Card';

export default class Roblox extends Component {
    img = `https://play-lh.googleusercontent.com/3QAgSY5a64aDHgXNRYJJCB5vpg3E3b74741VfSUlDxY2dcENKM1lmbWsu5jazYdo_kY`;
    description = `Roblox is an online game platform and game creation system developed by Roblox Corporation. It allows users to program games and play games created by other users`;
    Card_Title = 'Roblox ';
    className = "col-md-4";
    title = "Ckeck out";
    link = "https://www.roblox.com/";
    render() {
        return (
            <>

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
                </div>
            </>
        )
    }
}