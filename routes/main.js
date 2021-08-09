const router = require("express").Router();
const path = require("path");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/views/index.html"));
})

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/views/exercise.html"));
})

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;