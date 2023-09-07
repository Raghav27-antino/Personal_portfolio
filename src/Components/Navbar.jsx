import { Typography } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const content = [
        { name: "Intro", route: "/" },
        { name: "Who", route: "/who" },
        { name: "Want", route: "/want" },
        { name: "Work", route: "/work" },
    ];
    const navigate = useNavigate();

    return (
        <div className='h-[10%] p-6 flex items-center justify-around'>
            <Typography>
            
            </Typography>

            <div className='hidden md:flex gap-10'>
                {
                    content?.map((e, key) => {
                        return (
                            <div title={e.name} key={key} className='group transition duration-300 text-sky-600'>
                                <Typography className='text-white' onClick={() => navigate(e.route)}>{e.name}</Typography>
                                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                            </div>
                        )
                    })
                }
            </div>
            <Typography className='text-white group relative -right-32'>
                Contact
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </Typography>
        </div>
    )
}

export default Navbar