// "use client";
import MyAllBookingsTable from "@/Components/tables/MyBookingTable";
import { headers } from "next/headers";
// import React, { useEffect, useState } from "react";

    const fetchMyBookings = async () => {
      const res = await fetch("http://localhost:3000/api/service", { 
        headers: await headers()
      });
      const datas = await res.json();
      // setData(datas);
      return datas;
    };
export default async function MyBookingPage() {
  const data = await fetchMyBookings();
  // const [data, setData] = useState([]);
  // const session = useSession();
  // console.log(session);
  // useEffect(() => {

  //   fetchMyBookings();
  // }, []);
  console.log(data)
  return (
    <div>
      <MyAllBookingsTable data={data}></MyAllBookingsTable>
    </div>
  );
}
