import ServerAbout from "@/components/about_components/ServerAbout";
import { Metadata } from "next";

export const revalidate = 300 // revalidate every 5 minutes

export const metadata: Metadata = {
  title: "About",
}

export default function About() {
  return <ServerAbout />;
}
