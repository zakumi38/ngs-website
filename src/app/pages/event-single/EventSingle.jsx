import React from 'react';
import EventSingleRight from "./EventSingleRight";
import eventSingleStyles from './event-single.module.sass'
import topImg from "../../../assets/event/04.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faClock, faLocationDot, faReply, faUser, faEnvelope, faPenToSquare, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import commentImg1 from "../../../assets/event/comment/comment-01.jpg"
import commentImg2 from "../../../assets/event/comment/comment-02.jpg"
import commentImg3 from "../../../assets/event/comment/comment-03.jpg"
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";
import HeaderStyle from '../../../core/components/header/header.module.sass'

export default function EventSingle({eventSingleContent}) {
    const data = eventSingleContent
    console.log(data)
    return (
        <div>
            <section className={HeaderStyle.box}>
                <HeaderCarousel />
                <div className={HeaderStyle.bannerContent}>
                <h1 className={HeaderStyle.mainHeader}>{data.mainHeader}</h1>
                <div className={HeaderStyle.breakCrumb}>
                    <ol className={HeaderStyle.breakCrumbLists}>
                        <li className={HeaderStyle.breakCrumbList}><a href="/" className={HeaderStyle.link}>{data.firstBreakCrumb}</a></li>
                        <li className={HeaderStyle.breakCrumbList} ><FontAwesomeIcon className={HeaderStyle.icon} icon={faAngleRight} ></FontAwesomeIcon></li>
                        <li className={HeaderStyle.breakCrumbList}><a href="/" className={HeaderStyle.link}>{data.secondBreakCrumb}</a></li>
                        <li className={HeaderStyle.breakCrumbList} ><FontAwesomeIcon className={HeaderStyle.icon} icon={faAngleRight} ></FontAwesomeIcon></li>
                        <li className={HeaderStyle.breakCrumbList} >{data.thirdBreakCrumb}</li>
                    </ol>
                </div>
                </div>
            </section>
            <div className={eventSingleStyles.container}>
                <div className={eventSingleStyles.left}>
                    <article className={eventSingleStyles.article}>
                        <img src={topImg} alt="" className={eventSingleStyles.articleTopImg}/>
                        <div className={eventSingleStyles.itemContent}>
                            <div className={eventSingleStyles.metaItems}>
                                <FontAwesomeIcon icon={faCalendarDays} color={"#5b83cd"}/>
                                <span className={eventSingleStyles.data}>March 12, 2018</span>
                                <FontAwesomeIcon icon={faLocationDot} color={"#5b83cd"}/>
                                <span className={eventSingleStyles.data}>Consetetur Sadipscing Eitr</span>
                                <FontAwesomeIcon icon={faClock} color={"#5b83cd"}/>
                                <span className={eventSingleStyles.data}>01:15 pm - 05:30 pm</span>
                            </div>
                            <hr/>
                            <div className={eventSingleStyles.content}>
                                <p className={eventSingleStyles.excerpt}>
                                    At vero eos accusam justo duo dolores et rebum clita
                                    kasd gubergren nosea takimata sanctus est dolor sit amet
                                </p>
                                <p>
                                    At vero eos et accusam et justo duo dolores et ea rebum.
                                    Stet clita kasd gubergren, no sea takimata sanctus est
                                    Lorem ipsum dolor sit amet. Lorem ipsum dolor amet
                                    consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt.
                                </p>
                                <ul className={eventSingleStyles.styledList}>
                                    <li>Consetetur sadipscing elitr, sed diam nonumy</li>
                                    <li>Eirmod tempor invidunt ut labore</li>
                                    <li>Dolore magna aliquyam erat</li>
                                    <li>Sed diam voluptua. At vero eos accusam</li>
                                </ul>
                                <p>
                                    At vero eos et accusam et justo duo dolores et ea rebum.
                                    Stet clita kasd gubergren, no sea takimata sanctusamet.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et
                                    dolore magna aliquyam erat.
                                </p>
                            </div>
                        </div>
                    </article>
                    <div className={eventSingleStyles.comments}>
                        <h4 className={eventSingleStyles.commentsTitle}>Comments</h4>
                        <ol className={eventSingleStyles.commentList}>
                            <li className={eventSingleStyles.comment}>
                                <div className={eventSingleStyles.commentBody}>
                                    <div className={eventSingleStyles.commentImgContainer}>
                                        <img src={commentImg1} alt=""/>
                                    </div>
                                    <div className={eventSingleStyles.commentContent}>
                                        <b>
                                            <a href="#" rel="nofollow" className={eventSingleStyles.commentNameLink}>Chole
                                                Denverou</a>
                                            <span className={eventSingleStyles.commentMetadata}>
                                                <a href="#">
                                                <time dateTime="2018-03-14T07:57:01+00:00">
                                                    March 14, 2018
                                                </time>
                                            </a>
                                            </span>
                                        </b>
                                        <p className={eventSingleStyles.commentText}>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                        </p>
                                    </div>
                                    <div className={eventSingleStyles.replyIcon}>
                                        <FontAwesomeIcon icon={faReply}/>
                                    </div>
                                </div>
                                <div className={eventSingleStyles.commentChildren}>
                                    <div className={eventSingleStyles.commentBody}>
                                        <div className={eventSingleStyles.commentImgContainer}>
                                            <img src={commentImg2} alt=""/>
                                        </div>
                                        <div className={eventSingleStyles.commentContent}>
                                            <b>
                                                <a href="#" rel="nofollow" className={eventSingleStyles.commentNameLink}>
                                                    Patric Knowles</a>
                                                <span className={eventSingleStyles.commentMetadata}>
                                                <a href="#">
                                                <time dateTime="2018-03-14T07:57:01+00:00">
                                                    March 14, 2018
                                                </time>
                                            </a>
                                            </span>
                                            </b>
                                            <p className={eventSingleStyles.commentText}>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                eirmod
                                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                            </p>
                                        </div>
                                        <div className={eventSingleStyles.replyIcon}>
                                            <FontAwesomeIcon icon={faReply}/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={eventSingleStyles.comment}>
                                <div className={eventSingleStyles.commentBody}>
                                    <div className={eventSingleStyles.commentImgContainer}>
                                        <img src={commentImg3} alt=""/>
                                    </div>
                                    <div className={eventSingleStyles.commentContent}>
                                        <b>
                                            <a href="#" rel="nofollow" className={eventSingleStyles.commentNameLink}>Macie
                                                Williams</a>
                                            <span className={eventSingleStyles.commentMetadata}>
                                                <a href="#">
                                                <time dateTime="2018-03-14T07:57:01+00:00">
                                                    March 14, 2018
                                                </time>
                                            </a>
                                            </span>
                                        </b>
                                        <p className={eventSingleStyles.commentText}>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                        </p>
                                    </div>
                                    <div className={eventSingleStyles.replyIcon}>
                                        <FontAwesomeIcon icon={faReply}/>
                                    </div>
                                </div>
                            </li>
                        </ol>
                        <h4 className={eventSingleStyles.commentReplyTitle}>Leave Your Comment</h4>
                        <div className={eventSingleStyles.commentResponse}>
                            <form action="/" method="post" id="commentForm" className={eventSingleStyles.commentForm}>
                                <div className={eventSingleStyles.formInput}>
                                    <FontAwesomeIcon icon={faUser} className={eventSingleStyles.formInputIcon}/>
                                    <input name="author" type="text" placeholder="Full Name" required/>
                                </div>
                                <div className={eventSingleStyles.formInput}>
                                    <FontAwesomeIcon icon={faEnvelope} className={eventSingleStyles.formInputIcon}/>
                                    <input name="author" type="text" placeholder="E-Mail" required/>
                                </div>
                                <div className={eventSingleStyles.formTextArea}>
                                    <FontAwesomeIcon icon={faPenToSquare} className={eventSingleStyles.formInputIcon}/>
                                    <textarea className="form-control" id="comment" name="comment" cols="45" rows="8"
                                            maxLength="65525" aria-required="true" required="required"
                                            placeholder="Your Comment"></textarea>
                                </div>
                                {/* Used span instead button because of other global button style is messing with it */}
                                <span type="button" className={eventSingleStyles.formSubmit}>
                                    <span>Submit</span>
                                </span>
                            </form>
                        </div>

                    </div>
                </div>
                <EventSingleRight/>
            </div>
        </div>
    );
}
