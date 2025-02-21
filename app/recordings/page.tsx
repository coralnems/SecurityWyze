"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Play, Download } from "lucide-react"

export default function RecordingsPage() {
  const [selectedCamera, setSelectedCamera] = useState("all")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const recordings = [
    { id: 1, camera: "Front Door", date: "2023-06-01", time: "14:30", duration: "00:05:30" },
    { id: 2, camera: "Back Yard", date: "2023-06-01", time: "15:45", duration: "00:03:15" },
    { id: 3, camera: "Garage", date: "2023-06-01", time: "16:20", duration: "00:02:45" },
    { id: 4, camera: "Living Room", date: "2023-06-01", time: "17:10", duration: "00:04:00" },
  ]

  const filteredRecordings = recordings.filter(
    (recording) => selectedCamera === "all" || recording.camera === selectedCamera,
  )

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Recordings</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="w-full md:w-64">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="camera-select" className="text-sm font-medium">
                Camera
              </label>
              <Select value={selectedCamera} onValueChange={setSelectedCamera}>
                <SelectTrigger id="camera-select">
                  <SelectValue placeholder="Select camera" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cameras</SelectItem>
                  <SelectItem value="Front Door">Front Door</SelectItem>
                  <SelectItem value="Back Yard">Back Yard</SelectItem>
                  <SelectItem value="Garage">Garage</SelectItem>
                  <SelectItem value="Living Room">Living Room</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Date</label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Recording List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Camera</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRecordings.map((recording) => (
                  <TableRow key={recording.id}>
                    <TableCell>{recording.camera}</TableCell>
                    <TableCell>{recording.date}</TableCell>
                    <TableCell>{recording.time}</TableCell>
                    <TableCell>{recording.duration}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Play className="mr-2 h-4 w-4" /> Play
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl w-full">
                            <DialogHeader>
                              <DialogTitle>
                                {recording.camera} - {recording.date} {recording.time}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                              <video className="w-full h-full object-cover" controls>
                                <source src="/placeholder.mp4" type="video/mp4" />
                              </video>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" /> Download
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

