"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { User, Package, Car, AlertTriangle, Camera } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const eventIcons = {
  "Person Detected": User,
  "Package Delivered": Package,
  "Vehicle Detected": Car,
  "Unusual Activity": AlertTriangle,
}

const data = [
  { name: "Mon", persons: 4, packages: 2, vehicles: 7 },
  { name: "Tue", persons: 3, packages: 1, vehicles: 5 },
  { name: "Wed", persons: 5, packages: 3, vehicles: 6 },
  { name: "Thu", persons: 2, packages: 4, vehicles: 4 },
  { name: "Fri", persons: 6, packages: 2, vehicles: 8 },
  { name: "Sat", persons: 7, packages: 1, vehicles: 9 },
  { name: "Sun", persons: 3, packages: 0, vehicles: 3 },
]

export default function AIAnalyticsPage() {
  const [selectedTab, setSelectedTab] = useState("overview")

  const events = [
    { time: "08:30", type: "Person Detected", location: "Front Door" },
    { time: "10:15", type: "Package Delivered", location: "Porch" },
    { time: "12:45", type: "Vehicle Detected", location: "Driveway" },
    { time: "14:20", type: "Unusual Activity", location: "Back Yard" },
    { time: "16:00", type: "Person Detected", location: "Living Room" },
  ]

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">AI & Analytics</h1>
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="events">Recent Events</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>AI Detection Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="persons" fill="#8884d8" name="Persons" />
                  <Bar dataKey="packages" fill="#82ca9d" name="Packages" />
                  <Bar dataKey="vehicles" fill="#ffc658" name="Vehicles" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Recent AI-Detected Events</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Event</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map((event, index) => {
                    const IconComponent = eventIcons[event.type] || Camera
                    return (
                      <TableRow key={index}>
                        <TableCell>{event.time}</TableCell>
                        <TableCell className="flex items-center gap-2">
                          <IconComponent className="h-4 w-4" />
                          {event.type}
                        </TableCell>
                        <TableCell>{event.location}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>AI Detection Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Weekly trend analysis of AI-detected events.</p>
              {/* Add more detailed trend analysis here */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

