import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import React from "react";

interface Props {
    children: React.ReactNode
   }
   
   export default function Page(props: Props) {
     return (
        <SidebarProvider>
         <AppSidebar />
         <SidebarInset>
           <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
             <SidebarTrigger className="-ml-1" />
             <Separator orientation="vertical" className="mr-2 h-4" />
             <Breadcrumb>
               <BreadcrumbList>
                 <BreadcrumbItem className="hidden md:block">
                   <BreadcrumbLink href="#">
                        Activities
                   </BreadcrumbLink>
                 </BreadcrumbItem>
                 <BreadcrumbSeparator className="hidden md:block" />
                 <BreadcrumbItem>
                   <BreadcrumbPage>Latest</BreadcrumbPage>
                 </BreadcrumbItem>
               </BreadcrumbList>
             </Breadcrumb>
           </header>
           <div className="flex flex-1 flex-col gap-4 p-4">
             {props.children}
           </div>
         </SidebarInset>
       </SidebarProvider>
     );
   }
   