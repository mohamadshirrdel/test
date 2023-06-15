// varibales
const generalBtn = document.getElementById("genral");
const businessBtn = document.getElementById("business");
const sportBtn = document.getElementById("sport");
const technologyBtn = document.getElementById("technology");
const entertaimentBtn = document.getElementById("entertaiment");
const searchBtnBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType")
const newsdetails = document.getElementById("newsdetails")

//array
var newsDataArr = [];

//apis
const API_KEY = "70bffc4b7d8d4ee8b2929d6ebae5ac9c";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=ir&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=ir&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=ir&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=ir&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=ir&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=ir&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

generalBtn.addEventListener("click",function(){
    fetchNews("genral");
});

businessBtn.addEventListener("click",function(){
    fetchNews("business");
});

sportBtn.addEventListener("click",function(){
    fetchNews("sport");
});

technologyBtn.addEventListener("click",function(){
    fetchNews("technology");
});

entertaimentBtn.addEventListener("click",function(){
    fetchNews("entertaiment");
});

searchBtnBtn.addEventListener("click",function(){
    fetchQuery(newsQuery.value);
});

const request = async (url) => {
    const response = await fetch(url);
    newsDataArr = [];
    if (response.status >=200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson;
    }else {
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
};

const fetchNews = async (category, pageSize = "8", country = "in", apiKey = API_KEY) => {
    const base = "https://newsapi.org/v2/top-headlines";
    const query = `?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
    request(base + query);
};

const fetchQuery = async (query, piKey = API_KEY) => {
    request(SEARCH_NEWS + query + "&apiKey=" + apiKey);
};