import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { QrCodeGenerator } from './components/Generator/QrCodeGenerator';
import { QrCodeScanner } from './components/Scanner/QrCodeScanner';
import { GeneratorHistory } from "./GeneratorHistory";
import { ScannerHistory } from "./ScannerHistory"

export const Layuot = () => {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/generator" element={<QrCodeGenerator />} />
                <Route path="/scanner" element={<QrCodeScanner />} />
                <Route path="/generatorHistory" element={<GeneratorHistory />} />
                <Route path="/scannerHistory" element={<ScannerHistory />} />
            </Routes>   
        </div>
    )
}

