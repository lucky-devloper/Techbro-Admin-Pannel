import React, { useContext } from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import WelcomeTitle from './WelcomeTitle'
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { AdminContext } from '../Context/DashBoardProvider';

function MentorSection() {
    const { togglemode } = useContext(AdminContext)

    const columns = [
        {
            name: "Name",
            selector: row => row.name
        },
        {
            name: "Email ID",
            selector: row => row.email
        },
        {
            name: "Phone no.",
            selector: row => row.phone
        },
        {
            name: "Profile",
            selector: row => <img src={row.image} alt="" className='w-[50px] h-[50px] object-cover rounded-full' />
        },
        {
            name: "Qulification",
            selector: row => row.qualification
        },
        {
            name: "Position",
            selector: row => row.position
        },
        {
            name: "Actions",
            cell: row => (
                <div className="flex items-center space-x-10">
                    <Link to='/editmentor'><FaRegEdit fontSize='25px' onClick={() => handleEdit(row)} /></Link>
                    <MdDelete fontSize='25px' onClick={() => handleDelete(row.id)} />
                </div>
            ),
            // ignoreRowClick: true,
        },
    ]

    const mentorsData = [
        {
            id: 1,
            name: "Pritam",
            email: "pritamsharmassm701@gmail.com",
            phone: "7061771656",
            image: "https://images.unsplash.com/photo-1668554245893-2430d0077217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
            qualification: "Bachelor's in Computer Application",
            position: "Developer"
        },
        {
            id: 2,
            name: "Ananya Singh",
            email: "ananya.singh@gmail.com",
            phone: "7054321123",
            image: "https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
            qualification: "Master's in Computer Science",
            position: "Data Scientist"
        },
        {
            id: 3,
            name: "Rajesh Gupta",
            email: "rajesh.gupta@gmail.com",
            phone: "7012345678",
            image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
            qualification: "Bachelor's in Information Technology",
            position: "Network Engineer"
        },
        {
            id: 4,
            name: "Sneha Patil",
            email: "sneha.patil@gmail.com",
            phone: "7098765432",
            image: "https://images.unsplash.com/photo-1622676017526-4a8e99f5fdf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
            qualification: "Ph.D. in Artificial Intelligence",
            position: "AI Specialist"
        },
        {
            id: 5,
            name: "Vikas Kumar",
            email: "vikas.kumar@gmail.com",
            phone: "7001122334",
            image: "https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
            qualification: "Bachelor's in Software Engineering",
            position: "Frontend Developer"
        },

    ];

    const lightModeStyles = {
        rows: {
            style: {
                paddingTop: '8px',
                paddingBottom: '8px'
            }
        },
        headCells: {
            style: {
                fontSize: '15px'
            }
        },
        pagination: {
            style: {
                fontSize: '15px'
            }
        }
    }

    const DarkModeStyles = {
        rows: {
            style: {
                paddingTop: '8px',
                paddingBottom: '8px',
                backgroundColor: '#000',
                color: '#fff'
            }
        },
        headCells: {
            style: {
                fontSize: '15px',
                backgroundColor: '#000',
                color: '#fff'
            }
        },
        pagination: {
            style: {
                fontSize: '15px',
                backgroundColor: '#000',
                color: '#fff'
            }
        },
    }

    const handleEdit = (editdata) => {
        console.log("Editdata", editdata);
    }
    const handleDelete = (id) => {
        console.log("DeleteId", id);
    }

    return (
        <div className='lg:w-[80%] h-[100%] w-[100%]'>
            <WelcomeTitle />
            <div className='w-[100%] h-fit p-2 lg:p-4 flex flex-col items-center gap-2 lg:gap-6'>
                <div className='w-[100%] flex justify-between'>
                    <h1 className='text-[20px] lg:text-3xl font-semibold'>All Mentors</h1>
                    <span className='flex items-center justify-center gap-1 bg-[#ee1059] rounded-md font-semibold text-white w-[100px] h-[35px] text-[12px] lg:w-[155px] lg:h-[50px] lg:text-xl'>
                        <FaPlus />
                        <Link to='/addMentor'>Add Mentors</Link>
                    </span>
                </div>
                <div className='w-[100%] h-[40px] lg:h-[60px] flex items-center gap-2 lg:gap-4'>
                    <div className='w-[64%] h-[35px] lg:w-[100%] lg:h-[50px] flex items-center px-2 gap-1 bg-white overflow-hidden rounded-md'>
                        <IoMdSearch fontSize='22px' color='black' />
                        <input type="text" placeholder='Search Mentor' className='w-[100%] h-[100%] outline-none bg-transparent' />
                    </div>
                    <button className='text-[12px] h-[35px] lg:h-[50px] lg:w-[180px] lg:text-xl px-2 lg:px-0 rounded-md font-semibold text-white bg-[#ee1059]'>Search Mentors</button>
                </div>
                <div className='w-[100%] h-fit'>
                    <DataTable
                        columns={columns}
                        data={mentorsData}
                        pagination
                        highlightOnHover
                        customStyles={togglemode ? DarkModeStyles : lightModeStyles}
                        fixedHeader
                        fixedHeaderScrollHeight="380px"
                    >
                    </DataTable>
                </div>
            </div>
        </div>
    )
}

export default MentorSection