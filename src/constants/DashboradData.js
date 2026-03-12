import { ImBlocked } from "react-icons/im";
import { ImWarning } from "react-icons/im";
import { FaSearchengin } from "react-icons/fa";


export const SummaryCards=[
    {
        id:1,
        title:"Critical Severity",
        color:"red",
        count:86,
        increase:true,
        incCount:2,
        icon:ImBlocked
    },
    {
        id:2,
        title:"High Severity",
        color:"#DE9521",
        count:16,
        increase:true,
        incCount:0.9,
        icon:ImWarning
    },
    {
        id:3,
        title:"Medium Severity",
        color:"#D1DB0B",
        count:26,
        increase:false,
        incCount:0.9,
        icon:ImWarning
    },
    {
        id:4,
        title:"Low Severity",
        color:"blue",
        count:16,
        increase:true,
        incCount:0.9,
        icon:FaSearchengin
    }
]

export const ScanData=[
    {
        id:1,
        scanname:"Web App Servers",
        type:"Greybox",
        status:"Completed",
        progress:100,
        vulnerability:[5,12,23,18],
        lastscan:4
    },
    {
        id:2,
        scanname:"Web App Servers",
        type:"Greybox",
        status:"Completed",
        progress:100,
        vulnerability:[5,12,23,18],
        lastscan:4
    },
    {
        id:3,
        scanname:"Web App Servers",
        type:"Greybox",
        status:"Completed",
        progress:100,
        vulnerability:[5,12,23,18],
        lastscan:4
    },
    {
        id:4,
        scanname:"Web App Servers",
        type:"Greybox",
        status:"Completed",
        progress:100,
        vulnerability:[5,12,23,18],
        lastscan:4
    },
    {
        id:5,
        scanname:"Web App Servers",
        type:"Greybox",
        status:"Completed",
        progress:100,
        vulnerability:[5,12,23,18],
        lastscan:4
    },
    {
        id:6,
        scanname:"Web App Servers",
        type:"Greybox",
        status:"Completed",
        progress:100,
        vulnerability:[5,12,23,18],
        lastscan:4
    },
    {
        id:7,
        scanname:"Web App Servers",
        type:"Greybox",
        status:"Scheduled",
        progress:100,
        vulnerability:[5,12,23,18],
        lastscan:4
    },
    {
        id:8,
        scanname:"IoT Devices",
        type:"Blackbox",
        status:"Failed",
        progress:10,
        vulnerability:[2,4,8,1],
        lastscan:3
    },
    {
        id:9,
        scanname:"Temp Data",
        type:"Blackbox",
        status:"Failed",
        progress:10,
        vulnerability:[2,4,8,1],
        lastscan:3
    }
]


export const ScanColors={
    Completed : "#21c45d",
    Scheduled : "teal",
    Failed : "#f04343"
}