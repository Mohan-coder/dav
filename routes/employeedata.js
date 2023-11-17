const express = require("express");
const router = express.Router();
const employecontroller = require("../controllers/employecontroller");
const getemployee = require('../controllers/getemployee');
const upload = require("../config/multerconfig");

router.post("/createemployee", upload.fields([
  { name: "education_docs1", maxCount: 1 },
  { name: "education_docs2", maxCount: 1 },
  { name: "pan_card", maxCount: 1 },
  { name: "adhar_card", maxCount: 1 },
  { name: "profile_photo", maxCount: 1 },
]), employecontroller.createemployee);

router.get("/getemployeedata", getemployee.getemployeedata);
module.exports = router;
router.get("/getemployeedata/:id", getemployee.getemployeefulldata);
module.exports = router;
router.post("/testemp", employecontroller.testapi);
module.exports = router;
