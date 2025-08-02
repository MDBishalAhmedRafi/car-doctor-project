"use client";
import MyAllBookingsTable from "@/Components/tables/MyBookingTable";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
export default function MyBookingPage() {
  const [data, setData] = useState([]);
  const session = useSession();
  console.log(session);
  useEffect(() => {
    const fetchMyBookings = async () => {
      const res = await fetch("http://localhost:3000/api/service");
      const datas = await res.json();
      setData(datas);
    };
    fetchMyBookings();
  }, []);
  console.log(data)
  return (
    <div>
      <MyAllBookingsTable data={data}></MyAllBookingsTable>
    </div>
  );
}
