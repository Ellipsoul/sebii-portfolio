import Head from 'next/head';

export default function Metatags({
  title = 'Sebii Portfolio',
  description = 'Social portfolio website for Sebii',
  image = 'https://firebasestorage.googleapis.com/v0/b/nxtfire-js.appspot.com/\
  o/uploads%2FuuRmEIzugzeifeVSihU50w46Ydg1%2F1635524444499.jpeg?alt=media&token=c9d5e922-69bc-4e08-92a4-970959688a61',
}) {
  return (
    <Head>
      <title>{title}</title>
      {/* TODO: Hold off on this until Seb has had a look */}
      {/* <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@sebseb122_" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} /> */}
    </Head>
  );
}