import React from 'react'
import { useParams } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import './dashboard.css'
function AdminPage() {
    // const adminsData = JSON.parse(localStorage.getItem('admin')) || [];
    // const donorsData=JSON.parse(localStorage.getItem('donorsData')) || [];
    // const recipientsData=JSON.parse(localStorage.getItem('recipientsData')) || [];
    const { id } = useParams()

    // const aPos=donorsData.reduce((counter, obj) => obj.userId === id ? counter += Number(obj.amount) : counter, 0);
    // const aNeg=
    // const bPos
    // const bNeg
    // const oPos
    // const oNeg
    // const abPos
    // const abNeg
    // const requestsPending=donorsData.reduce((counter, obj) => obj.userId === id ? counter += obj.status.toLowerCase()==='pending': counter, 0);
    // const totalRequest=donorsData.reduce((counter, obj) => obj.userId === id ? counter += 1 : counter, 0);
    return (
        <>
            <AdminNavbar url={`/admin/${id}`} />
            <div className='wrapperContainer'>
                <div className='dashboard-container'>
                    <div className='row'>
                        <div className='box'>
                            <h2>A+</h2>
                            <h3>100 Units</h3>
                        </div>
                        <div className='box'>
                            <h2>A-</h2>
                            <h3>20 units</h3>
                        </div>
                        <div className='box'>
                            <h2>B+</h2>
                            <h3>30 units</h3>
                        </div>
                        <div className='box'>
                            <h2>B-</h2>
                            <h3>40 units</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='box'>
                            <h2>O+</h2>
                            <h3>20 units</h3>
                        </div>
                        <div className='box'>
                            <h2>O-</h2>
                            <h3>23 units</h3>
                        </div>
                        <div className='box'>
                            <h2>AB+</h2>
                            <h3>45 units</h3>
                        </div>
                        <div className='box'>
                            <h2>AB-</h2>
                            <h3>50 units</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPage