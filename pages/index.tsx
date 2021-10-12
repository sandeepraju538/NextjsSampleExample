import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">{
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.8;
        color: #333;
        font-family: sans-serif;
      }
      h1 {
        font-weight: 700;
      }
      p {
        margin-bottom: 10px;
      }
    `}</style>
  }
    <h1>Hello Sandeep 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <p>
      <Link href="/news">
        <a>News</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage;
