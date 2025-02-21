import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Camera, HardDrive, AlertTriangle, Play, Shield, Wifi, User, Package } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">Security Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-blue-100 dark:bg-blue-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cameras</CardTitle>
            <Camera className="h-4 w-4 text-blue-600 dark:text-blue-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">8</div>
            <p className="text-xs text-blue-600 dark:text-blue-300">6 active, 2 inactive</p>
          </CardContent>
        </Card>
        <Card className="bg-green-100 dark:bg-green-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <HardDrive className="h-4 w-4 text-green-600 dark:text-green-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800 dark:text-green-200">1.8 TB</div>
            <Progress value={60} className="mt-2" />
            <p className="text-xs text-green-600 dark:text-green-300 mt-2">60% of 3 TB total</p>
          </CardContent>
        </Card>
        <Card className="bg-yellow-100 dark:bg-yellow-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">5</div>
            <p className="text-xs text-yellow-600 dark:text-yellow-300">in the last 24 hours</p>
            <Button variant="link" className="p-0 h-auto mt-2 text-yellow-700 dark:text-yellow-300">
              View alerts
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-purple-100 dark:bg-purple-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
            <Shield className="h-4 w-4 text-purple-600 dark:text-purple-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">Armed</div>
            <p className="text-xs text-purple-600 dark:text-purple-300">All sensors active</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gray-100 dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-primary">Live Camera Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center relative overflow-hidden">
              <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
                <source src="/placeholder.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                <Play className="h-12 w-12" />
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                <Link href="/live">View All Cameras</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/settings">Configure</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gray-100 dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-primary">Recent Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <User className="mr-2 h-4 w-4 text-blue-500" /> Person detected - Front Door
                </span>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/timeline">View</Link>
                </Button>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <Package className="mr-2 h-4 w-4 text-green-500" /> Package delivered - Porch
                </span>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/timeline">View</Link>
                </Button>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" /> Motion detected - Back Yard
                </span>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/timeline">View</Link>
                </Button>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <Wifi className="mr-2 h-4 w-4 text-red-500" /> Camera offline - Garage
                </span>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/settings">Check</Link>
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

