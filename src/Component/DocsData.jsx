import React, { useContext } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DataTable from 'react-data-table-component'
import { AdminContext } from '../Context/DashBoardProvider';
import { Link } from 'react-router-dom';

function DocsData() {
    const { toggleDeletepage, settoggleDeletepage, togglemode } = useContext(AdminContext)
    const columns = [
        {
            name: "Tech",
            selector: row => row.description,
        },
        {
            name: "link",
            selector: row => row.website,
        },
        {
            name: "Image",
            selector: row => <img src={row.image} className='w-12 h-12 object-cover' />,
        },
        {
            name: "Actions",
            cell: row => (
                <div className="flex items-center space-x-10">
                    <Link to='/editdoc'><FaRegEdit fontSize='25px' onClick={() => handleEdit(row)} /></Link>
                    <MdDelete fontSize='25px' onClick={() => handleDelete(row.id)} />
                </div>
            ),
            // ignoreRowClick: true,
        },
    ];

    const DarkmodeStyles = {
        pagination: {
            style: {
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '15px',
            }
        },
        headCells: {
            style: {
                backgroundColor: '#000', // Header background color
                color: '#fff',
                fontSize: '20px'
            },
        },
        rows: {
            style: {
                paddingTop: '8px',
                paddingBottom: '8px',
                backgroundColor: '#000',
                color: '#fff'
            }
        },
    };

    const LightModeStyle = {
        pagination: {
            style: {
                fontSize: '15px',
            }
        },
        headCells: {
            style: {
                fontSize: '20px',
            }
        },
        rows: {
            style: {
                paddingTop: '8px',
                paddingBottom: '8px',
            }
        },
    }

    const document = [
        { id: 1, description: "Complete JavaScript for Frontend Developer", website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", image: "js.webp" },
        { id: 2, description: "Full-Stack Web Development Bootcamp", website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", image: "js.webp" },
        { id: 3, description: "Modern HTML & CSS From The Beginning", website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript ", image: "js.webp" },
        { id: 4, description: "Advanced CSS and Sass", website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", image: "js.webp" },
        { id: 5, description: "JavaScript - The Complete Guide", website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", image: "js.webp" },
    ];

    const handleEdit = (id) => {
        console.log("Edit Id", id);

    }

    const handleDelete = (id) => {
        console.log("Delete Id", id);
        settoggleDeletepage(!toggleDeletepage)
    }
    return (
        <div className='w-[100%] h-fit'>
            <DataTable
                columns={columns}
                data={document}
                pagination
                highlightOnHover
                fixedHeader
                customStyles={togglemode ? DarkmodeStyles : LightModeStyle}
                fixedHeaderScrollHeight="380px" // Sets scrollable area height
            />
        </div>
    )
}

export default DocsData