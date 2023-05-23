import React , {useState, useEffect} from 'react'
import ImagesSearch from './components/ImageSearch';
import ImageCards from './components/ImageCards';
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() =>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res=> res.json())
    .then(data => {setImages(data.hits)
    setIsLoading(false)})
    .catch(err => console.log(err))
  }, [term])
  return (
 <div className="container mx-auto">
 <ImageCards searchText = {(text) => setTerm(text)}/>
{!isLoading && images.length ===0 && <h1 className="text-6xl  text-center mt-33">Images Not available....</h1>}
 { isLoading ? <h1 className="text-6xl  text-center mt-33">Loading......</h1> :<div className="grid grid-cols-4  gap-4"> {images.map((image, index) =>(<ImagesSearch key ={index} image ={image}/>))} </div>}
 
      
      </div>
  )
}

export default App
