import { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"

const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-09-11&sortBy=publishedAt&apiKey=af6cd00ca143462cb5efc330e77c87c1';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await axios.get(url).then(({ data }) => {
            res.status(200).json({ data })
        }).catch(({ err }) => {
            res.status(400).json({ err })
        });
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

export default handler
