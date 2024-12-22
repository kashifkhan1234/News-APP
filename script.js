const API_KEY = "8cc4529494fe4614ba5fc6d98857382e";
const url = "https://newsapi.org/v2/everything?q=" ;


window.addEventListener("load",() => fetchNews("pakistan"));

async function fetchNews(query) {
    const res=await fetch('${https://newsapi.org/v2/everything?q=}${query}&apikey=${8cc4529494fe4614ba5fc6d98857382e}'); 
    const data = await res.json();
    console.log(data);
    bindData(data.articles);
}
 function bindData(articles){
    const cardscontainer= document.getElementById('cards-container');
    const newscardtemplate=document.getElementById('template-news-card');
     cardscontainer.innerHTML='';

    articles.forEach(article => {
        if(!article.urlToimage) return;         
        const cardClone= newscardtemplate.content.cloneNode(true);
        fillDatainCard(cardClone,article);
        cardscontainer.appendChild(cardClone);
    }); }
 function  fillDatainCard(cardClone,article){
        const newsimg=cardClone.querySelector('#news-img');
     const newsTitle=cardClone.querySelector('#news-title');
    const newsSource=cardClone.querySelector('#news-source');
     const newsDesc=cardClone.querySelector('#news-desc');

    newsimg.src = article.urlToImage;
    newsTitle.innerHTML=article.title;
     newsDesc.innerHTML = article.description;

     const date= new Date(article.publishedAt.toLocaleString("en-US",{
        timeZone:"Asia/jakarta"
   }));

     newsSource.innerHTML= `${article.source.name}  .$(date)`;
    
     cardClone.firstElementchild.addEventListener["click",() =>{
         window.open(article.url,"_blank");
     }]
}

