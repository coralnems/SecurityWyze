import { Checkbox } from "@/components/ui/checkbox"
import { SelectItem } from "@/components/ui/select"
import { SelectContent } from "@/components/ui/select"
import { SelectValue } from "@/components/ui/select"
import { SelectTrigger } from "@/components/ui/select"
import { Select } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { HardDrive, Trash2 } from "lucide-react"

export default function StoragePage() {
  const storageData = {
    total: 2048, // GB
    used: 1228, // GB
    free: 820, // GB
  }

  const cameraStorage = [
    { name: "Front Door", used: 400 },
    { name: "Back Yard", used: 350 },
    { name: "Garage", used: 300 },
    { name: "Living Room", used: 178 },
  ]

  const usedPercentage = (storageData.used / storageData.total) * 100

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Storage Management</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Storage Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <HardDrive className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">
                  {storageData.used.toFixed(1)} GB / {storageData.total} GB
                </p>
                <p className="text-sm text-muted-foreground">Used Storage</p>
              </div>
            </div>
            <Progress value={usedPercentage} className="h-2" />
            <div className="flex justify-between text-sm">
              <span>Used: {storageData.used.toFixed(1)} GB</span>
              <span>Free: {storageData.free.toFixed(1)} GB</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Storage by Camera</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Camera</TableHead>
                  <TableHead>Used Storage</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cameraStorage.map((camera) => (
                  <TableRow key={camera.name}>
                    <TableCell>{camera.name}</TableCell>
                    <TableCell>{camera.used} GB</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" /> Clear
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Storage Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Auto-delete old recordings</h3>
            <p className="text-sm text-muted-foreground mb-2">Automatically delete recordings older than:</p>
            <Select defaultValue="30">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select days" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">7 days</SelectItem>
                <SelectItem value="14">14 days</SelectItem>
                <SelectItem value="30">30 days</SelectItem>
                <SelectItem value="60">60 days</SelectItem>
                <SelectItem value="90">90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Storage Alerts</h3>
            <div className="flex items-center space-x-2">
              <Checkbox id="storage-alert" />
              <label
                htmlFor="storage-alert"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Alert me when storage is almost full
              </label>
            </div>
          </div>
          <Button>Save Settings</Button>
        </CardContent>
      </Card>
    </div>
  )
}

