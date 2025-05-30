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
import { BsCurrencyDollar, BsShield, BsFillPeopleFill } from 'react-icons/bs';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import gridOrderImage from "./gridOrderImage";
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import avatar4 from '../assets/avatar4.jpg';
import avatar5 from '../assets/avatar5.jpg';
import avatar6 from '../assets/avatar6.jpg';
import avatar7 from '../assets/avatar7.jpg';


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


// earningData
export const earningData = [
  {
    title: 'Earnings',
    icon: <BsCurrencyDollar />,
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor:'#E9FAFB',
    amount:'40,067',
    percentage: '-4%',
  },
  {
    title: 'Sales',
    icon: <MdOutlineSupervisorAccount />,
    iconColor: '#7352FF',
    iconBg: '#EDE9FE',
    pcColor:'blue-200',
    amount:'90,067',
    percentage: '+23%',
  },
  {
    title: 'Customers',
    icon: <BsFillPeopleFill />,
    iconColor: '#FF5C8E',
    iconBg: '#FDE6EC',
    pcColor:'#green-600',
    amount:'78,067',
    percentage: '+33%',
  },
  {
    title: 'Products',
    icon: <BsShield />,
    iconColor: '#1E4DB7',
    iconBg: '#E2F0FB',
    pcColor:'red-600',
    amount:'60,067',
    percentage: '+45%',
  },
];




export const SparklineAreaData = [
  { x: 1, y: 3 },
  { x: 2, y: 5 },
  { x: 3, y: 2 },
  { x: 4, y: 8 },
  { x: 5, y: 6 },
  { x: 6, y: 7 },
  { x: 7, y: 5 },
  { x: 8, y: 9 },
];



export const stackedCustomSeries = [
  {
    dataSource: [
      { x: 'Jan', y: 111.1 },
      { x: 'Feb', y: 127.3 },
      { x: 'Mar', y: 143.4 },
      { x: 'Apr', y: 159.9 },
    ],
    xName: 'x',
    yName: 'y',
    name: 'Budget',
    type: 'StackingColumn',
    background: 'blue',
  },
  {
    dataSource: [
      { x: 'Jan', y: 76.8 },
      { x: 'Feb', y: 99.5 },
      { x: 'Mar', y: 121.7 },
      { x: 'Apr', y: 142.6 },
    ],
    xName: 'x',
    yName: 'y',
    name: 'Expense',
    type: 'StackingColumn',
    background: 'red',
  },
];


export const stackedPrimaryXAxis = {
  valueType: 'Category',
  labelIntersectAction: 'Rotate45',
  majorGridLines: { width: 0 },
};

export const stackedPrimaryYAxis = {
  labelFormat: '{value}',
  lineStyle: { width: 0 },
  maximum: 200,
  interval: 50,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};


// ecomPieChartDat

export  const ecomPieChartDat = [
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


// ordersData 

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: 'Paul Henriot',
    TotalAmount: 320.00,
    OrderDate: '2025-05-01',
    Status: 'Shipped',
    Location: 'France',
  },
  {
    OrderID: 10249,
    CustomerName: 'Karin Josephs',
    TotalAmount: 430.50,
    OrderDate: '2025-05-02',
    Status: 'Pending',
    Location: 'Germany',
  },

   {
    OrderID: 10250,
    CustomerName: 'Nawagirwa Catherine',
    TotalAmount: 400.50,
    OrderDate: '2025-05-02',
    Status: 'Pending',
    Location: 'Mengo',
  },
   {
    OrderID: 10249,
    CustomerName: 'Nabulya Jesca',
    TotalAmount: 490.51,
    OrderDate: '2025-05-05',
    Status: 'Pending',
    Location: 'Luweero',
  },
   {
    OrderID: 10259,
    CustomerName: 'Nakisitu Samalie',
    TotalAmount: 450.50,
    OrderDate: '2025-05-01',
    Status: 'Pending',
    Location: 'Muyenga',
  },
  
];


//  contextMenuItems


export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'LastPage'
];

// ordersGrid

export const ordersGrid = [
  { field: 'OrderID', headerText: 'Order ID' },
  { field: 'CustomerName', headerText: 'Customer Name' },
  { field: 'Status', headerText: 'Status' },
  { field: 'OrderDate', headerText: 'Order Date' },
  { field: 'Amount', headerText: 'Amount' },
];



// employeesData 

export const employeesData = [
  {
    Employee: 'Henriot',
    Designation: 'Sales Representative',
    Country: 'Germany',
    HireDate: '01/05/2020',
    ReportsTo: 'Cathy',
     image: avatar1,
   
  },
  {
   Employee: 'Jackson ',
    Designation: 'Marketing head',
    Country: 'Norway',
    HireDate: '02/03/2020',
    ReportsTo: 'Cathy',
     image: avatar2,
  },

   {
    Employee: 'Brendah',
    Designation: 'HR',
    Country: 'USA',
    HireDate: '06/05/2020',
    ReportsTo: 'Cathy',
     image: avatar3,
  },
   {
    Employee: 'Ian',
    Designation: 'Marketing head',
    Country: 'Germany',
    HireDate: '01/05/2020',
    ReportsTo: 'Cathy',
     image: avatar4,
  },
   {
   Employee: ' Mark Juliet',
    Designation: 'Sales Representative',
    Country: 'Germany',
    HireDate: '01/03/2023',
    ReportsTo: 'Cathy',
     image: avatar5,
  },
    {
   Employee: ' John Anthony',
    Designation: 'HR',
    Country: 'FRANCE',
    HireDate: '07/08/2022',
    ReportsTo: 'Cathy',
     image: avatar6,
  },
    {
   Employee: ' Owen blue',
    Designation: 'Marketing Head',
    Country: 'Germany',
    HireDate: '01/03/2020',
    ReportsTo: 'Cathy',
     image: avatar7,
  },
    {
   Employee: ' Trinity Green',
    Designation: 'Marketing Representative',
    Country: 'USA',
    HireDate: '01/03/2020',
    ReportsTo: 'Cathy',
     image: avatar1,
  },
    {
   Employee: ' Bruno Tall',
    Designation: 'Sales Representative',
    Country: 'Germany',
    HireDate: '01/03/2020',
    ReportsTo: 'Cathy',
     image: avatar2,
  },
    {
   Employee: ' Mark Juliet',
    Designation: 'Sales Representative',
    Country: 'Germany',
    HireDate: '01/03/2020',
    ReportsTo: 'Cathy',
     image: avatar1,
  },
    {
   Employee: ' Amber Rose',
    Designation: 'HR',
    Country: 'USA',
    HireDate: '01/03/2020',
    ReportsTo: 'Cathy',
     image: avatar2,
  },
    {
   Employee: ' Mike Owen',
    Designation: 'Sales Representative',
    Country: 'Germany',
    HireDate: '01/03/2020',
    ReportsTo: 'Cathy',
     image: avatar3,
  },
  
];






