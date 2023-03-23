import  "./Gallery.css"
import Header from "../../component/Header";
import HeaderImage from '../../photos/header_bg_3.jpg'
import data from '../../data'

const Gallery = () => {

  //get all images in the gallery using while loop
  const galleryLenght = 15;
  const images = []
  for (let i= 1; i <= galleryLenght; i++){
    images.push(require(`../../photos/gallery${i}.jpg`))
  }
  // console.log(images)   

  return (
  <>
  <Header title="Our Gallery" image={HeaderImage}>
        Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident,

  </Header>
  <section className="gallery">
    <div className="container gallery__container">
      {
        images.map((image, index)=>{
          return(
            <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`}/>

            </article>
          )
        })
      }
    </div>
  </section>
  </>
  )
}

export default Gallery