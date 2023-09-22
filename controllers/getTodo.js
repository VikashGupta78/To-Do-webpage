const todo = require("../models/ToDo");

exports.getTodo = async(req, res) => {
    try{
        const todos = await todo.find({});

        res.status(200)
        .json(
            {
                success: true,
                data: todos,
                message: 'Entire todo data is fetched'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success: false,
                data: 'server error',
                message: err.message
            }
        )
    }
}

exports.getTodoById = async(req, res) => {
    try{
        const id = req.params.id;
        const singleTodo = await todo.findById({_id: id});

        if(!singleTodo){
            return res.status(404)
            .json({
                sucess: false,
                message: "No data present with given id"
            })
        }

        res.status(200)
        .json(
            {
                success: true,
                data: singleTodo,
                message: 'data with ${id} is sucessfully fetched. '
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success: false,
                data: 'server error',
                message: err.message
            }
        )
    }
}