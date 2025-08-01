
"use client"
import MyAllBookingTable from '@/Components/tables/MyBookingTable';
import React, { useEffect, useState } from 'react';
export default function MyBookingPage() {
                const [data, setData] = useState([])
                useEffect(() => { 
                                const fetchMyBookings = async () => { 
                                                const res = fetch("http://localhost:3000/api/service")
                                                const datas = await res.json()
                                                setData(datas)
                                };
                                fetchMyBookings();
                }, [])
  return (
    <div>
                <MyAllBookingsTable data = {data}></MyAllBookingsTable>
    </div>
  );
}
