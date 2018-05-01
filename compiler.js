const util = require('util')
const fs = require('fs')
const esprima = require('esprima')

const jscode = fs.readFileSync('./generate.js').toString()

const verbose = (parse) => {
    return util.inspect(parse, {depth: null})
}

//67 distinct "words/phrases"
class SyntaxTreeTraverser {
    constructor() {
        this.Program = (body) => {
            //sourceType: 'module';
            //body: ModuleItem[];
            //sourceType: 'script';
            //body: StatementListItem[];
            console.log('START Program')
            body.forEach((node) => {
                console.log('BEGIN STATEMENT::')
                this[node.type](node)
                console.log('::END STATEMENT')
            })
            console.log('END Program')
        }
        this.ImportDeclaration = (node) => {
            //specifiers: ImportSpecifier[];
            //source: Literal;
            console.log('START ImportDeclaration')
            node.specifiers.forEach((spec) => {
                this[spec.type](spec)
            })
            this[node.source.type](node.source)
            console.log('END ImportDeclaration')
        }
        this.ImportSpecifier = (node) => {
            //    local: Identifier;
            //    imported?: Identifier;
            console.log('START ImportSpecifier')
            this[node.local.type](node.local)
            if (node.imported) {
                this[node.imported.type](node.imported)
            }
            else {
                //imported was undefined
            }
            console.log('END ImportSpecifier')
        }
        this.ImportDefaultSpecifier = (node) => {
            //    local: Identifier;
            //    imported?: Identifier;
            console.log('START ImportDefaultSpecifier')
            this[node.local.type](node.local)
            if (node.imported) {
                this[node.imported.type](node.imported)
            }
            else {
                //imported was undefined
            }
            console.log('END ImportDefaultSpecifier')
        }
        this.ImportNamespaceSpecifier = (node) => {
            //    local: Identifier;
            //    imported?: Identifier;
            console.log('START ImportNamespaceSpecifier')
            this[node.local.type](node.local)
            if (node.imported) {
                this[node.imported.type](node.imported)
            }
            else {
                //imported was undefined
            }
            console.log('END ImportNamespaceSpecifier')
        }
        this.ExportAllDeclaration = (node) => {
            //source: Literal;
            console.log('START ExportAllDeclaration')
            this[node.source.type](node.source)
            console.log('END ExportAllDeclaration')
        }
        
        this.ExportDefaultDeclaration = (node) => {
            //declaration: Identifier | BindingPattern | ClassDeclaration | Expression | FunctionDeclaration;
            console.log('START ExportDefaultDeclaration')
            this[node.declaration.type](node.declaration)
            console.log('END ExportDefaultDeclaration')
        }
        
        this.ExportNamedDeclaration = (node) => {
            //declaration: ClassDeclaration | FunctionDeclaration | VariableDeclaration;
            //specifiers: ExportSpecifier[];
            //source: Literal;
            console.log('START ExportNamedDeclaration')
            this[node.declaration.type](node.declaration)
            node.specifiers.forEach((spec) => {
                this[spec.type](spec)
            })
            this[node.source.type](node.source)
            console.log('END ExportNamedDeclaration')
        }
        this.ExportSpecifier = (node) => {
            //    exported: Identifier;
            //    local: Identifier;
            console.log('START ExportSpecifier')
            this[node.exported.type](node.exported)
            this[node.local.type](node.local)
            console.log('END ExportSpecifier')
        }
        this.ArrayPattern = (node) => {
            //elements: ArrayPatternElement[];
            console.log('START ArrayPattern')
            node.elements.forEach((elem) => {
                this[elem.type](elem)
            })
            console.log('END ArrayPattern')
        }
        this.RestElement = (node) => {
            //argument: Identifier | BindingPattern;
            console.log('START RestElement')
            this[node.argument.type](node.argument)
            console.log('END RestElement')
        }
        this.AssignmentPattern = (node) => {
            //left: Identifier | BindingPattern;
            //right: Expression;
            console.log('START AssignmentPattern')
            this[node.left.type](node.left)
            this[node.right.type](node.right)
            console.log('END AssignmentPattern')
        }
        this.ObjectPattern = (node) => {
            //properties: Property[];
            console.log('START ObjectPattern')
            node.properties.forEach((prop) => {
                this[prop.type](prop)
            })
            console.log('END ObjectPattern')
        }
        this.ThisExpression = (node) => {
            //nothing on me
            console.log('START ThisExpression')
            console.log('END ThisExpression')
        }
        this.Identifier = (node) => {
            //name: string;
            console.log('START Identifier')
            console.log(node.name)
            console.log('END Identifier')
        }
        this.Literal = (node) => {
            //value: boolean | number | string | RegExp | null;
            //raw: string;
            //regex?: { pattern: string, flags: string };
            console.log('START Literal')
            console.log(node.value)
            console.log(node.raw)
            console.log(node.regex)
            console.log('END Literal')
        }
        this.ArrayExpression = (node) => {
            //elements: ArrayExpressionElement[];
            console.log('START ArrayExpression')
            node.elements.forEach((elem) => {
                this[elem.type](elem)
            })
            console.log('END ArrayExpression')
        }
        this.ObjectExpression = (node) => {
            //properties: Property[];
            console.log('START ObjectExpression')
            node.properties.forEach((prop) => {
                this[prop.type](prop)
            })
            console.log('END ObjectExpression')
        }
        this.Property = (node) => {
            //key: Identifier | Literal;
            //computed: boolean;
            //value: AssignmentPattern | Identifier | BindingPattern | FunctionExpression | null;
            //kind: 'get' | 'set' | 'init';
            //method: false;
            //shorthand: boolean;
            console.log('START Property')
            this[node.key.type](node.key)
            console.log(node.computed)
            if (node.value) {
                this[node.value.type](node.value)
            }
            else {
                //value was null
            }
            console.log(node.kind)
            console.log(node.method)
            console.log(node.shorthand)
            console.log('END Property')
        }
        this.FunctionExpression = (node) => {
            //id: Identifier | null;
            //params: FunctionParameter[];
            //body: BlockStatement;
            //generator: boolean;
            //async: boolean;
            //expression: boolean;
            console.log('START FunctionExpression')
            if (node.id) {
                this[node.id.type](node.id)
            }
            else {
                //id was null
            }
            console.log(node.generator)
            console.log(node.async)
            console.log(node.expression)
            node.params.forEach((param) => {
                this[param.type](param)
            })
            this[node.body.type](node.body)
            console.log('END FunctionExpression')
        }
        this.ArrowFunctionExpression = (node) => {
            //id: Identifier | null;
            //params: FunctionParameter[];
            //body: BlockStatement | Expression;
            //generator: boolean;
            //async: boolean;
            //expression: false;
            console.log('START ArrowFunctionExpression')
            if (node.id) {
                this[node.id.type](node.id)
            }
            else {
                //id was null
            }
            console.log(node.generator)
            console.log(node.async)
            console.log(node.expression)
            node.params.forEach((param) => {
                this[param.type](param)
            })
            this[node.body.type](node.body)
            console.log('END ArrowFunctionExpression')
        }
        this.ClassExpression = (node) => {
            //id: Identifier | null;
            //superClass: Identifier | null;
            //body: ClassBody;
            console.log('START ClassExpression')
            if (node.id) {
                this[node.id.type](node.id)
            }
            else {
                //id was null
            }
            if (node.superClass) {
                this[node.superClass.type](node.superClass)
            }
            else {
                //superClass was null
            }
            this[node.body.type](node.body)
            console.log('END ClassExpression')
        }
        this.ClassBody = (node) => {
            //    body: MethodDefinition[];
            console.log('START ClassBody')
            node.body.forEach((bod) => {
                this[bod.type](bod)
            })
            console.log('END ClassBody')
        }
        this.MethodDefinition = (node) => {
            //    key: Expression | null;
            //    computed: boolean;
            //    value: FunctionExpression | null;
            //    kind: 'method' | 'constructor';
            //    static: boolean;
            console.log('START MethodDefinition')
            if (node.key) {
                this[node.key.type](node.key)
            }
            else {
                //key was null
            }
            console.log(node.computed)
            if (node.value) {
                this[node.value.type](node.value)
            }
            else {
                //value was null
            }
            console.log(node.kind)
            console.log(node.static)
            console.log('END MethodDefinition')
        }
        this.TaggedTemplateExpression = (node) => {
            //readonly tag: Expression;
            //readonly quasi: TemplateLiteral;
            console.log('START TaggedTemplateExpression')
            this[node.tag.type](node.tag)
            this[node.quasi.type](node.quasi)
            console.log('END TaggedTemplateExpression')
        }
        this.TemplateElement = (node) => {
            //    value: { cooked: string; raw: string };
            //    tail: boolean;
            console.log('START TemplateElement')
            console.log(node.value)
            console.log(node.tail)
            console.log('END TemplateElement')
        }
        this.TemplateLiteral = (node) => {
            //    quasis: TemplateElement[];
            //    expressions: Expression[];
            console.log('START TemplateLiteral')
            node.quasis.forEach((quas) => {
                this[quas.type](quas)
            })
            node.expressions.forEach((exp) => {
                this[exp.type](exp)
            })
            console.log('END TemplateLiteral')
        }
        this.MemberExpression = (node) => {
            //computed: boolean;
            //object: Expression;
            //property: Expression;
            console.log('START MemberExpression')
            console.log(node.computed)
            this[node.object.type](node.object)
            this[node.property.type](node.property)
            console.log('END MemberExpression')
        }
        this.Super = (node) => {
            //none
            console.log('START Super')
            console.log('END Super')
        }
        this.MetaProperty = (node) => {
            //meta: Identifier;
            //property: Identifier;
            console.log('START MetaProperty')
            this[node.meta.type](node.meta)
            this[node.property.type](node.property)
            console.log('END MetaProperty')
        }
        this.CallExpression = (node) => {
            //callee: Expression | Import;
            //arguments: ArgumentListElement[];
            console.log('START CallExpression')
            this[node.callee.type](node.callee)
            node.arguments.forEach((arg) => {
                this[arg.type](arg)
            })
            console.log('END CallExpression')
        }
        this.NewExpression = (node) => {
            //callee: Expression;
            //arguments: ArgumentListElement[];            
            //type ArgumentListElement = Expression | SpreadElement;
            console.log('START NewExpression')
            this[node.callee.type](node.callee)
            node.arguments.forEach((arg) => {
                this[arg.type](arg)
            })
            console.log('END NewExpression')
        }
        this.Import = (node) => {
            //none
            console.log('START Import')
            console.log('END Import')
        }
        this.SpreadElement = (node) => {
            //    argument: Expression;
            console.log('START SpreadElement')
            this[node.argument.type](node.argument)
            console.log('END SpreadElement')
        }
        this.UpdateExpression = (node) => {
            //operator: '++' | '--';
            //argument: Expression;
            //prefix: boolean;
            console.log('START UpdateExpression')
            console.log(node.operator)
            console.log(node.prefix)
            this[node.argument.type](node.argument)
            console.log('END UpdateExpression')
        }
        this.AwaitExpression = (node) => {
            //argument: Expression;
            console.log('START AwaitExpression')
            this[node.argument.type](node.argument)
            console.log('END AwaitExpression')
        }
        this.UnaryExpression = (node) => {
            //operator: '+' | '-' | '~' | '!' | 'delete' | 'void' | 'typeof';
            //argument: Expression;
            //prefix: true;
            console.log('START UnaryExpression')
            console.log(node.operator)
            console.log(node.prefix)
            this[node.argument.type](node.argument)
            console.log('END UnaryExpression')
        }
        this.BinaryExpression = (node) => {
            //operator: 'instanceof' | 'in' | '+' | '-' | '*' | '/' | '%' | '**' |
            //'|' | '^' | '&' | '==' | '!=' | '===' | '!==' |
            //'<' | '>' | '<=' | '<<' | '>>' | '>>>';
            //left: Expression;
            //right: Expression;
            console.log('START BinaryExpression')
            console.log(node.operator)
            this[node.left.type](node.left)
            this[node.right.type](node.right)
            console.log('END BinaryExpression')
        }
        this.LogicalExpression = (node) => {
            //operator: '||' | '&&';
            //left: Expression;
            //right: Expression;
            console.log('START LogicalExpression')
            console.log(node.operator)
            this[node.left.type](node.left)
            this[node.right.type](node.right)
            console.log('END LogicalExpression')
        }
        this.ConditionalExpression = (node) => {
            //test: Expression;
            //consequent: Statement;
            //alternate: Statement | null;
            console.log('START ConditionalExpression')
            this[node.test.type](node.test)
            this[node.consequent.type](node.consequent)
            if (node.alternate) {
                this[node.alternate.type](node.alternate)
            }
            else {
                //alternate was null
            }
            console.log('END ConditionalExpression')
        }
        this.YieldExpression = (node) => {
            //argument: Expression | null;
            //delegate: boolean;
            console.log('START YieldExpression')
            if (node.argument) {
                this[node.argument.type](node.argument)
            }
            else {
                //argument was null
            }
            console.log(node.delegate)
            console.log('END YieldExpression')
        }
        this.AssignmentExpression = (node) => {
            //operator: '=' | '*=' | '**=' | '/=' | '%=' | '+=' | '-=' |
            //'<<=' | '>>=' | '>>>=' | '&=' | '^=' | '|=';
            //left: Expression;
            //right: Expression;
            console.log('START AssignmentExpression')
            console.log(node.operator)
            this[node.left.type](node.left)
            this[node.right.type](node.right)
            console.log('END AssignmentExpression')
        }
        this.SequenceExpression = (node) => {
            //expressions: Expression[];
            console.log('START SequenceExpression')
            node.expressions.forEach((exp) => {
                this[exp.type](exp)
            })
            console.log('END SequenceExpression')
        }
        this.BlockStatement = (node) => {
            //body: StatementListItem[];
            console.log('START BlockStatement')
            node.body.forEach((statement) => {
                this[statement.type](statement)
            })
            console.log('END BlockStatement')
        }
        this.ExpressionStatement = (node) => {
            //expression: Expression;
            //directive?: string;
            console.log('START ExpressionStatement')
            console.log(node.directive)
            this[node.expression.type](node.expression)
            console.log('END ExpressionStatement')
        }
        
        this.BreakStatement = (node) => {
            //label: Identifier | null;
            console.log('START BreakStatement')
            if (node.label) {
                this[node.label.type](node.label)
            }
            else {
                //label was null
            }
            console.log('END BreakStatement')
        }
        this.ContinueStatement = (node) => {
            //label: Identifier | null;
            console.log('START ContinueStatement')
            if (node.label) {
                this[node.label.type](node.label)
            }
            else {
                //label was null
            }
            console.log('END ContinueStatement')
        }
        this.DebuggerStatement = (node) => {
            //none
            console.log('START DebuggerStatement')
            console.log('END DebuggerStatement')
        }
        this.DoWhileStatement = (node) => {
            //body: Statement;
            //test: Expression;
            console.log('START DoWhileStatement')
            this[node.test.type](node.test)
            this[node.body.type](node.body)
            console.log('END DoWhileStatement')
        }
        this.EmptyStatement = (node) => {
            //none
            console.log('START EmptyStatement')
            console.log('END EmptyStatement')
        }
        this.ForStatement = (node) => {
            //init: Expression | VariableDeclaration | null;
            //test: Expression | null;
            //update: Expression | null;
            //body: Statement;
            console.log('START ForStatement')
            if (node.test) {
                this[node.test.type](node.test)
            }
            else {
                //test was null
            }
            if (node.update) {
                this[node.update.type](node.update)
            }
            else {
                //update was null
            }
            if (node.init) {
                this[node.init.type](node.init)
            }
            else {
                //init was null
            }
            this[node.body.type](node.body)
            console.log('END ForStatement')
        }
        this.ForInStatement = (node) => {
            //left: Expression;
            //right: Expression;
            //body: Statement;
            //each: false;
            console.log('START ForInStatement')
            this[node.left.type](node.left)
            this[node.right.type](node.right)
            //each wut?
            console.log(node.each)
            this[node.body.type](node.body)
            console.log('END ForInStatement')
        }
        this.ForOfStatement = (node) => {
            //left: Expression;
            //right: Expression;
            //body: Statement;
            console.log('START ForOfStatement')
            this[node.left.type](node.left)
            this[node.right.type](node.right)
            this[node.body.type](node.body)
            console.log('END ForOfStatement')
        }
        this.IfStatement = (node) => {
            //test: Expression;
            //consequent: Statement;
            //alternate: Statement | null;
            console.log('START IfStatement')
            this[node.test.type](node.test)
            this[node.consequent.type](node.consequent)
            if (node.alternate) {
                this[node.alternate.type](node.alternate)
            }
            else {
                //alternate was null
            }
            console.log('END IfStatement')       
        }
        this.LabeledStatement = (node) => {
            //label: Identifier;
            //body: Statement;
            console.log('START LabeledStatement')
            this[node.label.type](node.label)
            this[node.body.type](node.body)
            console.log('END LabeledStatement')
        }
        this.ReturnStatement = (node) => {
            //argument: Expression | null;
            console.log('START ReturnStatement')
            if (node.argument) {
                this[node.argument.type](node.argument)
            }
            else {
                //it was null
            }
            console.log('END ReturnStatement')
        }
        this.SwitchStatement = (node) => {
            //discriminant: Expression;
            //cases: SwitchCase[];
            console.log('START SwitchStatement')
            this[node.discriminant.type](node.discriminant)
            node.cases.forEach((c) => {
                this[c.type](c)
            })
            console.log('END SwitchStatement')
        }
        this.SwitchCase = (node) => {
            //    test: Expression | null;
            //    consequent: Statement[];
            console.log('START SwitchCase')
            if (node.test) {
                this[node.test.type](node.test)
            }
            else {
                //test was null
            }
            node.consequent.forEach((cons) => {
                this[cons.type](cons)
            })
            console.log('END SwitchCase')
        }
        this.ThrowStatement = (node) => {
            //argument: Expression;
            console.log('START ThrowStatement')
            this[node.argument.type](node.argument)
            console.log('END ThrowStatement')
        }
        this.TryStatement = (node) => {
            //block: BlockStatement;
            //handler: CatchClause | null;
            //finalizer: BlockStatement | null;
            console.log('START TryStatement')
            this[node.block.type](node.block)
            if (node.handler) {
                this[node.handler.type](node.handler)
            }
            else {
                //handler was null
            }
            if (node.finalizer) {
                this[node.finalizer.type](node.finalizer)
            }
            else {
                //finalizer was null
            }
            console.log('END TryStatement')
        }
        this.CatchClause = (node) => {
            //    param: Identifier | BindingPattern;
            //    body: BlockStatement;
            console.log('START CatchClause')
            this[node.param.type](node.param)
            this[node.body.type](node.body)
            console.log('END CatchClause')
        }
        this.WhileStatement = (node) => {
            //test: Expression;
            //body: Statement;
            console.log('START WhileStatement')
            this[node.test.type](node.test)
            this[node.body.type](node.body)
            console.log('END WhileStatement')
        }
        this.WithStatement = (node) => {
            //object: Expression;
            //body: Statement;
            console.log('START WithStatement')
            this[node.object.type](node.object)
            this[node.body.type](node.body)
            console.log('END WithStatement')
        }
        this.ClassDeclaration = (node) => {
            //id: Identifier | null;
            //superClass: Identifier | null;
            //body: ClassBody;
            console.log('START ClassDeclaration')
            if (node.id) {
                this[node.id.type](node.id)
            }
            else {
                //id was null
            }
            if (node.superClass) {
                this[node.superClass.type](node.superClass)
            }
            else {
                //superClass was null
            }
            this[node.body.type](node.body)
            console.log('END ClassDeclaration')
        }
        this.FunctionDeclaration = (node) => {
            //id: Identifier | null;
            //params: FunctionParameter[];
            //body: BlockStatement;
            //generator: boolean;
            //async: boolean;
            //expression: false;
            console.log('START FunctionDeclaration')
            if (node.id) {
                this[node.id.type](node.id)
            }
            else {
                //id was null
            }
            node.params.forEach((param) => {
                this[param.type](param)
            })
            console.log(node.generator)
            console.log(node.async)
            console.log(node.expression)
            console.log(node.expression)
            this[node.body.type](node.body)
            console.log('END FunctionDeclaration')
        }
        this.VariableDeclaration = (node) => {
            //declarations: VariableDeclarator[];
            //kind: 'var' | 'const' | 'let';
            console.log('START VariableDeclaration')
            console.log(node.kind)
            node.declarations.forEach((declaration) => {
                this[declaration.type](declaration)
            })
            console.log('END VariableDeclaration')
        }
        this.VariableDeclarator = (node) => {
            //id: Identifier | BindingPattern;
            //init: Expression | null;
            console.log('START VariableDeclarator')
            this[node.id.type](node.id)
            if (node.init) {
               this[node.init.type](node.init) 
            }
            else {
                //init was null
            }
            console.log('END VariableDeclarator')        
        }
    }
}

const parse = esprima.parseScript(jscode)

fs.writeFileSync('./parselog.js', verbose(parse))
let gencode = "The Source Hasn't Budged";

const traversalmap = new SyntaxTreeTraverser()
traversalmap[parse.type](parse.body)

console.log(gencode);

console.log(console)
Object.keys(console).forEach((key) => {
    console.log(key, console[key].toString())
})