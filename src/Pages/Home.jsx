import Navbar from '../components/Navbar';
import CoachingIntro from '../components/Home/CoachingIntro';
import MentorIntro from '../components/Home/MentorIntro';
import Review from '../components/Home/Review';
import Footer from '../components/Home/Footer';
import Courses from '../components/Home/Courses';
import CourseFeatures from '../components/Home/CourseFeatures';
import ClassGallery from '../components/Home/ClassGallery';
import FAQ from '../components/Home/FAQ';
import Scholarship from '../components/Home/Scholorship';

export default function Home() {


  return (
    <div className="min-h-screen  font-[Inter]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');
        .serif { font-family: 'Instrument Serif', serif; }
        .inter { font-family: 'Inter', sans-serif; }
      `}</style>


        <Navbar/>

      <main>
        <CoachingIntro/>
        <MentorIntro/>
        <Courses/>
        <Scholarship/>
        <CourseFeatures/>
        <ClassGallery/>
        <Review/>
        <FAQ/>
      </main>
        <footer>
          <Footer/>
        </footer>
    </div>
  );
}

