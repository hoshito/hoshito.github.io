import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('preline')
  }, [])
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
