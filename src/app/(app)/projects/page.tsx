import ServerProject from "@/components/project_components/ServerProject";
import { Metadata } from "next";



export const revalidate = 300 // revalidate every 5 minutes


export const metadata: Metadata = {
  title: "Projects",
};


export default function Projects() {
  return( 
   
  <ServerProject />
);
}

