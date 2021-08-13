const router = require('express').Router()
const db = require("../../models");

//get workouts
router.get("/", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        // console.log("ALL WORKOUTS");
        // console.log(dbWorkout);
        dbWorkout.forEach(workout => {
            let total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;

        });

        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

//create workout
router.post("/", (req, res) => {
    // console.log("WORKOUT TO BE ADDED");
    // console.log(req.body);

    db.Workout.create(req.body).then((dbWorkout => {
        res.json(dbWorkout);
    })).catch(err => {
        res.json(err);
    });
});

router.put("/:id", (req, res) => {

    // console.log(`REQ.BODY: ${req.body}`);
    db.Workout.findOneAndUpdate({ _id: req.params.id }, {
        $inc: { totalDuration: req.body.duration },
        $push: { exercises: req.body }
    }, { upsert: true, new: true, setDefaultsOnInsert: true }).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });

});

// get workouts in range
router.get("/range", (req, res) => {

    db.Workout.find({}).then(dbWorkout => {
        // console.log("ALL WORKOUTS");
        // console.log(dbWorkout);

        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });

})


module.exports = router;