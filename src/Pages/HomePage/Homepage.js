import React from 'react';
import "./Homepage.scss";

const Homepage = () => {
  const gallery = [
    {
      imgurl: "https://ik.imagekit.io/egjzyz51e/arc4.jpg?updatedAt=1682080291702",
      title: "Title",
      decription: "",
    },
    {
      imgurl: "https://ik.imagekit.io/egjzyz51e/arch2.jpg?updatedAt=1682080209284",
      title: "Title",
      decription: "Decription",
    },
    {
      imgurl: "https://ik.imagekit.io/egjzyz51e/arc2.jpg?updatedAt=1682080118041",
      title: "Title",
      decription: "Decription",
    },
    {
      imgurl: "https://ik.imagekit.io/egjzyz51e/ar1.jpg?updatedAt=1682079915652",
      title: "Title",
      decription: "Decription",
    },
    {
      imgurl: "https://ik.imagekit.io/egjzyz51e/archi6.jpg?updatedAt=1682079822357",
      title: "Title",
      decription: "Decription",
    },
  ]
  return (
    <div className='homepage'>
      <div className="homepage-wrap">

        <div className="section-1">
          <div className="logo-wrap">
            <img width={100} src="https://ik.imagekit.io/egjzyz51e/Picsart_23-04-19_15-20-49-513.png?updatedAt=1681898096563" alt="" />
          </div>
        </div>

        <div className="section-2">
          <div className="header">
            <img src="https://ik.imagekit.io/egjzyz51e/massimiliano-morosinotto-YMPUJexvNa8-unsplash.jpg?updatedAt=1681899530435" alt="" />
          </div>
          <div className="title">
            <h1>References</h1>
          </div>
        </div>

        <div className="section-3">
          <div className="gallery">
            {gallery.map((item, indx) => {
              return (
                <div className="gallery-item">
                  <div className="img-gallery">
                    <img src="https://ik.imagekit.io/egjzyz51e/kimon-maritz-mQiZnKwGXW0-unsplash.jpg?updatedAt=1682081706564" alt="" />
                  </div>
                  <h1>Title</h1>
                </div>

              )
            })}

          </div>
        </div>

      </div>

    </div>
  )
}

export default Homepage;