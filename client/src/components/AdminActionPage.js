import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import './table.css'
import axios from 'axios';

function AdminActionPage() {

    const {id} = useParams();

    const [userData, setUserData] = useState([])

    // useS
    
    useEffect(() => {
        
        axios.get('http://localhost:5001/user/getUsers')
        .then(function (response) {
            console.log(response.data);
            setUserData(response.data)
            // alert("Good");
        })
        .catch(function (error) {
            // alert("Sorry a User with this email already exists");
            alert("Please Login with correct credentials, wrong password");
            console.log(error);
            return;
        });

    }, [])
    
    const data=[]
    for(let i=0;i<userData.length;i++){
        const id=userData[i]._id;
        for(let j=0;j<userData[i].donate.length;j++){

            const obj={
                name:userData[j].name,
                type:userData[i].donate[j].type,
                disease:userData[i].donate[j].disease,
                amount:userData[i].donate[j].amount,
                status:userData[i].donate[j].status,
                don_req:'Donation'
            }
            data.push(obj);
        }
        for(let j=0;j<userData[i].request.length;j++){

            const obj={
                name:userData[j].name,
                type:userData[i].request[j].type,
                disease:userData[i].request[j].disease,
                amount:userData[i].request[j].amount,
                status:userData[i].request[j].status,
                don_req:"Request"
            }
            data.push(obj);
        }
    }

    console.log(data);
    const datas= data.map((filteredData => (
                <tr key={filteredData._id}>
                    <td>{filteredData.type}</td>
                    <td>{filteredData.disease}</td>
                    <td>{filteredData.amount}</td>
                    <td>{filteredData.don_req}</td>
                    <td style={{'color':'#F6BE00'}}>{filteredData.status}</td>
                    <td>{<div className='action-container'><div className='action-btn action-green'>Accept</div>
                    <div className='action-btn action-red'>Reject</div></div>}</td>
                </tr>
            )
    ))
    return (
        <>
        <AdminNavbar url={`/admin/${id}`} />
        <div className='wrapper-container'>
            <h1>All Requests</h1>
            <div className='history-container'>
                <table className='table'>
                    <tr>
                        <th>Blood Type</th>
                        <th>Disease(If Any)</th>
                        <th>Amount(units)</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {datas}
                </table>
            </div>
        </div>
        </>
    );
}

export default AdminActionPage