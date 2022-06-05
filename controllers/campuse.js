const router = require("express").Router();
const db = require("../config/db");

//add
router.post("/", async (req, res) => {
    try {
        const { name, location } = req.body;
        const addCampus = await db.query("insert into campuses (name,location) values($1,$2) returning *", [name, location]);
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

//get all campuses
router.get("/", async (req, res) => {
    try {
        const allCampuses = await db.query("select * from campuses");
        return res.json({ result: true, data: allCampuses.rows });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }

});

//delete
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCampus = await db.query("delete from campuses where id=$1", [id]);
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
        const { name, location } = req.body;
        const updateCampus = await db.query("update campuses set name=$1, location=$2 where id=$3", [name, location, id]);
        return res.json({ result: true, data: [] });

    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });

    }
});

module.exports = router;