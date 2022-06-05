const router = require("express").Router();
const db = require("../config/db");

// add
router.post("/", async (req, res) => {
    try {
        const { name, body } = req.body;
        const newAdministrativeUnit = await db.query("insert into AdministrativeUnits (name,body) values($1,$2) returning*", [name, body]);
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

//get
router.get("/", async (req, res) => {
    try {
        const administrativeUnits = await db.query("select * from administrativeUnits");
        return res.json({
            result: true,
            data: administrativeUnits.rows
        });
    } catch (error) {
        res.json({
            result: false,
            data: administrativeUnit.rows
        });
        console.log(error.message)
    }
});

//update
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, body } = req.body;
    try {
        const updateAdmisintration = await db.query("update AdministrativeUnits set name=$1, body=$2 where id=$3", [name, body, id]);
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
        const deleteAdministration = await db.query("delete from AdministrativeUnits where id=$1", [id]);
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