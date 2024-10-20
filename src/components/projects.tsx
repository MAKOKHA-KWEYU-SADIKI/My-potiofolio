import img1 from '../assets/ViclehireManagementSystem.png'
import img2 from '../assets/todo.png'
import img3 from '../assets/OnlineLibrary.png'
import img4 from '../assets/Hotel.png'
import img5 from '../assets/flex-grid-challange.png'
function Projects() {
    
        const skill=[
            {name:"Vehicle Hire Management System",img:img1,link:"https://car-hire-frontend-two.vercel.app/", desc:"This is an efficient web-based platform that streamlines the vehicle rental process, allowing users to easily browse available vehicles, make bookings, and manage rentals, offering a seamless and user-friendly experience for both customers and administrators."},
            {name:"Book repository",img:img3,link:"https://salafy-library-nine.vercel.app/",desc:"The Book Repository is an efficient platform that allows users to search, add, and delete books seamlessly, providing an intuitive and easy-to-use interface for managing a book collection."},
            {name:"To-Do list",img:img2,link:"https://todo-app-pi-eight-53.vercel.app/",desc:"A simple and user-friendly application that allows users to create, manage, and organize their tasks efficiently. "},
            {name:"RestaurantAPI",desc:""},
            {name:"Hotel",img:img4,link:"https://makokha-kweyu-sadiki.github.io/online-food-request/",desc:""},
            {name:"grid and fles practice",link:"https://makokha-kweyu-sadiki.github.io/flex/",img:img5,desc:"This project utilizes CSS Flexbox and Grid layout techniques to create responsive and adaptive web designs"}

        ]

    
  return (
    <div>
        <div id='Projects' className="bg-gray-100 py-10 px-6">
            <h1 className="font-bold underline text-3xl text-center pb-8">
                Projects
            </h1>
            <div className="grid grid-cols-1 mm:grid-cols-2 lg:grid-cols-4 gap-6">
               {skill.map((skil,index)=>(
                <div key={index}className="bg-blue-100 rounded-lg text-center p-6 hover:scale-105">
                    <h2 className="font-bold text-xl mb-2">{skil.name}</h2>
                    <a href={skil.link}><img src={skil.img} alt="live-site" className="w-30 h-30 mx-auto mb-4" /></a>
                    <p className="text-gray-600">{skil.desc}</p>
                </div>
               ))} 
            </div>

        </div>
    </div> 
  )
}

export default Projects