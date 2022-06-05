const router = require("express").Router();
const db = require("../config/db");

//add
router.post("/", async (req, res) => {
    try {
        //cid campus id
        const { cid, name, location } = req.body;
        const addFaculty = await db.query("insert into faculty (cid,name,location) values($1,$2,$3) returning *", [cid, name, location]);
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
        const allFaculties = await db.query("select * from faculty");
        return res.json({ result: true, data: allFaculties.rows });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

// get by id
router.get("/:cid", async (req, res) => {
    try {
        const { cid } = req.params;
        const allFaculties = await db.query("select * from faculty where cid=$1", [cid]);
        return res.json({ result: true, data: allFaculties.rows });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//delete
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteFaculty = await db.query("delete from faculty where id=$1", [id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//update
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { cid, name, location } = req.body;
        const updateFaculty = await db.query("update faculty set cid=$1, name=$2, location=$3 where id=$4", [cid, name, location, id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

module.exports = router;