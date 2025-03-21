'use client'

import DirectoryStaffCard from "@/components/DirectoryStaffCard";
import DirectoryWidget from "@/components/DirectoryWidget";
import NoStaffCard from "@/components/NoStaffCard";
import { useState } from "react";

const data = [
  {
    firstName:"Ebenezer Kwabena Blay",
    lastName: "Ackah",
    position: "Principal ICT Assistant",
    phone: "+233 27 767 5089",
    email: "ebenezerkb.ackah@gmail.com",
    profileLink: "",
    profileImage: "https://cdn.ucc.edu.gh/api/photos/?tag=15666"
  },
  {
    firstName:"Solomon",
    lastName: "Odame",
    position: "Principal ICT Assistant",
    phone: "+233 27 767 5089",
    email: "ebenezerkb.ackah@gmail.com",
    profileLink: "",
    profileImage: ""
  }
];

export default function Home() {
  
  const [ filter, setFilter ] = useState("")
  const [ recs, setRecs ] = useState(data)
  return (
    <main className="pb-20 space-y-10 md:space-y-0">
      <DirectoryWidget data={filter} setData={setFilter} />
      <section className="px-6 md:px-0 mb-10 w-full font-sans">
        <div className="w-full md:mx-auto md:py-10 md:max-w-[68rem] flex flex-col space-y-10">
          <h1 className="px-3 py-1 md:px-6 md:py-2 md:w-1/4 bg-primary text-lg text-white md:rounded-r-full font-bold">OFFICIAL STAFF MEMBERS</h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-x-6 gap-y-10">
             { recs.filter((r,i) => r?.firstName?.toLowerCase().includes(filter?.toLowerCase()) || r?.lastName?.toLowerCase().includes(filter?.toLowerCase()) || r?.phone?.toLowerCase().includes(filter?.toLowerCase()) || r?.email?.toLowerCase().includes(filter?.toLowerCase())).map((r,i) => <DirectoryStaffCard key={i} data={r} /> )}
             { recs.filter((r,i) => r?.firstName?.toLowerCase().includes(filter?.toLowerCase()) || r?.lastName?.toLowerCase().includes(filter?.toLowerCase()) || r?.phone?.toLowerCase().includes(filter?.toLowerCase()) || r?.email?.toLowerCase().includes(filter?.toLowerCase())).length == 0 && (<NoStaffCard />)}
          </div>
        </div>
      </section>
    </main>
  );
}
