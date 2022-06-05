const router = require("express").Router();
const db = require("../config/db");

//add
router.post("/", async (req, res) => {
    try {
        const { degree, name, body } = req.body;
        const newLecturer = await db.query("insert into lecturers (degree,name,body) values($1,$2,$3) returning *", [degree, name, body]);
        return res.json({
            result: true,
            data: []
        });
    } catch (error) {
        console.log(error.message);
        return res.json({
            result: false,
            data: []
        });
    }
});

//get
router.get("/", async (req, res) => {
    try {
        const lecturers = await db.query("select * from lecturers");
        return res.json({
            result: true,
            data: lecturers.rows
        });
    } catch (error) {
        console.log(error.message)
        return res.json({
            result: false,
            data: []
        });
    }
});
//get one
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const oneLecturer = await db.query("select * from lecturers where id=$1", [id]);
        return res.json({
            result: true,
            data: oneLecturer.rows[0]
        });
    } catch (error) {
        console.log(error.message)
        return res.json({
            result: false,
            data: []
        });

    }
});

//delete
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteLecturer = await db.query("delete from lecturers where id=$1", [id]);
        return res.json({
            result: true,
            data: []
        });
    } catch (error) {
        console.log(error.message);
        return res.json({
            result: false,
            data: []
        });
    }
});

//update 
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { degree, name, body } = req.body;
        const updateLecturer = await db.query("update lecturers set degree=$1, name=$2, body=$3, where id=$4", [degree, name, body, id]);
        return res.json({
            result: true,
            data: []
        });
    } catch (error) {
        console.log(error.message);
        return res.json({
            result: false,
            data: []
        });
    }
});

module.exports = router;