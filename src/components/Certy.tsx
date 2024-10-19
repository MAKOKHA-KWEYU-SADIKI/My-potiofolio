// import alison from '../assets/alison.png'
// import dataflair from '../assets/dataflairt.png'
// import plp from '../assets/plp.jpeg'
// import t2g from '../assets/teach2give.jpeg'
// function Certification() {
//   const cert=[
//     {role:"software developmennt",organisation:"Teach2give",icon:t2g,verify:"https://teach2give.com/"},
//     {role:"Python programming language",organisation:"PowerLearnProject",icon:plp,verify:"https://academy.powerlearnprojectafrica.org/available-courses"},
//     {role:"Python Programming language",organisation:"Alison",icon:alison,verify:"https://alison.com/"},
//     {role:"Python",organisation:"DataFlair",icon:dataflair,verify:"https://data-flair.training/"}




//   ]
//   return (
//     <div className="bg-white-500 py-10 px-6">
//       <h1 className="text-3xl font-bold underline text-center mb-8">Certification</h1>
//       <div className="grid grid-col-1 sm:grid-2 lg:grid-4">
//         {cert.map((tech,index)=>(
//         <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105">
//           <img src={tech.icon} alt={tech.organisation} className='w-16 h-16 mb-4 mw-auto '/>
//           <h2 className='-xl text-center text-bold'>{tech.organisation}</h2>
//           <p className='text-black-500'>course:{tech.role}</p>
//           <a href={tech.verify}>verify</a>
//         </div>

//         ))}
//         <h3 className="font-bold text-center"></h3>
//       </div>
        
//     </div>
//   )
// }

// export default Certification
import alison from '../assets/alison.png'
import dataflair from '../assets/dataflairt.png'
import plp from '../assets/plp.jpeg'
import t2g from '../assets/teach2give.jpeg'

function Certification() {
  const cert = [
    { role: "Software Development", organisation: "Teach2give", icon: t2g, verify: "https://teach2give.com/" },
    { role: "Python Programming Language", organisation: "PowerLearnProject", icon: plp, verify: "https://academy.powerlearnprojectafrica.org/available-courses" },
    { role: "Python Programming Language", organisation: "Alison", icon: alison, verify: "https://alison.com/" },
    { role: "Python", organisation: "DataFlair", icon: dataflair, verify: "https://data-flair.training/" }
  ]

  return (
    <div className="bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold underline text-center mb-8">Certification</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cert.map((tech, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src={tech.icon} alt={tech.organisation} className='w-15 h-24 mb-4 mx-auto rounded-full object-cover' />
            <h2 className='text-xl font-semibold mb-2'>{tech.organisation}</h2>
            <p className='text-gray-600 mb-4'>Course: {tech.role}</p>
            <a href={tech.verify} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold underline">Verify</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certification
