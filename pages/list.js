import Head from 'next/head'
import Link from 'next/link'

import axios from "axios";

export default function List({ data }) {

    const listItems = data.map((item) =>
        <li key={item.id}><Link href={`/article/${item.id}`}>{item.title}</Link></li>
    );

    return (
        <div>
            <Head>
                <title>列表页面</title>
            </Head>
            <Link href={`/`}>Back to Home</Link>
            <ul>
                {listItems}
            </ul>

        </div>
    )
}

export const getServerSideProps = async () => {
    let { data } = await axios.get('https://api.mimei.net.cn/api/v1/article/?artType=normal&limit=5')
    // console.log('res# ', res.data)
    return {
        props: {
            data: data.list
        },
    }
}