const util = require('util')
const fs = require('fs')
const esprima = require('esprima')

const jscode = fs.readFileSync('./generate.js').toString()

const verbose = (parse) => {
    return util.inspect(parse, {depth: null})
}

//~60 distinct "words/phrases"
class ActionMap {
    constructor() {
        this.Program = (body) => {
            //sourceType: 'module';
            //body: ModuleItem[];
            //sourceType: 'script';
            //body: StatementListItem[];
            console.log('Program')
            //kick off the traversal of all the top level nodes
            body.forEach((node) => {
                this[node.type](node) //once we know what type, access correct property of node
            })
        }
        this.ImportDeclaration = (node) => {
            //specifiers: ImportSpecifier[];
            //source: Literal;
            console.log('ImportDeclaration')
        }
        this.ImportSpecifier = (node) => {
            //    local: Identifier;
            //    imported?: Identifier;
            console.log('ImportSpecifier')
        }
        this.ImportDefaultSpecifier = (node) => {
            //    local: Identifier;
            //    imported?: Identifier;
            console.log('ImportDefaultSpecifier')
        }
        this.ImportNamespaceSpecifier = (node) => {
            //    local: Identifier;
            //    imported?: Identifier;
            console.log('ImportNamespaceSpecifier')
        }
        this.ExportAllDeclaration = (node) => {
            //source: Literal;
            console.log('ExportAllDeclaration')
        }
        
        this.ExportDefaultDeclaration = (node) => {
            //declaration: Identifier | BindingPattern | ClassDeclaration | Expression | FunctionDeclaration;
            console.log('ExportDefaultDeclaration')
        }
        
        this.ExportNamedDeclaration = (node) => {
            //declaration: ClassDeclaration | FunctionDeclaration | VariableDeclaration;
            //specifiers: ExportSpecifier[];
            //source: Literal;
            console.log('ExportNamedDeclaration')
        }
        this.ExportSpecifier = (node) => {
            //    exported: Identifier;
            //    local: Identifier;
            console.log('ExportSpecifier')
        }
        this.ArrayPattern = (node) => {
            //elements: ArrayPatternElement[];
            console.log('ArrayPattern')
        }
        this.RestElement = (node) => {
            //argument: Identifier | BindingPattern;
            console.log('RestElement')
        }
        this.AssignmentPattern = (node) => {
            //left: Identifier | BindingPattern;
            //right: Expression;
            console.log('AssignmentPattern')
        }
        this.ObjectPattern = (node) => {
            //properties: Property[];
            console.log('ObjectPattern')
        }
        this.ThisExpression = (node) => {
            //nothing on me
            console.log('ThisExpression')
        }
        this.Identifier = (node) => {
            //name: string;
            console.log('Identifier')
        }
        this.Literal = (node) => {
            //value: boolean | number | string | RegExp | null;
            //raw: string;
            //regex?: { pattern: string, flags: string };
            console.log('Literal')
        }
        this.ArrayExpression = (node) => {
            //elements: ArrayExpressionElement[];
            console.log('ArrayExpression')
        }
        this.ObjectExpression = (node) => {
            //properties: Property[];
            console.log('ObjectExpression')
        }
        this.Property = (node) => {
            //key: Identifier | Literal;
            //computed: boolean;
            //value: AssignmentPattern | Identifier | BindingPattern | FunctionExpression | null;
            //kind: 'get' | 'set' | 'init';
            //method: false;
            //shorthand: boolean;
            console.log('Property')
        }
        this.FunctionExpression = (node) => {
            //id: Identifier | null;
            //params: FunctionParameter[];
            //body: BlockStatement;
            //generator: boolean;
            //async: boolean;
            //expression: boolean;
            console.log('FunctionExpression')
        }
        this.ArrowFunctionExpression = (node) => {
            //id: Identifier | null;
            //params: FunctionParameter[];
            //body: BlockStatement | Expression;
            //generator: boolean;
            //async: boolean;
            //expression: false;
            console.log('ArrowFunctionExpression')
            this[node.body.type](node.body)
        }
        this.ClassExpression = (node) => {
            //id: Identifier | null;
            //superClass: Identifier | null;
            //body: ClassBody;
            console.log('ClassExpression')
        }
        this.ClassBody = (node) => {
            //    body: MethodDefinition[];
            console.log('ClassBody')
        }
        this.MethodDefinition = (node) => {
            //    key: Expression | null;
            //    computed: boolean;
            //    value: FunctionExpression | null;
            //    kind: 'method' | 'constructor';
            //    static: boolean;
            console.log('MethodDefinition')
        }
        this.TaggedTemplateExpression = (node) => {
            //readonly tag: Expression;
            //readonly quasi: TemplateLiteral;
            console.log('TaggedTemplateExpression')
        }
        this.TemplateElement = (node) => {
            //    value: { cooked: string; raw: string };
            //    tail: boolean;
            console.log('TemplateElement')
        }
        this.TemplateLiteral = (node) => {
            //    quasis: TemplateElement[];
            //    expressions: Expression[];
            console.log('TemplateLiteral')
        }
        this.MemberExpression = (node) => {
            //computed: boolean;
            //object: Expression;
            //property: Expression;
            console.log('MemberExpression')
            this[node.object.type](node.object)
            this[node.property.type](node.property)
        }
        this.Super = (node) => {
            //none
            console.log('Super')
        }
        this.MetaProperty = (node) => {
            //meta: Identifier;
            //property: Identifier;
            console.log('MetaProperty')
        }
        this.CallExpression = (node) => {
            //callee: Expression | Import;
            //arguments: ArgumentListElement[];
            console.log('CallExpression')
            this[node.callee.type](node.callee)
            node.arguments.forEach((arg) => {
                this[arg.type](arg)
            })
        }
        this.NewExpression = (node) => {
            //callee: Expression;
            //arguments: ArgumentListElement[];            
            //type ArgumentListElement = Expression | SpreadElement;
            console.log('NewExpression')
        }
        this.Import = (node) => {
            //none
            console.log('Import')
        }
        this.SpreadElement = (node) => {
            //    argument: Expression;
            console.log('SpreadElement')
        }
        this.UpdateExpression = (node) => {
            //operator: '++' | '--';
            //argument: Expression;
            //prefix: boolean;
            console.log('UpdateExpression')
        }
        this.AwaitExpression = (node) => {
            //argument: Expression;
            console.log('AwaitExpression')
        }
        this.UnaryExpression = (node) => {
            //operator: '+' | '-' | '~' | '!' | 'delete' | 'void' | 'typeof';
            //argument: Expression;
            //prefix: true;
            console.log('UnaryExpression')
        }
        this.BinaryExpression = (node) => {
            //operator: 'instanceof' | 'in' | '+' | '-' | '*' | '/' | '%' | '**' |
            //'|' | '^' | '&' | '==' | '!=' | '===' | '!==' |
            //'<' | '>' | '<=' | '<<' | '>>' | '>>>';
            //left: Expression;
            //right: Expression;
            console.log('BinaryExpression')
        }
        this.LogicalExpression = (node) => {
            //operator: '||' | '&&';
            //left: Expression;
            //right: Expression;
            console.log('LogicalExpression')
        }
        this.ConditionalExpression = (node) => {
            //test: Expression;
            //consequent: Statement;
            //alternate?: Statement;
            console.log('ConditionalExpression')
        }
        this.YieldExpression = (node) => {
            //argument: Expression | null;
            //delegate: boolean;
            console.log('YieldExpression')
        }
        this.AssignmentExpression = (node) => {
            //operator: '=' | '*=' | '**=' | '/=' | '%=' | '+=' | '-=' |
            //'<<=' | '>>=' | '>>>=' | '&=' | '^=' | '|=';
            //left: Expression;
            //right: Expression;
            console.log('AssignmentExpression')
            this[node.left.type](node.left)
            this[node.right.type](node.right)
        }
        this.SequenceExpression = (node) => {
            //expressions: Expression[];
            console.log('SequenceExpression')
        }
        this.BlockStatement = (node) => {
            //body: StatementListItem[];
            console.log('BlockStatement')
            node.body.forEach((statement) => {
                this[statement.type](statement)
            })
        }
        this.ExpressionStatement = (node) => {
            console.log('ExpressionStatement')
            this[node.expression.type](node.expression)
        }
        
        this.BreakStatement = (node) => {
            //label: Identifier | null;
            console.log('BreakStatement')
        }
        this.ContinueStatement = (node) => {
            //label: Identifier | null;
            console.log('ContinueStatement')
        }
        this.DebuggerStatement = (node) => {
            //none
            console.log('DebuggerStatement')
        }
        this.DoWhileStatement = (node) => {
            //body: Statement;
            //test: Expression;
            console.log('DoWhileStatement')
        }
        this.EmptyStatement = (node) => {
            //none
            console.log('EmptyStatement')
        }
        this.ForStatement = (node) => {
            //init: Expression | VariableDeclaration | null;
            //test: Expression | null;
            //update: Expression | null;
            //body: Statement;
            console.log('ForStatement')
            this[node.body.type](node.body)
        }
        this.ForInStatement = (node) => {
            //left: Expression;
            //right: Expression;
            //body: Statement;
            //each: false;
            console.log('ForInStatement')
        }
        this.ForOfStatement = (node) => {
            //left: Expression;
            //right: Expression;
            //body: Statement;
            console.log('ForOfStatement')
        }
        this.IfStatement = (node) => {
            //test: Expression;
            //consequent: Statement;
            //alternate: Statement | null;
            console.log('IfStatement')
            this[node.test.type](node.test)
            this[node.consequent.type](node.consequent)
            if (node.alternate) {
                this[node.alternate.type](node.alternate)
            }
            else {
                //alternate was null
            }           
        }
        this.LabeledStatement = (node) => {
            //label: Identifier;
            //body: Statement;
            console.log('LabeledStatement')
            this[node.label.type](node.label)
            this[node.body.type](node.body)
        }
        this.ReturnStatement = (node) => {
            //argument: Expression | null;
            console.log('ReturnStatement')
            if (node.argument) {
                this[node.argument.type](node.argument)
            }
            else {
                //it was null
            }
        }
        this.SwitchStatement = (node) => {
            //discriminant: Expression;
            //cases: SwitchCase[];
            console.log('SwitchStatement')
            this[node.discriminant.type](node.discriminant)
            node.cases.forEach((c) => {
                this[c.type](c)
            })
        }
        this.SwitchCase = (node) => {
            //    test: Expression | null;
            //    consequent: Statement[];
            console.log('SwitchCase')
            if (node.test) {
                this[node.test.type](node.test)
            }
            else {
                //it was null
            }
            node.consequent.forEach((cons) => {
                this[cons.type](cons)
            })
        }
        this.ThrowStatement = (node) => {
            //argument: Expression;
            console.log('ThrowStatement')
            this[node.argument.type](node.argument)
        }
        this.TryStatement = (node) => {
            //block: BlockStatement;
            //handler: CatchClause | null;
            //finalizer: BlockStatement | null;
            console.log('TryStatement')
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
        }
        this.CatchClause = (node) => {
            //    param: Identifier | BindingPattern;
            //    body: BlockStatement;
            console.log('CatchClause')
            this[node.param.type](node.param)
            this[node.body.type](node.body)
        }
        this.WhileStatement = (node) => {
            //test: Expression;
            //body: Statement;
            console.log('WhileStatement')
            this[node.test.type](node.test)
            this[node.body.type](node.body)
        }
        this.WithStatement = (node) => {
            //object: Expression;
            //body: Statement;
            console.log('WithStatement')
            this[node.object.type](node.object)
            this[node.body.type](node.body)
        }
        this.ClassDeclaration = (node) => {
            //id: Identifier | null;
            //superClass: Identifier | null;
            //body: ClassBody;
            console.log('ClassDeclaration')
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
        }
        this.FunctionDeclaration = (node) => {
            //id: Identifier | null;
            //params: FunctionParameter[];
            //body: BlockStatement;
            //generator: boolean;
            //async: boolean;
            //expression: false;
            console.log('FunctionDeclaration')
            if (node.id) {
                this[node.id.type](node.id)
            }
            else {
                //id was null
            }
            node.params.forEach((param) => {
                this[param.type](param)
            })
            //usegen
            //useasync
            //checkexpression
            console.log('Should be false:', node.expression)
            this[node.body.type](node.body)
        }
        this.VariableDeclaration = (node) => {
            //declarations: VariableDeclarator[];
            //kind: 'var' | 'const' | 'let';
            console.log('VariableDeclaration')
            //note kind
            node.declarations.forEach((declaration) => {
                this[declaration.type](declaration)
            })
        }
        this.VariableDeclarator = (node) => {
            //id: Identifier | BindingPattern;
            //init: Expression | null;
            console.log('VariableDeclarator')
            this[node.id.type](node.id)
            this[node.init.type](node.init)
        }
    }
}

const parse = esprima.parseScript(jscode)

fs.writeFileSync('./parselog.js', verbose(parse))
let gencode = "The Source Hasn't Budged";

const actionmap = new ActionMap()
actionmap[parse.type](parse.body)

console.log(gencode);