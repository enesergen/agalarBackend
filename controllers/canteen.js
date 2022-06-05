const router = require("express").Router();
const db = require("../config/db");

//add
router.post("/", async (req, res) => {
    try {
        const { brand, name, price } = req.body;
        const addProduct = await db.query("insert into canteen (brand,name,price) values($1,$2,$3) returning*", [brand, name, price]);
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
        const canteen = await db.query("select * from canteen");
        return res.json({
            result: true,
            data: canteen.rows
        });
    } catch (error) {
        console.log(error.message)
        return res.json({
            result: false,
            data: []
        });
    }
});

//update
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { brand, name, price } = req.body;
        const updateProduct = await db.query("update canteen set brand=$1, name=$2,price=$3 where id=$4", [brand, name, price, id]);
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

//delete
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deleteProduct = await db.query("delete from canteen where id=$1", [id]);
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