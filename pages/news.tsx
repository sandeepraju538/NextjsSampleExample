import styles from "../styles/news.module.css"
import Link from "next/link"
import Layout from "../components/Layout"
import React, { useEffect, useState } from "react"
import { Article } from "../interfaces/news"
import { GetServerSideProps } from "next"

let url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-09-12&sortBy=publishedAt&apiKey=af6cd00ca143462cb5efc330e77c87c1';
var article: Article;
let appendQuery = (data) => {
    console.log(data);
    // setPost(data);
    article = data;
};
const NewsPage = (props) => (
    <Layout title="News | Next.js + TypeScript Example">
        <h1>News</h1>
        <div className={styles.container}>
            <div className={styles.left}>
                {/* {props.data.status} */}
                {props.data.articles.map((item) => {
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

export const getServerSideProps: GetServerSideProps = async({params, res}) => {
    // const { id } = params;
    const result = await fetch(url);
    const data: Article = await result.json();
    // console.log('Data:', data);
    return {
        props: { data }
    }
};

export default NewsPage;
