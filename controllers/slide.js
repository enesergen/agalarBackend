const router = require("express").Router();
const db = require("../config/db");

//get all
router.get("/", async (req, res) => {
    try {
        const slides = await db.query("select * from slides ORDER BY slideorder");
        return res.json({ result: true, data: slides.rows });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//add slide
router.post("/", async (req, res) => {
    try {
        const { url, slideOrder } = req.body;
        const addSlide = await db.query("inser into slides (url,slideorder) values($1,$2) returning *", [url, slideOrder]);
        return res.json({ result: true, data: [] });

    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//delete slide
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteSlide = await db.query("delete from slides where id=$1", [id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//update slide
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { url, slideOrder } = req.body;
        const updateSlide = await db.query("update slides set url=$1, slideorder=$2 where id=$3", [url, slideOrder, id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });

    }
});

module.exports = router;