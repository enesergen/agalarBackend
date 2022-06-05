const router = require("express").Router();
const db = require("../config/db");

//add
router.post("/", async (req, res) => {
    try {
        const { degree, name, body } = req.body;
        const newAdministration = await db.query("insert into administration (degree,name,body) values($1,$2,$3) returning*", [degree, name, body]);
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

//get all
router.get("/", async (req, res) => {
    try {
        const administration = await db.query("select * from administration");
        return res.json({
            result: true,
            data: []
        });
    } catch (error) {
        res.json({
            result: false,
            data: []
        });
        console.log(error.message)
    }
});

//update
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { degree, name, body } = req.body;
    try {
        const updateAdmisintration = await db.query("update administration set degree=$1, name=$2,body=$3 where id=$4", [degree, name, body, id]);
        return json({
            result: true,
            data: []
        });
    } catch (error) {
        json({
            result: false,
            data: []
        });
        console.log(error.message)

    }
});

//delete
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deleteAdministration = await db.query("delete from administration where id=$1", [id]);
        return res.json({
            result: true,
            data: []
        });
    } catch (error) {
        res.json({
            result: false,
            data: []
        });
        console.log(error.message)
    }
});

module.exports = router;