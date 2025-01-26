'use client'

import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu, ChevronLeft, ChevronRight, Search, ArrowLeft, LayoutDashboard, Activity, FileText, Settings,Shield,User } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

interface UserActivity {
  timestamp: string
  action: string
}

export default function UserSettings() {
  const [activities] = useState<UserActivity[]>(Array(10).fill({
    timestamp: "10:20AM, 10th Apr, 2024",
    action: "Edited hero section on landing page"
  }))

  const permissions = [
    "User can edit website",
    "User can manage content",
    "User can invite users",
    "User can change settings",
    "User can view analytics",
    "User can publish content",
    "User can manage users"
  ]

  const NavLinks = () => (
    <>
      <Link 
        href="/dashboard" 
        className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center"
      >
        <LayoutDashboard className="mr-2 h-4 w-4" />
        Dashboard
      </Link>
      <Link 
        href="/activities" 
        className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center"
      >
        <Activity className="mr-2 h-4 w-4" />
        Activities
      </Link>
      <Link 
        href="/content" 
        className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center"
      >
        <FileText className="mr-2 h-4 w-4" />
        Content Mgnt
      </Link>
      <Link 
        href="/settings" 
        className="px-2 py-2 text-sm font-medium bg-green-50 text-green-800 rounded-md flex items-center"
      >
        <Settings className="mr-2 h-4 w-4" />
        Settings
      </Link>
    </>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="mx-auto">
          <div className="flex items-center h-16 justify-between px-4">
            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="flex items-center">
                <Image
                  src="/logo.jpeg"
                  alt="Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <nav className="hidden md:flex items-center space-x-1">
                <NavLinks/>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="hidden md:flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to site
              </Link>
              <div className="hidden md:flex items-center space-x-2">
                <Avatar>
                  <AvatarFallback className="bg-green-800 text-white">
                    TV
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Timas Vogue</span>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-6">
                    <NavLinks />
                    <Link 
                      href="/" 
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to site
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <h1 className="text-xl font-semibold">
            Settings/ Account setting/{" "}
            <span className="text-green-600">User</span>
          </h1>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <Button 
              variant="ghost" 
              className="text-red-600 border-red-600 hover:bg-red-50 w-full sm:w-auto"
            >
              Deactivate User
            </Button>
            <Button 
              variant="ghost" 
              className="text-red-600 border-red-600 hover:bg-red-50 w-full sm:w-auto"
            >
              Delete Account
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <h2 className="text-sm font-semibold bg-green-50 text-green-800 inline-block px-4 py-1.5 rounded-md">
                  User Details
                </h2>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-6">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarFallback className="bg-green-800 text-white text-2xl">
                      AG
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">Adenike Gregory</h3>
                  <p className="text-gray-600 mb-4">nike@examplemail.com</p>
                  <div className="flex items-center space-x-3">
                    <Button 
                      variant="secondary" 
                      className="bg-green-600 text-white hover:bg-green-700"
                      size="sm"
                    >
                      Active
                    </Button>
                    <span className="text-gray-600 text-sm">Sub Admin</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-sm font-semibold bg-green-50 text-green-800 inline-block px-4 py-1.5 rounded-md">
                  Permissions
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {permissions.map((permission, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between py-2 border-b last:border-0"
                    >
                      <span className="text-sm">{permission}</span>
                      <Switch defaultChecked={index === 0} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="md:col-span-3">
            <CardHeader>
              <div className="flex flex-col space-y-4">
                <h2 className="text-sm font-semibold bg-green-50 text-green-800 inline-block px-4 py-1.5 rounded-md self-start">
                  User Activity
                </h2>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="relative flex-1 w-full sm:w-auto">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input 
                      className="pl-10 rounded-full w-full" 
                      placeholder="Search"
                    />
                  </div>
                  <Button variant="outline" className="rounded-full w-full sm:w-auto">
                    Sort by
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 border-b last:border-0 space-y-2 sm:space-y-0"
                  >
                    <span className="text-gray-600 text-sm">
                      {activity.timestamp}
                    </span>
                    <span className="text-sm">{activity.action}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between mt-6 space-y-4 sm:space-y-0">
                <span className="text-sm text-gray-600">
                  Showing 1-10 of 20
                </span>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="bg-green-50"
                  >
                    1
                  </Button>
                  <Button variant="outline" size="icon">2</Button>
                  <Button variant="outline" size="icon">3</Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}