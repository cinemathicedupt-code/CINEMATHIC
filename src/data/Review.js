// import arjavSharma from '../assets/images/students/aarjav_sharma.jpeg'
import anushkaMondal from '../assets/images/students/anushka_mondal.jpeg'
import antarikshRana from '../assets/images/students/antariksh_rana.jpeg'
import mridulMeena from '../assets/images/students/mridul_meena.jpeg' //mridul_meena
import ekaakshTripathi from '../assets/images/students/ekaaksh_tripathi.jpeg'
import deekshaSharma from '../assets/images/students/deeksha_sharma.jpeg'
import ujjainSingh from '../assets/images/students/ujjain_singh.jpeg'
import adityaPrajapati from '../assets/images/students/aditya_prajapati.jpeg'
import shubham from '../assets/images/students/shubham.jpeg'
import anshitaVijay from '../assets/images/students/anshita_vijay.jpeg'
import anshikaRai from '../assets/images/students/anshika_rai.jpeg'
import advitchib from '../assets/images/students/advit_chib.jpeg'
import aarjavTiwari from '../assets/images/students/aarjavTiwari.jpeg'
import vaidik_jangid from '../assets/images/students/vaidik_jangid.jpeg'


const reviews = [
  {
    id: 2,
    image: anushkaMondal,
    name: 'Anushka Mondal',
    score: '95/100 in Mathematics',
    board: 'CBSE Board',
    className: '10',
    school: 'Army Public School, Kota',
    hometown: 'Kota, Rajasthan',
    quote:
      'Ritik Sir teaches Maths in a very simple way, which makes even difficult topics easier to understand. CINEMATHIC has also been really helpful for me and has made learning Maths much easier.'
  },
  {
    id: 3,
    image: antarikshRana,
    name: 'Antariksh Rana',
    score: '92/100 in Mathematics',
    board: 'CBSE Board',
    className: '10',
    school: 'Army Public School, Kota',
    hometown: 'Kota, Rajasthan',
    quote:
      'Badal Sir has made Maths genuinely strong and enjoyable for me. ❤️ His way of teaching feels so amazing that even tough topics become easy. CINEMATHIC is something I truly enjoy and connect with.'
  },
  {
    id: 4,
    image: mridulMeena,
    name: 'Mridul Meena',
    score: '97/100 in Mathematics',
    board: 'CBSE Board',
    className: '10',
    school: 'Central Academy, Kota',
    hometown: 'Kota, Rajasthan',
    quote:
      'My experience with you have been incredible tbh. Like my enthusiasm towards mathematics got pumped up by your way of teaching. Our classes were interactive and fun. I didn’t really start my 10th grade thinking I’ll aim for 100 just before my exam day. It depended on the hardwork put in by both of us. The entire year, getting taught by you felt like nothing. Everyday it felt like studying something new. U have been the best teacher I have ever got tbh. Thank you Badal Sir ❤️ ~Mridul'
  },
  {
    id: 5,
    image: ekaakshTripathi,
    name: 'Ekaaksh Tripathi',
    score: '99/100 in Mathematics',
    board: 'CBSE Board',
    className: '9',
    school: 'Singhania School, Kota',
    hometown: 'Kota, Rajasthan',
    quote:
      'I love Badal Sir’s classes. He makes it so easy and fun to understand chapters. He ensures that you get the concepts right, and is always open to solve your problems.'
  },
  {
    id: 6,
    image: deekshaSharma,
    name: 'Deeksha Sharma',
    score: '94/100 in Mathematics',
    board: 'CBSE Board',
    className: '9',
    school: "St. Paul's School, Kota",
    hometown: 'Kota, Rajasthan',
    quote:
      'I have been studying Maths from Sir for the last two years and my experience has been really good. Sir is very friendly, chill and always keeps the class interactive. He explains even difficult questions in a simple way, so they become much easier to understand and also he gives multiple tricks to learn faster. One thing I really like is his random statement like, “Tumhare gaon mei ese banta hoga ?” which always make the class funny. Overall, Maths classes with Sir are fun, comfortable and something I actually enjoy attending.'
  },
  {
    id: 7,
    image: ujjainSingh,
    name: 'Ujjain Singh',
    score: '98/100 in Mathematics',
    board: 'CBSE Board',
    className: '9',
    school: "St. Paul's School, Kota",
    hometown: 'Kota, Rajasthan',
    quote:
      'I really like the way sir teaches us. He explains everything genuinely and also gives us useful tricks to solve big and difficult questions easily. His way of teaching makes difficult topics feel much easier.'
  },
  {
    id: 8,
    image: adityaPrajapati,
    name: 'Aditya Prajapati',
    score: '92/100 in Mathematics',
    board: 'CBSE Board',
    className: '9',
    school: 'Army Public School, Kota',
    hometown: 'Kota, Rajasthan',
    quote:
      'I had a great experience studying maths at CINEMATHIC. Badal Sir explains every concept so clearly and makes maths actually easy and interesting. Thank you sir for your guidance and support.'
  },
  {
    id: 9,
    image: shubham,
    name: 'Shubham',
    score: '96/100 in Mathematics',
    board: 'CBSE Board',
    className: '9',
    school: 'Army Public School, Kota',
    hometown: 'Kota, Rajasthan',
    quote:
      'Sir your teaching style made my understanding’s way better. An indescribable experience by learning with you sir.'
  },
  {
    id: 10,
    image: anshitaVijay,
    name: 'Anshita Vijay',
    score: '95/100 in Mathematics',
    board: 'CBSE Board',
    className: '9',
    school: "St. Paul's School, Kota",
    hometown: 'Kota, Rajasthan',
    quote:
      '✨I always use to believe that life is without any sense but BADAL SIR made it sensefull. He is a person who always stand by me and supported me. He is GREAT in teaching maths or doing random fun✨🧿🪬'
  },
  {
    id: 11,
    image: anshikaRai,
    name: 'Anshika Rai',
    score: '95/100 in Mathematics',
    board: 'CBSE Board',
    className: '10',
    school: 'Army Public School, Kota',
    hometown: 'Kota, Rajasthan',
    quote:
      'Being a student of CINEMATHIC’s very first batch has honestly been such a great experience! ❤️ Badal Sir’s way of teaching made Maths so much easier and actually enjoyable. His guidance helped me score 95 in my Class 10 Boards, and I’m genuinely so grateful to be a part of CINEMATHIC! ✨'
  },
  {
    id: 12,
    image: advitchib,
    name: 'Advit Chib',
    score: '99/100 in Mathematics',
    board: 'CBSE Board',
    className: '10',
    school: 'Army Public School, Udhampur',
    hometown: 'Udhampur, Rajasthan',
    quote:
      'Learning through cinemathic has been a wonderful experience, Ritik sir teaches with all his heart and a lot of personal attention is received here which makes the academic growth a lot better'
  },
  {
    id: 13,
    image: aarjavTiwari,
    name: 'Aarjav Tiwari ',
    score: '96/100 in Mathematics',
    board: 'CBSE Board',
    className: '10',
    school: 'Army Public School, Udhampur',
    hometown: 'Udhampur, Rajasthan',
    quote:
      'Ritik sir is the best teacher in the world his way of teaching difficult concepts is a gift only a few have. He has a way to connect with the students and his way of teaching is very immersive. I have had a wonderful experience with CINEMATHIC'
  },
  {
    id: 13,
    image: vaidik_jangid,
    name: 'Vaidik Jangid',
    score: '97/100 in Mathematics',
    board: 'CBSE Board',
    className: '10',
    school: 'Army Public School, Kota',
    hometown: 'Kota, Rajasthan',
    quote:
      `Being ritik sir's student was one of the best privileges for me, 
he genuinely made me fall in love with the subject, his way of teaching maths is very simple but beautiful, it was a great experience ❤️`
  }
]

export default reviews