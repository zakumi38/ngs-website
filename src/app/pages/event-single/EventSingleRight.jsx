import React from 'react';
import eventSingleStyle from "./event-single.module.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import portf_1 from "../../../assets/event/01.jpg";
import portf_2 from "../../../assets/event/02.jpg";
import portf_3 from "../../../assets/event/03.jpg";
import portf_4 from "../../../assets/event/04.jpg";
import portf_5 from "../../../assets/event/05.jpg";
import portf_6 from "../../../assets/event/06.jpg";

const EventSingleRight = () => {
    const categories = [
        {
            name: "Internet Provider",
            amount: "12",
        },
        {
            name: "TV Solution",
            amount: "8",
        },
        {
            name: "Digital Trade",
            amount: "10",
        },
        {
            name: "Technologies",
            amount: "21",
        },
        {
            name: "E-Commerce",
            amount: "6",
        },
    ];
    const EventCategories = categories.map((category) => (
        <ul>
            <li className={eventSingleStyle.listCategory} key={category.index}>
                <span className={eventSingleStyle.listItem}>{category.name}</span>
                <span className={eventSingleStyle.listItem}>({category.amount})</span>
            </li>
        </ul>
    ));
    const portfolio = [
        {
            id: 1,
            image: portf_1,
        },
        {
            id: 2,
            image: portf_2,
        },
        {
            id: 3,
            image: portf_3,
        },
        {
            id: 4,
            image: portf_4,
        },
        {
            id: 5,
            image: portf_5,
        },
        {
            id: 6,
            image: portf_6,
        },
    ];
    const photos = portfolio.map((cont) => {
        return (
            <div key={cont.id} className={eventSingleStyle.photoItems}>
                <a href="#">
                    <img src={cont.image}/>
                </a>
            </div>
        );
    });
    const tagsCloud = [
        {
            id: 1,
            title: "Cable",
        },
        {
            id: 2,
            title: "IPTV",
        },
        {
            id: 3,
            title: "Internet",
        },
        {
            id: 4,
            title: "Provuder Services",
        },
        {
            id: 5,
            title: "Router setup",
        },
    ];
    const tag = tagsCloud.map((tag) => {
        return (
            <a className={eventSingleStyle.tagCloudLink} href="#">
                {tag.title}
            </a>
        );
    });
    return (
        <>
            <div className={eventSingleStyle.right}>
                <div className={eventSingleStyle.search}>
                    <h2 className={eventSingleStyle.title}>Search</h2>
                    <form action="" className={eventSingleStyle.form_event}>
                        <input type='text' placeholder="Search Keyword"/>
                        <button className={eventSingleStyle.btnSearch}>
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </button>
                    </form>
                </div>
                <div className={eventSingleStyle.about}>
                    <h2 className={eventSingleStyle.title}>About</h2>
                    <p className={eventSingleStyle.itemText}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam
                        dolore dolores duo eirmos.
                    </p>
                </div>
                <div className={eventSingleStyle.readDiv}>
                    <span className={eventSingleStyle.readBtn}>
                        <span>Read More</span>
                    </span>
                </div>
                <div className={eventSingleStyle.categories}>
                    <h2 className={eventSingleStyle.title}>Categories</h2>
                    {EventCategories}
                </div>
                <div className={eventSingleStyle.recentPortfolio}>
                    <h2 className={eventSingleStyle.title}>Recent Portfolio</h2>
                    <div className={eventSingleStyle.photo}>{photos}</div>
                </div>
                <div className={eventSingleStyle.tagCloud}>
                    <h2 className={eventSingleStyle.title}>Tags</h2>
                    <div className={eventSingleStyle.tagsCloudItems}>{tag}</div>
                </div>
            </div>
        </>
    );
};

export default EventSingleRight;