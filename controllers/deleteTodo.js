const Todo = require("../models/ToDo");

exports.deleteTodo = async(req, res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;

        await Todo.findByIdAndDelete({_id: id});

        res.status(200)
        .json(
            {
                success: true,
                message: 'toDo deleted. '
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