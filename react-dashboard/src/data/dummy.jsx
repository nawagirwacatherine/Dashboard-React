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
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import avatar4 from '../assets/avatar4.jpg';
import avatar5 from '../assets/avatar5.jpg';
import avatar6 from '../assets/avatar6.jpg';
import avatar7 from '../assets/avatar7.jpg';
import customer1 from '../assets/customer1.jpg';
import customer2 from '../assets/customer2.jpg';
import customer3 from '../assets/customer3.png';
import customer4 from '../assets/customer4.jpg';
import customer5 from '../assets/customer5.jpg';



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
    image:avatar1,
    OrderID: 10248,
    CustomerName: 'Paul Henriot',
    TotalAmount: 320.00,
    OrderDate: '2025-05-01',
    Status: 'Shipped',
    Location: 'France',
  },
  {
    image:avatar3,
    OrderID: 10249,
    CustomerName: 'Karin Josephs',
    TotalAmount: 430.50,
    OrderDate: '2025-05-02',
    Status: 'Pending',
    Location: 'Germany',
  },

   {
    image:customer1,
    OrderID: 10250,
    CustomerName: 'Nawagirwa Catherine',
    TotalAmount: 400.50,
    OrderDate: '2025-05-02',
    Status: 'Pending',
    Location: 'Mengo',
  },
   {
    image:avatar7,
    OrderID: 10249,
    CustomerName: 'Nabulya Jesca',
    TotalAmount: 490.51,
    OrderDate: '2025-05-05',
    Status: 'Pending',
    Location: 'Luweero',
  },
   {
    image:customer4,
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
  { field:'image', headerText:"image"},
  { field: 'OrderID', headerText: 'Order ID' },
  { field: 'CustomerName', headerText: 'Customer Name' },
  { field: 'Status', headerText: 'Status' },
  { field: 'OrderDate', headerText: 'Order Date' },
  { field: ' TotalAmount', headerText: 'Amount' },
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


// customersData 

export const customersData = [
  {
    Customer: 'Henriot',
    Country: 'Germany',
    OrderDate: '01/05/2020',
     image: customer1,
   
  },
  {
   Customer: 'Jackson ',
    Country: 'Norway',
    OrderDate: '02/03/2020',
     image: customer2,
  },

   {
    Customer: 'Brendah',
    Country: 'USA',
   OrderDate: '06/05/2020',
     image: customer3,
  },
   {
    Customer: 'Ian',
    Country: 'Germany',
    OrderDate: '01/05/2020',
     image: customer4,
  },
   {
  Customer: ' Mark Juliet',
    Country: 'Germany',
    OrderDate: '01/03/2023',
     image: customer5,
  },
    {
   Customer: ' John Anthony',
    Country: 'FRANCE',
    OrderDate: '07/08/2022',
     image: customer1,
  },
    {
   Customer: ' Owen blue',
    Country: 'Germany',
   OrderDate: '01/03/2020',
     image: customer2,
  },
    {
   Customer: ' Trinity Green',
    Country: 'USA',
    OrderDate: '01/03/2020',
     image: customer3,
  },
    {
   Customer: ' Bruno Tall',
    Country: 'Germany',
    OrderDate: '01/03/2020',
     image: customer4,
  },
    {
   Customer: ' Mark Juliet',
    Country: 'Germany',
    OrderDate: '01/03/2020',
     image: customer5,
  },
    {
   Customer: ' Amber Rose',
    Country: 'USA',
    OrderDate: '01/03/2020',
     image: customer1,
  },
    {
  Customer: ' Mike Owen',
    Country: 'Germany',
    OrderDate: '01/03/2020',
     image: customer2,
  },
  
];


export const scheduleData = [
  {
    id: 1,
    Subject:" star explosion",
    Location:'Muyenga',
    title: 'Team Meeting',
    StartTime: new Date(2025, 4, 31, 10, 0), 
    EndTime: new Date(2025, 4, 31, 11, 0),
    CategoryColor:"#357cd2",
  },
  {
    id: 2,
    Subject:" moonlight",
    Location:'Buziga',
    title: 'Project Review',
    StartTime: new Date(2025, 4, 31, 13, 0),
    EndTime: new Date(2025, 4, 31, 14, 30),
     CategoryColor:"#1aaa55",
    
  },
  {
    id: 3,
    Subject:" Air crush report",
    Location:'Bunga',
    title: 'Client Call',
    StartTime: new Date(2025, 5, 1, 9, 0),
    EndTime: new Date(2025, 5, 1, 10, 0),
     CategoryColor:"#1aaa55",
  },
  {
    id: 4,
    Subject:"",
    Location:'Munyonyo',
    title: 'field Meeting',
    StartTime: new Date(2025, 4, 31, 10, 0), 
    EndTime: new Date(2025, 4, 31, 11, 0),
     CategoryColor:"#1aaa55",
  },
  {
    id: 5,
    Subject:"",
    Location:'Entebbe',
    title: 'picture time',
    StartTime: new Date(2025, 8, 31, 10, 0), 
    EndTime: new Date(2025, 4, 31, 10, 0),
     CategoryColor:"#1aaa55",
  },
  {
    id: 6,
    Subject:"",
    Location:'Bwebajja',
    title: 'meeting with leaders',
    StartTime: new Date(2025, 9, 31, 10, 0), 
    EndTime: new Date(2025, 4, 1, 1, 0),
     CategoryColor:"#1aaa55",
  },
  {
    id: 7,
    Subject:"",
    Location:'Kajansi',
    title: 'board Meeting',
    StartTime: new Date(2025, 4, 3, 1, 0), 
    EndTime: new Date(2025, 4, 1, 11, 0),
     CategoryColor:"#1aaa55",
  },
  {
    id: 8,
    Subject:"",
    Location:'Kitende',
    title: 'one on one Meeting',
    StartTime: new Date(2025, 8, 1, 10, 0), 
    EndTime: new Date(2025, 4, 11, 11, 0),
     CategoryColor:"#1aaa55",
  },
];


export const KanbanData = [
 {

 },
];


export const KanbanGrid = [

   {
   headerText: 'To Do',
   keyField: 'Open',
   allowToggle: true
  },

  {
   headerText: 'In Progress',
   keyField: 'InProgress',
   allowToggle: true
  },

  {
   headerText: 'Testing',
   keyField: 'Testing',
   allowToggle: true,
   isExpanded: false,
  },

  {
   headerText: 'To Do',
   keyField: 'Open',
   allowToggle: true
  },

  {
   headerText: 'Done',
   keyField: 'Close',
   allowToggle: true
  },

];


 export const initialData = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      { id: '1', title: 'Design login page' },
      { id: '2', title: 'Setup API routes' },
    ],
  },
  {
    id: 'inprogress',
    title: 'In Progress',
    tasks: [
      { id: '3', title: 'Build Auth component' },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [],
  },
];








