const router = require("express").Router();
const db = require("../config/db");

//add
router.post("/", async (req, res) => {
    try {
        //date format must be like yyyy-mm-dd  
        const { name, description, date } = req.body;
        const addCalendar = await db.query("insert into calendar (name,description,date) value($1,$2,$3) returning *");
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

//get all
router.get("/", async (req, res) => {
    try {
        const calendar = await db.query("select * from calendar");
        return res.json({
            result: true,
            data: calendar.rows
        });
    } catch (error) {
        console.log(error.message);
        return res.json({
            result: false,
            data: calendar.rows
        });
    }
});

//get one date
router.get("/:date", async (req, res) => {
    try {
        const { date } = req.params;
        const onedate = await db.query("select * from calendar where date=$1", [date]);
        return res.json({
            result: true,
            data: onedate.rows[0]
        });

    } catch (error) {
        console.log(error.message);
        return res.json({
            result: false,
            data: []
        });
    }
});

//delete event
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteEvent = await db.query("delete from calendar where id=$1", [id]);
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