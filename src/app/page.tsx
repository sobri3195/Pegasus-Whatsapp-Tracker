"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, MapPin, Shield, AlertTriangle, Globe, Activity } from "lucide-react";
import { motion } from "framer-motion";

interface SimulationData {
  phone: string;
  location: string;
  ip: string;
  isp: string;
  coordinates: string;
  status: string;
}

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationProgress, setSimulationProgress] = useState(0);
  const [simulationData, setSimulationData] = useState<SimulationData | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, message]);
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };

  const startSimulation = async () => {
    if (!validatePhoneNumber(phoneNumber)) {
      addLog("❌ Invalid phone number format. Use international format: +1234567890");
      return;
    }

    setIsSimulating(true);
    setSimulationProgress(0);
    setLogs([]);
    setSimulationData(null);

    // Simulate exploit process
    const simulationSteps = [
      { progress: 10, log: "🔄 Initializing connection to WhatsApp servers..." },
      { progress: 20, log: "🔍 Scanning target device metadata..." },
      { progress: 30, log: "📡 Deploying exploit via WhatsApp call metadata..." },
      { progress: 40, log: "🔓 Bypassing encryption... [SUCCESS]" },
      { progress: 50, log: "📍 Extracting GPS coordinates..." },
      { progress: 60, log: "🌐 SIMULATED DATA: Tokyo, Japan" },
      { progress: 70, log: "🔍 Gathering IP information..." },
      { progress: 80, log: "📊 Analyzing network data..." },
      { progress: 90, log: "✅ Simulation completed successfully" },
      { progress: 100, log: "⚠️  REMINDER: This is a simulation only" }
    ];

    for (const step of simulationSteps) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setSimulationProgress(step.progress);
      addLog(step.log);
    }

    // Set simulation data
    setSimulationData({
      phone: phoneNumber,
      location: "Tokyo, Japan",
      ip: "149.88.103.34",
      isp: "Datacamp Limited",
      coordinates: "35.6762°N, 139.6503°E",
      status: "SIMULATED ONLY — NO REAL SERVER COMPROMISED"
    });

    setIsSimulating(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      {/* Legal Warning Banner */}
      <Alert className="mb-6 border-red-500 bg-red-950/50">
        <AlertTriangle className="h-4 w-4 text-red-400" />
        <AlertDescription className="text-red-200 font-medium">
          ⚠️ TOOLS INI HANYA UNTUK TUJUAN EDUKASI. TIDAK BOLEH DIGUNAKAN UNTUK MEMANTAU PERANGKAT ORANG LAIN. PENGGUNAAN ILEGAL DAPAT MENYEBABKAN KONSEKUENSI HUKUM.
        </AlertDescription>
      </Alert>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Pegasus WhatsApp Tracker Basic
            </h1>
            <p className="text-xl text-muted-foreground mt-2">Educational Edition</p>
            <Badge variant="secondary" className="mt-2">
              <Shield className="w-3 h-3 mr-1" />
              Simulation Environment
            </Badge>
          </motion.div>
        </div>

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Panel */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Target Configuration
              </CardTitle>
              <CardDescription>
                Enter target phone number in international format
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Target Phone Number</label>
                <Input
                  placeholder="+1234567890"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="font-mono"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Format: +[country code][number] (e.g., +1234567890)
                </p>
              </div>
              
              <Button 
                onClick={startSimulation} 
                disabled={isSimulating || !phoneNumber}
                className="w-full"
                size="lg"
              >
                {isSimulating ? (
                  <>
                    <Activity className="w-4 h-4 mr-2 animate-spin" />
                    Simulating...
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4 mr-2" />
                    Initialize Simulation
                  </>
                )}
              </Button>

              {simulationProgress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{simulationProgress}%</span>
                  </div>
                  <Progress value={simulationProgress} className="h-2" />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Simulation Logs */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Simulation Logs
              </CardTitle>
              <CardDescription>
                Real-time simulation activity feed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black/50 rounded-lg p-4 h-64 overflow-y-auto font-mono text-sm space-y-1">
                {logs.length === 0 ? (
                  <p className="text-muted-foreground">Waiting for simulation to start...</p>
                ) : (
                  logs.map((log, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`${
                        log.includes("SUCCESS") || log.includes("✅") 
                          ? "text-green-400" 
                          : log.includes("❌") 
                          ? "text-red-400" 
                          : log.includes("⚠️") 
                          ? "text-yellow-400" 
                          : "text-muted-foreground"
                      }`}
                    >
                      [{new Date().toLocaleTimeString()}] {log}
                    </motion.div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results and Education Tabs */}
        {simulationData && (
          <Tabs defaultValue="results" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="results">Simulation Results</TabsTrigger>
              <TabsTrigger value="education">Educational Content</TabsTrigger>
            </TabsList>

            <TabsContent value="results" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Location Data */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Location Data
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="font-mono">{simulationData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span>{simulationData.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Coordinates:</span>
                      <span className="font-mono">{simulationData.coordinates}</span>
                    </div>
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <div className="w-full h-32 bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded flex items-center justify-center">
                        <Globe className="w-12 h-12 text-muted-foreground" />
                      </div>
                      <p className="text-xs text-center text-muted-foreground mt-2">
                        World Map Visualization (Simulated)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* IP Report */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      IP Report
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">IP Address:</span>
                      <span className="font-mono">{simulationData.ip}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ISP:</span>
                      <span>{simulationData.isp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span>Tokyo, JP</span>
                    </div>
                    <Alert className="mt-4">
                      <AlertDescription className="text-xs">
                        {simulationData.status}
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Zero-Day Exploits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      A zero-day exploit is a cyber attack that occurs on the same day a weakness is discovered in software. 
                      Before developers can create a patch, attackers can exploit the vulnerability.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>WhatsApp Encryption</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      WhatsApp uses end-to-end encryption by default. This means only the sender and recipient can read messages, 
                      not even WhatsApp can access the content.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Protection Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Keep your OS updated</li>
                      <li>• Disable calls from unknown numbers</li>
                      <li>• Use Signal for secure communication</li>
                      <li>• Be cautious of suspicious links</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        )}

        {/* Sandbox Notice */}
        <Card className="border-yellow-500 bg-yellow-950/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-yellow-200">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Sandbox Environment</span>
            </div>
            <p className="text-sm text-yellow-200/80 mt-2">
              All data displayed in this simulation is dummy data. No real connections are made to external servers, 
              and no actual exploits are executed. This platform operates in a completely isolated sandbox environment 
              for educational purposes only.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}