import { useState } from 'react'

import { faHouseChimney,
         faEnvelope,
         faChartLine,
         faMobileScreen,
         faFilePen,
         faGauge,
         faUser
         } from '@fortawesome/free-solid-svg-icons'

export default function useBarData(){
    const [sideBarData, setBarData] = useState([
        {icon: faGauge,header: "Dashboard",path: "/"},
        {icon: faUser,header: "User",path: "/user"},
        {icon:faEnvelope, header:'Mail', path: "/mail"},
        {icon:faChartLine, header:'Charts', path: "/charts"},
        {icon:faHouseChimney, header:'Ecommerce',path: "/ecommerce"},
        {icon:faMobileScreen, header:'App-view',path: "/app-views"},
        {icon:faFilePen, header:'Edit', path: "/edit"}
    ])

    return {sideBarData, setBarData}
}



