"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { clearAllStoredData } from "@/lib/local-storage"
import { Trash2 } from "lucide-react"

export function SettingsPanel() {
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleClearData = () => {
    if (showConfirmation) {
      clearAllStoredData()
      setShowConfirmation(false)
      // Reload the page to reset all components
      window.location.reload()
    } else {
      setShowConfirmation(true)
    }
  }

  return (
    <Card className="bg-dark-card border-neon-green/20">
      <CardHeader>
        <CardTitle className="text-neon-yellow">Settings</CardTitle>
        <CardDescription className="text-gray-400">Manage your app settings and data</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-neon-yellow">Data Storage</h3>
              <p className="text-xs text-gray-400">Your data is stored locally in your browser</p>
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="auto-save" className="text-xs text-gray-400">
                Auto-save
              </Label>
              <Switch id="auto-save" defaultChecked />
            </div>
          </div>

          <div className="pt-2">
            {showConfirmation ? (
              <div className="space-y-2">
                <p className="text-sm text-neon-yellow">Are you sure? This will delete all your saved data.</p>
                <div className="flex space-x-2">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={handleClearData}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Yes, Delete All Data
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowConfirmation(false)}
                    className="bg-dark-lighter border border-neon-yellow text-neon-yellow hover:bg-dark"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <Button
                variant="outline"
                onClick={handleClearData}
                className="w-full bg-dark-lighter border border-red-500 text-red-500 hover:bg-dark hover:text-red-400"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All Saved Data
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
