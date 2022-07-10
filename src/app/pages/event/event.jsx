import React from "react";
import eventStyle from "./event.module.sass";
import portf_1 from "../../../assets/event/01.jpg";
import portf_2 from "../../../assets/event/02.jpg";
import portf_3 from "../../../assets/event/03.jpg";
import portf_4 from "../../../assets/event/04.jpg";
import portf_5 from "../../../assets/event/05.jpg";
import portf_6 from "../../../assets/event/06.jpg";
import portf_7 from "../../../assets/event/07.jpg";
import portf_8 from "../../../assets/event/08.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Event = () => {
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

  const photos = portfolio.map((cont) => {
    return (
      <div key={cont.id} className={eventStyle.photo_items}>
        <a href="#">
          <img src={cont.image} />
        </a>
      </div>
    );
  });

  const tag = tagsCloud.map((tag) => {
    return (
      <a className={eventStyle.tag_cloud_link} href="#">
        {tag.title}
      </a>
    );
  });
  const items = [
    {
      image: portf_1,
      title: "Magna aliquyam erased",
      date: "March 12, 2018",
      time: "01:15 pm - 04:30 pm",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum bibendum dui, nec malesuada urna laoreet non. Maecenas id semper nisi.",
    },
    {
      image: portf_2,
      title: "Cupiditate ducimus ea eaque",
      date: "March 11, 2018",
      time: "02:15 pm - 03:50 pm",
      text: "Cupiditate ducimus ea eaque error et excepturi ipsa ipsam, magni modi molestiae numquam officia quo quos ratione sed, similique ut voluptate.",
    },
    {
      image: portf_3,
      title: "Aliquam amet atque deleniti",
      date: "March 9, 2018",
      time: "03:15 pm - 05:30 pm",
      text: "Aliquam amet, atque deleniti dignissimos dolor ducimus eaque eos error et facere ipsam iste laboriosam molestias optio.",
    },
    {
      image: portf_4,
      title: "Ad ipsam itaque molestias",
      date: "March 4, 2018",
      time: "03:00 pm - 04:30 pm",
      text: "Accusantium, asperiores culpa iusto molestias reiciendis repellat voluptatum? Ad ipsam itaque molestias quasi ratione.",
    },
    {
      image: portf_5,
      title: "Magna aliquyam erased",
      date: "March 2, 2018",
      time: "05:15 pm - 07:10 pm",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam et dolore magna aliquyam erat. Vestibulum malesuada justo.",
    },
    {
      image: portf_6,
      title: "Cupiditate ducimus ea eaque ",
      date: "Jan 30, 2018",
      time: "01:15 pm - 05:30 pm",
      text: "Cupiditate ducimus ea eaque error et excepturi ipsa ipsam, magni modi molestiae numquam officia quo quos ratione sed, similique ut voluptate.",
    },

    {
      image: portf_7,
      title: "Aliquam amet atque deleniti ",
      date: "Jan 26, 2018",
      time: "05:45 pm - 04:40 pm",
      text: "Aliquam amet, atque deleniti dignissimos dolor ducimus eaque eos error et facere ipsam iste laboriosam molestias optio.",
    },

    {
      image: portf_8,
      title: "Ad ipsam itaque molestias ",
      date: "Jan 20, 2018",
      time: "01:55 pm - 05:30 pm",
      text: "Accusantium, asperiores culpa iusto molestias reiciendis repellat voluptatum? Ad ipsam itaque molestias quasi ratione.",
    },
    {
      image: portf_1,
      title: "Magna aliquyam erased",
      date: "March 16, 2018",
      time: "05:15 pm - 06:30 pm",
      text: "Duis leo magna, auctor id lorem eget, facilisis finibus tortor. Suspendisse potenti. Pellentesque suscipit leo sed arcu pretium, vel fermentum odio.",
    },

    {
      image: portf_2,
      title: "Cupiditate ducimus ea eaque ",
      date: "Jan 10, 2018",
      time: "03:15 pm - 07:30 pm",
      text: "Cupiditate ducimus ea eaque error et excepturi ipsa ipsam, magni modi molestiae numquam officia quo quos ratione sed, similique ut voluptate.",
    },
  ];

  const EventItems = items.map((item) => (
    <div className={eventStyle.item}>
      <div className={eventStyle.imageBox}>
        <img src={item.image} alt="" className={eventStyle.images} />
      </div>

      <div className={eventStyle.textBox}>
        <div className={eventStyle.item_title}>
          <h3>{item.title}</h3>
        </div>

        <div className="">
          <h4 className={eventStyle.datetime}>
            <span>
              <span className={eventStyle.icon}>
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>
              <span>{item.date}</span>
            </span>
            <span>
              <span className={eventStyle.icon}>
                <FontAwesomeIcon icon={faClock} />
              </span>
              <span>{item.time}</span>
            </span>
          </h4>
        </div>

        <div className={eventStyle.item_text}>
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  ));
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
      <li className={eventStyle.listCategory} key={category.index}>
        <span className={eventStyle.listItem}>{category.name}</span>
        <span className={eventStyle.listItem}>({category.amount})</span>
      </li>
    </ul>
  ));
  return (
    <div className={eventStyle.container}>
      <div className={eventStyle.left}>
        <div className={eventStyle.items}> {EventItems} </div>
        <div className={eventStyle.btns}>
          <button>
            <span>&#60;</span>
          </button>
          <button>1</button>
          <button className={eventStyle.active}>2</button>
          <button>3</button>
          <button>
            <span>&#62;</span>
          </button>
        </div>
      </div>
      <div className={eventStyle.right}>
        <div className={eventStyle.search}>
          <h2 className={eventStyle.title}>Search</h2>
          <form action="">
            <input type="search" placeholder="Search Keyword" />
            <button className={eventStyle.btnSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className={eventStyle.about}>
          <h2 className={eventStyle.title}>About</h2>
          <p className={eventStyle.item_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam
            aliquyam diam diam dolore dolores duo eirmos.
          </p>
        </div>
        <div className={eventStyle.readDiv}>
          <span className={eventStyle.readBtn}>
            <span>Read More</span>
          </span>
        </div>
        <div className={eventStyle.categories}>
          <h2 className={eventStyle.title}>Categories</h2>
          {EventCategories}
        </div>
        <div className={eventStyle.recent_portfolio}>
          <h2 className={eventStyle.title}>Recent Portfolio</h2>
          <div className={eventStyle.photo}>{photos}</div>
        </div>
        <div className={eventStyle.tag_cloud}>
          <h2 className={eventStyle.title}>Tags</h2>
          <div className={eventStyle.tags_cloud_items}>{tag}</div>
        </div>
      </div>
    </div>
  );
};
export default Event;
