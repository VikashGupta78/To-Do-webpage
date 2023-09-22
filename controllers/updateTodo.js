const Todo = require("../models/ToDo");

exports.updateTodoById = async(req, res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()}
            );

        if(!todo){
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
                data: todo,
                message: 'data with ${id} is sucessfully updated. '
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