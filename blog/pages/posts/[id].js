import Header from '../../components/header'
import Footer from '../../components/footer'
import Date from '../../components/date';

import Head from 'next/head';

import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
    return (
        <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        
        <section>
            <h1 className='headingXl'>{postData.title}</h1>
            <div className='lightText'>
            <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </section>
        <style jsx>{`
        section {
          width: 60%;
          margin-left: 15%;
        }
        `}</style>
        </Layout>
    );
}
