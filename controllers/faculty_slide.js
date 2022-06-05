const router = require("express").Router();
const db = require("../config/db");

//add
router.post("/", async (req, res) => {
    try {
        const { fid, url, slideOrder } = req.body;
        const addFacultySlide = await db.query("insert into faculty_slides (fid,url,slideorder) values($1,$2,$3) returning *", [fid, url, slideOrder]);
        return res.json({ result: true, data: [] });

    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//get all faculty slides
router.get("/:fid", async (req, res) => {
    try {
        const { fid } = req.params;
        const FacultySlides = await db.query("select * from faculty_slides where fid=$1 ORDER BY slideorder", [fid]);
        return res.json({ result: true, data: FacultySlides.rows });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//delete
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteFacultySlide = await db.query("delete from faculty_slides where id=$1", [id]);
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
        const { fid, url, slideOrder } = req.body;
        const updateSlide = await db.query("update faculty_slides set fid=$1, url=$2, slideorder=$3 where id=$4", [fid, url, slideOrder, id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });

    }
});

module.exports = router;