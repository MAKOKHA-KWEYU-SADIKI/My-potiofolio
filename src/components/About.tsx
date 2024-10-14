
import img1 from '../assets/pic.avif'
import js from'../assets/js.png'
import img4 from '../assets/ml-img.webp'
import ts from '../assets/ts.png'
import azure from '../assets/azure.jpeg'
import py from '../assets/py.png'
import hono from '../assets/hono.png'
import react from '../assets/react.png'
import postgres from'../assets/postgress.png'
import node from '../assets/nodejs.png'
import figma from '../assets/figma.png'
import gpt from '../assets/gpt.png'
import drizzle from '../assets/drizzle.png'
import sass from '../assets/sass.png'


function About() {
  const techStack = [
    { name: 'TypeScript', logo: ts, description: 'A strict syntactical superset of JavaScript, adding static types.' },
    { name: 'JavaScript', logo: js, description: 'A high-level, dynamic programming language used for web development.' },
    { name: 'Python', logo:py, description: 'A powerful programming language known for its simplicity and readability.' },
    { name: 'Hono', logo: hono, description: 'A fast and lightweight router for building scalable web applications.' },
    { name: 'React', logo: react, description: 'A popular JavaScript library for building user interfaces.' },
    { name: 'PostgreSQL', logo: postgres, description: 'An advanced, open-source relational database system.' },
    { name: 'Azure', logo: azure, description: 'A comprehensive cloud computing platform by Microsoft, offering services such as virtual machines, databases, AI, and analytics.' },
    { name: 'Figma', logo: figma, description: 'A collaborative interface design tool used for creating prototypes and UI designs.' },
    {name:  'Saas',logo:sass,description:'A powerful CSS preprocessor that adds features like variables, nested rules, and mixins to standard CSS, making it easier to write maintainable and scalable stylesheets.'},
    { name: 'GPT-3', logo: gpt, description: 'A cutting-edge language model developed by OpenAI for natural language understanding.' },
    { name: 'Node', logo: node, description: 'A runtime environment that allows JavaScript to be executed on the server-side, enabling scalable network applications.' },
    { name: 'Drizzle-orm', logo: drizzle, description: 'A cutting-edge language model developed by OpenAI for natural language understanding.' },
  ];
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
      
      <div className="bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Technologies I Am Conversant With</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStack.map((tech, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105">
            <img src={tech.logo} alt={`${tech.name} logo`} className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">{tech.name}</h2>
            <p className="text-gray-600">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default About;
