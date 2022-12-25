import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>TheRipper93</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta
        name='description'
        content='I make scripts and modules for Foundry VTT'
      />
      <link rel='icon' href='/favicon.ico' />
      <Script
        src='https://kit.fontawesome.com/bd49c5a799.js'
     />
    </>
  );
}
