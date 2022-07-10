import react, { useState } from 'react'
import IsoTopeGrid from 'react-isotope'
import galleryListStyle from './gallery-list.module.sass'

const defaultFilters = [
    {"label":'ALL',"isChecked":true},
    {"label":'VOIP',"isChecked":false},
    {"label":'TECHNOLOGIES',"isChecked":false},
    {"label":'INTERNET',"isChecked":false},
    {"label":'CABLE',"isChecked":false},
    {"label":'IPTV',"isChecked":false},
]
const CardLayOut = [
    {
        "id":'1',
        "filter":['VOIP','ALL'],
        "tag":['VOIP'],
        "title":'literally a blur image',
        "path":'/gallery/01.jpg',
    },
    {
        "id":"2",
        "filter":['VOIP','ALL'],
        "tag":['VOIP'],
        "title":'literally a blur image',
        "path":'/gallery/02.jpg',
    },
    {
        "id":"3",
        "filter":['TECHNOLOGIES','ALL'],
        "tag":['TECHNOLOGIES'],
        "title":'literally a blur image',
        "path":'/gallery/03.jpg',
    },
    {
        "id":"4",
        "filter":['TECHNOLOGIES','ALL'],
        "tag":['TECHNOLOGIES'],
        "title":'literally a blur image',
        "path":'/gallery/04.jpg',
    },
    {
        "id":"5",
        "filter":['INTERNET','ALL'],
        "tag":['INTERNET'],
        "title":'literally a blur image',
        "path":'/gallery/05.jpg',
    },
    {
        "id":"6",
        "filter":['INTERNET','ALL'],
        "tag":['INTERNET'],
        "title":'literally a blur image',
        "path":'/gallery/06.jpg',
    },
    {
        "id":"7",
        "filter":['CABLE','ALL'],
        "tag":['CABLE'],
        "title":'literally a blur image',
        "path":'/gallery/07.jpg',
    },
    {
        "id":"8",
        "filter":['CABLE','ALL'],
        "tag":['CABLE'],
        "title":'literally a blur image',
        "path":'/gallery/08.jpg',
    },
    {
        "id":"9",
        "filter":['IPTV','ALL'],
        "tag":['IPTV'],
        "title":'literally a blur image',
        "path":'/gallery/09.jpg',
    },
    {
        "id":"10",
        "filter":['IPTV','ALL'],
        "tag":['IPTV'],
        "title":'literally a blur image',
        "path":'/gallery/10.jpg',
    },
    {
        "id":"11",
        "filter":['CABLE','ALL'],
        "tag":['CABLE'],
        "title":'literally a blur image',
        "path":'/gallery/11.jpg',
    },
    {
        "id":"12",
        "filter":['VOIP','ALL'],
        "tag":['VOIP'],
        "title":'literally a blur image',
        "path":'/gallery/12.jpg',
    },
]

export default function GalleryList(){
    const [filters, updateFilters] = useState(defaultFilters)
    console.log(window.innerWidth)
    const onFilter = event => {
        const {
          target: { value, checked }
        } = event;
        console.log(value)
        updateFilters(state =>
          state.map(f => {
            if (f.label === value) {
              return {
                ...f,
                isChecked: checked
              };
            }
            return {
            ...f,
            isChecked: false
            }
          })
        );
      };
    return(
        <div className={galleryListStyle.container}>
            <div>

            {filters.map(filter => (
                <div style={{display:'inline-block',margin:'0 20px'}} key={filter.label}>
                    <input className={galleryListStyle.tag} type='checkBox' id={filter.label} value={filter.label} onChange={onFilter} checked={filter.isChecked}/>
                    <label htmlFor={filter.label}>{filter.label}</label>
                </div>
                
                ))}
            </div>
        <IsoTopeGrid gridLayout={CardLayOut} unitWidth={350} unitHeight={300} filters={filters} noOfCols={3}>
            {CardLayOut.map(image => (
                <div key={image.id}>
                    <div>
                        <img height="140" src={process.env.PUBLIC_URL + image.path}/>
                    </div>
                    <h5>
                        {image.tag}
                    </h5>
                    <p>
                        {image.title}
                    </p>
                </div>
            )
            )}
        </IsoTopeGrid>
        </div>
    )
}