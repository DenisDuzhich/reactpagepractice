import { Navbar } from "@/components/Navbar";
import { ProjectInfo } from "@/components/ProjectInfo";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* header with name and navbar */}
      <Navbar />
      {/* basic info as per assigment */}
      {/* actual webpage stuff aka main content - abscent */}
      <main>
        {/* The project info will take up the #hero section */}
        <ProjectInfo />
      </main>
      {/* footer with links znd stuff */}
      {/*<Footer />*/}
    </div>
  );
};
