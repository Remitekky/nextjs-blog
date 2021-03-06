import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
    <Head>
      <title>My first post</title>
    </Head>

      <h1>First Post</h1>
      <Image
      src="/images/profile.jpg"
      height={144}
      width={144}
      alt="profile picture"
      />
      <h2>
        <Link href="/">
          Back to home
        </Link>
      </h2>
    </Layout>
  )
}