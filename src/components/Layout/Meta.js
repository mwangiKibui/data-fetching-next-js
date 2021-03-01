
import Head from 'next/head';

const Meta = ({title,description}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
    )
};

Meta.defaultProps = {
    title:"Splashy",
    description:"Data fetching in Next.js"
}

export default Meta;