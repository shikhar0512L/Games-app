import React, { Component } from 'react'
import Card from './Card'

export default class Call extends Component {
    img=`https://www.cnet.com/a/img/l8RbnOsHzo6C0fHx-A7yGCDZxGI=/1200x675/2019/09/18/c07d7cfa-5cc7-4d64-a3bb-aabf6b778dcc/call-of-duty-mobile.jpg`;
    description = `Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space.`;
    Card_Title = 'Call of Duty';
    className = "col-md-4";
    title = "Ckeck out";
    link = "https://www.callofduty.com/home";


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
            <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
            <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
            <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
            <Card title={this.Card_Title} className={this.className} description={this.description} btnTitle={this.title} imgSrc={this.img} link={this.link} />
</div>
        )
    }
}