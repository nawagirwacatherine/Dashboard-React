import { FaCreativeCommonsSampling } from "react-icons/fa";
import { BsBorderStyle } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineViewKanban } from "react-icons/md";
import { SiCkeditor4 } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { TbColorPicker } from "react-icons/tb";
import { FaLine } from "react-icons/fa6";
import { MdOutlineAreaChart } from "react-icons/md";
import { FaBarcode } from "react-icons/fa";
import { BiSolidPieChartAlt } from "react-icons/bi";
import { GrCurrency } from "react-icons/gr";
import { IoColorPalette } from "react-icons/io5";
import { GiGreatPyramid } from "react-icons/gi";
import { IoFileTrayStacked } from "react-icons/io5";


export  const links = [
{
    title:'Dashboard',
    links: [
        {
            name:'ecommerce',
            icon:< FaCreativeCommonsSampling />,
        },
    ]
},

{
title: 'pages',
links:[
    {
        name: 'orders',
        icon: < BsBorderStyle />,
    },

    {
     name: 'employees',
     icon:< BsPeopleFill />,
    },

    {
        name:'customers',
        icon:<RiCustomerService2Line />,
    },
],
},


{
    title:'Apps',
    links: [
        {
            name: 'Kanban',
            icon:< MdOutlineViewKanban />,
        },
        {
            name: 'calender',
            icon:< SlCalender />,
        },
        {
            name: 'editor',
            icon:< SiCkeditor4  />,
        },
        {
            name: 'ColorPicker',
            icon:< TbColorPicker />,
        },
    ],
},

{
    title:'charts',
    links:[
        {
            name:'line',
            icon: < FaLine />

        },
        {
            name:'area',
            icon: < MdOutlineAreaChart />

        },
        {
            name:'bar',
            icon: <  FaBarcode  />

        },
        {
            name:'pie',
            icon: <  BiSolidPieChartAlt />

        },
        {
            name:'financial',
            icon: < GrCurrency  />

        },
        {
            name:'colormapping',
            icon: <  IoColorPalette />

        },
        {
            name:'pyramid',
            icon: < GiGreatPyramid/>

        },
        {
            name:'stacked',
            icon: < IoFileTrayStacked  />

        },

    ]
}
]


