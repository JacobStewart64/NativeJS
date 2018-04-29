const util = require('util')
const fs = require('fs')
const esprima = require('esprima')

const jscode = fs.readFileSync('./generate.js').toString()

const verbose = (parse) => {
    return util.inspect(parse, {depth: null})
}

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
            //interface ImportSpecifier {
            //    type: 'ImportSpecifier' | 'ImportDefaultSpecifier' | 'ImportNamespaceSpecifier';
            //    local: Identifier;
            //    imported?: Identifier;
            //}
        }
        this.ExportAllDeclaration = (node) => {
            //source: Literal;
        }
        
        this.ExportDefaultDeclaration = (node) => {
            //declaration: Identifier | BindingPattern | ClassDeclaration | Expression | FunctionDeclaration;
        }
        
        this.ExportNamedDeclaration = (node) => {
            //declaration: ClassDeclaration | FunctionDeclaration | VariableDeclaration;
            //specifiers: ExportSpecifier[];
            //source: Literal;
            //interface ExportSpecifier {
            //    type: 'ExportSpecifier';
            //    exported: Identifier;
            //    local: Identifier;
            //};
        }
        this.ArrayPattern = (node) => {
            //elements: ArrayPatternElement[];
        }
        this.RestElement = (node) => {
            //argument: Identifier | BindingPattern;
        }
        this.AssignmentPattern = (node) => {
            //left: Identifier | BindingPattern;
            //right: Expression;
        }
        this.ObjectPattern = (node) => {
            //properties: Property[];
        }
        this.ThisExpression = (node) => {
            //nothing on me
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
        }
        this.Property = (node) => {
            //key: Identifier | Literal;
            //computed: boolean;
            //value: AssignmentPattern | Identifier | BindingPattern | FunctionExpression | null;
            //kind: 'get' | 'set' | 'init';
            //method: false;
            //shorthand: boolean;
        }
        this.FunctionExpression = (node) => {
            //id: Identifier | null;
            //params: FunctionParameter[];
            //body: BlockStatement;
            //generator: boolean;
            //async: boolean;
            //expression: boolean;
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
            //interface ClassBody {
            //    type: 'ClassBody';
            //    body: MethodDefinition[];
            //}
            //interface MethodDefinition {
            //    type: 'MethodDefinition';
            //    key: Expression | null;
            //    computed: boolean;
            //    value: FunctionExpression | null;
            //    kind: 'method' | 'constructor';
            //    static: boolean;
            //}
        }
        this.TaggedTemplateExpression = (node) => {
            //readonly tag: Expression;
            //readonly quasi: TemplateLiteral;
            //interface TemplateElement {
            //    type: 'TemplateElement';
            //    value: { cooked: string; raw: string };
            //    tail: boolean;
            //}
            //interface TemplateLiteral {
            //    type: 'TemplateLiteral';
            //    quasis: TemplateElement[];
            //    expressions: Expression[];
            //}
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
        }
        this.MetaProperty = (node) => {
            //meta: Identifier;
            //property: Identifier;
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
            //interface Import {
            //    type: 'Import';
            //}
            
            //type ArgumentListElement = Expression | SpreadElement;
            
            //interface SpreadElement {
            //    type: 'SpreadElement';
            //    argument: Expression;
            //}
        }
        this.UpdateExpression = (node) => {
            //operator: '++' | '--';
            //argument: Expression;
            //prefix: boolean;
        }
        this.AwaitExpression = (node) => {
            //argument: Expression;
        }
        this.UnaryExpression = (node) => {
            //operator: '+' | '-' | '~' | '!' | 'delete' | 'void' | 'typeof';
            //argument: Expression;
            //prefix: true;
        }
        this.BinaryExpression = (node) => {
            //operator: 'instanceof' | 'in' | '+' | '-' | '*' | '/' | '%' | '**' |
            //'|' | '^' | '&' | '==' | '!=' | '===' | '!==' |
            //'<' | '>' | '<=' | '<<' | '>>' | '>>>';
            //left: Expression;
            //right: Expression;
        }
        this.LogicalExpression = (node) => {
            //operator: '||' | '&&';
            //left: Expression;
            //right: Expression;
        }
        this.ConditionalExpression = (node) => {
            //test: Expression;
            //consequent: Statement;
            //alternate?: Statement;
        }
        this.YieldExpression = (node) => {
            //argument: Expression | null;
            //delegate: boolean;
        }
        this.AssignmentExpression = (node) => {
            //operator: '=' | '*=' | '**=' | '/=' | '%=' | '+=' | '-=' |
            //'<<=' | '>>=' | '>>>=' | '&=' | '^=' | '|=';
            //left: Expression;
            //right: Expression;
        }
        this.SequenceExpression = (node) => {
            //expressions: Expression[];
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
        }
        this.ContinueStatement = (node) => {
            //label: Identifier | null;
        }
        this.DebuggerStatement = (node) => {
            //none
        }
        this.DoWhileStatement = (node) => {
            //body: Statement;
            //test: Expression;
        }
        this.EmptyStatement = (node) => {
            //none
        }
        this.ForStatement = (node) => {
            //init: Expression | VariableDeclaration | null;
            //test: Expression | null;
            //update: Expression | null;
            //body: Statement;
        }
        this.ForInStatement = (node) => {
            //left: Expression;
            //right: Expression;
            //body: Statement;
            //each: false;
        }
        this.ForOfStatement = (node) => {
            //left: Expression;
            //right: Expression;
            //body: Statement;
        }
        this.FunctionDeclaration = (node) => {
            //id: Identifier | null;
            //params: FunctionParameter[];
            //body: BlockStatement;
            //generator: boolean;
            //async: boolean;
            //expression: false;
        }
        this.IfStatement = (node) => {
            //test: Expression;
            //consequent: Statement;
            //alternate?: Statement;
        }
        this.LabeledStatement = (node) => {
            //label: Identifier;
            //body: Statement;
        }
        this.ReturnStatement = (node) => {
            //argument: Expression | null;
        }
        this.SwitchStatement = (node) => {
            //discriminant: Expression;
            //cases: SwitchCase[];
            //interface SwitchCase {
            //    type: 'SwitchCase';
            //    test: Expression | null;
            //    consequent: Statement[];
            //}
        }
        this.ThrowStatement = (node) => {
            //argument: Expression;
        }
        this.TryStatement = (node) => {
            //block: BlockStatement;
            //handler: CatchClause | null;
            //finalizer: BlockStatement | null;
            //interface CatchClause {
            //    type: 'CatchClause';
            //    param: Identifier | BindingPattern;
            //    body: BlockStatement;
            //}
        }
        this.WhileStatement = (node) => {
            //test: Expression;
            //body: Statement;
        }
        this.WithStatement = (node) => {
            //object: Expression;
            //body: Statement;
        }
        this.ClassDeclaration = (node) => {
            //id: Identifier | null;
            //superClass: Identifier | null;
            //body: ClassBody;
        }
        this.VariableDeclaration = (node) => {
            //declarations: VariableDeclarator[];
            //kind: 'var' | 'const' | 'let';
            console.log('VariableDeclaration')
            node.declarations.forEach((declaration) => {
                this[declaration.type](declaration)
            })
        }
        this.VariableDeclarator = (node) => {
            //id: Identifier | BindingPattern;
            //init: Expression | null;
            console.log('VariableDeclarator')
            this[node.init.type](node.init)
        }
    }
}

const parse = esprima.parseScript(jscode)

fs.writeFileSync('./parselog.js', verbose(parse))
let gencode = "";

const actionmap = new ActionMap()
actionmap[parse.type](parse.body)

console.log(gencode);