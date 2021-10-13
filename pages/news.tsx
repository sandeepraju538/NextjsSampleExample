import styles from "../styles/news.module.css"
import Link from "next/link"
import Layout from "../components/Layout"
import { Article, News } from "../interfaces/news"
import { GetServerSideProps } from "next"
import { useState } from "react"


export default function NewsPage(props) {
    const[reactData, setReactData] = useState([]);
    let ArticlesArrayData: Article[];
    let article: Article;
    let appendQuery = (data) => {
        console.log(data);
        article = data;
    };
    let handleForm = (event) => {
        // console.log(event.target.value);
        getNewsData(event.target.value);
    }
    let getNewsData = async(value) => {
        let date = new Date();
        const month = date.getMonth();
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        const output = year + '-' + month  + '-' + day;
        let url = 'https://newsapi.org/v2/everything?q='+ value +'&from='+ output +'&sortBy=publishedAt&apiKey=af6cd00ca143462cb5efc330e77c87c1';
        const result = await fetch(url);
        const data = await result.json();
        ArticlesArrayData = data.articles;
        setReactData(ArticlesArrayData);
        console.log('ArticlesArrayData:', ArticlesArrayData);
    };
    return (
        <Layout title="News | Next.js + TypeScript Example">
            <h1>News</h1>
            <div className='Form--field'>{
                <style jsx>{
                    `input[type=text], select {
                        width: 100%;
                        margin: 8px 0;
                        display: inline-block;
                        border: 1px solid #ccc;
                        box-shadow: inset 0 1px 3px #ddd;
                        border-radius: 4px;
                        -webkit-box-sizing: border-box;
                        -moz-box-sizing: border-box;
                        box-sizing: border-box;
                        padding-left: 20px;
                        padding-right: 20px;
                        padding-top: 12px;
                        padding-bottom: 12px;
                    }`
                }
                </style>}
                <label htmlFor='name'>Search:</label>
                <br/>
                <input onChange={handleForm} type='text' id='title' />
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    {reactData && reactData.map((item) => {
                        return (
                            <div className={styles.card} onClick={() => appendQuery(item)}>
                                <div className={styles.number}>{item.source.id} {item.source.name}</div>
                                <h2>{item.title}</h2>
                                <p>{item.author}</p>
                                <img className={styles.image} src={item.urlToImage}></img>
                                <p>{item.publishedAt}</p>
                                <p>{item.content}</p>
                                
                                <p>ReactData going on...</p>
                            </div>
                        );
                    })}
                    {!ArticlesArrayData && props.data && props.data.articles.map((item) => {
                        return (
                            <div className={styles.card} onClick={() => appendQuery(item)}>
                                <div className={styles.number}>{item.source.id} {item.source.name}</div>
                                <h2>{item.title}</h2>
                                <p>{item.author}</p>
                                <img className={styles.image} src={item.urlToImage}></img>
                                <p>{item.publishedAt}</p>
                                <p>{item.content}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <p>
                <div>
                    <Link href="/about">about</Link>
                </div>
                <Link href="/">
                    <a>Go home</a>
                </Link>
            </p>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async({params, res}) => {
    let value = 'tesla';
    let date = new Date();
    const month = date.getMonth();
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const output = year + '-' + month  + '-' + day;
    let url = 'https://newsapi.org/v2/everything?q='+ value +'&from='+ output +'&sortBy=publishedAt&apiKey=af6cd00ca143462cb5efc330e77c87c1';
    const result = await fetch(url);
    const data: News = await result.json();
    // console.log('Data:', data);
    return {
        props: { data }
    }
};
