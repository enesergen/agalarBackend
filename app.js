const express = require("express");
const { json } = require("express/lib/response");
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
app.get("/allNews", async(req, res) => {

    try {
        const allNews = await pool.query("select ID,HEADER,SHORT from News");

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
app.get("/allNews/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const oneNews = await pool.query("select * from News where id=$1", [id]);
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

app.put("/allNews/:id", async(req, res) => {
    const { id } = req.params;
    const { header, short, body } = req.body;

    try {
        const updateNews = await pool.query("update News set header = $1 , short = $2 ,body = $3 where id = $4", [header, short, body, id, ]);
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

app.delete("/allNews/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const deleteNews = await pool.query("delete  from news where id=$1", [id]);
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

//*************************Activity*************************
//Create Activity
app.post("/addActivity", async(req, res) => {
    try {
        const { header, short, body } = req.body;
        console.log(header);
        const newnews = await pool.query("INSERT INTO activities (header,short,body) values($1,$2,$3) RETURNING *", [header, short, body]);
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

//get all Activities
app.get("/allActivities", async(req, res) => {
    try {
        const allActivities = await pool.query("select ID,HEADER,SHORT from Activities");
        return res.json({
            result: true,
            data: allActivities.rows
        });
    } catch (error) {
        res.json({
            result: false,
            data: []
        });
        console.log(error.message)
    }
});

//get one Activity
app.get("/allActivities/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const oneActivity = await pool.query("select * from Activities where id=$1", [id]);
        return res.json({
            result: true,
            data: oneActivity.rows[0]
        });
    } catch (error) {
        res.json({
            result: false,
            data: []
        });
        console.log(error.message)
    }
});

//update Activity

app.put("/allActivities/:id", async(req, res) => {
    const { id } = req.params;
    const { header, short, body } = req.body;

    try {
        const updateActivity = await pool.query("update Activities set header = $1 , short = $2 ,body = $3 where id = $4", [header, short, body, id, ]);
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

// delete Activity

app.delete("/allActivities/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const deleteActivity = await pool.query("delete from Activities where id=$1", [id]);
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
//*************************Administration*************************
//add
app.post("/addAdministration", async(req, res) => {
    try {
        const { degree, name, body } = req.body;
        const newAdministration = await pool.query("insert into administration (degree,name,body) values($1,$2,$3) returning*", [degree, name, body]);
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
app.get("/administration", async(req, res) => {
    try {
        const administration = await pool.query("select * from administration");
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
app.put("/administration/:id", async(req, res) => {
    const { id } = req.params;
    const { degree, name, body } = req.body;
    try {
        const updateAdmisintration = await pool.query("update administration set degree=$1, name=$2,body=$3 where id=$4", [degree, name, body, id]);
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
app.delete("/administration/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const deleteAdministration = await pool.query("delete from administration where id=$1", [id]);
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



//*************************AdministrativeUnit*************************
//add
app.post("/addAdministrativeUnits", async(req, res) => {
    try {
        const { name, body } = req.body;
        const newAdministrativeUnit = await pool.query("insert into AdministrativeUnits (name,body) values($1,$2) returning*", [name, body]);
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
app.get("/administrativeUnits", async(req, res) => {
    try {
        const administrativeUnits = await pool.query("select * from administrativeUnits");
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
app.put("/administrativeUnits/:id", async(req, res) => {
    const { id } = req.params;
    const { name, body } = req.body;
    try {
        const updateAdmisintration = await pool.query("update AdministrativeUnits set name=$1, body=$2 where id=$3", [name, body, id]);
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
app.delete("/administrativeUnits/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const deleteAdministration = await pool.query("delete from AdministrativeUnits where id=$1", [id]);
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

//*************************Lecturers*************************
//add
app.put("/addLecturer", async(req, res) => {
    try {
        const { degree, name, body } = req.body;
        const newLecturer = await pool.query("insert into lecturers (degree,name,body) values($1,$2,$3) returning *", [degree, name, body]);
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

//get
app.get("/lecturers", async(req, res) => {
    try {
        const lecturers = await pool.query("select * from lecturers");
        return res.json({
            result: true,
            data: lecturers.rows
        });
    } catch (error) {
        console.log(error.message)
        return res.json({
            result: false,
            data: []
        });
    }
});
//get one
app.get("/lecturers/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const oneLecturer = await pool.query("select * from lecturers where id=$1", [id]);
        return res.json({
            result: true,
            data: oneLecturer.rows[0]
        });
    } catch (error) {
        console.log(error.message)
        return res.json({
            result: false,
            data: []
        });

    }
});

//delete
app.delete("/lecturers/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteLecturer = await pool.query("delete from lecturers where id=$1", [id]);
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

//update 
app.put("/lecturer/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { degree, name, body } = req.body;
        const updateLecturer = await pool.query("update lecturers set degree=$1, name=$2, body=$3, where id=$4", [degree, name, body, id]);
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
//*************************Canteen*************************
//add product
app.post("/addCanteenProduct", async(req, res) => {
    try {
        const { brand, name, price } = req.body;
        const addProduct = await pool.query("insert into canteen (brand,name,price) values($1,$2,$3) returning*", [brand, name, price]);
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
app.get("/canteen", async(req, res) => {
    try {
        const canteen = await pool.query("select * from canteen");
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
app.put("/canteen/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { brand, name, price } = req.body;
        const updateProduct = await pool.query("update canteen set brand=$1, name=$2,price=$3 where id=$4", [brand, name, price, id]);
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
app.delete("/canteen/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const deleteProduct = await pool.query("delete from canteen where id=$1", [id]);
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
//*************************Calendar*************************
//add event
app.post("/addCalendar", async(req, res) => {
    try {
        //date format must be like yyyy-mm-dd  
        const { name, description, date } = req.body;
        const addCalendar = await pool.query("insert into calendar (name,description,date) value($1,$2,$3) returning *");
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
app.get("/calendar", async(req, res) => {
    try {
        const calendar = await pool.query("select * from calendar");
        return res.json({
            result: true,
            data: calendar.rows
        });
    } catch (error) {
        console.log(error.message);
        return res.json({
            result: false,
            data: calendar.rows
        });
    }

});
//get one date
app.get("/calendar/:date", async(req, res) => {
    try {
        const { date } = req.params;
        const onedate = await pool.query("select * from calendar where date=$1", [date]);
        return res.json({
            result: true,
            data: onedate.rows[0]
        });

    } catch (error) {
        console.log(error.message);
        return res.json({
            result: false,
            data: []
        });
    }
});

//delete event
app.delete("/calendar/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteEvent = await pool.query("delete from calendar where id=$1", [id]);
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
//*************************Campus*************************
//add
app.post("/addCampus", async(req, res) => {
    try {
        const { name, location } = req.body;
        const addCampus = await pool.query("insert into campuses (name,location) values($1,$2) returning *", [name, location]);
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

app.get("/campuses", async(req, res) => {
    try {
        const allCampuses = await pool.query("select * from campuses");
        return res.json({ result: true, data: allCampuses.rows });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }

});

//delete
app.delete("/campuses/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteCampus = await pool.query("delete from campuses where id=$1", [id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });

    }
});
//update 
app.put("/campuses/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { name, location } = req.body;
        const updateCampus = await pool.query("update campuses set name=$1, location=$2 where id=$3", [name, location, id]);
        return res.json({ result: true, data: [] });

    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });

    }
});
//*************************Faculty*************************
//add
app.post("/addFaculty", async(req, res) => {
    try {
        //cid campus id
        const { cid, name, location } = req.body;
        const addFaculty = await pool.query("insert into faculties (cid,name,location) values($1,$2,$3) returning *", [cid, name, location]);
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

//get all faculty from the campus
//cid is campus id from campus table
app.get("/faculties/:cid", async(req, res) => {
    try {
        const { cid } = req.params;
        const allFaculties = await pool.query("select * from faculties where cid=$1", [cid]);
        return res.json({ result: true, data: allFaculties.rows });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});
//delete
app.delete("/faculties/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteFaculty = await pool.query("delete from faculties where id=$1", [id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});
//update
app.put("/falucties/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { cid, name, location } = req.body;
        const updateFaculty = await pool.query("update faculties set cid=$1, name=$2, location=$3 where id=$4", [cid, name, location, id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//*************************Department*************************
//add 
app.post("/addDepartment", async(req, res) => {
    try {
        //fid faculty id
        const { fid, name, location } = req.body;
        const addDepartment = await pool.query("insert into departments (fid,name,location) values($1,$2,$3) returning *", [fid, name, location]);
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

//get
//fid is faculty id
app.get("/departments/:fid", async(req, res) => {
    try {
        const { fid } = req.params;
        const allDepartments = await pool.query("select * from departments where fid=$1", [fid]);
        return res.json({ result: true, data: allDepartments.rows });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//update
app.put("/departments/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { fid, name, location } = req.body;
        const updateDepartment = await pool.query("update departments set fid=$1, name=$2, location=$3 where id=$4", [fid, name, location, id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});
//delete
app.delete("/departments/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteDepartment = await pool.query("delete from departments where id=$1", [id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//*************************INDEX-PAGE-SLIDE*************************
//GET all index page slides
app.get("/indexSlides", async(req, res) => {
    try {
        const slides = await pool.query("select * from slides");
        return res.json({ result: true, data: slides.rows });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//add slide
app.post("/addSlide", async(req, res) => {
    try {
        const { url, slideOrder } = req.body;
        const addSlide = await pool.query("inser into slides (url,slideorder) values($1,$2) returning *", [url, slideOrder]);
        return res.json({ result: true, data: [] });

    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//delete slide
app.delete("/indexSlides/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteSlide = await pool.query("delete from slides where id=$1", [id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//update slide
app.put("indexSlides/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { url, slideOrder } = req.body;
        const updateSlide = await pool.query("update slides set url=$1, slideorder=$2 where id=$3", [url, slideOrder, id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });

    }
});


//*************************Faculty-PAGE-SLIDE*************************
//add faculty slide
app.post("/addFacultySlide", async(req, res) => {
    try {
        const { fid, url, slideOrder } = req.body;
        const addFacultySlide = await pool.query("inser into facultyslides (fid,url,slideorder) values($1,$2,$3) returning *", [fid, url, slideOrder]);
        return res.json({ result: true, data: [] });

    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});
//get all faculty slides
app.get("/facultySlides/:fid", async(req, res) => {
    try {
        const { fid } = req.params;
        const FacultySlides = await pool.query("select * from facultyslides where fid=$1", [fid]);
        return res.json({ result: true, data: FacultySlides.rows });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//delete
app.delete("/facultySlides/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteFacultySlide = await pool.query("delete from facultyslides where id=$1", [id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });
    }
});

//update 
app.put("facultySlides/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { fid, url, slideOrder } = req.body;
        const updateSlide = await pool.query("update facultyslides set fid=$1, url=$2, slideorder=$3 where id=$4", [fid, url, slideOrder, id]);
        return res.json({ result: true, data: [] });
    } catch (error) {
        console.log(error.message);
        return res.json({ result: false, data: [] });

    }
});

app.listen("3000", () => {
    console.log("Server çalışıyor.")
});