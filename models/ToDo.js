const mongoose = require("mongoose");

const todoSchema = new mongoose.schema(
    {
        title:{
            type: String,
            required: true,
            maxLength: 50,
        }

    }
)