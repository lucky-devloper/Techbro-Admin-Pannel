import React, { useContext } from 'react'
import { IoMdSearch } from "react-icons/io";
import DataTable from 'react-data-table-component';
import WelcomeTitle from './WelcomeTitle'
import { AdminContext } from '../Context/DashBoardProvider';

function UserSection() {
    const { togglemode } = useContext(AdminContext)
    const columns = [
        {
            name: "Name",
            selector: row => row.name
        },
        {
            name: "Email",
            selector: row => row.email
        },
        {
            name: "Phone",
            selector: row => row.phone
        },
        {
            name: "Profile",
            selector: row => <img src={row.image} alt="" className='w-[50px] h-[50px] object-cover rounded-full' />
        },
        {
            name: "Action",
            selector: row => (
                <div className='flex items-center space-x-10'>
                    <button className='border-blue-600 border-2 px-2 py-1 rounded hover:bg-blue-600 hover:text-white hover:border-none font-semibold'>Block</button>
                    <button className='border-blue-600 border-2 px-2 py-1 rounded hover:bg-blue-600 hover:text-white hover:border-none font-semibold'>Unblock</button>
                </div>
            )
        }
    ]

    const UserData = [
        {
            id: 1,
            name: "Pritam Sharma",
            email: "pritamsharmassm701@gmail.com",
            phone: "7061771656",
            image: "https://plus.unsplash.com/premium_photo-1658506787944-7939ed84aaf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id: 2,
            name: "Amit Verma",
            email: "amitverma123@gmail.com",
            phone: "7894561230",
            image: "https://plus.unsplash.com/premium_photo-1678506787944-1234a567bc89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            id: 3,
            name: "Sneha Patel",
            email: "snehapatel456@gmail.com",
            phone: "8523697410",
            image: "https://plus.unsplash.com/premium_photo-1643206543210-8765fghijklm?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            id: 4,
            name: "Rahul Singh",
            email: "rahulsingh789@gmail.com",
            phone: "9638527410",
            image: "https://plus.unsplash.com/premium_photo-1653106787944-5678ghijklmn?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            id: 5,
            name: "Anjali Mehta",
            email: "anjalimehta101@gmail.com",
            phone: "7894562580",
            image: "https://plus.unsplash.com/premium_photo-1675606787944-8765mnopqrs?t=w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        }
    ];

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
    return (
        <div className='lg:w-[80%] h-[100%] w-[100%]'>
            <WelcomeTitle />
            <div className='w-[100%] h-fit p-2 lg:p-4 flex flex-col items-center gap-2 lg:gap-6'>
                <h1 className='text-[20px] lg:text-3xl font-semibold w-[100%]'>All Users</h1>
                <div className='w-[100%] h-[40px] lg:h-[60px] flex items-center justify-between lg:gap-4'>
                    <div className='w-[70%] h-[35px] lg:w-[100%] lg:h-[50px] flex items-center px-2 gap-1 bg-white overflow-hidden rounded-md'>
                        <IoMdSearch fontSize='22px' color='black' />
                        <input type="text" placeholder='Enter name' className='w-[100%] h-[100%] outline-none bg-transparent' />
                    </div>
                    <button className='text-[12px] h-[35px] lg:h-[50px] lg:w-[180px] lg:text-xl px-2 lg:px-0 rounded-md font-semibold text-white bg-[#ee1059]'>Search User</button>
                </div>
                <div className='w-[100%] h-fit'>
                    <DataTable
                        columns={columns}
                        data={UserData}
                        pagination
                        highlightOnHover
                        fixedHeader
                        customStyles={togglemode ? DarkModeStyles : lightModeStyles}
                        fixedHeaderScrollHeight='380px'
                    >
                    </DataTable>
                </div>
            </div>
        </div>
    )
}

export default UserSection