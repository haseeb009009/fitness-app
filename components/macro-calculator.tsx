"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RotateCcw } from "lucide-react"
import { saveMacroState, loadMacroState } from "@/lib/local-storage"

type Gender = "male" | "female"
type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "very-active"

interface FormData {
  gender: Gender
  age: string
  height: string
  weight: string
  activityLevel: ActivityLevel
}

export function MacroCalculator() {
  const [formData, setFormData] = useState<FormData>({
    gender: "male",
    age: "",
    height: "",
    weight: "",
    activityLevel: "moderate",
  })

  const [results, setResults] = useState<{
    bmr: number
    tdee: number
    protein: number
    carbs: number
    fats: number
  } | null>(null)

  const [isClient, setIsClient] = useState(false)

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true)

    // Load saved state from localStorage
    const savedState = loadMacroState()
    setFormData(savedState.formData)
    setResults(savedState.results)
  }, [])

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (isClient) {
      saveMacroState({
        formData,
        results,
      })
    }
  }, [formData, results, isClient])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleRadioChange = (value: string) => {
    setFormData({ ...formData, gender: value as Gender })
  }

  const calculateMacros = () => {
    const age = Number.parseInt(formData.age)
    const height = Number.parseInt(formData.height)
    const weight = Number.parseInt(formData.weight)

    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
      return
    }

    // BMR calculation using Mifflin-St Jeor Equation
    let bmr = 0
    if (formData.gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161
    }

    // TDEE calculation based on activity level
    let tdee = 0
    switch (formData.activityLevel) {
      case "sedentary":
        tdee = bmr * 1.2
        break
      case "light":
        tdee = bmr * 1.375
        break
      case "moderate":
        tdee = bmr * 1.55
        break
      case "active":
        tdee = bmr * 1.725
        break
      case "very-active":
        tdee = bmr * 1.9
        break
      default:
        tdee = bmr * 1.55
    }

    // Macronutrient calculations (basic)
    const protein = weight * 1.8 // 1.8g per kg of bodyweight
    const fats = (tdee * 0.25) / 9 // 25% of calories from fat
    const carbs = (tdee - protein * 4 - fats * 9) / 4 // Remaining calories from carbs

    setResults({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fats: Math.round(fats),
    })
  }

  const handleReset = () => {
    setFormData({
      gender: "male",
      age: "",
      height: "",
      weight: "",
      activityLevel: "moderate",
    })
    setResults(null)
  }

  return (
    <div className="space-y-6">
      <Card className="bg-dark-card border-neon-green/20">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-neon-yellow">Macro Calculator</CardTitle>
              <CardDescription className="text-gray-400">
                Calculate your daily calorie needs and macronutrient breakdown
              </CardDescription>
            </div>
            {results && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="bg-dark-lighter border border-neon-yellow text-neon-yellow hover:bg-dark hover:text-neon-yellow hover:border-neon-yellow transition-colors"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label className="text-neon-yellow">Gender</Label>
              <RadioGroup value={formData.gender} onValueChange={handleRadioChange} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" className="border-neon-yellow text-neon-yellow" />
                  <Label htmlFor="male" className="text-neon-yellow">
                    Male
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" className="border-neon-yellow text-neon-yellow" />
                  <Label htmlFor="female" className="text-neon-yellow">
                    Female
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age" className="text-neon-yellow">
                  Age
                </Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  placeholder="Years"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="bg-dark-lighter border-neon-green/20 text-neon-yellow placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="height" className="text-neon-yellow">
                  Height
                </Label>
                <Input
                  id="height"
                  name="height"
                  type="number"
                  placeholder="cm"
                  value={formData.height}
                  onChange={handleInputChange}
                  className="bg-dark-lighter border-neon-green/20 text-neon-yellow placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight" className="text-neon-yellow">
                Weight
              </Label>
              <Input
                id="weight"
                name="weight"
                type="number"
                placeholder="kg"
                value={formData.weight}
                onChange={handleInputChange}
                className="bg-dark-lighter border-neon-green/20 text-neon-yellow placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="activity-level" className="text-neon-yellow">
                Activity Level
              </Label>
              <Select
                value={formData.activityLevel}
                onValueChange={(value) => handleSelectChange("activityLevel", value)}
              >
                <SelectTrigger id="activity-level" className="bg-dark-lighter border-neon-green/20 text-neon-yellow">
                  <SelectValue placeholder="Select activity level" />
                </SelectTrigger>
                <SelectContent className="bg-dark-lighter border-neon-green/20">
                  <SelectItem value="sedentary" className="text-neon-yellow">
                    Sedentary (little or no exercise)
                  </SelectItem>
                  <SelectItem value="light" className="text-neon-yellow">
                    Light (exercise 1-3 days/week)
                  </SelectItem>
                  <SelectItem value="moderate" className="text-neon-yellow">
                    Moderate (exercise 3-5 days/week)
                  </SelectItem>
                  <SelectItem value="active" className="text-neon-yellow">
                    Active (exercise 6-7 days/week)
                  </SelectItem>
                  <SelectItem value="very-active" className="text-neon-yellow">
                    Very Active (hard exercise daily)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button
            onClick={calculateMacros}
            className="w-full bg-neon-green text-dark hover:bg-neon-green/90"
            disabled={!formData.age || !formData.height || !formData.weight}
          >
            Calculate
          </Button>

          {results && (
            <div className="w-full space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-dark-lighter border-neon-green/20">
                  <CardHeader className="p-3 pb-1">
                    <CardTitle className="text-sm text-neon-yellow">BMR</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 pt-0">
                    <p className="text-xl font-bold text-neon-green">{results.bmr} kcal</p>
                    <p className="text-xs text-gray-400">Basal Metabolic Rate</p>
                  </CardContent>
                </Card>

                <Card className="bg-dark-lighter border-neon-green/20">
                  <CardHeader className="p-3 pb-1">
                    <CardTitle className="text-sm text-neon-yellow">TDEE</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 pt-0">
                    <p className="text-xl font-bold text-neon-green">{results.tdee} kcal</p>
                    <p className="text-xs text-gray-400">Total Daily Energy Expenditure</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-dark-lighter border-neon-green/20">
                <CardHeader className="p-3 pb-1">
                  <CardTitle className="text-sm text-neon-yellow">Daily Macros</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-lg font-bold text-neon-green">{results.protein}g</p>
                      <p className="text-xs text-gray-400">Protein</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-neon-green">{results.carbs}g</p>
                      <p className="text-xs text-gray-400">Carbs</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-neon-green">{results.fats}g</p>
                      <p className="text-xs text-gray-400">Fats</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
