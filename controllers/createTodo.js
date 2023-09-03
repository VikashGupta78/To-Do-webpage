const todo = require("../models/ToDo");

exports.createTodo = async(req, res) => {
    try{
        const {title, description} = req.body;
        const response = await Todo.create({title, description});

        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Entry created successfully'
            }
        );
    }
    catch(err){
        console.error(error);
        console.log(err);
        res.status(500)
        .json(
            {
                success: false,
                data: 'Internal server error',
                message: err.message
            }
        )
    }
}