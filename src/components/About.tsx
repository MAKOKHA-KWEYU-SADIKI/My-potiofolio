import img1 from'../assets/pic.avif'
function About() {
  return (
    <div className="bg-purple-200 mt-20">
      <div className="flex-2">
        <div>
          <img src={img1} alt="image"  />
        </div>
        <div>
          <span className="block text-lg mb-4"> Welcome to my portfolio! I'm Abdirahman Sadque, 
          a passionate Software Engineer specializing in creating responsive and 
          user-friendly websites. My expertise lies in using modern web technologies 
          to build sleek, efficient, and intuitive digital solutions that enhance user 
          experiences. With a strong foundation in front-end and back-end development, 
          I thrive on turning ideas into reality by crafting websites that are not only visually appealing 
          but also optimized for performance across all devices.
       </span>
       <span className="block text-lg">Beyond web development, I am deeply enthusiastic 
         about machine learning and its potential to solve complex problems. I constantly 
         explore new techniques and trends to stay at the forefront of technological innovation. 
         As a Figma design enthusiast, I ensure that my projects blend functionality with aesthetic 
         value, creating seamless and engaging user interfaces. This portfolio is a showcase of my 
         passion, skills, and dedication to building impactful digital products. Thank you for stopping by, and I 
         look forward to collaborating on exciting projects!
       </span>
        </div>
        
     </div>
    </div>
  )
}

export default About