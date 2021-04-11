import validator from 'validator'

const inputValidator = {
    name: {
        required: (value) => {
            if (value === '') {
                return 'Поле должно быть заполнено'
            }
        return ''
        },
},
    email: {
        isEmail: (value) => {
            if (!validator.isEmail(value)) {
                return 'Некорректный email'
            }
        return ''
        },
    },
}

const getErrorText = (error) => {
    const field = Object.keys(error).find((item) => {
        return error[item] !== ''
    })
    return error[field]
}

const checkValid = (name, value) => {
    return Object.keys(inputValidator[name]).map((key) => {    
        const result = inputValidator[name][key](value)
        return { [key] : result }
    }).reduce((pr,item) => ({...pr, ...item}),{})
}

export {inputValidator, getErrorText, checkValid}