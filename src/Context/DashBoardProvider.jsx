import React, { createContext, useState } from 'react'

export const AdminContext = createContext()
function DashBoardProvider({ children }) {
    const [togglemode, settogglemode] = useState(false)
    const [toggleDeletepage, settoggleDeletepage] = useState(false)
    return (
        <AdminContext.Provider value={{ togglemode, settogglemode, toggleDeletepage, settoggleDeletepage }}>
            {children}
        </AdminContext.Provider>
    )
}

export default DashBoardProvider