const review=[
    {
        id:1,
        name: 'Sushant Singh Rajput',
        job: 'Web Devloper',
        img:'sushant.jpg',
        text:"gjhilj'lkljlhliufp9wwejljoyueorrqm oihoisupiw iohkyffeoufp[w'shydlheknf,a  suhcidyoyfilhd,bhs ioyahcjiuaflqhkashclshclahf.wj kjskcahflh"
    },
    {
        id:2,
        name: 'Shraddha Kapoor',
        job: 'Data Scientist',
        img: 'shraddha.jpg',
        text: 'lorem ,mbclaifo;u hfuayf;u8fq3jrqngi6iyqwd nqwo8poup8f04b23.d yfuiet786riuehglkgeuf; jhwdkugfyuffleyfqyefkuha,jv oiyoiefelfudulqjdqu'
    },
    {
        id:3,
        name: 'Ishan Khattar',
        job: 'Salesforce Developer',
        img:'ishan.jpg',
        text: 'lorem knilef iuqgjfhlfw iyfhhfjs uqhflyas8d oifsugygskjfdsjsv dgjhdgjhsludhfj kjahldhos sgasgca aduashilsycya kjgasbkJxo ugkhcbnfizx uzxpoc o '
    },
    {
        id:4,
        name: 'Kangna Ranaut',
        job: 'SDE',
        img:'kangna.jpg',
        text:'gjkdsbvlkshljg sdkjbjshku gkaag kjsahfkjdhfi hdshlisudoi uehfjshie kuhfiysf idfiyaif ahfyoieyf iuafkaef liafiyfe fi ieyfilesliu ewf eoifieu we'
    },
    {
        id:5,
        name:'Derik Hale',
        job:'UI Designer',
        img:'DerekHale.webp',
        text:'gcjlvhidjd iahklug efksdhfies efhkjsdftf sdhlkrgsn oisfliuryg sdifsdjlkuvs sufkjsdfs fafeyfoefsifha cascydidysd dofegfsdvydq 8asoydilahdv'
    }
];
const img=document.querySelector('.img');
const author=document.querySelector('.author');
const prof=document.querySelector('.prof');
const text=document.querySelector('.text');

const prev=document.querySelector('.prev');
const next=document.querySelector('.next');
const btn=document.querySelector('.btn');

let currItem = 0;

window.addEventListener("DOMContentLoaded",function(){
    
     showPerson(currItem);
});

function showPerson(person){
   
    const item=review[currItem];
     img.src=item.img;
    author.textContent=item.name;
    prof.textContent=item.job;
    text.textContent=item.text;
    

}


next.addEventListener("click",function(){
     currItem++;
     if(currItem>review.length-1){
         currItem=0;
     }
     showPerson(currItem);
});

prev.addEventListener("click",function(){
    currItem--;
    if(currItem<0){
        currItem=review.length-1;
    }
    showPerson(currItem);
});


btn.addEventListener("click",function(){
    currItem=Math.floor(Math.random()*review.length);
    showPerson();
})

