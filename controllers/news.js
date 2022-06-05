const router = require("express").Router();
const db = require("../config/db");

// add news
router.post("/", async (req, res) => {

    try {
        const { header, short, body } = req.body;

        const newnews = await db.query("INSERT INTO News (header,short,body) values($1,$2,$3) RETURNING *", [header, short, body]);
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

//get all news
router.get("/", async (req, res) => {

    try {
        const allNews = await db.query("select ID,HEADER,SHORT from News");

        return res.json({
            result: true,
            data: allNews.rows
        });


    } catch (error) {
        res.json({
            result: false,
            data: []
        });
        console.log(error.message)
    }
});

//get one news
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const oneNews = await db.query("select * from News where id=$1", [id]);
        return res.json({
            result: true,
            data: oneNews.rows[0]
        });

    } catch (error) {
        res.json({
            result: false,
            data: []
        });
        console.log(error.message)
    }
});

//update news
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { header, short, body } = req.body;

    try {
        const updateNews = await db.query("update News set header = $1 , short = $2 ,body = $3 where id = $4", [header, short, body, id,]);
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

// delete news
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deleteNews = await db.query("delete  from news where id=$1", [id]);
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