"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Camera, Package, User, Car, AlertTriangle } from "lucide-react"

const eventIcons = {
  "Human Detected": User,
  "Package Delivered": Package,
  "Vehicle Detected": Car,
  "Unusual Activity": AlertTriangle,
}

export default function TimelinePage() {
  const [currentTime, setCurrentTime] = useState(50)

  const events = [
    { time: "08:30", type: "Human Detected", camera: "Front Door" },
    { time: "10:15", type: "Package Delivered", camera: "Front Door" },
    { time: "12:45", type: "Vehicle Detected", camera: "Driveway" },
    { time: "14:20", type: "Unusual Activity", camera: "Back Yard" },
    { time: "16:00", type: "Human Detected", camera: "Living Room" },
  ]

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">Timeline & Events</h1>
      <Card className="bg-accent">
        <CardHeader>
          <CardTitle className="text-primary">Video Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
            <video className="w-full h-full object-cover" src="/placeholder.mp4" />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
              <Slider
                value={[currentTime]}
                onValueChange={(value) => setCurrentTime(value[0])}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <span className="text-sm text-muted-foreground">00:00</span>
            <span className="text-sm text-muted-foreground">24:00</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Camera</TableHead>
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
                    <TableCell>{event.camera}</TableCell>
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
    </div>
  )
}

