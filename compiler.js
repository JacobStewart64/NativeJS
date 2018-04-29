const util = require('util')
const fs = require('fs')
const esprima = require('esprima')

const jscode = fs.readFileSync('./practice.js').toString()

const verbose = (parse) => {
    return util.inspect(parse, {depth: null})
}

//we need to parse each statement
//how bout use a durned lib lol
const parse = esprima.parseScript(jscode)
let gencode = "";

parse.body.forEach((statement) => {
    if (statement.type === 'VariableDeclaration') {
        statement.declarations.forEach((dec) => {
            if (dec.type === 'VariableDeclarator') {
                if (dec.init.type === 'Literal') {
                    if (typeof dec.init.value === 'string') {
                        gencode += 'string '+dec.id.name+' = "'+dec.init.value+'";\n';
                    }                    
                }
            }
        })
    }
    else if (statement.type === 'ExpressionStatement') {

    }
})

console.log(gencode);