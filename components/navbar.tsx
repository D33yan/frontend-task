import Image from "next/image"
import Link from "next/link" 
export default function NavBar(){
    <div className=" min-h-screen bg-gray-300">
        <header className="border-b bg-white">
            <div className="container mx-auto">
                <div className="flex items-center h-18 justify-between">
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center">
                            <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-logo-indigo.svg" alt="Workflow" />
                        </div>
                        <div className="text-sm font-medium text-gray-700">
                            <Link href="#">DLinkshboLinkrd</Link>
                            <Link href="#">Linkctivities</Link>
                            <Link href="#">Content Mgnt</Link>
                            <Link href="#">Settings</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>

}
