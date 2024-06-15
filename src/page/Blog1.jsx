import React from 'react'
import Navbar from '../Components/Navbar'

const Blog1 = () => {
  return (
    <>
        <Navbar/>
        {/* <!-- ========== Start blog Section ========== --> */}

        <section className="blog1">
            <div className="container">
                <h1 className="title">Sora: First Impressions</h1>
                <p className="para">OpenAI recently announced its latest groundbreaking tech—Sora. This text-to-video generative AI model looks incredibly impressive so far, introducing some huge potential across many industries. 
                    Here, we explore what OpenAI’s Sora is, how it works, some potential use cases, and what the future holds....[next part to be releasing soon]</p>
                
            </div>
        </section>
 {/* <!-- ========== End blog Section ========== --> */}
    </>
    

  )
}

export default Blog1