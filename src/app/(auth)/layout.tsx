import { ReactNode } from "react"
import { Navbar } from "@/components/navbar"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="">
        <Navbar />
        <div className=" w-full  h-[93.5vh] bg-brand-25   bg-grid-small-black/[0.2] relative flex items-center justify-center">
          <div className="absolute overflow-hidden pointer-events-none inset-0 flex items-center justify-center  bg-brand-25 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
