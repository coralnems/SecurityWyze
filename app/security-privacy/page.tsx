"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SecurityPrivacyPage() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [endToEndEncryption, setEndToEndEncryption] = useState(true)

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">Security & Privacy</h1>
      <Tabs defaultValue="authentication">
        <TabsList>
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
          <TabsTrigger value="encryption">Encryption</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>
        <TabsContent value="authentication">
          <Card>
            <CardHeader>
              <CardTitle>Authentication Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="two-factor" checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
                <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-policy">Password Policy</Label>
                <Select defaultValue="strong">
                  <SelectTrigger id="password-policy">
                    <SelectValue placeholder="Select password policy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                    <SelectItem value="strong">Strong (12+ chars, uppercase, lowercase, number, symbol)</SelectItem>
                    <SelectItem value="very-strong">
                      Very Strong (16+ chars, uppercase, lowercase, number, symbol)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>Update Authentication Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="encryption">
          <Card>
            <CardHeader>
              <CardTitle>Encryption Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="end-to-end" checked={endToEndEncryption} onCheckedChange={setEndToEndEncryption} />
                <Label htmlFor="end-to-end">Enable End-to-End Encryption</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="encryption-method">Encryption Method</Label>
                <Select defaultValue="aes-256">
                  <SelectTrigger id="encryption-method">
                    <SelectValue placeholder="Select encryption method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aes-256">AES-256</SelectItem>
                    <SelectItem value="chacha20">ChaCha20</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>Update Encryption Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="retention-period">Data Retention Period</Label>
                <Select defaultValue="30">
                  <SelectTrigger id="retention-period">
                    <SelectValue placeholder="Select data retention period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">7 days</SelectItem>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Privacy Zones</Label>
                <p className="text-sm text-muted-foreground">
                  Configure areas in camera views that should be blurred or blocked.
                </p>
                <Button variant="outline">Configure Privacy Zones</Button>
              </div>
              <Button>Update Privacy Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

