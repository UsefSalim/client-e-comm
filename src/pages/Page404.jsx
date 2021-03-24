import React,{useEffect} from 'react'

function Page404() {
   useEffect(() => {
    document.title = "404 Page"
  }, [])
  return (
    <>
       404 Page
    </>
  )
}

export default Page404
