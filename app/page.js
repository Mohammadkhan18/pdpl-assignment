import Navbar from '@/components/Navbar'
import DescSection from '@/components/DescSection'
import Course from '@/components/Course'
import WhyLearning from '@/components/WhyLearning'
import Professors from '@/components/Professors'
import Community from '@/components/Community'
import Activity from '@/components/Activity'
import Explore from '@/components/Explore'
import HomeSignup from '@/components/HomeSignup'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <DescSection/>
    <Course/>
    <WhyLearning/>
    <Community/>
    <Professors/>
    <Activity/>
    <Explore/>
    <HomeSignup/>
    <Footer/>
    </>
    
  )
}
