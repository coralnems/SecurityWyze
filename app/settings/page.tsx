import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">Settings</h1>
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="bg-accent">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="cameras">Cameras</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="network">Network</TabsTrigger>
          <TabsTrigger value="ai">AI & Analytics</TabsTrigger>
          <TabsTrigger value="sharing">Sharing</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="system-name">System Name</Label>
                <Input id="system-name" defaultValue="My Home Security" className="bg-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time-zone">Time Zone</Label>
                <Select defaultValue="UTC">
                  <SelectTrigger id="time-zone" className="bg-accent">
                    <SelectValue placeholder="Select time zone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UTC">UTC</SelectItem>
                    <SelectItem value="EST">Eastern Time</SelectItem>
                    <SelectItem value="CST">Central Time</SelectItem>
                    <SelectItem value="MST">Mountain Time</SelectItem>
                    <SelectItem value="PST">Pacific Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="dark-mode" />
                <Label htmlFor="dark-mode">Dark Mode</Label>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="cameras">
          <Card>
            <CardHeader>
              <CardTitle>Camera Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {["Front Door", "Back Yard", "Garage", "Living Room"].map((camera) => (
                <div key={camera} className="flex items-center justify-between">
                  <span>{camera}</span>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>
              ))}
              <Button>Add New Camera</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="email-notifications" />
                <Label htmlFor="email-notifications">Email Notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="push-notifications" />
                <Label htmlFor="push-notifications">Push Notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="sms-notifications" />
                <Label htmlFor="sms-notifications">SMS Notifications</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input id="webhook-url" placeholder="https://your-webhook-url.com" className="bg-accent" />
              </div>
              <Button className="bg-green-600 hover:bg-green-700">Save Notification Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="network">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Network Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ip-address">IP Address</Label>
                <Input id="ip-address" defaultValue="192.168.1.100" className="bg-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subnet-mask">Subnet Mask</Label>
                <Input id="subnet-mask" defaultValue="255.255.255.0" className="bg-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gateway">Gateway</Label>
                <Input id="gateway" defaultValue="192.168.1.1" className="bg-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dns">DNS Server</Label>
                <Input id="dns" defaultValue="8.8.8.8" className="bg-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ddns-provider">DDNS Provider</Label>
                <Select defaultValue="">
                  <SelectTrigger id="ddns-provider" className="bg-accent">
                    <SelectValue placeholder="Select DDNS provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-ip">No-IP</SelectItem>
                    <SelectItem value="dyndns">DynDNS</SelectItem>
                    <SelectItem value="cloudflare">Cloudflare</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ddns-hostname">DDNS Hostname</Label>
                <Input id="ddns-hostname" placeholder="your-hostname.ddns.net" className="bg-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ddns-username">DDNS Username</Label>
                <Input id="ddns-username" className="bg-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ddns-password">DDNS Password</Label>
                <Input id="ddns-password" type="password" className="bg-accent" />
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">Save Network Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ai">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">AI & Analytics Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="enable-ai" />
                <Label htmlFor="enable-ai">Enable AI-powered detection</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="openai-api-key">OpenAI API Key</Label>
                <Input id="openai-api-key" type="password" className="bg-accent" />
              </div>
              <div className="space-y-2">
                <Label>Detection Types</Label>
                <div className="flex flex-wrap gap-2">
                  {["Humans", "Packages", "Vehicles", "Animals"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Switch id={`detect-${type.toLowerCase()}`} />
                      <Label htmlFor={`detect-${type.toLowerCase()}`}>{type}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="custom-detection">Custom Detection Prompt</Label>
                <Input
                  id="custom-detection"
                  placeholder="Describe custom objects or activities to detect"
                  className="bg-accent"
                />
              </div>
              <Button className="bg-yellow-600 hover:bg-yellow-700">Save AI Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sharing">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Sharing Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="shared-users">Shared Users</Label>
                <Input id="shared-users" placeholder="Enter email addresses (comma-separated)" className="bg-accent" />
              </div>
              <div className="space-y-2">
                <Label>Sharing Permissions</Label>
                <div className="flex flex-wrap gap-2">
                  {["Live View", "Recordings", "Settings"].map((permission) => (
                    <div key={permission} className="flex items-center space-x-2">
                      <Switch id={`share-${permission.toLowerCase().replace(" ", "-")}`} />
                      <Label htmlFor={`share-${permission.toLowerCase().replace(" ", "-")}`}>{permission}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="bg-red-600 hover:bg-red-700">Save Sharing Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

