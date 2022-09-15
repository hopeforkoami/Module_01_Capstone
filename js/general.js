const menuItem = document.querySelector('.mobile_navbar_menu_content');
const closeMenu = document.querySelector('.mobile_close_button');
const openMenu = document.querySelector('.menu_icon');
const menu = document.querySelector('.navbar_menu');
const speakerlist= document.querySelector('.speakers_list');
const seemorebutton= document.querySelector('.see_more_button');
function show() {
  menuItem.classList.toggle('visible_item');
  menuItem.classList.remove('hidden');
  openMenu.classList.toggle('hidden');
}

function close() {
  menuItem.classList.remove('visible_item');
  menuItem.classList.toggle('hidden');
  openMenu.classList.remove('hidden');
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
menuItem.addEventListener('click', close);

const speakers =[
  {
    name:"Yochai Benkler",
    profession:"Berkman Professor of Rntrepreneurial Legal Studies at Harvard Law School",
    description: "Benkler studies commons-based peer productions, and published his seminal book The Wealth of Network in 2006.",
    image: "yokai.png",
  },
  {
    name:"SohYeong Noh",
    profession:"Director of Art Centre Nabi and a board member of CC Korea",
    description: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
    image: "sohyeong.png",
  },
  {
    name:"Lila Tretikov",
    profession:"Executive Director of the Wikimedia Foundation",
    description: "Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.",
    image: "lila.png",
  },
  {
    name:"Kilnam Chon",
    profession:"",
    description: "Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society's (ISOC) Internet Hall of Fame.",
    image: "kilnam.png",
  },
  {
    name:"Julia Leda",
    profession:"President of Young Pirates of Europe",
    description: "European ingetration, political democracy and participation of youth through online as her major condem, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
    image: "julia.png",
  },
  {
    name:"Ryan Merkley",
    profession:"CEO of Creative Commons, ex COO of the Mozilla Foundation",
    description: "Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.",
    image: "ryan.png",
  },
];

function buildspeakerlistupto(index){
  let response = '';
  for(let i=0;i<index;i++){
    response+=buildspeakercard(i);
  }
  speakerlist.innerHTML=response;
  document.querySelector('.seemore').classList.remove("hidden");
  document.querySelector('.seemore').classList.toggle("visible_item");
  document.querySelector('.seeless').classList.toggle("hidden");
  document.querySelector('.seeless').classList.remove("visible_item");
}

function buildspeakerlistall(index){
  let response = '';
  for(let i=0;i<speakers.length;i++){
    response+=buildspeakercard(i);
  }
  speakerlist.innerHTML=response;
  document.querySelector('.seeless').classList.remove("hidden");
  document.querySelector('.seeless').classList.toggle("visible_item");
  document.querySelector('.seemore').classList.toggle("hidden");
  document.querySelector('.seemore').classList.remove("visible_item");
  
}

function buildspeakercard(index){
  return  '<div class="speaker_card">'+
  '<div class="speacker_show">'+
    '<img src="assets/speakers/'+speakers[index].image+'" alt="speaker card image" class="speaker_image">'+
  '</div>'+
  '<div class="speaker_details">'+
    '<span class="speaker_name">'+speakers[index].name+'</span>'+
    '<span class="speaker_fonction">'+speakers[index].profession+'</span>'+
    '<div class="speaker_details_separator"></div>'+
    '<p class="speaker_description">'+speakers[index].description+'</p></div></div>';
}

function showseemore(){
  document.querySelector('.see_more_text').innerHTML="More";
  document.querySelector('.more_icon').classList.toggle;

}

function showless(){

}

