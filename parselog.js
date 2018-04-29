Script {
  type: 'Program',
  body: 
   [ VariableDeclaration {
       type: 'VariableDeclaration',
       declarations: 
        [ VariableDeclarator {
            type: 'VariableDeclarator',
            id: Identifier { type: 'Identifier', name: 'toWordsArray' },
            init: 
             ArrowFunctionExpression {
               type: 'ArrowFunctionExpression',
               id: null,
               params: [ Identifier { type: 'Identifier', name: 'str' } ],
               body: 
                BlockStatement {
                  type: 'BlockStatement',
                  body: 
                   [ VariableDeclaration {
                       type: 'VariableDeclaration',
                       declarations: 
                        [ VariableDeclarator {
                            type: 'VariableDeclarator',
                            id: Identifier { type: 'Identifier', name: 'perfectwords' },
                            init: ArrayExpression { type: 'ArrayExpression', elements: [] } } ],
                       kind: 'const' },
                     VariableDeclaration {
                       type: 'VariableDeclaration',
                       declarations: 
                        [ VariableDeclarator {
                            type: 'VariableDeclarator',
                            id: Identifier { type: 'Identifier', name: 'uglywords' },
                            init: 
                             CallExpression {
                               type: 'CallExpression',
                               callee: 
                                StaticMemberExpression {
                                  type: 'MemberExpression',
                                  computed: false,
                                  object: 
                                   CallExpression {
                                     type: 'CallExpression',
                                     callee: 
                                      StaticMemberExpression {
                                        type: 'MemberExpression',
                                        computed: false,
                                        object: 
                                         CallExpression {
                                           type: 'CallExpression',
                                           callee: 
                                            StaticMemberExpression {
                                              type: 'MemberExpression',
                                              computed: false,
                                              object: Identifier { type: 'Identifier', name: 'str' },
                                              property: Identifier { type: 'Identifier', name: 'replace' } },
                                           arguments: 
                                            [ RegexLiteral {
                                                type: 'Literal',
                                                value: /\n/g,
                                                raw: '/\\n/g',
                                                regex: { pattern: '\\n', flags: 'g' } },
                                              Literal { type: 'Literal', value: ' ', raw: '" "' } ] },
                                        property: Identifier { type: 'Identifier', name: 'replace' } },
                                     arguments: 
                                      [ RegexLiteral {
                                          type: 'Literal',
                                          value: /\t/g,
                                          raw: '/\\t/g',
                                          regex: { pattern: '\\t', flags: 'g' } },
                                        Literal { type: 'Literal', value: ' ', raw: '" "' } ] },
                                  property: Identifier { type: 'Identifier', name: 'split' } },
                               arguments: [ Literal { type: 'Literal', value: ' ', raw: '" "' } ] } } ],
                       kind: 'const' },
                     ExpressionStatement {
                       type: 'ExpressionStatement',
                       expression: 
                        CallExpression {
                          type: 'CallExpression',
                          callee: 
                           StaticMemberExpression {
                             type: 'MemberExpression',
                             computed: false,
                             object: Identifier { type: 'Identifier', name: 'uglywords' },
                             property: Identifier { type: 'Identifier', name: 'forEach' } },
                          arguments: 
                           [ ArrowFunctionExpression {
                               type: 'ArrowFunctionExpression',
                               id: null,
                               params: [ Identifier { type: 'Identifier', name: 'word' } ],
                               body: 
                                BlockStatement {
                                  type: 'BlockStatement',
                                  body: 
                                   [ IfStatement {
                                       type: 'IfStatement',
                                       test: 
                                        BinaryExpression {
                                          type: 'BinaryExpression',
                                          operator: '!==',
                                          left: Identifier { type: 'Identifier', name: 'word' },
                                          right: Literal { type: 'Literal', value: '', raw: '""' } },
                                       consequent: 
                                        BlockStatement {
                                          type: 'BlockStatement',
                                          body: 
                                           [ ExpressionStatement {
                                               type: 'ExpressionStatement',
                                               expression: 
                                                CallExpression {
                                                  type: 'CallExpression',
                                                  callee: 
                                                   StaticMemberExpression {
                                                     type: 'MemberExpression',
                                                     computed: false,
                                                     object: Identifier { type: 'Identifier', name: 'perfectwords' },
                                                     property: Identifier { type: 'Identifier', name: 'push' } },
                                                  arguments: [ Identifier { type: 'Identifier', name: 'word' } ] } } ] },
                                       alternate: null } ] },
                               generator: false,
                               expression: false,
                               async: false } ] } },
                     ReturnStatement {
                       type: 'ReturnStatement',
                       argument: Identifier { type: 'Identifier', name: 'perfectwords' } } ] },
               generator: false,
               expression: false,
               async: false } } ],
       kind: 'const' },
     VariableDeclaration {
       type: 'VariableDeclaration',
       declarations: 
        [ VariableDeclarator {
            type: 'VariableDeclarator',
            id: Identifier { type: 'Identifier', name: 'dropLastChar' },
            init: 
             ArrowFunctionExpression {
               type: 'ArrowFunctionExpression',
               id: null,
               params: [ Identifier { type: 'Identifier', name: 'str' } ],
               body: 
                BlockStatement {
                  type: 'BlockStatement',
                  body: 
                   [ ReturnStatement {
                       type: 'ReturnStatement',
                       argument: 
                        CallExpression {
                          type: 'CallExpression',
                          callee: 
                           StaticMemberExpression {
                             type: 'MemberExpression',
                             computed: false,
                             object: Identifier { type: 'Identifier', name: 'str' },
                             property: Identifier { type: 'Identifier', name: 'slice' } },
                          arguments: 
                           [ Literal { type: 'Literal', value: 0, raw: '0' },
                             BinaryExpression {
                               type: 'BinaryExpression',
                               operator: '-',
                               left: 
                                StaticMemberExpression {
                                  type: 'MemberExpression',
                                  computed: false,
                                  object: Identifier { type: 'Identifier', name: 'str' },
                                  property: Identifier { type: 'Identifier', name: 'length' } },
                               right: Literal { type: 'Literal', value: 1, raw: '1' } } ] } } ] },
               generator: false,
               expression: false,
               async: false } } ],
       kind: 'const' },
     VariableDeclaration {
       type: 'VariableDeclaration',
       declarations: 
        [ VariableDeclarator {
            type: 'VariableDeclarator',
            id: Identifier { type: 'Identifier', name: 'generate' },
            init: 
             ArrowFunctionExpression {
               type: 'ArrowFunctionExpression',
               id: null,
               params: [],
               body: 
                BlockStatement {
                  type: 'BlockStatement',
                  body: 
                   [ VariableDeclaration {
                       type: 'VariableDeclaration',
                       declarations: 
                        [ VariableDeclarator {
                            type: 'VariableDeclarator',
                            id: Identifier { type: 'Identifier', name: 'words' },
                            init: 
                             CallExpression {
                               type: 'CallExpression',
                               callee: Identifier { type: 'Identifier', name: 'toWordsArray' },
                               arguments: 
                                [ StaticMemberExpression {
                                    type: 'MemberExpression',
                                    computed: false,
                                    object: Identifier { type: 'Identifier', name: 'input' },
                                    property: Identifier { type: 'Identifier', name: 'value' } } ] } } ],
                       kind: 'const' },
                     ExpressionStatement {
                       type: 'ExpressionStatement',
                       expression: 
                        CallExpression {
                          type: 'CallExpression',
                          callee: 
                           StaticMemberExpression {
                             type: 'MemberExpression',
                             computed: false,
                             object: Identifier { type: 'Identifier', name: 'console' },
                             property: Identifier { type: 'Identifier', name: 'log' } },
                          arguments: [ Identifier { type: 'Identifier', name: 'words' } ] } },
                     VariableDeclaration {
                       type: 'VariableDeclaration',
                       declarations: 
                        [ VariableDeclarator {
                            type: 'VariableDeclarator',
                            id: Identifier { type: 'Identifier', name: 'structnames' },
                            init: ArrayExpression { type: 'ArrayExpression', elements: [] } } ],
                       kind: 'const' },
                     VariableDeclaration {
                       type: 'VariableDeclaration',
                       declarations: 
                        [ VariableDeclarator {
                            type: 'VariableDeclarator',
                            id: Identifier { type: 'Identifier', name: 'varnames' },
                            init: ArrayExpression { type: 'ArrayExpression', elements: [] } } ],
                       kind: 'const' },
                     ForStatement {
                       type: 'ForStatement',
                       init: 
                        VariableDeclaration {
                          type: 'VariableDeclaration',
                          declarations: 
                           [ VariableDeclarator {
                               type: 'VariableDeclarator',
                               id: Identifier { type: 'Identifier', name: 'i' },
                               init: Literal { type: 'Literal', value: 0, raw: '0' } } ],
                          kind: 'let' },
                       test: 
                        BinaryExpression {
                          type: 'BinaryExpression',
                          operator: '<',
                          left: Identifier { type: 'Identifier', name: 'i' },
                          right: 
                           StaticMemberExpression {
                             type: 'MemberExpression',
                             computed: false,
                             object: Identifier { type: 'Identifier', name: 'words' },
                             property: Identifier { type: 'Identifier', name: 'length' } } },
                       update: 
                        UpdateExpression {
                          type: 'UpdateExpression',
                          operator: '++',
                          argument: Identifier { type: 'Identifier', name: 'i' },
                          prefix: false },
                       body: 
                        BlockStatement {
                          type: 'BlockStatement',
                          body: 
                           [ IfStatement {
                               type: 'IfStatement',
                               test: 
                                BinaryExpression {
                                  type: 'LogicalExpression',
                                  operator: '||',
                                  left: 
                                   BinaryExpression {
                                     type: 'BinaryExpression',
                                     operator: '===',
                                     left: 
                                      ComputedMemberExpression {
                                        type: 'MemberExpression',
                                        computed: true,
                                        object: Identifier { type: 'Identifier', name: 'words' },
                                        property: Identifier { type: 'Identifier', name: 'i' } },
                                     right: Literal { type: 'Literal', value: 'struct', raw: '"struct"' } },
                                  right: 
                                   BinaryExpression {
                                     type: 'BinaryExpression',
                                     operator: '===',
                                     left: 
                                      ComputedMemberExpression {
                                        type: 'MemberExpression',
                                        computed: true,
                                        object: Identifier { type: 'Identifier', name: 'words' },
                                        property: Identifier { type: 'Identifier', name: 'i' } },
                                     right: Literal { type: 'Literal', value: 'class', raw: '"class"' } } },
                               consequent: 
                                BlockStatement {
                                  type: 'BlockStatement',
                                  body: 
                                   [ ExpressionStatement {
                                       type: 'ExpressionStatement',
                                       expression: 
                                        AssignmentExpression {
                                          type: 'AssignmentExpression',
                                          operator: '=',
                                          left: 
                                           ComputedMemberExpression {
                                             type: 'MemberExpression',
                                             computed: true,
                                             object: Identifier { type: 'Identifier', name: 'words' },
                                             property: 
                                              BinaryExpression {
                                                type: 'BinaryExpression',
                                                operator: '+',
                                                left: Identifier { type: 'Identifier', name: 'i' },
                                                right: Literal { type: 'Literal', value: 1, raw: '1' } } },
                                          right: 
                                           BinaryExpression {
                                             type: 'BinaryExpression',
                                             operator: '+',
                                             left: 
                                              BinaryExpression {
                                                type: 'BinaryExpression',
                                                operator: '+',
                                                left: Literal { type: 'Literal', value: ' ', raw: '" "' },
                                                right: 
                                                 ComputedMemberExpression {
                                                   type: 'MemberExpression',
                                                   computed: true,
                                                   object: Identifier { type: 'Identifier', name: 'words' },
                                                   property: 
                                                    BinaryExpression {
                                                      type: 'BinaryExpression',
                                                      operator: '+',
                                                      left: Identifier { type: 'Identifier', name: 'i' },
                                                      right: Literal { type: 'Literal', value: 1, raw: '1' } } } },
                                             right: Literal { type: 'Literal', value: ' ', raw: '" "' } } } },
                                     ExpressionStatement {
                                       type: 'ExpressionStatement',
                                       expression: 
                                        CallExpression {
                                          type: 'CallExpression',
                                          callee: 
                                           StaticMemberExpression {
                                             type: 'MemberExpression',
                                             computed: false,
                                             object: Identifier { type: 'Identifier', name: 'structnames' },
                                             property: Identifier { type: 'Identifier', name: 'push' } },
                                          arguments: 
                                           [ ComputedMemberExpression {
                                               type: 'MemberExpression',
                                               computed: true,
                                               object: Identifier { type: 'Identifier', name: 'words' },
                                               property: 
                                                UpdateExpression {
                                                  type: 'UpdateExpression',
                                                  operator: '++',
                                                  argument: Identifier { type: 'Identifier', name: 'i' },
                                                  prefix: true } } ] } },
                                     ExpressionStatement {
                                       type: 'ExpressionStatement',
                                       expression: 
                                        CallExpression {
                                          type: 'CallExpression',
                                          callee: 
                                           StaticMemberExpression {
                                             type: 'MemberExpression',
                                             computed: false,
                                             object: Identifier { type: 'Identifier', name: 'varnames' },
                                             property: Identifier { type: 'Identifier', name: 'push' } },
                                          arguments: [ ArrayExpression { type: 'ArrayExpression', elements: [] } ] } } ] },
                               alternate: 
                                IfStatement {
                                  type: 'IfStatement',
                                  test: 
                                   BinaryExpression {
                                     type: 'BinaryExpression',
                                     operator: '===',
                                     left: 
                                      ComputedMemberExpression {
                                        type: 'MemberExpression',
                                        computed: true,
                                        object: Identifier { type: 'Identifier', name: 'words' },
                                        property: Identifier { type: 'Identifier', name: 'i' } },
                                     right: Literal { type: 'Literal', value: 'const', raw: '"const"' } },
                                  consequent: BlockStatement { type: 'BlockStatement', body: [] },
                                  alternate: 
                                   IfStatement {
                                     type: 'IfStatement',
                                     test: 
                                      BinaryExpression {
                                        type: 'BinaryExpression',
                                        operator: '===',
                                        left: 
                                         ComputedMemberExpression {
                                           type: 'MemberExpression',
                                           computed: true,
                                           object: Identifier { type: 'Identifier', name: 'words' },
                                           property: Identifier { type: 'Identifier', name: 'i' } },
                                        right: Literal { type: 'Literal', value: 'unsigned', raw: '"unsigned"' } },
                                     consequent: 
                                      BlockStatement {
                                        type: 'BlockStatement',
                                        body: 
                                         [ IfStatement {
                                             type: 'IfStatement',
                                             test: 
                                              CallExpression {
                                                type: 'CallExpression',
                                                callee: 
                                                 StaticMemberExpression {
                                                   type: 'MemberExpression',
                                                   computed: false,
                                                   object: 
                                                    ComputedMemberExpression {
                                                      type: 'MemberExpression',
                                                      computed: true,
                                                      object: Identifier { type: 'Identifier', name: 'words' },
                                                      property: 
                                                       UpdateExpression {
                                                         type: 'UpdateExpression',
                                                         operator: '++',
                                                         argument: Identifier { type: 'Identifier', name: 'i' },
                                                         prefix: true } },
                                                   property: Identifier { type: 'Identifier', name: 'includes' } },
                                                arguments: [ Literal { type: 'Literal', value: '*', raw: '\'*\'' } ] },
                                             consequent: 
                                              BlockStatement {
                                                type: 'BlockStatement',
                                                body: 
                                                 [ ExpressionStatement {
                                                     type: 'ExpressionStatement',
                                                     expression: 
                                                      CallExpression {
                                                        type: 'CallExpression',
                                                        callee: 
                                                         StaticMemberExpression {
                                                           type: 'MemberExpression',
                                                           computed: false,
                                                           object: 
                                                            ComputedMemberExpression {
                                                              type: 'MemberExpression',
                                                              computed: true,
                                                              object: Identifier { type: 'Identifier', name: 'varnames' },
                                                              property: 
                                                               BinaryExpression {
                                                                 type: 'BinaryExpression',
                                                                 operator: '-',
                                                                 left: 
                                                                  StaticMemberExpression {
                                                                    type: 'MemberExpression',
                                                                    computed: false,
                                                                    object: Identifier { type: 'Identifier', name: 'structnames' },
                                                                    property: Identifier { type: 'Identifier', name: 'length' } },
                                                                 right: Literal { type: 'Literal', value: 1, raw: '1' } } },
                                                           property: Identifier { type: 'Identifier', name: 'push' } },
                                                        arguments: 
                                                         [ ArrayExpression {
                                                             type: 'ArrayExpression',
                                                             elements: 
                                                              [ CallExpression {
                                                                  type: 'CallExpression',
                                                                  callee: Identifier { type: 'Identifier', name: 'dropLastChar' },
                                                                  arguments: 
                                                                   [ ComputedMemberExpression {
                                                                       type: 'MemberExpression',
                                                                       computed: true,
                                                                       object: Identifier { type: 'Identifier', name: 'words' },
                                                                       property: 
                                                                        BinaryExpression {
                                                                          type: 'BinaryExpression',
                                                                          operator: '+',
                                                                          left: Identifier { type: 'Identifier', name: 'i' },
                                                                          right: Literal { type: 'Literal', value: 1, raw: '1' } } } ] },
                                                                Literal { type: 'Literal', value: 'p', raw: '"p"' },
                                                                BinaryExpression {
                                                                  type: 'BinaryExpression',
                                                                  operator: '+',
                                                                  left: 
                                                                   BinaryExpression {
                                                                     type: 'BinaryExpression',
                                                                     operator: '+',
                                                                     left: 
                                                                      ComputedMemberExpression {
                                                                        type: 'MemberExpression',
                                                                        computed: true,
                                                                        object: Identifier { type: 'Identifier', name: 'words' },
                                                                        property: 
                                                                         BinaryExpression {
                                                                           type: 'BinaryExpression',
                                                                           operator: '-',
                                                                           left: Identifier { type: 'Identifier', name: 'i' },
                                                                           right: Literal { type: 'Literal', value: 1, raw: '1' } } },
                                                                     right: Literal { type: 'Literal', value: ' ', raw: '" "' } },
                                                                  right: 
                                                                   CallExpression {
                                                                     type: 'CallExpression',
                                                                     callee: Identifier { type: 'Identifier', name: 'dropLastChar' },
                                                                     arguments: 
                                                                      [ ComputedMemberExpression {
                                                                          type: 'MemberExpression',
                                                                          computed: true,
                                                                          object: Identifier { type: 'Identifier', name: 'words' },
                                                                          property: Identifier { type: 'Identifier', name: 'i' } } ] } } ] } ] } },
                                                   ExpressionStatement {
                                                     type: 'ExpressionStatement',
                                                     expression: 
                                                      AssignmentExpression {
                                                        type: 'AssignmentExpression',
                                                        operator: '=',
                                                        left: 
                                                         ComputedMemberExpression {
                                                           type: 'MemberExpression',
                                                           computed: true,
                                                           object: Identifier { type: 'Identifier', name: 'words' },
                                                           property: Identifier { type: 'Identifier', name: 'i' } },
                                                        right: 
                                                         BinaryExpression {
                                                           type: 'BinaryExpression',
                                                           operator: '+',
                                                           left: 
                                                            BinaryExpression {
                                                              type: 'BinaryExpression',
                                                              operator: '+',
                                                              left: Literal { type: 'Literal', value: ' ', raw: '" "' },
                                                              right: 
                                                               ComputedMemberExpression {
                                                                 type: 'MemberExpression',
                                                                 computed: true,
                                                                 object: Identifier { type: 'Identifier', name: 'words' },
                                                                 property: Identifier { type: 'Identifier', name: 'i' } } },
                                                           right: Literal { type: 'Literal', value: ' ', raw: '" "' } } } },
                                                   ExpressionStatement {
                                                     type: 'ExpressionStatement',
                                                     expression: 
                                                      UpdateExpression {
                                                        type: 'UpdateExpression',
                                                        operator: '++',
                                                        argument: Identifier { type: 'Identifier', name: 'i' },
                                                        prefix: true } },
                                                   ExpressionStatement {
                                                     type: 'ExpressionStatement',
                                                     expression: 
                                                      AssignmentExpression {
                                                        type: 'AssignmentExpression',
                                                        operator: '=',
                                                        left: 
                                                         ComputedMemberExpression {
                                                           type: 'MemberExpression',
                                                           computed: true,
                                                           object: Identifier { type: 'Identifier', name: 'words' },
                                                           property: Identifier { type: 'Identifier', name: 'i' } },
                                                        right: 
                                                         BinaryExpression {
                                                           type: 'BinaryExpression',
                                                           operator: '+',
                                                           left: 
                                                            BinaryExpression {
                                                              type: 'BinaryExpression',
                                                              operator: '+',
                                                              left: Literal { type: 'Literal', value: ' ', raw: '" "' },
                                                              right: 
                                                               ComputedMemberExpression {
                                                                 type: 'MemberExpression',
                                                                 computed: true,
                                                                 object: Identifier { type: 'Identifier', name: 'words' },
                                                                 property: Identifier { type: 'Identifier', name: 'i' } } },
                                                           right: Literal { type: 'Literal', value: '\n\t', raw: '"\\n\\t"' } } } } ] },
                                             alternate: 
                                              BlockStatement {
                                                type: 'BlockStatement',
                                                body: 
                                                 [ IfStatement {
                                                     type: 'IfStatement',
                                                     test: 
                                                      CallExpression {
                                                        type: 'CallExpression',
                                                        callee: 
                                                         StaticMemberExpression {
                                                           type: 'MemberExpression',
                                                           computed: false,
                                                           object: 
                                                            ComputedMemberExpression {
                                                              type: 'MemberExpression',
                                                              computed: true,
                                                              object: Identifier { type: 'Identifier', name: 'words' },
                                                              property: 
                                                               UpdateExpression {
                                                                 type: 'UpdateExpression',
                                                                 operator: '++',
                                                                 argument: Identifier { type: 'Identifier', name: 'i' },
                                                                 prefix: true } },
                                                           property: Identifier { type: 'Identifier', name: 'endsWith' } },
                                                        arguments: [ Literal { type: 'Literal', value: '];', raw: '\'];\'' } ] },
                                                     consequent: 
                                                      BlockStatement {
                                                        type: 'BlockStatement',
                                                        body: 
                                                         [ VariableDeclaration {
                                                             type: 'VariableDeclaration',
                                                             declarations: 
                                                              [ VariableDeclarator {
                                                                  type: 'VariableDeclarator',
                                                                  id: Identifier { type: 'Identifier', name: 'indexofopenbracket' },
                                                                  init: 
                                                                   CallExpression {
                                                                     type: 'CallExpression',
                                                                     callee: 
                                                                      StaticMemberExpression {
                                                                        type: 'MemberExpression',
                                                                        computed: false,
                                                                        object: 
                                                                         ComputedMemberExpression {
                                                                           type: 'MemberExpression',
                                                                           computed: true,
                                                                           object: Identifier { type: 'Identifier', name: 'words' },
                                                                           property: Identifier { type: 'Identifier', name: 'i' } },
                                                                        property: Identifier { type: 'Identifier', name: 'indexOf' } },
                                                                     arguments: [ Literal { type: 'Literal', value: '[', raw: '\'[\'' } ] } } ],
                                                             kind: 'let' },
                                                           VariableDeclaration {
                                                             type: 'VariableDeclaration',
                                                             declarations: 
                                                              [ VariableDeclarator {
                                                                  type: 'VariableDeclarator',
                                                                  id: Identifier { type: 'Identifier', name: 'indexofclosebracket' },
                                                                  init: 
                                                                   CallExpression {
                                                                     type: 'CallExpression',
                                                                     callee: 
                                                                      StaticMemberExpression {
                                                                        type: 'MemberExpression',
                                                                        computed: false,
                                                                        object: 
                                                                         ComputedMemberExpression {
                                                                           type: 'MemberExpression',
                                                                           computed: true,
                                                                           object: Identifier { type: 'Identifier', name: 'words' },
                                                                           property: Identifier { type: 'Identifier', name: 'i' } },
                                                                        property: Identifier { type: 'Identifier', name: 'indexOf' } },
                                                                     arguments: [ Literal { type: 'Literal', value: ']', raw: '\']\'' } ] } } ],
                                                             kind: 'let' },
                                                           VariableDeclaration {
                                                             type: 'VariableDeclaration',
                                                             declarations: 
                                                              [ VariableDeclarator {
                                                                  type: 'VariableDeclarator',
                                                                  id: Identifier { type: 'Identifier', name: 'length' },
                                                                  init: 
                                                                   CallExpression {
                                                                     type: 'CallExpression',
                                                                     callee: 
                                                                      StaticMemberExpression {
                                                                        type: 'MemberExpression',
                                                                        computed: false,
                                                                        object: 
                                                                         ComputedMemberExpression {
                                                                           type: 'MemberExpression',
                                                                           computed: true,
                                                                           object: Identifier { type: 'Identifier', name: 'words' },
                                                                           property: Identifier { type: 'Identifier', name: 'i' } },
                                                                        property: Identifier { type: 'Identifier', name: 'slice' } },
                                                                     arguments: 
                                                                      [ BinaryExpression {
                                                                          type: 'BinaryExpression',
                                                                          operator: '+',
                                                                          left: Identifier { type: 'Identifier', name: 'indexofopenbracket' },
                                                                          right: Literal { type: 'Literal', value: 1, raw: '1' } },
                                                                        Identifier { type: 'Identifier', name: 'indexofclosebracket' } ] } } ],
                                                             kind: 'const' },
                                                           ExpressionStatement {
                                                             type: 'ExpressionStatement',
                                                             expression: 
                                                              CallExpression {
                                                                type: 'CallExpression',
                                                                callee: 
                                                                 StaticMemberExpression {
                                                                   type: 'MemberExpression',
                                                                   computed: false,
                                                                   object: 
                                                                    ComputedMemberExpression {
                                                                      type: 'MemberExpression',
                                                                      computed: true,
                                                                      object: Identifier { type: 'Identifier', name: 'varnames' },
                                                                      property: 
                                                                       BinaryExpression {
                                                                         type: 'BinaryExpression',
                                                                         operator: '-',
                                                                         left: 
                                                                          StaticMemberExpression {
                                                                            type: 'MemberExpression',
                                                                            computed: false,
                                                                            object: Identifier { type: 'Identifier', name: 'structnames' },
                                                                            property: Identifier { type: 'Identifier', name: 'length' } },
                                                                         right: Literal { type: 'Literal', value: 1, raw: '1' } } },
                                                                   property: Identifier { type: 'Identifier', name: 'push' } },
                                                                arguments: 
                                                                 [ ArrayExpression {
                                                                     type: 'ArrayExpression',
                                                                     elements: 
                                                                      [ CallExpression {
                                                                          type: 'CallExpression',
                                                                          callee: 
                                                                           StaticMemberExpression {
                                                                             type: 'MemberExpression',
                                                                             computed: false,
                                                                             object: 
                                                                              ComputedMemberExpression {
                                                                                type: 'MemberExpression',
                                                                                computed: true,
                                                                                object: Identifier { type: 'Identifier', name: 'words' },
                                                                                property: Identifier { type: 'Identifier', name: 'i' } },
                                                                             property: Identifier { type: 'Identifier', name: 'slice' } },
                                                                          arguments: 
                                                                           [ Literal { type: 'Literal', value: 0, raw: '0' },
                                                                             BinaryExpression {
                                                                               type: 'BinaryExpression',
                                                                               operator: '-',
                                                                               left: 
                                                                                BinaryExpression {
                                                                                  type: 'BinaryExpression',
                                                                                  operator: '-',
                                                                                  left: 
                                                                                   StaticMemberExpression {
                                                                                     type: 'MemberExpression',
                                                                                     computed: false,
                                                                                     object: 
                                                                                      ComputedMemberExpression {
                                                                                        type: 'MemberExpression',
                                                                                        computed: true,
                                                                                        object: Identifier { type: 'Identifier', name: 'words' },
                                                                                        property: Identifier { type: 'Identifier', name: 'i' } },
                                                                                     property: Identifier { type: 'Identifier', name: 'length' } },
                                                                                  right: Literal { type: 'Literal', value: 2, raw: '2' } },
                                                                               right: 
                                                                                BinaryExpression {
                                                                                  type: 'BinaryExpression',
                                                                                  operator: '-',
                                                                                  left: Identifier { type: 'Identifier', name: 'indexofclosebracket' },
                                                                                  right: Identifier { type: 'Identifier', name: 'indexofopenbracket' } } } ] },
                                                                        Identifier { type: 'Identifier', name: 'length' } ] } ] } },
                                                           ExpressionStatement {
                                                             type: 'ExpressionStatement',
                                                             expression: 
                                                              AssignmentExpression {
                                                                type: 'AssignmentExpression',
                                                                operator: '=',
                                                                left: 
                                                                 ComputedMemberExpression {
                                                                   type: 'MemberExpression',
                                                                   computed: true,
                                                                   object: Identifier { type: 'Identifier', name: 'words' },
                                                                   property: Identifier { type: 'Identifier', name: 'i' } },
                                                                right: 
                                                                 BinaryExpression {
                                                                   type: 'BinaryExpression',
                                                                   operator: '+',
                                                                   left: 
                                                                    BinaryExpression {
                                                                      type: 'BinaryExpression',
                                                                      operator: '+',
                                                                      left: Literal { type: 'Literal', value: ' ', raw: '" "' },
                                                                      right: 
                                                                       ComputedMemberExpression {
                                                                         type: 'MemberExpression',
                                                                         computed: true,
                                                                         object: Identifier { type: 'Identifier', name: 'words' },
                                                                         property: Identifier { type: 'Identifier', name: 'i' } } },
                                                                   right: Literal { type: 'Literal', value: '\n\t', raw: '"\\n\\t"' } } } },
                                                           ExpressionStatement {
                                                             type: 'ExpressionStatement',
                                                             expression: 
                                                              AssignmentExpression {
                                                                type: 'AssignmentExpression',
                                                                operator: '+=',
                                                                left: 
                                                                 ComputedMemberExpression {
                                                                   type: 'MemberExpression',
                                                                   computed: true,
                                                                   object: Identifier { type: 'Identifier', name: 'words' },
                                                                   property: 
                                                                    BinaryExpression {
                                                                      type: 'BinaryExpression',
                                                                      operator: '-',
                                                                      left: Identifier { type: 'Identifier', name: 'i' },
                                                                      right: Literal { type: 'Literal', value: 2, raw: '2' } } },
                                                                right: Literal { type: 'Literal', value: ' ', raw: '" "' } } } ] },
                                                     alternate: 
                                                      BlockStatement {
                                                        type: 'BlockStatement',
                                                        body: 
                                                         [ ExpressionStatement {
                                                             type: 'ExpressionStatement',
                                                             expression: 
                                                              CallExpression {
                                                                type: 'CallExpression',
                                                                callee: 
                                                                 StaticMemberExpression {
                                                                   type: 'MemberExpression',
                                                                   computed: false,
                                                                   object: 
                                                                    ComputedMemberExpression {
                                                                      type: 'MemberExpression',
                                                                      computed: true,
                                                                      object: Identifier { type: 'Identifier', name: 'varnames' },
                                                                      property: 
                                                                       BinaryExpression {
                                                                         type: 'BinaryExpression',
                                                                         operator: '-',
                                                                         left: 
                                                                          StaticMemberExpression {
                                                                            type: 'MemberExpression',
                                                                            computed: false,
                                                                            object: Identifier { type: 'Identifier', name: 'structnames' },
                                                                            property: Identifier { type: 'Identifier', name: 'length' } },
                                                                         right: Literal { type: 'Literal', value: 1, raw: '1' } } },
                                                                   property: Identifier { type: 'Identifier', name: 'push' } },
                                                                arguments: 
                                                                 [ ArrayExpression {
                                                                     type: 'ArrayExpression',
                                                                     elements: 
                                                                      [ CallExpression {
                                                                          type: 'CallExpression',
                                                                          callee: Identifier { type: 'Identifier', name: 'dropLastChar' },
                                                                          arguments: 
                                                                           [ ComputedMemberExpression {
                                                                               type: 'MemberExpression',
                                                                               computed: true,
                                                                               object: Identifier { type: 'Identifier', name: 'words' },
                                                                               property: Identifier { type: 'Identifier', name: 'i' } } ] } ] } ] } },
                                                           ExpressionStatement {
                                                             type: 'ExpressionStatement',
                                                             expression: 
                                                              AssignmentExpression {
                                                                type: 'AssignmentExpression',
                                                                operator: '=',
                                                                left: 
                                                                 ComputedMemberExpression {
                                                                   type: 'MemberExpression',
                                                                   computed: true,
                                                                   object: Identifier { type: 'Identifier', name: 'words' },
                                                                   property: Identifier { type: 'Identifier', name: 'i' } },
                                                                right: 
                                                                 BinaryExpression {
                                                                   type: 'BinaryExpression',
                                                                   operator: '+',
                                                                   left: 
                                                                    BinaryExpression {
                                                                      type: 'BinaryExpression',
                                                                      operator: '+',
                                                                      left: Literal { type: 'Literal', value: ' ', raw: '" "' },
                                                                      right: 
                                                                       ComputedMemberExpression {
                                                                         type: 'MemberExpression',
                                                                         computed: true,
                                                                         object: Identifier { type: 'Identifier', name: 'words' },
                                                                         property: Identifier { type: 'Identifier', name: 'i' } } },
                                                                   right: Literal { type: 'Literal', value: '\n\t', raw: '"\\n\\t"' } } } },
                                                           ExpressionStatement {
                                                             type: 'ExpressionStatement',
                                                             expression: 
                                                              AssignmentExpression {
                                                                type: 'AssignmentExpression',
                                                                operator: '+=',
                                                                left: 
                                                                 ComputedMemberExpression {
                                                                   type: 'MemberExpression',
                                                                   computed: true,
                                                                   object: Identifier { type: 'Identifier', name: 'words' },
                                                                   property: 
                                                                    BinaryExpression {
                                                                      type: 'BinaryExpression',
                                                                      operator: '-',
                                                                      left: Identifier { type: 'Identifier', name: 'i' },
                                                                      right: Literal { type: 'Literal', value: 2, raw: '2' } } },
                                                                right: Literal { type: 'Literal', value: ' ', raw: '" "' } } } ] } } ] } } ] },
                                     alternate: 
                                      IfStatement {
                                        type: 'IfStatement',
                                        test: 
                                         CallExpression {
                                           type: 'CallExpression',
                                           callee: 
                                            StaticMemberExpression {
                                              type: 'MemberExpression',
                                              computed: false,
                                              object: 
                                               ComputedMemberExpression {
                                                 type: 'MemberExpression',
                                                 computed: true,
                                                 object: Identifier { type: 'Identifier', name: 'words' },
                                                 property: Identifier { type: 'Identifier', name: 'i' } },
                                              property: Identifier { type: 'Identifier', name: 'includes' } },
                                           arguments: [ Literal { type: 'Literal', value: '*', raw: '\'*\'' } ] },
                                        consequent: 
                                         BlockStatement {
                                           type: 'BlockStatement',
                                           body: 
                                            [ ExpressionStatement {
                                                type: 'ExpressionStatement',
                                                expression: 
                                                 CallExpression {
                                                   type: 'CallExpression',
                                                   callee: 
                                                    StaticMemberExpression {
                                                      type: 'MemberExpression',
                                                      computed: false,
                                                      object: 
                                                       ComputedMemberExpression {
                                                         type: 'MemberExpression',
                                                         computed: true,
                                                         object: Identifier { type: 'Identifier', name: 'varnames' },
                                                         property: 
                                                          BinaryExpression {
                                                            type: 'BinaryExpression',
                                                            operator: '-',
                                                            left: 
                                                             StaticMemberExpression {
                                                               type: 'MemberExpression',
                                                               computed: false,
                                                               object: Identifier { type: 'Identifier', name: 'structnames' },
                                                               property: Identifier { type: 'Identifier', name: 'length' } },
                                                            right: Literal { type: 'Literal', value: 1, raw: '1' } } },
                                                      property: Identifier { type: 'Identifier', name: 'push' } },
                                                   arguments: 
                                                    [ ArrayExpression {
                                                        type: 'ArrayExpression',
                                                        elements: 
                                                         [ CallExpression {
                                                             type: 'CallExpression',
                                                             callee: Identifier { type: 'Identifier', name: 'dropLastChar' },
                                                             arguments: 
                                                              [ ComputedMemberExpression {
                                                                  type: 'MemberExpression',
                                                                  computed: true,
                                                                  object: Identifier { type: 'Identifier', name: 'words' },
                                                                  property: 
                                                                   BinaryExpression {
                                                                     type: 'BinaryExpression',
                                                                     operator: '+',
                                                                     left: Identifier { type: 'Identifier', name: 'i' },
                                                                     right: Literal { type: 'Literal', value: 1, raw: '1' } } } ] },
                                                           Literal { type: 'Literal', value: 'p', raw: '"p"' },
                                                           CallExpression {
                                                             type: 'CallExpression',
                                                             callee: Identifier { type: 'Identifier', name: 'dropLastChar' },
                                                             arguments: 
                                                              [ ComputedMemberExpression {
                                                                  type: 'MemberExpression',
                                                                  computed: true,
                                                                  object: Identifier { type: 'Identifier', name: 'words' },
                                                                  property: Identifier { type: 'Identifier', name: 'i' } } ] } ] } ] } },
                                              ExpressionStatement {
                                                type: 'ExpressionStatement',
                                                expression: 
                                                 UpdateExpression {
                                                   type: 'UpdateExpression',
                                                   operator: '++',
                                                   argument: Identifier { type: 'Identifier', name: 'i' },
                                                   prefix: true } },
                                              ExpressionStatement {
                                                type: 'ExpressionStatement',
                                                expression: 
                                                 AssignmentExpression {
                                                   type: 'AssignmentExpression',
                                                   operator: '=',
                                                   left: 
                                                    ComputedMemberExpression {
                                                      type: 'MemberExpression',
                                                      computed: true,
                                                      object: Identifier { type: 'Identifier', name: 'words' },
                                                      property: Identifier { type: 'Identifier', name: 'i' } },
                                                   right: 
                                                    BinaryExpression {
                                                      type: 'BinaryExpression',
                                                      operator: '+',
                                                      left: 
                                                       BinaryExpression {
                                                         type: 'BinaryExpression',
                                                         operator: '+',
                                                         left: Literal { type: 'Literal', value: ' ', raw: '" "' },
                                                         right: 
                                                          ComputedMemberExpression {
                                                            type: 'MemberExpression',
                                                            computed: true,
                                                            object: Identifier { type: 'Identifier', name: 'words' },
                                                            property: Identifier { type: 'Identifier', name: 'i' } } },
                                                      right: Literal { type: 'Literal', value: '\n\t', raw: '"\\n\\t"' } } } } ] },
                                        alternate: 
                                         IfStatement {
                                           type: 'IfStatement',
                                           test: 
                                            BinaryExpression {
                                              type: 'BinaryExpression',
                                              operator: '===',
                                              left: 
                                               ComputedMemberExpression {
                                                 type: 'MemberExpression',
                                                 computed: true,
                                                 object: Identifier { type: 'Identifier', name: 'words' },
                                                 property: Identifier { type: 'Identifier', name: 'i' } },
                                              right: Literal { type: 'Literal', value: '};', raw: '\'};\'' } },
                                           consequent: BlockStatement { type: 'BlockStatement', body: [] },
                                           alternate: 
                                            IfStatement {
                                              type: 'IfStatement',
                                              test: 
                                               BinaryExpression {
                                                 type: 'BinaryExpression',
                                                 operator: '===',
                                                 left: 
                                                  ComputedMemberExpression {
                                                    type: 'MemberExpression',
                                                    computed: true,
                                                    object: Identifier { type: 'Identifier', name: 'words' },
                                                    property: Identifier { type: 'Identifier', name: 'i' } },
                                                 right: Literal { type: 'Literal', value: '{', raw: '\'{\'' } },
                                              consequent: 
                                               BlockStatement {
                                                 type: 'BlockStatement',
                                                 body: 
                                                  [ ExpressionStatement {
                                                      type: 'ExpressionStatement',
                                                      expression: 
                                                       AssignmentExpression {
                                                         type: 'AssignmentExpression',
                                                         operator: '+=',
                                                         left: 
                                                          ComputedMemberExpression {
                                                            type: 'MemberExpression',
                                                            computed: true,
                                                            object: Identifier { type: 'Identifier', name: 'words' },
                                                            property: Identifier { type: 'Identifier', name: 'i' } },
                                                         right: Literal { type: 'Literal', value: '\n\t', raw: '\'\\n\\t\'' } } } ] },
                                              alternate: 
                                               BlockStatement {
                                                 type: 'BlockStatement',
                                                 body: 
                                                  [ IfStatement {
                                                      type: 'IfStatement',
                                                      test: 
                                                       CallExpression {
                                                         type: 'CallExpression',
                                                         callee: 
                                                          StaticMemberExpression {
                                                            type: 'MemberExpression',
                                                            computed: false,
                                                            object: 
                                                             ComputedMemberExpression {
                                                               type: 'MemberExpression',
                                                               computed: true,
                                                               object: Identifier { type: 'Identifier', name: 'words' },
                                                               property: 
                                                                UpdateExpression {
                                                                  type: 'UpdateExpression',
                                                                  operator: '++',
                                                                  argument: Identifier { type: 'Identifier', name: 'i' },
                                                                  prefix: true } },
                                                            property: Identifier { type: 'Identifier', name: 'endsWith' } },
                                                         arguments: [ Literal { type: 'Literal', value: '];', raw: '\'];\'' } ] },
                                                      consequent: 
                                                       BlockStatement {
                                                         type: 'BlockStatement',
                                                         body: 
                                                          [ VariableDeclaration {
                                                              type: 'VariableDeclaration',
                                                              declarations: 
                                                               [ VariableDeclarator {
                                                                   type: 'VariableDeclarator',
                                                                   id: Identifier { type: 'Identifier', name: 'indexofopenbracket' },
                                                                   init: 
                                                                    CallExpression {
                                                                      type: 'CallExpression',
                                                                      callee: 
                                                                       StaticMemberExpression {
                                                                         type: 'MemberExpression',
                                                                         computed: false,
                                                                         object: 
                                                                          ComputedMemberExpression {
                                                                            type: 'MemberExpression',
                                                                            computed: true,
                                                                            object: Identifier { type: 'Identifier', name: 'words' },
                                                                            property: Identifier { type: 'Identifier', name: 'i' } },
                                                                         property: Identifier { type: 'Identifier', name: 'indexOf' } },
                                                                      arguments: [ Literal { type: 'Literal', value: '[', raw: '\'[\'' } ] } } ],
                                                              kind: 'let' },
                                                            VariableDeclaration {
                                                              type: 'VariableDeclaration',
                                                              declarations: 
                                                               [ VariableDeclarator {
                                                                   type: 'VariableDeclarator',
                                                                   id: Identifier { type: 'Identifier', name: 'indexofclosebracket' },
                                                                   init: 
                                                                    CallExpression {
                                                                      type: 'CallExpression',
                                                                      callee: 
                                                                       StaticMemberExpression {
                                                                         type: 'MemberExpression',
                                                                         computed: false,
                                                                         object: 
                                                                          ComputedMemberExpression {
                                                                            type: 'MemberExpression',
                                                                            computed: true,
                                                                            object: Identifier { type: 'Identifier', name: 'words' },
                                                                            property: Identifier { type: 'Identifier', name: 'i' } },
                                                                         property: Identifier { type: 'Identifier', name: 'indexOf' } },
                                                                      arguments: [ Literal { type: 'Literal', value: ']', raw: '\']\'' } ] } } ],
                                                              kind: 'let' },
                                                            VariableDeclaration {
                                                              type: 'VariableDeclaration',
                                                              declarations: 
                                                               [ VariableDeclarator {
                                                                   type: 'VariableDeclarator',
                                                                   id: Identifier { type: 'Identifier', name: 'length' },
                                                                   init: 
                                                                    CallExpression {
                                                                      type: 'CallExpression',
                                                                      callee: 
                                                                       StaticMemberExpression {
                                                                         type: 'MemberExpression',
                                                                         computed: false,
                                                                         object: 
                                                                          ComputedMemberExpression {
                                                                            type: 'MemberExpression',
                                                                            computed: true,
                                                                            object: Identifier { type: 'Identifier', name: 'words' },
                                                                            property: Identifier { type: 'Identifier', name: 'i' } },
                                                                         property: Identifier { type: 'Identifier', name: 'slice' } },
                                                                      arguments: 
                                                                       [ BinaryExpression {
                                                                           type: 'BinaryExpression',
                                                                           operator: '+',
                                                                           left: Identifier { type: 'Identifier', name: 'indexofopenbracket' },
                                                                           right: Literal { type: 'Literal', value: 1, raw: '1' } },
                                                                         Identifier { type: 'Identifier', name: 'indexofclosebracket' } ] } } ],
                                                              kind: 'const' },
                                                            ExpressionStatement {
                                                              type: 'ExpressionStatement',
                                                              expression: 
                                                               CallExpression {
                                                                 type: 'CallExpression',
                                                                 callee: 
                                                                  StaticMemberExpression {
                                                                    type: 'MemberExpression',
                                                                    computed: false,
                                                                    object: 
                                                                     ComputedMemberExpression {
                                                                       type: 'MemberExpression',
                                                                       computed: true,
                                                                       object: Identifier { type: 'Identifier', name: 'varnames' },
                                                                       property: 
                                                                        BinaryExpression {
                                                                          type: 'BinaryExpression',
                                                                          operator: '-',
                                                                          left: 
                                                                           StaticMemberExpression {
                                                                             type: 'MemberExpression',
                                                                             computed: false,
                                                                             object: Identifier { type: 'Identifier', name: 'structnames' },
                                                                             property: Identifier { type: 'Identifier', name: 'length' } },
                                                                          right: Literal { type: 'Literal', value: 1, raw: '1' } } },
                                                                    property: Identifier { type: 'Identifier', name: 'push' } },
                                                                 arguments: 
                                                                  [ ArrayExpression {
                                                                      type: 'ArrayExpression',
                                                                      elements: 
                                                                       [ CallExpression {
                                                                           type: 'CallExpression',
                                                                           callee: 
                                                                            StaticMemberExpression {
                                                                              type: 'MemberExpression',
                                                                              computed: false,
                                                                              object: 
                                                                               ComputedMemberExpression {
                                                                                 type: 'MemberExpression',
                                                                                 computed: true,
                                                                                 object: Identifier { type: 'Identifier', name: 'words' },
                                                                                 property: Identifier { type: 'Identifier', name: 'i' } },
                                                                              property: Identifier { type: 'Identifier', name: 'slice' } },
                                                                           arguments: 
                                                                            [ Literal { type: 'Literal', value: 0, raw: '0' },
                                                                              BinaryExpression {
                                                                                type: 'BinaryExpression',
                                                                                operator: '-',
                                                                                left: 
                                                                                 BinaryExpression {
                                                                                   type: 'BinaryExpression',
                                                                                   operator: '-',
                                                                                   left: 
                                                                                    StaticMemberExpression {
                                                                                      type: 'MemberExpression',
                                                                                      computed: false,
                                                                                      object: 
                                                                                       ComputedMemberExpression {
                                                                                         type: 'MemberExpression',
                                                                                         computed: true,
                                                                                         object: Identifier { type: 'Identifier', name: 'words' },
                                                                                         property: Identifier { type: 'Identifier', name: 'i' } },
                                                                                      property: Identifier { type: 'Identifier', name: 'length' } },
                                                                                   right: Literal { type: 'Literal', value: 2, raw: '2' } },
                                                                                right: 
                                                                                 BinaryExpression {
                                                                                   type: 'BinaryExpression',
                                                                                   operator: '-',
                                                                                   left: Identifier { type: 'Identifier', name: 'indexofclosebracket' },
                                                                                   right: Identifier { type: 'Identifier', name: 'indexofopenbracket' } } } ] },
                                                                         Identifier { type: 'Identifier', name: 'length' } ] } ] } },
                                                            ExpressionStatement {
                                                              type: 'ExpressionStatement',
                                                              expression: 
                                                               AssignmentExpression {
                                                                 type: 'AssignmentExpression',
                                                                 operator: '=',
                                                                 left: 
                                                                  ComputedMemberExpression {
                                                                    type: 'MemberExpression',
                                                                    computed: true,
                                                                    object: Identifier { type: 'Identifier', name: 'words' },
                                                                    property: Identifier { type: 'Identifier', name: 'i' } },
                                                                 right: 
                                                                  BinaryExpression {
                                                                    type: 'BinaryExpression',
                                                                    operator: '+',
                                                                    left: 
                                                                     BinaryExpression {
                                                                       type: 'BinaryExpression',
                                                                       operator: '+',
                                                                       left: Literal { type: 'Literal', value: ' ', raw: '" "' },
                                                                       right: 
                                                                        ComputedMemberExpression {
                                                                          type: 'MemberExpression',
                                                                          computed: true,
                                                                          object: Identifier { type: 'Identifier', name: 'words' },
                                                                          property: Identifier { type: 'Identifier', name: 'i' } } },
                                                                    right: Literal { type: 'Literal', value: '\n\t', raw: '"\\n\\t"' } } } } ] },
                                                      alternate: 
                                                       BlockStatement {
                                                         type: 'BlockStatement',
                                                         body: 
                                                          [ ExpressionStatement {
                                                              type: 'ExpressionStatement',
                                                              expression: 
                                                               CallExpression {
                                                                 type: 'CallExpression',
                                                                 callee: 
                                                                  StaticMemberExpression {
                                                                    type: 'MemberExpression',
                                                                    computed: false,
                                                                    object: 
                                                                     ComputedMemberExpression {
                                                                       type: 'MemberExpression',
                                                                       computed: true,
                                                                       object: Identifier { type: 'Identifier', name: 'varnames' },
                                                                       property: 
                                                                        BinaryExpression {
                                                                          type: 'BinaryExpression',
                                                                          operator: '-',
                                                                          left: 
                                                                           StaticMemberExpression {
                                                                             type: 'MemberExpression',
                                                                             computed: false,
                                                                             object: Identifier { type: 'Identifier', name: 'structnames' },
                                                                             property: Identifier { type: 'Identifier', name: 'length' } },
                                                                          right: Literal { type: 'Literal', value: 1, raw: '1' } } },
                                                                    property: Identifier { type: 'Identifier', name: 'push' } },
                                                                 arguments: 
                                                                  [ ArrayExpression {
                                                                      type: 'ArrayExpression',
                                                                      elements: 
                                                                       [ CallExpression {
                                                                           type: 'CallExpression',
                                                                           callee: Identifier { type: 'Identifier', name: 'dropLastChar' },
                                                                           arguments: 
                                                                            [ ComputedMemberExpression {
                                                                                type: 'MemberExpression',
                                                                                computed: true,
                                                                                object: Identifier { type: 'Identifier', name: 'words' },
                                                                                property: Identifier { type: 'Identifier', name: 'i' } } ] } ] } ] } },
                                                            ExpressionStatement {
                                                              type: 'ExpressionStatement',
                                                              expression: 
                                                               AssignmentExpression {
                                                                 type: 'AssignmentExpression',
                                                                 operator: '=',
                                                                 left: 
                                                                  ComputedMemberExpression {
                                                                    type: 'MemberExpression',
                                                                    computed: true,
                                                                    object: Identifier { type: 'Identifier', name: 'words' },
                                                                    property: Identifier { type: 'Identifier', name: 'i' } },
                                                                 right: 
                                                                  BinaryExpression {
                                                                    type: 'BinaryExpression',
                                                                    operator: '+',
                                                                    left: 
                                                                     BinaryExpression {
                                                                       type: 'BinaryExpression',
                                                                       operator: '+',
                                                                       left: Literal { type: 'Literal', value: ' ', raw: '" "' },
                                                                       right: 
                                                                        ComputedMemberExpression {
                                                                          type: 'MemberExpression',
                                                                          computed: true,
                                                                          object: Identifier { type: 'Identifier', name: 'words' },
                                                                          property: Identifier { type: 'Identifier', name: 'i' } } },
                                                                    right: Literal { type: 'Literal', value: '\n\t', raw: '"\\n\\t"' } } } } ] } } ] } } } } } } } ] } },
                     ExpressionStatement {
                       type: 'ExpressionStatement',
                       expression: 
                        CallExpression {
                          type: 'CallExpression',
                          callee: 
                           StaticMemberExpression {
                             type: 'MemberExpression',
                             computed: false,
                             object: Identifier { type: 'Identifier', name: 'console' },
                             property: Identifier { type: 'Identifier', name: 'log' } },
                          arguments: [ Identifier { type: 'Identifier', name: 'structnames' } ] } },
                     ExpressionStatement {
                       type: 'ExpressionStatement',
                       expression: 
                        CallExpression {
                          type: 'CallExpression',
                          callee: 
                           StaticMemberExpression {
                             type: 'MemberExpression',
                             computed: false,
                             object: Identifier { type: 'Identifier', name: 'console' },
                             property: Identifier { type: 'Identifier', name: 'log' } },
                          arguments: [ Identifier { type: 'Identifier', name: 'varnames' } ] } },
                     VariableDeclaration {
                       type: 'VariableDeclaration',
                       declarations: 
                        [ VariableDeclarator {
                            type: 'VariableDeclarator',
                            id: Identifier { type: 'Identifier', name: 'generatedcode' },
                            init: ArrayExpression { type: 'ArrayExpression', elements: [] } } ],
                       kind: 'const' },
                     ExpressionStatement {
                       type: 'ExpressionStatement',
                       expression: 
                        CallExpression {
                          type: 'CallExpression',
                          callee: 
                           StaticMemberExpression {
                             type: 'MemberExpression',
                             computed: false,
                             object: Identifier { type: 'Identifier', name: 'structnames' },
                             property: Identifier { type: 'Identifier', name: 'forEach' } },
                          arguments: 
                           [ ArrowFunctionExpression {
                               type: 'ArrowFunctionExpression',
                               id: null,
                               params: 
                                [ Identifier { type: 'Identifier', name: 'name' },
                                  Identifier { type: 'Identifier', name: 'i' } ],
                               body: 
                                BlockStatement {
                                  type: 'BlockStatement',
                                  body: 
                                   [ ExpressionStatement {
                                       type: 'ExpressionStatement',
                                       expression: 
                                        CallExpression {
                                          type: 'CallExpression',
                                          callee: 
                                           StaticMemberExpression {
                                             type: 'MemberExpression',
                                             computed: false,
                                             object: Identifier { type: 'Identifier', name: 'generatedcode' },
                                             property: Identifier { type: 'Identifier', name: 'push' } },
                                          arguments: [ ArrayExpression { type: 'ArrayExpression', elements: [] } ] } },
                                     VariableDeclaration {
                                       type: 'VariableDeclaration',
                                       declarations: 
                                        [ VariableDeclarator {
                                            type: 'VariableDeclarator',
                                            id: Identifier { type: 'Identifier', name: 'friendprotos' },
                                            init: 
                                             TemplateLiteral {
                                               type: 'TemplateLiteral',
                                               quasis: 
                                                [ TemplateElement {
                                                    type: 'TemplateElement',
                                                    value: 
                                                     { raw: '\\nprivate:\\n\\tfriend std::ostream& operator<<(std::ostream &os, const ',
                                                       cooked: '\nprivate:\n\tfriend std::ostream& operator<<(std::ostream &os, const ' },
                                                    tail: false },
                                                  TemplateElement {
                                                    type: 'TemplateElement',
                                                    value: 
                                                     { raw: ' &e);\\n\\tfriend std::istream& operator>>(std::istream &os, ',
                                                       cooked: ' &e);\n\tfriend std::istream& operator>>(std::istream &os, ' },
                                                    tail: false },
                                                  TemplateElement {
                                                    type: 'TemplateElement',
                                                    value: { raw: ' &e);\\n', cooked: ' &e);\n' },
                                                    tail: true } ],
                                               expressions: 
                                                [ Identifier { type: 'Identifier', name: 'name' },
                                                  Identifier { type: 'Identifier', name: 'name' } ] } } ],
                                       kind: 'const' },
                                     ExpressionStatement {
                                       type: 'ExpressionStatement',
                                       expression: 
                                        CallExpression {
                                          type: 'CallExpression',
                                          callee: 
                                           StaticMemberExpression {
                                             type: 'MemberExpression',
                                             computed: false,
                                             object: 
                                              ComputedMemberExpression {
                                                type: 'MemberExpression',
                                                computed: true,
                                                object: Identifier { type: 'Identifier', name: 'generatedcode' },
                                                property: Identifier { type: 'Identifier', name: 'i' } },
                                             property: Identifier { type: 'Identifier', name: 'push' } },
                                          arguments: [ Identifier { type: 'Identifier', name: 'friendprotos' } ] } },
                                     VariableDeclaration {
                                       type: 'VariableDeclaration',
                                       declarations: 
                                        [ VariableDeclarator {
                                            type: 'VariableDeclarator',
                                            id: Identifier { type: 'Identifier', name: 'outpart1' },
                                            init: 
                                             TemplateLiteral {
                                               type: 'TemplateLiteral',
                                               quasis: 
                                                [ TemplateElement {
                                                    type: 'TemplateElement',
                                                    value: 
                                                     { raw: '\\n\\nstd::ostream& operator<<(std::ostream &os, const ',
                                                       cooked: '\n\nstd::ostream& operator<<(std::ostream &os, const ' },
                                                    tail: false },
                                                  TemplateElement {
                                                    type: 'TemplateElement',
                                                    value: { raw: ' &e)\\n{\\n', cooked: ' &e)\n{\n' },
                                                    tail: true } ],
                                               expressions: [ Identifier { type: 'Identifier', name: 'name' } ] } } ],
                                       kind: 'let' },
                                     VariableDeclaration {
                                       type: 'VariableDeclaration',
                                       declarations: 
                                        [ VariableDeclarator {
                                            type: 'VariableDeclarator',
                                            id: Identifier { type: 'Identifier', name: 'end' },
                                            init: Literal { type: 'Literal', value: '}\n\n', raw: '\'}\\n\\n\'' } } ],
                                       kind: 'const' },
                                     ExpressionStatement {
                                       type: 'ExpressionStatement',
                                       expression: 
                                        CallExpression {
                                          type: 'CallExpression',
                                          callee: 
                                           StaticMemberExpression {
                                             type: 'MemberExpression',
                                             computed: false,
                                             object: 
                                              ComputedMemberExpression {
                                                type: 'MemberExpression',
                                                computed: true,
                                                object: Identifier { type: 'Identifier', name: 'varnames' },
                                                property: Identifier { type: 'Identifier', name: 'i' } },
                                             property: Identifier { type: 'Identifier', name: 'forEach' } },
                                          arguments: 
                                           [ ArrowFunctionExpression {
                                               type: 'ArrowFunctionExpression',
                                               id: null,
                                               params: [ Identifier { type: 'Identifier', name: 'varname' } ],
                                               body: 
                                                BlockStatement {
                                                  type: 'BlockStatement',
                                                  body: 
                                                   [ IfStatement {
                                                       type: 'IfStatement',
                                                       test: 
                                                        BinaryExpression {
                                                          type: 'BinaryExpression',
                                                          operator: '>',
                                                          left: 
                                                           StaticMemberExpression {
                                                             type: 'MemberExpression',
                                                             computed: false,
                                                             object: Identifier { type: 'Identifier', name: 'varname' },
                                                             property: Identifier { type: 'Identifier', name: 'length' } },
                                                          right: Literal { type: 'Literal', value: 1, raw: '1' } },
                                                       consequent: 
                                                        BlockStatement {
                                                          type: 'BlockStatement',
                                                          body: 
                                                           [ IfStatement {
                                                               type: 'IfStatement',
                                                               test: 
                                                                BinaryExpression {
                                                                  type: 'BinaryExpression',
                                                                  operator: '===',
                                                                  left: 
                                                                   ComputedMemberExpression {
                                                                     type: 'MemberExpression',
                                                                     computed: true,
                                                                     object: Identifier { type: 'Identifier', name: 'varname' },
                                                                     property: Literal { type: 'Literal', value: 1, raw: '1' } },
                                                                  right: Literal { type: 'Literal', value: 'p', raw: '\'p\'' } },
                                                               consequent: 
                                                                BlockStatement {
                                                                  type: 'BlockStatement',
                                                                  body: 
                                                                   [ VariableDeclaration {
                                                                       type: 'VariableDeclaration',
                                                                       declarations: 
                                                                        [ VariableDeclarator {
                                                                            type: 'VariableDeclarator',
                                                                            id: Identifier { type: 'Identifier', name: 'pointerputto' },
                                                                            init: 
                                                                             TemplateLiteral {
                                                                               type: 'TemplateLiteral',
                                                                               quasis: 
                                                                                [ TemplateElement {
                                                                                    type: 'TemplateElement',
                                                                                    value: { raw: '\\tif (e.', cooked: '\tif (e.' },
                                                                                    tail: false },
                                                                                  TemplateElement {
                                                                                    type: 'TemplateElement',
                                                                                    value: { raw: ') {\\n\\t\\tos << *e.', cooked: ') {\n\t\tos << *e.' },
                                                                                    tail: false },
                                                                                  TemplateElement {
                                                                                    type: 'TemplateElement',
                                                                                    value: 
                                                                                     { raw: ' << "\\\\n";\\n\\t}\\n\\telse {\\n\\t\\tos << "p___" << "\\\\n";\\n\\t}\\n',
                                                                                       cooked: ' << "\\n";\n\t}\n\telse {\n\t\tos << "p___" << "\\n";\n\t}\n' },
                                                                                    tail: true } ],
                                                                               expressions: 
                                                                                [ ComputedMemberExpression {
                                                                                    type: 'MemberExpression',
                                                                                    computed: true,
                                                                                    object: Identifier { type: 'Identifier', name: 'varname' },
                                                                                    property: Literal { type: 'Literal', value: 0, raw: '0' } },
                                                                                  ComputedMemberExpression {
                                                                                    type: 'MemberExpression',
                                                                                    computed: true,
                                                                                    object: Identifier { type: 'Identifier', name: 'varname' },
                                                                                    property: Literal { type: 'Literal', value: 0, raw: '0' } } ] } } ],
                                                                       kind: 'const' },
                                                                     ExpressionStatement {
                                                                       type: 'ExpressionStatement',
                                                                       expression: 
                                                                        AssignmentExpression {
                                                                          type: 'AssignmentExpression',
                                                                          operator: '+=',
                                                                          left: Identifier { type: 'Identifier', name: 'outpart1' },
                                                                          right: Identifier { type: 'Identifier', name: 'pointerputto' } } } ] },
                                                               alternate: 
                                                                BlockStatement {
                                                                  type: 'BlockStatement',
                                                                  body: 
                                                                   [ VariableDeclaration {
                                                                       type: 'VariableDeclaration',
                                                                       declarations: 
                                                                        [ VariableDeclarator {
                                                                            type: 'VariableDeclarator',
                                                                            id: Identifier { type: 'Identifier', name: 'arrayputto' },
                                                                            init: 
                                                                             TemplateLiteral {
                                                                               type: 'TemplateLiteral',
                                                                               quasis: 
                                                                                [ TemplateElement {
                                                                                    type: 'TemplateElement',
                                                                                    value: 
                                                                                     { raw: '\\tfor (int i = 0; i < ',
                                                                                       cooked: '\tfor (int i = 0; i < ' },
                                                                                    tail: false },
                                                                                  TemplateElement {
                                                                                    type: 'TemplateElement',
                                                                                    value: 
                                                                                     { raw: '; i++)\\n\\t{\\n\\t\\tos << e.',
                                                                                       cooked: '; i++)\n\t{\n\t\tos << e.' },
                                                                                    tail: false },
                                                                                  TemplateElement {
                                                                                    type: 'TemplateElement',
                                                                                    value: 
                                                                                     { raw: '[i] << "\\\\n";\\n\\t}\\n',
                                                                                       cooked: '[i] << "\\n";\n\t}\n' },
                                                                                    tail: true } ],
                                                                               expressions: 
                                                                                [ ComputedMemberExpression {
                                                                                    type: 'MemberExpression',
                                                                                    computed: true,
                                                                                    object: Identifier { type: 'Identifier', name: 'varname' },
                                                                                    property: Literal { type: 'Literal', value: 1, raw: '1' } },
                                                                                  ComputedMemberExpression {
                                                                                    type: 'MemberExpression',
                                                                                    computed: true,
                                                                                    object: Identifier { type: 'Identifier', name: 'varname' },
                                                                                    property: Literal { type: 'Literal', value: 0, raw: '0' } } ] } } ],
                                                                       kind: 'const' },
                                                                     ExpressionStatement {
                                                                       type: 'ExpressionStatement',
                                                                       expression: 
                                                                        AssignmentExpression {
                                                                          type: 'AssignmentExpression',
                                                                          operator: '+=',
                                                                          left: Identifier { type: 'Identifier', name: 'outpart1' },
                                                                          right: Identifier { type: 'Identifier', name: 'arrayputto' } } } ] } } ] },
                                                       alternate: 
                                                        BlockStatement {
                                                          type: 'BlockStatement',
                                                          body: 
                                                           [ VariableDeclaration {
                                                               type: 'VariableDeclaration',
                                                               declarations: 
                                                                [ VariableDeclarator {
                                                                    type: 'VariableDeclarator',
                                                                    id: Identifier { type: 'Identifier', name: 'regputto' },
                                                                    init: 
                                                                     TemplateLiteral {
                                                                       type: 'TemplateLiteral',
                                                                       quasis: 
                                                                        [ TemplateElement {
                                                                            type: 'TemplateElement',
                                                                            value: { raw: '\\tos << e.', cooked: '\tos << e.' },
                                                                            tail: false },
                                                                          TemplateElement {
                                                                            type: 'TemplateElement',
                                                                            value: { raw: ' << "\\\\n";\\n', cooked: ' << "\\n";\n' },
                                                                            tail: true } ],
                                                                       expressions: [ Identifier { type: 'Identifier', name: 'varname' } ] } } ],
                                                               kind: 'const' },
                                                             ExpressionStatement {
                                                               type: 'ExpressionStatement',
                                                               expression: 
                                                                AssignmentExpression {
                                                                  type: 'AssignmentExpression',
                                                                  operator: '+=',
                                                                  left: Identifier { type: 'Identifier', name: 'outpart1' },
                                                                  right: Identifier { type: 'Identifier', name: 'regputto' } } } ] } } ] },
                                               generator: false,
                                               expression: false,
                                               async: false } ] } },
                                     ExpressionStatement {
                                       type: 'ExpressionStatement',
                                       expression: 
                                        AssignmentExpression {
                                          type: 'AssignmentExpression',
                                          operator: '+=',
                                          left: Identifier { type: 'Identifier', name: 'outpart1' },
                                          right: 
                                           Literal {
                                             type: 'Literal',
                                             value: '\treturn os;\n',
                                             raw: '\'\\treturn os;\\n\'' } } },
                                     ExpressionStatement {
                                       type: 'ExpressionStatement',
                                       expression: 
                                        AssignmentExpression {
                                          type: 'AssignmentExpression',
                                          operator: '+=',
                                          left: Identifier { type: 'Identifier', name: 'outpart1' },
                                          right: Identifier { type: 'Identifier', name: 'end' } } },
                                     ExpressionStatement {
                                       type: 'ExpressionStatement',
                                       expression: 
                                        AssignmentExpression {
                                          type: 'AssignmentExpression',
                                          operator: '+=',
                                          left: Identifier { type: 'Identifier', name: 'outpart1' },
                                          right: 
                                           TemplateLiteral {
                                             type: 'TemplateLiteral',
                                             quasis: 
                                              [ TemplateElement {
                                                  type: 'TemplateElement',
                                                  value: 
                                                   { raw: 'std::istream& operator>>(std::istream &os, ',
                                                     cooked: 'std::istream& operator>>(std::istream &os, ' },
                                                  tail: false },
                                                TemplateElement {
                                                  type: 'TemplateElement',
                                                  value: { raw: ' &e)\\n{\\n', cooked: ' &e)\n{\n' },
                                                  tail: true } ],
                                             expressions: [ Identifier { type: 'Identifier', name: 'name' } ] } } },
                                     ExpressionStatement {
                                       type: 'ExpressionStatement',
                                       expression: 
                                        CallExpression {
                                          type: 'CallExpression',
                                          callee: 
                                           StaticMemberExpression {
                                             type: 'MemberExpression',
                                             computed: false,
                                             object: 
                                              ComputedMemberExpression {
                                                type: 'MemberExpression',
                                                computed: true,
                                                object: Identifier { type: 'Identifier', name: 'varnames' },
                                                property: Identifier { type: 'Identifier', name: 'i' } },
                                             property: Identifier { type: 'Identifier', name: 'forEach' } },
                                          arguments: 
                                           [ ArrowFunctionExpression {
                                               type: 'ArrowFunctionExpression',
                                               id: null,
                                               params: [ Identifier { type: 'Identifier', name: 'varname' } ],
                                               body: 
                                                BlockStatement {
                                                  type: 'BlockStatement',
                                                  body: 
                                                   [ IfStatement {
                                                       type: 'IfStatement',
                                                       test: 
                                                        BinaryExpression {
                                                          type: 'BinaryExpression',
                                                          operator: '>',
                                                          left: 
                                                           StaticMemberExpression {
                                                             type: 'MemberExpression',
                                                             computed: false,
                                                             object: Identifier { type: 'Identifier', name: 'varname' },
                                                             property: Identifier { type: 'Identifier', name: 'length' } },
                                                          right: Literal { type: 'Literal', value: 1, raw: '1' } },
                                                       consequent: 
                                                        BlockStatement {
                                                          type: 'BlockStatement',
                                                          body: 
                                                           [ IfStatement {
                                                               type: 'IfStatement',
                                                               test: 
                                                                BinaryExpression {
                                                                  type: 'BinaryExpression',
                                                                  operator: '===',
                                                                  left: 
                                                                   ComputedMemberExpression {
                                                                     type: 'MemberExpression',
                                                                     computed: true,
                                                                     object: Identifier { type: 'Identifier', name: 'varname' },
                                                                     property: Literal { type: 'Literal', value: 1, raw: '1' } },
                                                                  right: Literal { type: 'Literal', value: 'p', raw: '\'p\'' } },
                                                               consequent: 
                                                                BlockStatement {
                                                                  type: 'BlockStatement',
                                                                  body: 
                                                                   [ VariableDeclaration {
                                                                       type: 'VariableDeclaration',
                                                                       declarations: 
                                                                        [ VariableDeclarator {
                                                                            type: 'VariableDeclarator',
                                                                            id: Identifier { type: 'Identifier', name: 'pointerputto' },
                                                                            init: 
                                                                             TemplateLiteral {
                                                                               type: 'TemplateLiteral',
                                                                               quasis: 
                                                                                [ TemplateElement {
                                                                                    type: 'TemplateElement',
                                                                                    value: 
                                                                                     { raw: '\\tchar key[5];\\n\\tos >> key;\\n\\tif (!strcmp(key, "p___")) {\\n\\t\\te.',
                                                                                       cooked: '\tchar key[5];\n\tos >> key;\n\tif (!strcmp(key, "p___")) {\n\t\te.' },
                                                                                    tail: false },
                                                                                  TemplateElement {
                                                                                    type: 'TemplateElement',
                                                                                    value: 
                                                                                     { raw: ' = nullptr;\\n\\t}\\n\\telse {\\n\\t\\tfor (int i = 0; i < 5; i++) {\\n\\t\\t\\tos.putback(key[i]);\\n\\t\\t}\\n\\t\\te.',
                                                                                       cooked: ' = nullptr;\n\t}\n\telse {\n\t\tfor (int i = 0; i < 5; i++) {\n\t\t\tos.putback(key[i]);\n\t\t}\n\t\te.' },
                                                                                    tail: false },
                                                                                  TemplateElement {
                                                                                    type: 'TemplateElement',
                                                                                    value: { raw: ' = new ', cooked: ' = new ' },
                                                                                    tail: false },
                                                                                  TemplateElement {
                                                                                    type: 'TemplateElement',
                                                                                    value: { raw: ';\\n\\t\\tos >> *e.', cooked: ';\n\t\tos >> *e.' },
                                                                                    tail: false },
                                                                                  TemplateElement {
                                                                                    type: 'TemplateElement',
                                                                                    value: { raw: ';\\n\\t}\\n', cooked: ';\n\t}\n' },
                                                                                    tail: true } ],
                                                                               expressions: 
                                                                                [ ComputedMemberExpression {
                                                                                    type: 'MemberExpression',
                                                                                    computed: true,
                                                                                    object: Identifier { type: 'Identifier', name: 'varname' },
                                                                                    property: Literal { type: 'Literal', value: 0, raw: '0' } },
                                                                                  ComputedMemberExpression {
                                                                                    type: 'MemberExpression',
                                                                                    computed: true,
                                                                                    object: Identifier { type: 'Identifier', name: 'varname' },
                                                                                    property: Literal { type: 'Literal', value: 0, raw: '0' } },
                                                                                  ComputedMemberExpression {
                                                                                    type: 'MemberExpression',
                                                                                    computed: true,
                                                                                    object: Identifier { type: 'Identifier', name: 'varname' },
                                                                                    property: Literal { type: 'Literal', value: 2, raw: '2' } },
                                                                                  ComputedMemberExpression {
                                                                                    type: 'MemberExpression',
                                                                                    computed: true,
                                                                                    object: Identifier { type: 'Identifier', name: 'varname' },
                                                                                    property: Literal { type: 'Literal', value: 0, raw: '0' } } ] } } ],
                                                                       kind: 'const' },
                                                                     ExpressionStatement {
                                                                       type: 'ExpressionStatement',
                                                                       expression: 
                                                                        AssignmentExpression {
                                                                          type: 'AssignmentExpression',
                                                                          operator: '+=',
                                                                          left: Identifier { type: 'Identifier', name: 'outpart1' },
                                                                          right: Identifier { type: 'Identifier', name: 'pointerputto' } } } ] },
                                                               alternate: 
                                                                BlockStatement {
                                                                  type: 'BlockStatement',
                                                                  body: 
                                                                   [ VariableDeclaration {
                                                                       type: 'VariableDeclaration',
                                                                       declarations: 
                                                                        [ VariableDeclarator {
                                                                            type: 'VariableDeclarator',
                                                                            id: Identifier { type: 'Identifier', name: 'arrayputto' },
                                                                            init: 
                                                                             TemplateLiteral {
                                                                               type: 'TemplateLiteral',
                                                                               quasis: 
                                                                                [ TemplateElement {
                                                                                    type: 'TemplateElement',
                                                                                    value: 
                                                                                     { raw: '\\tfor (int i = 0; i < ',
                                                                                       cooked: '\tfor (int i = 0; i < ' },
                                                                                    tail: false },
                                                                                  TemplateElement {
                                                                                    type: 'TemplateElement',
                                                                                    value: 
                                                                                     { raw: '; i++)\\n\\t{\\n\\t\\tos >> e.',
                                                                                       cooked: '; i++)\n\t{\n\t\tos >> e.' },
                                                                                    tail: false },
                                                                                  TemplateElement {
                                                                                    type: 'TemplateElement',
                                                                                    value: { raw: '[i];\\n\\t}\\n', cooked: '[i];\n\t}\n' },
                                                                                    tail: true } ],
                                                                               expressions: 
                                                                                [ ComputedMemberExpression {
                                                                                    type: 'MemberExpression',
                                                                                    computed: true,
                                                                                    object: Identifier { type: 'Identifier', name: 'varname' },
                                                                                    property: Literal { type: 'Literal', value: 1, raw: '1' } },
                                                                                  ComputedMemberExpression {
                                                                                    type: 'MemberExpression',
                                                                                    computed: true,
                                                                                    object: Identifier { type: 'Identifier', name: 'varname' },
                                                                                    property: Literal { type: 'Literal', value: 0, raw: '0' } } ] } } ],
                                                                       kind: 'const' },
                                                                     ExpressionStatement {
                                                                       type: 'ExpressionStatement',
                                                                       expression: 
                                                                        AssignmentExpression {
                                                                          type: 'AssignmentExpression',
                                                                          operator: '+=',
                                                                          left: Identifier { type: 'Identifier', name: 'outpart1' },
                                                                          right: Identifier { type: 'Identifier', name: 'arrayputto' } } } ] } } ] },
                                                       alternate: 
                                                        BlockStatement {
                                                          type: 'BlockStatement',
                                                          body: 
                                                           [ VariableDeclaration {
                                                               type: 'VariableDeclaration',
                                                               declarations: 
                                                                [ VariableDeclarator {
                                                                    type: 'VariableDeclarator',
                                                                    id: Identifier { type: 'Identifier', name: 'regputto' },
                                                                    init: 
                                                                     TemplateLiteral {
                                                                       type: 'TemplateLiteral',
                                                                       quasis: 
                                                                        [ TemplateElement {
                                                                            type: 'TemplateElement',
                                                                            value: { raw: '\\tos >> e.', cooked: '\tos >> e.' },
                                                                            tail: false },
                                                                          TemplateElement {
                                                                            type: 'TemplateElement',
                                                                            value: { raw: ';\\n', cooked: ';\n' },
                                                                            tail: true } ],
                                                                       expressions: [ Identifier { type: 'Identifier', name: 'varname' } ] } } ],
                                                               kind: 'const' },
                                                             ExpressionStatement {
                                                               type: 'ExpressionStatement',
                                                               expression: 
                                                                AssignmentExpression {
                                                                  type: 'AssignmentExpression',
                                                                  operator: '+=',
                                                                  left: Identifier { type: 'Identifier', name: 'outpart1' },
                                                                  right: Identifier { type: 'Identifier', name: 'regputto' } } } ] } } ] },
                                               generator: false,
                                               expression: false,
                                               async: false } ] } },
                                     ExpressionStatement {
                                       type: 'ExpressionStatement',
                                       expression: 
                                        AssignmentExpression {
                                          type: 'AssignmentExpression',
                                          operator: '+=',
                                          left: Identifier { type: 'Identifier', name: 'outpart1' },
                                          right: 
                                           Literal {
                                             type: 'Literal',
                                             value: '\treturn os;\n',
                                             raw: '\'\\treturn os;\\n\'' } } },
                                     ExpressionStatement {
                                       type: 'ExpressionStatement',
                                       expression: 
                                        AssignmentExpression {
                                          type: 'AssignmentExpression',
                                          operator: '+=',
                                          left: Identifier { type: 'Identifier', name: 'outpart1' },
                                          right: 
                                           BinaryExpression {
                                             type: 'BinaryExpression',
                                             operator: '+',
                                             left: Identifier { type: 'Identifier', name: 'end' },
                                             right: Literal { type: 'Literal', value: '\n', raw: '\'\\n\'' } } } },
                                     ExpressionStatement {
                                       type: 'ExpressionStatement',
                                       expression: 
                                        CallExpression {
                                          type: 'CallExpression',
                                          callee: 
                                           StaticMemberExpression {
                                             type: 'MemberExpression',
                                             computed: false,
                                             object: 
                                              ComputedMemberExpression {
                                                type: 'MemberExpression',
                                                computed: true,
                                                object: Identifier { type: 'Identifier', name: 'generatedcode' },
                                                property: Identifier { type: 'Identifier', name: 'i' } },
                                             property: Identifier { type: 'Identifier', name: 'push' } },
                                          arguments: [ Identifier { type: 'Identifier', name: 'outpart1' } ] } } ] },
                               generator: false,
                               expression: false,
                               async: false } ] } },
                     ForStatement {
                       type: 'ForStatement',
                       init: 
                        VariableDeclaration {
                          type: 'VariableDeclaration',
                          declarations: 
                           [ VariableDeclarator {
                               type: 'VariableDeclarator',
                               id: Identifier { type: 'Identifier', name: 'i' },
                               init: Literal { type: 'Literal', value: 0, raw: '0' } } ],
                          kind: 'let' },
                       test: 
                        BinaryExpression {
                          type: 'BinaryExpression',
                          operator: '<',
                          left: Identifier { type: 'Identifier', name: 'i' },
                          right: 
                           StaticMemberExpression {
                             type: 'MemberExpression',
                             computed: false,
                             object: Identifier { type: 'Identifier', name: 'structnames' },
                             property: Identifier { type: 'Identifier', name: 'length' } } },
                       update: 
                        UpdateExpression {
                          type: 'UpdateExpression',
                          operator: '++',
                          argument: Identifier { type: 'Identifier', name: 'i' },
                          prefix: true },
                       body: 
                        BlockStatement {
                          type: 'BlockStatement',
                          body: 
                           [ VariableDeclaration {
                               type: 'VariableDeclaration',
                               declarations: 
                                [ VariableDeclarator {
                                    type: 'VariableDeclarator',
                                    id: Identifier { type: 'Identifier', name: 'index' },
                                    init: 
                                     CallExpression {
                                       type: 'CallExpression',
                                       callee: 
                                        StaticMemberExpression {
                                          type: 'MemberExpression',
                                          computed: false,
                                          object: Identifier { type: 'Identifier', name: 'words' },
                                          property: Identifier { type: 'Identifier', name: 'indexOf' } },
                                       arguments: 
                                        [ ComputedMemberExpression {
                                            type: 'MemberExpression',
                                            computed: true,
                                            object: Identifier { type: 'Identifier', name: 'structnames' },
                                            property: Identifier { type: 'Identifier', name: 'i' } } ] } } ],
                               kind: 'let' },
                             ExpressionStatement {
                               type: 'ExpressionStatement',
                               expression: 
                                AssignmentExpression {
                                  type: 'AssignmentExpression',
                                  operator: '=',
                                  left: Identifier { type: 'Identifier', name: 'index' },
                                  right: 
                                   CallExpression {
                                     type: 'CallExpression',
                                     callee: 
                                      StaticMemberExpression {
                                        type: 'MemberExpression',
                                        computed: false,
                                        object: Identifier { type: 'Identifier', name: 'words' },
                                        property: Identifier { type: 'Identifier', name: 'indexOf' } },
                                     arguments: 
                                      [ Literal { type: 'Literal', value: '};', raw: '\'};\'' },
                                        Identifier { type: 'Identifier', name: 'index' } ] } } },
                             ExpressionStatement {
                               type: 'ExpressionStatement',
                               expression: 
                                CallExpression {
                                  type: 'CallExpression',
                                  callee: 
                                   StaticMemberExpression {
                                     type: 'MemberExpression',
                                     computed: false,
                                     object: Identifier { type: 'Identifier', name: 'words' },
                                     property: Identifier { type: 'Identifier', name: 'splice' } },
                                  arguments: 
                                   [ Identifier { type: 'Identifier', name: 'index' },
                                     Literal { type: 'Literal', value: 0, raw: '0' },
                                     ComputedMemberExpression {
                                       type: 'MemberExpression',
                                       computed: true,
                                       object: 
                                        ComputedMemberExpression {
                                          type: 'MemberExpression',
                                          computed: true,
                                          object: Identifier { type: 'Identifier', name: 'generatedcode' },
                                          property: Identifier { type: 'Identifier', name: 'i' } },
                                       property: Literal { type: 'Literal', value: 0, raw: '0' } } ] } },
                             ExpressionStatement {
                               type: 'ExpressionStatement',
                               expression: 
                                CallExpression {
                                  type: 'CallExpression',
                                  callee: 
                                   StaticMemberExpression {
                                     type: 'MemberExpression',
                                     computed: false,
                                     object: Identifier { type: 'Identifier', name: 'words' },
                                     property: Identifier { type: 'Identifier', name: 'splice' } },
                                  arguments: 
                                   [ BinaryExpression {
                                       type: 'BinaryExpression',
                                       operator: '+',
                                       left: Identifier { type: 'Identifier', name: 'index' },
                                       right: Literal { type: 'Literal', value: 2, raw: '2' } },
                                     Literal { type: 'Literal', value: 0, raw: '0' },
                                     ComputedMemberExpression {
                                       type: 'MemberExpression',
                                       computed: true,
                                       object: 
                                        ComputedMemberExpression {
                                          type: 'MemberExpression',
                                          computed: true,
                                          object: Identifier { type: 'Identifier', name: 'generatedcode' },
                                          property: Identifier { type: 'Identifier', name: 'i' } },
                                       property: Literal { type: 'Literal', value: 1, raw: '1' } } ] } } ] } },
                     ExpressionStatement {
                       type: 'ExpressionStatement',
                       expression: 
                        AssignmentExpression {
                          type: 'AssignmentExpression',
                          operator: '=',
                          left: 
                           StaticMemberExpression {
                             type: 'MemberExpression',
                             computed: false,
                             object: Identifier { type: 'Identifier', name: 'output' },
                             property: Identifier { type: 'Identifier', name: 'value' } },
                          right: 
                           CallExpression {
                             type: 'CallExpression',
                             callee: 
                              StaticMemberExpression {
                                type: 'MemberExpression',
                                computed: false,
                                object: Identifier { type: 'Identifier', name: 'words' },
                                property: Identifier { type: 'Identifier', name: 'join' } },
                             arguments: [ Literal { type: 'Literal', value: '', raw: '""' } ] } } } ] },
               generator: false,
               expression: false,
               async: false } } ],
       kind: 'const' },
     ExpressionStatement {
       type: 'ExpressionStatement',
       expression: 
        AssignmentExpression {
          type: 'AssignmentExpression',
          operator: '=',
          left: 
           StaticMemberExpression {
             type: 'MemberExpression',
             computed: false,
             object: Identifier { type: 'Identifier', name: 'window' },
             property: Identifier { type: 'Identifier', name: 'onload' } },
          right: 
           ArrowFunctionExpression {
             type: 'ArrowFunctionExpression',
             id: null,
             params: [],
             body: 
              BlockStatement {
                type: 'BlockStatement',
                body: 
                 [ VariableDeclaration {
                     type: 'VariableDeclaration',
                     declarations: 
                      [ VariableDeclarator {
                          type: 'VariableDeclarator',
                          id: Identifier { type: 'Identifier', name: 'genbutton' },
                          init: 
                           CallExpression {
                             type: 'CallExpression',
                             callee: 
                              StaticMemberExpression {
                                type: 'MemberExpression',
                                computed: false,
                                object: Identifier { type: 'Identifier', name: 'document' },
                                property: Identifier { type: 'Identifier', name: 'getElementById' } },
                             arguments: 
                              [ Literal { type: 'Literal', value: 'genbutton', raw: '"genbutton"' } ] } } ],
                     kind: 'const' },
                   VariableDeclaration {
                     type: 'VariableDeclaration',
                     declarations: 
                      [ VariableDeclarator {
                          type: 'VariableDeclarator',
                          id: Identifier { type: 'Identifier', name: 'input' },
                          init: 
                           CallExpression {
                             type: 'CallExpression',
                             callee: 
                              StaticMemberExpression {
                                type: 'MemberExpression',
                                computed: false,
                                object: Identifier { type: 'Identifier', name: 'document' },
                                property: Identifier { type: 'Identifier', name: 'getElementById' } },
                             arguments: [ Literal { type: 'Literal', value: 'input', raw: '"input"' } ] } } ],
                     kind: 'const' },
                   VariableDeclaration {
                     type: 'VariableDeclaration',
                     declarations: 
                      [ VariableDeclarator {
                          type: 'VariableDeclarator',
                          id: Identifier { type: 'Identifier', name: 'output' },
                          init: 
                           CallExpression {
                             type: 'CallExpression',
                             callee: 
                              StaticMemberExpression {
                                type: 'MemberExpression',
                                computed: false,
                                object: Identifier { type: 'Identifier', name: 'document' },
                                property: Identifier { type: 'Identifier', name: 'getElementById' } },
                             arguments: 
                              [ Literal { type: 'Literal', value: 'output', raw: '"output"' } ] } } ],
                     kind: 'const' },
                   ExpressionStatement {
                     type: 'ExpressionStatement',
                     expression: 
                      AssignmentExpression {
                        type: 'AssignmentExpression',
                        operator: '=',
                        left: 
                         StaticMemberExpression {
                           type: 'MemberExpression',
                           computed: false,
                           object: Identifier { type: 'Identifier', name: 'genbutton' },
                           property: Identifier { type: 'Identifier', name: 'onclick' } },
                        right: Identifier { type: 'Identifier', name: 'generate' } } } ] },
             generator: false,
             expression: false,
             async: false } } } ],
  sourceType: 'script' }