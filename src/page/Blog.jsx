import React from 'react'
import Navbar from '../Components/Navbar'
import { NavLink } from 'react-router-dom'

const Blog = () => {
  return (
    <>
      <Navbar/>

      {/* <!-- ========== Start blog Section ========== --> */}

    <div className="section-blog">
      <div className="container">
        <h2 className="section-common-heading">Explore My Blog</h2>
        <p className="section-common-subheading">
          Explore My blog for insightful articles, tips, and updates on the
          world of web Development, skill development, and personal growth.
        </p>
      </div>

      <div className="container grid grid-four--cols">
        <NavLink to={'/blog1'}>
        <div className="blog">
          <figure>
            <img
              src="https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="a guy writing code"
            />
          </figure>
          <div className="blog-content">
            <div className="blog-date">
              <p><i className="fa-calendar fa-solid"></i> March 22 2024</p>
              <p><i className="fa-solid fa-arrow-right"></i></p>
            </div>
            <h3 className="section-common--title">
              Sora: Open AI text to image AI
            </h3>
          </div>
        </div>
        </NavLink>

        <div className="blog">
          <figure>
            <img
              src="https://images.pexels.com/photos/11035396/pexels-photo-11035396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </figure>
          <div className="blog-content">
            <div className="blog-date">
              <p><i className="fa-calendar fa-solid"></i> March 18 2024</p>
              <p><i className="fa-solid fa-arrow-right"></i></p>
            </div>
            <h3 className="section-common--title">
              This blog will be released soon
            </h3>
          </div>
        </div>

        <div className="blog">
          <figure>
            <img
              src="https://images.pexels.com/photos/4389463/pexels-photo-4389463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </figure>
          <div className="blog-content">
            <div className="blog-date">
              <p><i className="fa-calendar fa-solid"></i> March 15 2024</p>
              <p><i className="fa-solid fa-arrow-right"></i></p>
            </div>
            <h3 className="section-common--title">
              This blog will be released soon
            </h3>
          </div>
        </div>

        <div className="blog">
          <figure>
            <img
              src="https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </figure>
          <div className="blog-content">
            <div className="blog-date">
              <p><i className="fa-calendar fa-solid"></i> March 23 2024</p>
              <p><i className="fa-solid fa-arrow-right"></i></p>
            </div>
            <h3 className="section-common--title">
              This blog will be released soon
            </h3>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Blog