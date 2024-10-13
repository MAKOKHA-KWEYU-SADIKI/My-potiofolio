// import img1 from'../assets/pic.avif'
// import img4 from '../assets/portifolio-img.avif'
// function About() {
//   return (
//     <div className="bg-purple-200 mt-20">
//       <div className=" text-center">
//         <h1 className="text-4xl font-bold p-10">👋 Hello am Sadiki Makokha 
//           welcome to my web portifolio</h1>
//       </div>
//       <div></div>
//       <div className="flex flex-col md:flex-row items-center">
//        <div className="w-1/2">
//          <p>Hi, I'm Abdirahman Sadque, a full-stack 
//            Software Engineer passionate about creating 
//            optimized, user-friendly digital solutions. 
//            With expertise in both front-end and back-end 
//            development, and a strong interest in machine 
//            learning, I love tackling complex problems and 
//            exploring the latest trends in technology.

//           </p>
//         </div>

        
//         {/* <div className= "w-1/2">
//           <img src={img4} alt="profile" className= "max-w-full h-auto" />
//         </div> */}
//       </div>
//       <div className="text-3X1 items-center bg-white py-10 "><h2 className="pt-10 underline ">About Me</h2></div>
//       <div className="flex flex-col md:flex-row items-center">
        
//         <div className="w-1/2">
//           <img src={img1} alt="image" className="max-w-full h-auto p-2" />
//         </div>
//         <div className="w-1/2 p-4">
//          <span className="block  mb-4 text-lg"> 

//          Welcome! I'm Abdirahman Sadque, a Software 
//          Engineer focused on building responsive, 
//          user-friendly websites. I specialize in both 
//          front-end and back-end development, delivering 
//          optimized digital solutions. Additionally, 
//          I am skilled in Figma design, 
//          blending functionality with visual appeal.
//          </span>
//          <span className="block text-lg">Am deeply enthusiastic
//           about machine learning and it's potential to solve complex
//           problem. I constantly explore new techniques and 
//           trends to stay 
//           at the forefront of technological innovation
//           Thank you for visiting am looking forward 
//           to collaborating on exciting projects!
//          </span>
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default About
import img1 from '../assets/pic.avif'

import img4 from '../assets/ml-img.webp'

function About() {
  return (
    <div className="bg-purple-200 mt-20">
      {/* Main Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold p-10">
          👋 Hello, I'm Sadiki Makokha. Welcome to my web portfolio.
        </h1>
      </div>
      
      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row items-center p-6">
        <div className="w-full md:w-1/2">
          <p className="text-lg">
            Hi, I'm Abdirahman Sadque, a full-stack Software Engineer passionate 
            about creating optimized, user-friendly digital solutions. With expertise 
            in both front-end and back-end development, and a strong interest in machine 
            learning, I love tackling complex problems and exploring the latest trends 
            in technology.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img src={img4} alt="profile" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
      
      {/* About Me Section */}
      <div className="text-center bg-white py-10">
        <h2 className="text-3xl font-bold underline">About Me</h2>
      </div>
      
      <div className="flex flex-col md:flex-row items-center p-6">
        <div className="w-full md:w-1/2">
          <img src={img1} alt="About image" className="max-w-full h-auto p-2 rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <p className="block mb-4 text-lg">
          I am a Software Engineer focused on building responsive,
           user-friendly websites. I specialize in both front-end and 
           back-end development, delivering optimized digital solutions. 
           Additionally, I am skilled in Figma design, blending functionality 
           with visual appeal. I am currently pursuing a degree in Computer Systems 
           Engineering at Kiringaga University, which further enhances my understanding 
           of system architectures and complex problem-solving.

          </p>
          <p className="block text-lg">
            I'm deeply enthusiastic about machine learning and its potential to solve complex 
            problems. I constantly explore new techniques and trends to stay at the forefront of 
            technological innovation. Thank you for visiting—I'm looking forward to collaborating 
            on exciting projects!
          </p>
        </div>
      </div>
      
      <div>
        <div className="text-center bg-white py-10">
          <h2 className="font-bold underline text-4xl">Education</h2>
        </div>
        <div className="flex fle-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/3">
          <a href="https://student.kyu.ac.ke/"><h3 className="font-semi-bold text-2xl mb-2">Kirinyaga University</h3></a>
           
           <p className="text-lg text-gray-700 mb-3">Bachelar of science in Computer System Engineering</p>
           <p className="text-gray-600">Year: From 2021 to 2025</p>
         </div>
         <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/3">
         <a href="https://stlukeskhabukoshemixedsecondary.ach.ke/"><h3 className="font-semi-bold text-2xl mb-2">Khabukoshe secondary school</h3></a>
           <p className="text-gray-600">Year: From 2017 to 2021</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default About;
