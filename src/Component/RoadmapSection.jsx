import React, { useContext } from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import WelcomeTitle from './WelcomeTitle'
import { AdminContext } from '../Context/DashBoardProvider';

function RoadmapSection() {
    const { togglemode } = useContext(AdminContext)
    const columns = [
        {
            name: "Tech Name",
            selector: row => row.name
        },
        {
            name: "File Link",
            selector: row => row.file
        },
        {
            name: "Action",
            selector: row => (
                <MdDelete fontSize='25px' onClick={() => handleDelete(row.id)} />
            )
        }
    ]
    const RoadmapData = [
        {
            id: 1,
            name: "Fronted Development",
            file: 'frontend.pdf'
        },
        {
            id: 2,
            name: "FullStack Developer",
            file: 'https://roadmap.sh/full-stack'
        },
        {
            id: 3,
            name: "Backend Developer",
            file: 'https://roadmap.sh/backend'
        },
        {
            id: 4,
            name: "Machine Learning",
            file: 'https://www.geeksforgeeks.org/machine-learning-roadmap'
        },
        {
            id: 5,
            name: "Data Science",
            file: 'https://roadmap.sh/ai-data-scientist'
        },
        {
            id: 6,
            name: "Data Analyst",
            file: 'https://roadmap.sh/data-analyst'
        },
        {
            id: 7,
            name: "UI / UX Designer",
            file: 'https://roadmap.sh/ux-design'
        },
        {
            id: 8,
            name: "Content Creator",
            file: 'https://app.rigi.club/content-creation/30-creative-content-ideas-for-content-creators'
        },
    ]

    const DarkmodeTable = {
        headCells: {
            style: {
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '15px'
            }
        },
        rows: {
            style: {
                backgroundColor: '#000',
                color: '#fff',
                paddingTop: '8px',
                paddingBottom: '8px',
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

    const lightModeStyles = {
        rows: {
            style: {
                paddingTop: '8px',
                paddingBottom: '8px',
            }
        },
        headCells: {
            style: {
                fontSize: '15px'
            }
        },
        pagination: {
            style: {
                fontSize: '15px',
            }
        },
    }
    return (
        <div className='lg:w-[80%] h-[100%] w-[100%]'>
            <WelcomeTitle />
            <div className='w-[100%] h-fit p-2 lg:p-4 flex flex-col items-center gap-2 lg:gap-6'>
                <div className='w-[100%] flex justify-between'>
                    <h1 className='text-[20px] lg:text-3xl font-semibold'>RoadMap</h1>
                    <span className='flex items-center justify-center lg:gap-2 bg-[#ee1059] rounded-md font-semibold text-white w-[92px] h-[35px] text-[11px] lg:w-[170px] lg:h-[50px] lg:text-xl'>
                        <FaPlus />
                        <Link to='/addroadmap'>Add RoadMap</Link>
                    </span>
                </div>
                <div className='w-[100%] h-[40px] lg:h-[60px] flex items-center gap-2 lg:gap-4'>
                    <div className='w-[67%] h-[35px] lg:w-[100%] lg:h-[50px] flex items-center px-2 gap-1 bg-white overflow-hidden rounded-md'>
                        <IoMdSearch fontSize='22px' color='black' />
                        <input type="text" placeholder='Search Roadmap' className='w-[100%] h-[100%] outline-none bg-transparent text-black' />
                    </div>
                    <button className='text-[11px] h-[35px] lg:h-[50px] lg:w-[196px] lg:text-xl px-1 rounded-md font-semibold text-white bg-[#ee1059]'>Search RoadMap</button>
                </div>
                <div className='w-[100%] h-fit'>
                    <DataTable
                        columns={columns}
                        data={RoadmapData}
                        pagination
                        highlightOnHover
                        fixedHeader
                        customStyles={togglemode ? DarkmodeTable : lightModeStyles}
                        fixedHeaderScrollHeight='380px'
                    >
                    </DataTable>
                </div>
            </div>
        </div>
    )
}

export default RoadmapSection