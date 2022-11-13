import * as path from 'path'
import * as ts from 'typescript'
import { CreateProgram } from 'typescript'

const program  = ts.createProgram({
    options :{
        target: ts.ScriptTarget.ESNext,
        module : ts.ModuleKind.CommonJS
    },
    rootNames:[
        path.join(__dirname,'..','exercises','lessons',"src",'index.ts')
    ]
})

export const nonDeclFiles = program
    .getSourceFiles()
    .filter(sf => !sf.isDeclarationFile)
export const checker = program.getTypeChecker();