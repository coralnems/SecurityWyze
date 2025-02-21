"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function ReportsInsightsPage() {
  const [reportType, setReportType] = useState("daily")
  const [timeFrame, setTimeFrame] = useState("last7days")

  const data = [
    { name: "Mon", events: 4 },
    { name: "Tue", events: 3 },
    { name: "Wed", events: 5 },
    { name: "Thu", events: 2 },
    { name: "Fri", events: 6 },
    { name: "Sat", events: 7 },
    { name: "Sun", events: 3 },
  ]

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">Reports & Insights</h1>
      <Card>
        <CardHeader>
          <CardTitle>Generate Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <div className="space-y-2 flex-1">
              <label htmlFor="report-type">Report Type</label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger id="report-type">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily Activity</SelectItem>
                  <SelectItem value="weekly">Weekly Summary</SelectItem>
                  <SelectItem value="monthly">Monthly Overview</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 flex-1">
              <label htmlFor="time-frame">Time Frame</label>
              <Select value={timeFrame} onValueChange={setTimeFrame}>
                <SelectTrigger id="time-frame">
                  <SelectValue placeholder="Select time frame" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last7days">Last 7 Days</SelectItem>
                  <SelectItem value="last30days">Last 30 Days</SelectItem>
                  <SelectItem value="last90days">Last 90 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button>Generate Report</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Activity Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="events" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-06-01</TableCell>
                <TableCell>14:30</TableCell>
                <TableCell>Motion Detected</TableCell>
                <TableCell>Front Door</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-01</TableCell>
                <TableCell>15:45</TableCell>
                <TableCell>Person Detected</TableCell>
                <TableCell>Back Yard</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-02</TableCell>
                <TableCell>09:15</TableCell>
                <TableCell>Package Delivered</TableCell>
                <TableCell>Front Porch</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

