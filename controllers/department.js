const router = require("express").Router();
const db = require("../config/db");

//add
router.post("/", async (req, res) => {
    try {
        //fid faculty id
        const { fid, name, location } = req.body;
        const addDepartment = await db.query("insert into departments (fid,name,location) values($1,$2,$3) returning *", [fid, name, location]);
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
        const allDepartments = await db.query("select * from departments");
        return res.json({ result: true, data: allDepartments.rows });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//get by fid
router.get("/:fid", async (req, res) => {
    try {
        const { fid } = req.params;
        const allDepartments = await db.query("select * from departments where fid=$1", [fid]);
        return res.json({ result: true, data: allDepartments.rows });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//update
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { fid, name, location } = req.body;
        const updateDepartment = await db.query("update departments set fid=$1, name=$2, location=$3 where id=$4", [fid, name, location, id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});
//delete
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteDepartment = await db.query("delete from departments where id=$1", [id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

module.exports = router;