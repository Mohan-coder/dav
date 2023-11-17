const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }, 
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    date_of_joining: {
        type: String,
        required: true
    },
    education_level_1: {
        type: String,
        required: true
    },
    education_docs1: {
        type: Object,
        required: true
    },
    education_level_2: {
        type: String,
        required: true
    },
    education_docs2: {
        type: Object,
        required: true
    },
    pan_number: {
        type: String,
        required: true
    },
    pan_card: {
        type: Object,
        required: true
    },
    adhar_number: {
        type: String,
        required: true
    },  
    adhar_card: {
        type: Object,
        required: true
    }, 
    profile_photo: {
        type: Object,
        required: true
    }, 
    marital_status: {
        type: String,
        required: true
    },
    spouse_name: {
        type: String,
    },
    marriage_date: {
        type: String,
    },
    gender_status: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    bank_name: {
        type: String,
        required: true
    },
    bank_holder_name: {
        type: String,
        required: true
    },
    bank_account_number: {
        type: String,
        required: true
    },
    IFSC_code: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Employedata", EmployeeSchema);