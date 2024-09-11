function calculateRainwater() {
    const roofArea = document.getElementById("roofArea").value;
    const rainfall = document.getElementById("rainfall").value;

    if (roofArea === "" || rainfall === "") {
        document.getElementById("result").innerHTML = "Please enter valid values.";
        return;
    }

    // Rainwater harvesting potential formula:
    // Rainwater collected (liters) = Roof Area (sq meters) × Annual Rainfall (mm) × Efficiency Factor
    const efficiencyFactor = 0.85; // Efficiency factor (85% due to losses)

    const rainwaterCollected = roofArea * rainfall * efficiencyFactor / 1000; // Convert to cubic meters (1000 liters = 1 cubic meter)

    document.getElementById("result").innerHTML = `You can collect approximately ${rainwaterCollected.toFixed(2)} cubic meters of water annually.`;
}
