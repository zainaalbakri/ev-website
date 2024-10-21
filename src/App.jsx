import { useEffect, useState } from "react";
import Background from "./assets/components/background/Background";
import Navbar from "./assets/components/navbar/Navbar";
import Hero from "./assets/components/hero/Hero";

const App=() =>{
  let heroData =[
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const[playStatus,setPlayStatus] =useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
        setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
}, []);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      
      />

    </div>
  )
}
export default App;