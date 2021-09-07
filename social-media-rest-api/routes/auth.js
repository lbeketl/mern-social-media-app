const router = require("express").Router();
const User = require("../models/User");


//REGISTER
router.get("/register", async (req, res) => {
    console.log('Hellow')

   try {
    const user = await new User({
        username: "john",
        email: "john@gmail.com",
        password: "123456"
    })

    await user.save();
    res.send("ok!")
   }
   catch(err){
       console.log(err)
   }
})

module.exports = router;