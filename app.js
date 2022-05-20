const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json());
//*************************News*************************
//create news
app.post("/addNews", async(req, res) => {
    try {
        const { header, short, body } = req.body;
        console.log(header);
        const newnews = await pool.query("INSERT INTO News (header,short,body) values($1,$2,$3) RETURNING *", [header, short, body]);
        res.json("News was added...");

    } catch (error) {
        console.log(error.message);
    }
});

//get all news
app.get("/allNews", async(req, res) => {

    try {
        const allNews = await pool.query("select * from News");
        res.json(allNews.rows);
    } catch (error) {
        console.log(error.message)
    }
});

//get one news
app.get("/allNews/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const oneNews = await pool.query("select * from News where id=$1", [id]);
        res.json(oneNews.rows[0]);
    } catch (error) {
        console.log(error.message)
    }
});

//update news

app.put("/allNews/:id", async(req, res) => {
    const { id } = req.params;
    const { header, short, body } = req.body;

    try {
        const updateNews = await pool.query("update News set header = $1 , short = $2 ,body = $3 where id = $4", [header, short, body, id, ]);
        res.json("News upadating is successfull");
    } catch (error) {
        console.log(error.message);
    }
});

// delete news

app.delete("/allNews/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const deleteNews = await pool.query("delete  from news where id=$1", [id]);
        res.json("News deleting is successfull");
    } catch (error) {
        console.log(error.message);
    }
});

//*************************Activity*************************
//Create Activity
app.post("/addActivity", async(req, res) => {
    try {
        const { header, short, body } = req.body;
        console.log(header);
        const newnews = await pool.query("INSERT INTO activities (header,short,body) values($1,$2,$3) RETURNING *", [header, short, body]);
        res.json("Activity was added...");

    } catch (error) {
        console.log(error.message);
    }
});

//get all Activities
app.get("/allActivities", async(req, res) => {
    try {
        const allActivities = await pool.query("select * from Activities");
        res.json(allActivities.rows);
    } catch (error) {
        console.log(error.message)
    }
});

//get one Activity
app.get("/allActivities/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const oneActivity = await pool.query("select * from Activities where id=$1", [id]);
        res.json(oneActivity.rows[0]);
    } catch (error) {
        console.log(error.message)
    }
});

//update Activity

app.put("/allActivities/:id", async(req, res) => {
    const { id } = req.params;
    const { header, short, body } = req.body;

    try {
        const updateActivity = await pool.query("update Activities set header = $1 , short = $2 ,body = $3 where id = $4", [header, short, body, id, ]);
        res.json("Activity upadating is successfull");
    } catch (error) {
        console.log(error.message);
    }
});

// delete Activity

app.delete("/allActivities/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const deleteActivity = await pool.query("delete from Activities where id=$1", [id]);
        res.json("Activity deleting is successfull");
    } catch (error) {
        console.log(error.message);
    }
});
//*************************Administration*************************
app.get("/administration", async(req, res) => {
    try {
        const administration = await pool.query("select * from administration");
        res.json(administration.rows);
    } catch (error) {
        console.log(error.message)
    }
});

//*************************AdministrativeUnit*************************
app.get("/administrativeUnits", async(req, res) => {
    try {
        const administrativeUnit = await pool.query("select * from administrativeUnits");
        res.json(administrativeUnit.rows);
    } catch (error) {
        console.log(error.message)
    }
});

//*************************Lecturers*************************
app.get("/lecturers", async(req, res) => {
    try {
        const lecturers = await pool.query("select * from lecturers");
        res.json(lecturers.rows);
    } catch (error) {
        console.log(error.message)
    }
});

app.get("/lecturers/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const oneLecturer = await pool.query("select * from lecturers where id=$1", [id]);
        res.json(oneLecturer.rows[0]);
    } catch (error) {
        console.log(error.message)
    }
});
//*************************Canteen*************************
app.get("/canteen", async(req, res) => {
    try {
        const canteen = await pool.query("select * from canteen");
        res.json(canteen.rows);
    } catch (error) {
        console.log(error.message)
    }
});







app.listen("3000", () => {
    console.log("Server çalışıyor.")
});