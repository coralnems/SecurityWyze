"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SystemHealthPage() {
  const [cpuUsage, setCpuUsage] = useState(45)
  const [memoryUsage, setMemoryUsage] = useState(60)
  const [storageUsage, setStorageUsage] = useState(75)

  const devices = [
    { name: "Front Door Camera", type: "Camera", status: "Online", lastSeen: "2 minutes ago" },
    { name: "Back Yard Camera", type: "Camera", status: "Online", lastSeen: "1 minute ago" },
    { name: "Garage Camera", type: "Camera", status: "Offline", lastSeen: "2 hours ago" },
    { name: "Living Room Sensor", type: "Motion Sensor", status: "Online", lastSeen: "5 minutes ago" },
    { name: "Front Door Lock", type: "Smart Lock", status: "Online", lastSeen: "3 minutes ago" },
  ]

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">System Health</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>CPU Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-36">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200 stroke-current"
                    strokeWidth="10"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  ></circle>
                  <circle
                    className="text-blue-500  progress-ring stroke-current"
                    strokeWidth="10"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeDasharray={`${cpuUsage * 2.51} 251.2`}
                    strokeDashoffset="0"
                  ></circle>
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                  {cpuUsage}%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Memory Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Used: {memoryUsage}%</span>
                <span>Free: {100 - memoryUsage}%</span>
              </div>
              <Progress value={memoryUsage} className="w-full" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Storage Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Used: {storageUsage}%</span>
                <span>Free: {100 - storageUsage}%</span>
              </div>
              <Progress value={storageUsage} className="w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Connected Devices</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Device</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Seen</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {devices.map((device, index) => (
                <TableRow key={index}>
                  <TableCell>{device.name}</TableCell>
                  <TableCell>{device.type}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        device.status === "Online" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                      }`}
                    >
                      {device.status}
                    </span>
                  </TableCell>
                  <TableCell>{device.lastSeen}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Check
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>System Diagnostics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button>Run Network Diagnostics</Button>
            <Button>Check for Updates</Button>
            <Button>Generate System Report</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

