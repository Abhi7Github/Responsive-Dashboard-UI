import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { GrFormSchedule } from "react-icons/gr";

import { IoNotificationsOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";


export const OptionOne=[
    {
        id:1,
        label:"Dashboard",
        path:"/dashboard",
        icon:MdOutlineDashboardCustomize
    },
    {
        id:2,
        label:"Projects",
        path:"/dashboard/projects",
        icon:LiaNotesMedicalSolid
    },
    {
        id:3,
        label:"Scan",
        path:"/dashboard/scan",
        icon:BsFileEarmarkBarGraph
    },
    {
        id:4    ,
        label:"Schedule",
        path:"/dashboard/schedule",
        icon:GrFormSchedule
    }
]

export const OptionTwo=[
    {
        id:1,
        label:"Notifications",
        path:"/dashboard/notifications",
        icon: IoNotificationsOutline
    },
    {
        id:2,
        label:"Setting",
        path:"/dashboard/setting",
        icon:FiSettings
    },
    {
        id:3,
        label:"Support",
        path:"/dashboard/support",
        icon:IoInformationCircleOutline
    }
]