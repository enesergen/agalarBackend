const router = require("express").Router();
const db = require("../config/db");

//add
router.post("/", async (req, res) => {
    try {
        const { fid, url, slideOrder } = req.body;
        const slides = await db.query("insert into departmentslides (fid,url,slideorder) values($1,$2,$3) returning *", [fid, url, slideOrder]);
        return res.json({ result: true, data: [] });

    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//get department slides by did
router.get("/:did", async (req, res) => {
    try {
        const { did } = req.params;
        const slides = await db.query("select * from departmentslides where did=$1 ORDER BY slideorder", [did]);
        return res.json({ result: true, data: slides.rows });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//delete
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const slides = await db.query("delete from departmentslides where id=$1", [id]);
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
        const slides = await db.query("update departmentslides set fid=$1, url=$2, slideorder=$3 where id=$4", [fid, url, slideOrder, id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });

    }
});

module.exports = router;