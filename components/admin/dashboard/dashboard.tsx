import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


// import { getAppoinments } from "@/actions/get-appoinments";
// import { revenue } from "@/actions/get-sales";
// import { getLastMonthLeads } from "@/actions/get-leads";
// import { getGraphRevenue } from "@/actions/get-graph-revenue";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { useModal } from "@/hooks/use-modal-store";


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

import Navbar from "./navabar";

export const DashboardPage =  async() => {
  // const TotalAppointments = await getAppoinments();
  // const TotalSales = await revenue();
  // const LeadsLastMonth = await getLastMonthLeads();
  // const graphRevenue = await getGraphRevenue();

  const totalUser = await db.user.count();

  const webdev = await db.user.count({
    where:{
      clubName : "web"
    }
  });

  const mobiledev = await db.user.count({
    where:{
      clubName : "mob"
    }
  });

  const uiux = await db.user.count({
      where:{
        clubName : "ui"
      }
  });

  const users = await db.user.findMany()

  

  return (
    <>
      <div className=" flex-col md:flex">
        <div className="border-b"></div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <Navbar/>
          </div>
         
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Link href="/admin">
                  <Card  className="hover:bg-slate-100 cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Mobile development club
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold">{mobiledev}</div>
                      <p className="text-xs text-muted-foreground">
                        users registered
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/admin/appointment">
                  <Card   className="hover:bg-slate-100 cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        UI/UX Club Members
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold">
                        {uiux}
                      </div>
            
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/admin/patients">
                  <Card className="hover:bg-slate-100 cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Web Development</CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <path d="M2 10h20" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold">
                        {uiux}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    {/* <Overview data={} /> */}
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle className="text-[#1ecf36]  text-3xl">
                      Total Registrations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center  ml-4">
                       <div className="text-1xl font-bold">Name</div>
                      <div className="text-1xl font-bold ml-auto">Email</div>
                    </div>
                   

                    {
                      users.map((user) => (
                        <div className="flex items-center" key={user.id}>
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {user.name}
                            </p>
                          </div>
                          <div className="ml-auto font-medium">{user.clubName}</div>
                          <div className="ml-auto font-medium">{user.email}</div>
                        </div>
                      ))

                    }
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};
