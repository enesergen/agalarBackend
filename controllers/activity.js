const router = require("express").Router();
const db = require("../config/db");

//Create Activity
router.post("/", async (req, res) => {
    try {
        const { header, short, body } = req.body;
        const newnews = await db.query("INSERT INTO activities (header,short,body) values($1,$2,$3) RETURNING *", [header, short, body]);
        return res.json({
            result: true,
            data: []
        });

    } catch (error) {
        res.json({
            result: false,
            data: []
        });
        console.log(error.message);
    }
});

//get all Activities
router.get("/", async (req, res) => {
    try {
        const allActivities = await db.query("select ID,HEADER,SHORT from Activities");
        return res.json({
            result: true,
            data: allActivities.rows
        });
    } catch (error) {
        res.json({
            result: false,
            data: []
        });
        console.log(error.message)
    }
});

//get one Activity
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const oneActivity = await db.query("select * from Activities where id=$1", [id]);
        return res.json({
            result: true,
            data: oneActivity.rows[0]
        });
    } catch (error) {
        res.json({
            result: false,
            data: []
        });
        console.log(error.message)
    }
});

//update Activity
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { header, short, body } = req.body;

    try {
        const updateActivity = await db.query("update Activities set header = $1 , short = $2 ,body = $3 where id = $4", [header, short, body, id,]);
        return res.json({
            result: true,
            data: []
        });
    } catch (error) {
        res.json({
            result: false,
            data: []
        });
        console.log(error.message);
    }
});

// delete Activity
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deleteActivity = await db.query("delete from Activities where id=$1", [id]);
        return res.json({
            result: true,
            data: []
        });
    } catch (error) {
        res.json({
            result: false,
            data: []
        });
        console.log(error.message);
    }
});

module.exports = router;