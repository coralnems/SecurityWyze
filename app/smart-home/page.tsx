"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChromeIcon as Alexa,
  HomeIcon as GoogleHome,
  AppleIcon as AppleHomeKit,
  SmartphoneIcon as SmartThings,
} from "lucide-react"

export default function SmartHomeIntegrationPage() {
  const [alexaConnected, setAlexaConnected] = useState(false)
  const [googleHomeConnected, setGoogleHomeConnected] = useState(false)
  const [appleHomeKitConnected, setAppleHomeKitConnected] = useState(false)
  const [smartThingsConnected, setSmartThingsConnected] = useState(false)

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">Smart Home Integration</h1>
      <Tabs defaultValue="assistants">
        <TabsList>
          <TabsTrigger value="assistants">Voice Assistants</TabsTrigger>
          <TabsTrigger value="devices">Smart Devices</TabsTrigger>
          <TabsTrigger value="automations">Automations</TabsTrigger>
        </TabsList>
        <TabsContent value="assistants">
          <Card>
            <CardHeader>
              <CardTitle>Connect Voice Assistants</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Alexa className="h-8 w-8 text-blue-500" />
                  <span>Amazon Alexa</span>
                </div>
                <Switch checked={alexaConnected} onCheckedChange={setAlexaConnected} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <GoogleHome className="h-8 w-8 text-red-500" />
                  <span>Google Home</span>
                </div>
                <Switch checked={googleHomeConnected} onCheckedChange={setGoogleHomeConnected} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <AppleHomeKit className="h-8 w-8 text-gray-500" />
                  <span>Apple HomeKit</span>
                </div>
                <Switch checked={appleHomeKitConnected} onCheckedChange={setAppleHomeKitConnected} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="devices">
          <Card>
            <CardHeader>
              <CardTitle>Connect Smart Devices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <SmartThings className="h-8 w-8 text-blue-500" />
                  <span>SmartThings</span>
                </div>
                <Switch checked={smartThingsConnected} onCheckedChange={setSmartThingsConnected} />
              </div>
              <Button>Add New Device</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="automations">
          <Card>
            <CardHeader>
              <CardTitle>Create Automations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="automation-name">Automation Name</Label>
                <Input id="automation-name" placeholder="e.g., Arm system when I leave home" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="trigger">Trigger</Label>
                <Input id="trigger" placeholder="e.g., When I leave home" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="action">Action</Label>
                <Input id="action" placeholder="e.g., Arm the security system" />
              </div>
              <Button>Create Automation</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

