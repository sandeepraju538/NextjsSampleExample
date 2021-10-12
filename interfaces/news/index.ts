export type News = {
    articles: Article[]
    status: string
    totalResults: number
}

export type Article = {
    source: Source
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}

export type Source = {
    id: number
    name: string
}
