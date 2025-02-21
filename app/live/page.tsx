"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Camera, Maximize2, Settings } from "lucide-react"

export default function LiveViewPage() {
  const [fullscreenCamera, setFullscreenCamera] = useState<string | null>(null)

  const cameras = [
    { id: 1, name: "Front Door", status: "active" },
    { id: 2, name: "Back Yard", status: "active" },
    { id: 3, name: "Garage", status: "active" },
    { id: 4, name: "Living Room", status: "inactive" },
  ]

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Live View</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {cameras.map((camera) => (
          <Card key={camera.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {camera.name}
                <span className={`text-sm ${camera.status === "active" ? "text-green-500" : "text-red-500"}`}>
                  {camera.status}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                {camera.status === "active" ? (
                  <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
                    <source src="/placeholder.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <Camera className="h-12 w-12 text-muted-foreground" />
                )}
              </div>
              <div className="mt-4 flex justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button onClick={() => setFullscreenCamera(camera.name)}>
                      <Maximize2 className="mr-2 h-4 w-4" /> Full Screen
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full">
                    <DialogHeader>
                      <DialogTitle>{fullscreenCamera}</DialogTitle>
                      <DialogDescription>Full screen view of {fullscreenCamera} camera</DialogDescription>
                    </DialogHeader>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <video className="w-full h-full object-cover" autoPlay muted loop>
                        <source src="/placeholder.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

