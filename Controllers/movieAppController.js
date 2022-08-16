// let connection = require('../Config/database');
const movie = require('../Models/models')
const users={

    getAll:async function(req,res){
        const users = await movie.find({});
        console.log(users);
        res.send(users)

    },
    addMovie:async function(req,res){

        let date = new Date(req.body.ReleaseDate);

        let addMovie=new movie({
            MovieName:req.body.MovieName,
            Rating:req.body.Rating,
            Cast:req.body.Cast,
            Genre:req.body.Genre,
            ReleaseDate:date

        })
        addMovie.save(function(err){
            if(!err){
                res.send("product created succesfully")
            }
            else{
                res.send(err)
            }
        })

    },
    updateMovie:async function(req,res){
        const users = await movie.find({});
        console.log(users);
        res.send(users)

    },
    deleteMovie:async function(req,res){
        const users = await movie.find({});
        console.log(users);
        res.send(users)

    },
}
module.exports = users;