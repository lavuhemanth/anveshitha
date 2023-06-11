// {
//    id: 1, #unique number in between this square brackets

//    slug: "ap-101", #unique category-number in between this square brackets

//    category: "ap", #based on name infront of square brackets

//    headline: " జగన్ కనుసైగ చేస్తే చాలు..", # head line of a new will display in bigger font

//     img_url:      "", #image want to display as per news

//     slide_img_url: "" #image url should be like mobile display aspetc ration of 9:16

//      subjectsList: [ #multiple paragraphs want to diplay in home page and context page of that category

//        "వైఎస్సార్‌సీపీ (YSRCP)కి వ్యతిరేకంగా ఎలాంటి పొత్తులు పెట్టుకున్నా ఫర్వాలేదని.. పార్టీ యువతంతా సీఎం జగన్‌కు ప్రైవేట్ సైన్యంగా పనిచేస్తామన్నారు పార్టీ యువజన విభాగం రాష్ట్ర అధ్యక్షుడు, శాప్ ఛైర్మన్ బైరెడ్డి సిద్ధార్థరెడ్డి (Byreddy Siddharth Reddy). ",
//        `రాజమండ్రిలో జక్కంపూడి గణేష్ ఆధ్వర్యంలో మెగా స్పోర్ట్స్ ఫెస్టివల్ ప్రారంభోత్సవంలో ఈ వ్యాఖ్యలు చేశారు. "ముఖ్యమంత్రి జగన్ మావాడు' అని ప్రజలు ఆయన్ను గుండెల్లో పెట్టుకున్నారని బైరెడ్డి అన్నారు. జక్కంపూడి కుటుంబం అంటే తమ సొంత కుటుంబం అనే భావన జిల్లా ప్రజల్లో ఉందన్నారు. పార్టీ యువజన విభాగం సీఎం జగన్‌కు రక్షణ వలయంలా పనిచేస్తుందన్నారు.`,
//      ],

//      headline_subject: "హైలైట్ AP", # a Short description of headline

//      reported_by: "" #Name of the reporter

//      address_line: ""  #a  short line of the location news had been happned

//      date: "" #date of the news
// }

// {} if any thing inside  flower brackets with common keys and diffrent values is called Object
// [] if any thing inside  Square brackets with comma seprated strings is called List
import { createContext } from 'react';

const MyContext = createContext();
export default MyContext;
