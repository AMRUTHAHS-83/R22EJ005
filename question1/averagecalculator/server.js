

const express = require("express");

const app = express();

app.use(express.json());

// Helper function to calculate average
const calculateAverage = (numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
};

app.post("/calculate-average", (req, res) => {
    const { numbers } = req.body;

    // Validate input
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return res.status(400).json({ error: "Invalid input. Please send a non-empty array of numbers." });
    }

    // Ensure all elements are valid numbers
    if (!numbers.every(num => typeof num === "number" && !isNaN(num))) {
        return res.status(400).json({ error: "Array must contain only numbers." });
    }

    // Calculate and return average
    const average = calculateAverage(numbers);
    res.json({ average });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
