import './Background.css'
import videol from '../../video1.mp4'
import image1 from'../../image1.png'
import image2 from'../../image2.png'
import image3 from'../../image3.png'

const Background =  ({playStatus,heroCount})=> {
  if (playStatus){
return(
    <video className='background  fade-in' autoPlay loop muted>
        <source src={videol} type='video/mp4' />
    </video>

)

  }
  else if(heroCount ===0){
    return(
      <img src={image1}  className='background  fade-in' />
    )
  }
  else if(heroCount ===1){
    return(
      <img src={image2}  className='background  fade-in' />
    )
  }
  else if(heroCount ===2){
    return(
      <img src={image3}  className='background fade-in' />
    )
  }

}
export default Background ;
