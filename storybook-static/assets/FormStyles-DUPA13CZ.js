import{R as ot,r as pr}from"./index-D4lIrffr.js";var R=function(){return R=Object.assign||function(r){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=e[s])}return r},R.apply(this,arguments)};/**
 * Concatenates two arrays, optionally copying elements from the second array up to a specified index.
 *
 * If the third argument is truthy or only two arguments are provided, elements from the second array are shallow-copied up to the current index before concatenation.
 *
 * @param {Array} t - The first array.
 * @param {Array} r - The second array.
 * @param {boolean} [e] - If truthy, triggers shallow copying of elements from {@link r}.
 * @returns {Array} A new array containing the elements of {@link t} followed by the (possibly copied) elements of {@link r}.
 */
function wt(t,r,e){if(e||arguments.length===2)for(var n=0,o=r.length,s;n<o;n++)(s||!(n in r))&&(s||(s=Array.prototype.slice.call(r,0,n)),s[n]=r[n]);return t.concat(s||Array.prototype.slice.call(r))}var b="-ms-",nt="-moz-",d="-webkit-",dr="comm",Ct="rule",Wt="decl",Wr="@import",lr="@keyframes",Yr="@layer",hr=Math.abs,Yt=String.fromCharCode,Tt=Object.assign;/**
 * Generates a 20-bit hash from a 4-character string.
 *
 * The hash is computed by combining the character codes of the string's first four characters using bitwise operations. If the first character is a hyphen (`-`), the function returns 0.
 *
 * @param {string} t - The input string, expected to be at least 4 characters long.
 * @param {number} r - An initial integer value to mix into the hash.
 * @returns {number} A 20-bit integer hash derived from the input string and {@link r}.
 */
function Hr(t,r){return E(t,0)^45?(((r<<2^E(t,0))<<2^E(t,1))<<2^E(t,2))<<2^E(t,3):0}/**
 * Removes leading and trailing whitespace from a string.
 *
 * @param {string} t - The string to trim.
 * @returns {string} The trimmed string.
 */
function gr(t){return t.trim()}/**
 * Returns the first match of a regular expression in a string, or the original string if no match is found.
 *
 * @param {string} t - The string to search.
 * @param {RegExp} r - The regular expression to execute.
 * @returns {string} The matched substring if found; otherwise, the original string.
 */
function T(t,r){return(t=r.exec(t))?t[0]:t}/**
 * Returns a new string with all occurrences matching the pattern replaced by the specified replacement.
 *
 * @param {string} t - The input string to modify.
 * @param {RegExp|string} r - The pattern to search for, as a string or regular expression.
 * @param {string|function} e - The replacement string or a function to generate the replacement.
 * @returns {string} The resulting string after replacements.
 */
function u(t,r,e){return t.replace(r,e)}/**
 * Returns the index of the first occurrence of a substring within a string, starting from a specified position.
 *
 * @param {string} t - The string to search within.
 * @param {string} r - The substring to search for.
 * @param {number} [e] - The position in {@link t} to start the search from.
 * @returns {number} The index of the first occurrence of {@link r} in {@link t} after position {@link e}, or -1 if not found.
 */
function ht(t,r,e){return t.indexOf(r,e)}/**
 * Returns the Unicode code point of the character at the specified index in a string.
 *
 * @param {string} t - The string to inspect.
 * @param {number} r - The index of the character.
 * @returns {number} The Unicode code point of the character at the given index.
 */
function E(t,r){return t.charCodeAt(r)|0}/**
 * Returns a shallow copy of a portion of an array or string from the start index up to, but not including, the end index.
 *
 * @param {string|Array} t - The array or string to slice.
 * @param {number} r - The zero-based index at which to begin extraction.
 * @param {number} e - The zero-based index before which to end extraction.
 * @returns {string|Array} A new array or string containing the extracted elements.
 */
function U(t,r,e){return t.slice(r,e)}/**
 * Returns the length of the given string or array.
 *
 * @param {string|Array} t - The string or array whose length is to be determined.
 * @returns {number} The number of elements in the array or characters in the string.
 */
function j(t){return t.length}/**
 * Returns the length of the provided string or array.
 *
 * @param {(string|Array)} t - The string or array whose length is to be determined.
 * @returns {number} The number of elements in the array or characters in the string.
 */
function mr(t){return t.length}/**
 * Appends an item to an array and returns the item.
 *
 * @param {*} item - The item to append.
 * @param {Array} array - The array to which the item will be appended.
 * @returns {*} The appended item.
 */
function et(t,r){return r.push(t),t}/**
 * Applies a mapping function to each element of an array and concatenates the results into a single string.
 *
 * @param {Array} t - The array to map over.
 * @param {function} r - The mapping function to apply to each element.
 * @returns {string} The concatenated string result of mapping {@link r} over {@link t}.
 */
function qr(t,r){return t.map(r).join("")}/**
 * Returns a new array excluding elements present in the reference array.
 *
 * @param {Array} t - The source array to filter.
 * @param {Array} r - The array containing elements to exclude.
 * @returns {Array} A new array with elements from {@link t} that are not found in {@link r}.
 */
function Jt(t,r){return t.filter(function(e){return!T(e,r)})}var It=1,K=1,yr=0,N=0,A=0,V="";/**
 * Creates a CSS AST node object representing a parsed CSS rule or declaration.
 *
 * @param {string} t - The value or content of the node.
 * @param {object|null} r - The root node of the AST, or null if this is the root.
 * @param {object|null} e - The parent node, or null if this is the root.
 * @param {number} n - The type of the node (e.g., rule, declaration, at-rule).
 * @param {string[]} o - The properties or selectors associated with the node.
 * @param {object[]} s - The child nodes of this node.
 * @param {number} i - The length of the node's content.
 * @param {object[]} c - The sibling nodes of this node.
 * @returns {object} An object representing a node in the CSS AST, including value, type, hierarchy, and position information.
 */
function At(t,r,e,n,o,s,i,c){return{value:t,root:r,parent:e,type:n,props:o,children:s,line:It,column:K,length:i,return:"",siblings:c}}/**
 * Creates a new CSS rule node by cloning the given node and updating its properties.
 *
 * @param {Object} t - The CSS rule node to clone.
 * @param {Object} r - Additional properties to assign to the cloned node.
 * @returns {Object} A new CSS rule node with updated properties.
 */
function G(t,r){return Tt(At("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},r)}/**
 * Traverses to the root node of a tree structure and processes its siblings.
 *
 * @param {Object} t - The starting node, expected to have a `root` property for traversal and a `siblings` property for processing.
 */
function H(t){for(;t.root;)t=G(t.root,{children:[t]});et(t,t.siblings)}/**
 * Returns the global React context used for styled-components integration.
 *
 * @returns {React.Context} The context object for accessing the styled-components environment.
 */
function Ur(){return A}/**
 * Retrieves the next character code from the CSS input buffer during parsing.
 *
 * @returns {number} The character code at the current parsing position, or 0 if the buffer is empty.
 *
 * @remark This function decrements internal parsing indices and updates state variables used for CSS tokenization.
 */
function Kr(){return A=N>0?E(V,--N):0,K--,A===10&&(K=1,It--),A}/**
 * Retrieves the next character code from the CSS input string during parsing.
 *
 * @returns {number} The Unicode code point of the next character, or 0 if the end of input is reached.
 *
 * @remark
 * Increments internal indices used for parsing and tracks line numbers when a newline character (code 10) is encountered.
 */
function O(){return A=N<yr?E(V,N++):0,K++,A===10&&(K=1,It++),A}/**
 * Returns the result of calling {@link E} with arguments {@link V} and {@link N}.
 *
 * @returns {*} The value returned by {@link E} when invoked with {@link V} and {@link N}.
 */
function M(){return E(V,N)}/**
 * Returns the global stylesheet registry instance.
 *
 * @returns {Rr} The singleton instance managing registered CSS rules and component IDs.
 */
function gt(){return N}/**
 * Applies a set of CSS rules to a given selector using the internal CSS-in-JS engine.
 *
 * @param {string} t - The CSS selector to which the rules will be applied.
 * @param {string} r - The CSS rules to apply to the selector.
 * @returns {string} The generated class name associated with the applied styles.
 */
function kt(t,r){return U(V,t,r)}/**
 * Categorizes a character code into a CSS token type.
 *
 * @param {number} t - The character code to categorize.
 * @returns {number} A numeric code representing the CSS token type: 5 for whitespace, 4 for punctuation, 3 for colon, 2 for opening quote/parenthesis/bracket, 1 for closing parenthesis/bracket, 0 for others.
 */
function Dt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}/**
 * Initializes the CSS parser state and prepares for parsing a new CSS string.
 *
 * @param {string} t - The CSS string to parse.
 * @returns {Array} An empty array to be populated with parsed CSS rules.
 */
function Zr(t){return It=K=1,yr=j(V=t),N=0,[]}/**
 * Resets the internal CSS rule buffer and returns the provided value.
 *
 * @param {*} t - The value to return after resetting the buffer.
 * @returns {*} The same value as {@link t}.
 */
function Jr(t){return V="",t}/**
 * Parses a CSS rule or declaration starting at a given character code.
 *
 * @param {number} t - The character code indicating the start of a CSS block or rule.
 * @returns {object} The parsed CSS node or rule object.
 */
function Nt(t){return gr(kt(N-1,Ft(t===91?t+2:t===40?t+1:t)))}/**
 * Returns a single space character if the input or the next character is not whitespace or a control character.
 *
 * @param {number} t - The character code to check.
 * @returns {string} A space character if conditions are met; otherwise, an empty string.
 */
function Qr(t){for(;(A=M())&&A<33;)O();return Dt(t)>2||Dt(A)>3?"":" "}/**
 * Parses a hexadecimal color code from the input string, advancing the parser position.
 *
 * @param {string} t - The input string containing the color code.
 * @param {number} r - The maximum number of characters to parse.
 * @returns {string} The parsed hexadecimal color code.
 */
function Vr(t,r){for(;--r&&O()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return kt(t,gt()+(r<6&&M()==32&&O()==32))}/**
 * Advances the CSS parser until a specified character code is encountered.
 *
 * Skips over quoted strings, nested parentheses, and escaped characters as needed. Returns the current parser position when the target character code is found or the end is reached.
 *
 * @param {number} t - The character code to search for.
 * @returns {number} The parser position where the character code was found or the current position if not found.
 */
function Ft(t){for(;O();)switch(A){case t:return N;case 34:case 39:t!==34&&t!==39&&Ft(A);break;case 40:t===41&&Ft(t);break;case 92:O();break}return N}/**
 * Extracts a CSS comment from the current parsing position.
 *
 * @param {number} t - The starting character code of the comment.
 * @param {number} r - The starting index of the comment in the source string.
 * @returns {string} The extracted CSS comment, including delimiters.
 */
function Xr(t,r){for(;O()&&t+A!==57;)if(t+A===84&&M()===47)break;return"/*"+kt(r,N-1)+"*"+Yt(t===47?t:O())}/**
 * Parses a CSS string and returns its corresponding abstract syntax tree (AST).
 *
 * @param {string} t - The CSS string to parse.
 * @returns {object} The AST representation of the parsed CSS.
 */
function te(t){for(;!Dt(M());)O();return kt(t,N)}/**
 * Processes a CSS string or template and returns a parsed representation suitable for further transformation or injection.
 *
 * @param {string} t - The CSS string or template to process.
 * @returns {object} The parsed CSS structure.
 */
function re(t){return Jr(mt("",null,null,null,[""],t=Zr(t),0,[0],t))}/**
 * Parses a CSS string into an internal representation, handling nested rules, at-rules, selectors, and declarations.
 *
 * This function supports vendor prefixing, nested selectors, and special handling for at-rules such as `@media`, `@keyframes`, and `@supports`. It recursively processes nested CSS blocks and applies transformations as needed for CSS-in-JS usage.
 *
 * @param {string} t - The CSS string to parse.
 * @param {Array} r - The parent rule list or context.
 * @param {Array} e - The current rule list or context.
 * @param {Array} n - The output array for parsed rules.
 * @param {Array} o - The array of parent selectors or rules.
 * @param {Array} s - The array of processed rules.
 * @param {number} i - The starting index for parsing.
 * @param {Array} c - The stack for nested rule indices.
 * @param {Array} a - The array for collecting output or errors.
 * @returns {Array} The array of parsed CSS rules and declarations.
 *
 * @remark
 * This parser is designed for use within a CSS-in-JS engine and may not handle all edge cases of raw CSS syntax.
 */
function mt(t,r,e,n,o,s,i,c,a){for(var h=0,l=0,g=i,m=0,p=0,v=0,C=1,_=1,I=1,S=0,w="",x=o,k=s,y=n,f=w;_;)switch(v=S,S=O()){case 40:if(v!=108&&E(f,g-1)==58){ht(f+=u(Nt(S),"&","&\f"),"&\f",hr(h?c[h-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:f+=Nt(S);break;case 9:case 10:case 13:case 32:f+=Qr(v);break;case 92:f+=Vr(gt()-1,7);continue;case 47:switch(M()){case 42:case 47:et(ee(Xr(O(),gt()),r,e,a),a);break;default:f+="/"}break;case 123*C:c[h++]=j(f)*I;case 125*C:case 59:case 0:switch(S){case 0:case 125:_=0;case 59+l:I==-1&&(f=u(f,/\f/g,"")),p>0&&j(f)-g&&et(p>32?Vt(f+";",n,e,g-1,a):Vt(u(f," ","")+";",n,e,g-2,a),a);break;case 59:f+=";";default:if(et(y=Qt(f,r,e,h,l,o,c,w,x=[],k=[],g,s),s),S===123)if(l===0)mt(f,r,y,y,x,s,g,c,k);else switch(m===99&&E(f,3)===110?100:m){case 100:case 108:case 109:case 115:mt(t,y,y,n&&et(Qt(t,y,y,0,0,o,c,w,o,x=[],g,k),k),o,k,g,c,n?x:k);break;default:mt(f,y,y,y,[""],k,0,c,k)}}h=l=p=0,C=I=1,w=f="",g=i;break;case 58:g=1+j(f),p=v;default:if(C<1){if(S==123)--C;else if(S==125&&C++==0&&Kr()==125)continue}switch(f+=Yt(S),S*C){case 38:I=l>0?1:(f+="\f",-1);break;case 44:c[h++]=(j(f)-1)*I,I=1;break;case 64:M()===45&&(f+=Nt(O())),m=M(),l=g=j(w=f+=te(gt())),S++;break;case 45:v===45&&j(f)==2&&(C=0)}}return s}/**
 * Expands and processes CSS selectors with possible nesting and parent references, generating a list of fully resolved selectors for further CSS rule processing.
 *
 * @param {string} t - The CSS string being processed.
 * @param {number} r - Start index for processing.
 * @param {number} e - End index for processing.
 * @param {number} n - Number of selector groups.
 * @param {number} o - Current nesting level.
 * @param {string[]} s - Array of parent selectors.
 * @param {number[]} i - Array of indices marking selector boundaries.
 * @param {string[]} c - Array of previously processed selectors.
 * @param {string[]} a - Output array for resolved selectors.
 * @param {number} h - Rule type or context indicator.
 * @param {number} l - Rule insertion index.
 * @param {object} g - Context or options for rule processing.
 * @returns {*} The result of further processing with fully resolved selectors.
 */
function Qt(t,r,e,n,o,s,i,c,a,h,l,g){for(var m=o-1,p=o===0?s:[""],v=mr(p),C=0,_=0,I=0;C<n;++C)for(var S=0,w=U(t,m+1,m=hr(_=i[C])),x=t;S<v;++S)(x=gr(_>0?p[S]+" "+w:u(w,/&\f/g,p[S])))&&(a[I++]=x);return At(t,r,e,o===0?Ct:c,a,h,l,g)}/**
 * Parses a CSS string into an internal representation, handling nested rules and at-rules.
 *
 * @param {string} t - The CSS string to parse.
 * @param {number} r - The starting index for parsing.
 * @param {number} e - The ending index for parsing.
 * @param {number} n - The parsing context or rule type.
 * @returns {object} The parsed CSS structure as an abstract syntax tree (AST)-like object.
 */
function ee(t,r,e,n){return At(t,r,e,dr,Yt(Ur()),U(t,2,-2),0,n)}/**
 * Processes a CSS rule by delegating to {@link At} with specific parameters for rule handling.
 *
 * @param {string} t - The CSS string to process.
 * @param {number} r - The rule type or context indicator.
 * @param {number} e - The parent rule or context.
 * @param {number} n - The index at which to split the CSS string.
 * @param {object} o - Additional options or context for processing.
 * @returns {*} The result of processing the CSS rule via {@link At}.
 */
function Vt(t,r,e,n,o){return At(t,r,e,Wt,U(t,0,n),U(t,n+1,-1),n,o)}/**
 * Applies vendor-specific prefixes and transformations to a given CSS property string.
 *
 * This function analyzes the provided CSS property and, based on its type and context, returns a string with the appropriate vendor prefixes (such as `-webkit-`, `-ms-`, or `-moz-`) and any necessary property name or value transformations for cross-browser compatibility. It handles special cases for flexbox, grid, transforms, and other CSS features, and may use additional context from the rule's position or sibling declarations.
 *
 * @param {string} t - The CSS property string to process.
 * @param {number} r - The current character index or position within the CSS string.
 * @param {Array|undefined} e - Optional array of sibling CSS declarations for context-sensitive prefixing.
 * @returns {string} The CSS property string with appropriate vendor prefixes and transformations applied.
 */
function br(t,r,e){switch(Hr(t,r)){case 5103:return d+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+t+t;case 4789:return nt+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return d+t+nt+t+b+t+t;case 5936:switch(E(t,r+11)){case 114:return d+t+b+u(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return d+t+b+u(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return d+t+b+u(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return d+t+b+t+t;case 6165:return d+t+b+"flex-"+t+t;case 5187:return d+t+u(t,/(\w+).+(:[^]+)/,d+"box-$1$2"+b+"flex-$1$2")+t;case 5443:return d+t+b+"flex-item-"+u(t,/flex-|-self/g,"")+(T(t,/flex-|baseline/)?"":b+"grid-row-"+u(t,/flex-|-self/g,""))+t;case 4675:return d+t+b+"flex-line-pack"+u(t,/align-content|flex-|-self/g,"")+t;case 5548:return d+t+b+u(t,"shrink","negative")+t;case 5292:return d+t+b+u(t,"basis","preferred-size")+t;case 6060:return d+"box-"+u(t,"-grow","")+d+t+b+u(t,"grow","positive")+t;case 4554:return d+u(t,/([^-])(transform)/g,"$1"+d+"$2")+t;case 6187:return u(u(u(t,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),t,"")+t;case 5495:case 3959:return u(t,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return u(u(t,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+b+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+t+t;case 4200:if(!T(t,/flex-|baseline/))return b+"grid-column-align"+U(t,r)+t;break;case 2592:case 3360:return b+u(t,"template-","")+t;case 4384:case 3616:return e&&e.some(function(n,o){return r=o,T(n.props,/grid-\w+-end/)})?~ht(t+(e=e[r].value),"span",0)?t:b+u(t,"-start","")+t+b+"grid-row-span:"+(~ht(e,"span",0)?T(e,/\d+/):+T(e,/\d+/)-+T(t,/\d+/))+";":b+u(t,"-start","")+t;case 4896:case 4128:return e&&e.some(function(n){return T(n.props,/grid-\w+-start/)})?t:b+u(u(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return u(t,/(.+)-inline(.+)/,d+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(j(t)-1-r>6)switch(E(t,r+1)){case 109:if(E(t,r+4)!==45)break;case 102:return u(t,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+nt+(E(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~ht(t,"stretch",0)?br(u(t,"stretch","fill-available"),r,e)+t:t}break;case 5152:case 5920:return u(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,s,i,c,a,h){return b+o+":"+s+h+(i?b+o+"-span:"+(c?a:+a-+s)+h:"")+t});case 4949:if(E(t,r+6)===121)return u(t,":",":"+d)+t;break;case 6444:switch(E(t,E(t,14)===45?18:11)){case 120:return u(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+d+(E(t,14)===45?"inline-":"")+"box$3$1"+d+"$2$3$1"+b+"$2box$3")+t;case 100:return u(t,":",":"+b)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return u(t,"scroll-","scroll-snap-")+t}return t}/**
 * Concatenates the results of applying a callback to each element in an array.
 *
 * @param {Array} t - The array to iterate over.
 * @param {function} r - The callback function, called with (element, index, array, originalArray).
 * @returns {string} The concatenated string of all callback results.
 */
function vt(t,r){for(var e="",n=0;n<t.length;n++)e+=r(t[n],n,t,r)||"";return e}/**
 * Serializes a CSS AST node into a CSS string.
 *
 * Traverses the provided AST node and its children, generating a CSS string representation based on the node type and its properties.
 *
 * @param {Object} t - The AST node to serialize.
 * @param {number} r - Unused parameter.
 * @param {string} e - Unused parameter.
 * @param {number} n - The current indentation or depth level.
 * @returns {string} The serialized CSS string for the given AST node and its children.
 */
function ne(t,r,e,n){switch(t.type){case Yr:if(t.children.length)break;case Wr:case Wt:return t.return=t.return||t.value;case dr:return"";case lr:return t.return=t.value+"{"+vt(t.children,n)+"}";case Ct:if(!j(t.value=t.props.join(",")))return""}return j(e=vt(t.children,n))?t.return=t.value+"{"+e+"}":""}/**
 * Composes multiple style functions into a single function that generates a combined CSS string.
 *
 * @param {Array<Function>} t - An array of functions that each return a CSS string segment.
 * @returns {Function} A function that, when called with arguments, invokes each style function in {@link t} and concatenates their results into a single CSS string.
 */
function oe(t){var r=mr(t);return function(e,n,o,s){for(var i="",c=0;c<r;c++)i+=t[c](e,n,o,s)||"";return i}}/**
 * Traverses up a tree structure, applying a callback to the nearest ancestor node that is not a root.
 *
 * @param {function} callback - Function to invoke with the nearest non-root ancestor node.
 * @returns {function} A function that accepts a node and applies the callback to its nearest non-root ancestor.
 */
function se(t){return function(r){r.root||(r=r.return)&&t(r)}}/**
 * Processes a CSS AST node for vendor prefixing and special selector handling.
 *
 * Handles different node types by applying vendor prefixes, transforming selectors for pseudo-classes and pseudo-elements (such as `:read-only`, `:read-write`, and `::placeholder`), and recursively processing nested rules. Updates the node's `return` property with the processed CSS when applicable.
 *
 * @param {Object} t - The CSS AST node to process.
 * @param {Function} r - A callback or helper function for rule processing.
 * @param {string} e - The current CSS selector or context.
 * @param {Function} n - A callback for recursive processing of nested rules.
 */
function ie(t,r,e,n){if(t.length>-1&&!t.return)switch(t.type){case Wt:t.return=br(t.value,t.length,e);return;case lr:return vt([G(t,{value:u(t.value,"@","@"+d)})],n);case Ct:if(t.length)return qr(e=t.props,function(o){switch(T(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":H(G(t,{props:[u(o,/:(read-\w+)/,":"+nt+"$1")]})),H(G(t,{props:[o]})),Tt(t,{props:Jt(e,n)});break;case"::placeholder":H(G(t,{props:[u(o,/:(plac\w+)/,":"+d+"input-$1")]})),H(G(t,{props:[u(o,/:(plac\w+)/,":"+nt+"$1")]})),H(G(t,{props:[u(o,/:(plac\w+)/,b+"input-$1")]})),H(G(t,{props:[o]})),Tt(t,{props:Jt(e,n)});break}return""})}}var ae={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},P={},Z=typeof process<"u"&&P!==void 0&&(P.REACT_APP_SC_ATTR||P.SC_ATTR)||"data-styled",wr="active",vr="data-styled-version",Et="6.1.17",Ht=`/*!sc*/
`,St=typeof window<"u"&&"HTMLElement"in window,ce=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==""?P.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&P.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.SC_DISABLE_SPEEDY!==void 0&&P.SC_DISABLE_SPEEDY!==""&&P.SC_DISABLE_SPEEDY!=="false"&&P.SC_DISABLE_SPEEDY),$t=Object.freeze([]),J=Object.freeze({});/**
 * Resolves the theme object to use based on the provided props and fallback values.
 *
 * Returns the theme from {@link t} if it differs from {@link e}, otherwise returns {@link r} if defined, or the theme from {@link e} as a final fallback.
 *
 * @param {object} t - Props object, expected to contain a `theme` property.
 * @param {object} [r] - Optional fallback theme.
 * @param {object} [e=J] - Optional default theme object.
 * @returns {object} The resolved theme object.
 */
function ue(t,r,e){return e===void 0&&(e=J),t.theme!==e.theme&&t.theme||r||e.theme}var Sr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pe=/(^-|-$)/g;/**
 * Converts a camelCase string to kebab-case and removes leading hyphens.
 *
 * @param {string} t - The camelCase string to convert.
 * @returns {string} The kebab-case version of the input string without leading hyphens.
 */
function Xt(t){return t.replace(fe,"-").replace(pe,"")}var de=/(a)(d)/gi,dt=52,tr=function(t){return String.fromCharCode(t+(t>25?39:97))};/**
 * Converts a number to a base-52 string using lowercase and uppercase letters, inserting hyphens between letter groups.
 *
 * @param {number} t - The number to convert.
 * @returns {string} The base-52 encoded string representation of the input number, with hyphens separating groups.
 */
function Gt(t){var r,e="";for(r=Math.abs(t);r>dt;r=r/dt|0)e=tr(r%dt)+e;return(tr(r%dt)+e).replace(de,"$1-$2")}var Ot,xr=5381,q=function(t,r){for(var e=r.length;e;)t=33*t^r.charCodeAt(--e);return t},Cr=function(t){return q(xr,t)};/**
 * Generates a unique hash string for the given input.
 *
 * @param {string} t - The input string to hash.
 * @returns {string} A hash string derived from {@link t}.
 */
function le(t){return Gt(Cr(t)>>>0)}/**
 * Retrieves the display name of a React component.
 *
 * Returns the `displayName` property if present, otherwise the `name` property, or "Component" as a fallback.
 *
 * @param {React.ComponentType} t - The React component to get the name from.
 * @returns {string} The component's display name.
 */
function he(t){return t.displayName||t.name||"Component"}/**
 * Determines if the given value is a string.
 *
 * @param {*} t - The value to check.
 * @returns {boolean} True if {@link t} is a string; otherwise, false.
 */
function jt(t){return typeof t=="string"&&!0}var Ir=typeof Symbol=="function"&&Symbol.for,Ar=Ir?Symbol.for("react.memo"):60115,ge=Ir?Symbol.for("react.forward_ref"):60112,me={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ye={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},be=((Ot={})[ge]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ot[Ar]=kr,Ot);/**
 * Determines the type of a React element or component.
 *
 * Returns a specific type constant based on the presence and value of `type.$$typeof` or `$$typeof` in the input object.
 *
 * @param {object} t - The object to inspect for React type information.
 * @returns {*} A type constant representing the React element or component type.
 */
function rr(t){return("type"in(r=t)&&r.type.$$typeof)===Ar?kr:"$$typeof"in t?be[t.$$typeof]:me;var r}var we=Object.defineProperty,ve=Object.getOwnPropertyNames,er=Object.getOwnPropertySymbols,Se=Object.getOwnPropertyDescriptor,xe=Object.getPrototypeOf,nr=Object.prototype;/**
 * Copies own and inherited enumerable properties from {@link r} to {@link t}, excluding properties present in {@link e} or certain internal objects.
 *
 * Recursively copies properties from prototype chains and symbol properties, handling edge cases for property conflicts and avoiding duplicates.
 *
 * @param {Object} t - The target object to receive properties.
 * @param {Object} r - The source object from which properties are copied.
 * @param {Object} [e] - An optional object whose keys are excluded from copying.
 * @returns {Object} The modified target object {@link t}.
 */
function Er(t,r,e){if(typeof r!="string"){if(nr){var n=xe(r);n&&n!==nr&&Er(t,n,e)}var o=ve(r);er&&(o=o.concat(er(r)));for(var s=rr(t),i=rr(r),c=0;c<o.length;++c){var a=o[c];if(!(a in ye||e&&e[a]||i&&a in i||s&&a in s)){var h=Se(r,a);try{we(t,a,h)}catch{}}}}return t}/**
 * Determines whether the provided value is a function.
 *
 * @param {*} t - The value to check.
 * @returns {boolean} True if {@link t} is a function; otherwise, false.
 */
function Q(t){return typeof t=="function"}/**
 * Determines whether the given value is a styled component by checking for a `styledComponentId` property.
 *
 * @param {*} t - The value to check.
 * @returns {boolean} `true` if {@link t} is an object with a `styledComponentId` property; otherwise, `false`.
 */
function qt(t){return typeof t=="object"&&"styledComponentId"in t}/**
 * Concatenates two class name strings with a space if both are present.
 *
 * @param {string} t - The first class name.
 * @param {string} r - The second class name.
 * @returns {string} The combined class names, separated by a space if both are provided; otherwise, returns the non-empty class name or an empty string.
 */
function L(t,r){return t&&r?"".concat(t," ").concat(r):t||r||""}/**
 * Concatenates all elements of an array into a single string.
 *
 * @param {string[]} t - Array of strings to concatenate.
 * @param {*} r - Unused parameter.
 * @returns {string} The concatenated string.
 */
function or(t,r){if(t.length===0)return"";for(var e=t[0],n=1;n<t.length;n++)e+=t[n];return e}/**
 * Determines if a value is a plain object, excluding React elements and objects with `props` or `$$typeof` properties.
 *
 * @param {*} t - The value to check.
 * @returns {boolean} True if the value is a plain object and not a React element or similar object; otherwise, false.
 */
function st(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}/**
 * Recursively merges the values of {@link r} into {@link t}, modifying {@link t} in place.
 *
 * If {@link r} is an array, each element is merged into the corresponding element of {@link t}. If {@link r} is an object, its properties are merged recursively into {@link t}. If neither, {@link r} is returned unless {@link e} is true.
 *
 * @param {any} t - The target object or array to merge into.
 * @param {any} r - The source object or array to merge from.
 * @param {boolean} [e=false] - If true, disables the base case shortcut and always recurses.
 * @returns {any} The merged object or array.
 */
function Bt(t,r,e){if(e===void 0&&(e=!1),!e&&!st(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var n=0;n<r.length;n++)t[n]=Bt(t[n],r[n]);else if(st(r))for(var n in r)t[n]=Bt(t[n],r[n]);return t}/**
 * Assigns a custom `toString` method to an object.
 *
 * @param {Object} t - The target object.
 * @param {Function} r - The function to use as the `toString` method.
 */
function Ut(t,r){Object.defineProperty(t,"toString",{value:r})}/**
 * Creates a formatted error with a reference to the styled-components error documentation.
 *
 * @param {string} t - The error code or identifier used to construct the documentation URL fragment.
 * @param {...any} [args] - Optional arguments to include in the error message for additional context.
 * @returns {Error} An error instance with a message linking to the relevant documentation and including any provided arguments.
 */
function it(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Ce=function(){/**
 * Initializes a group for managing CSS rule indices within a stylesheet.
 *
 * @param {string} r - The tag name or identifier associated with this group.
 */
function t(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return t.prototype.indexOfGroup=function(r){for(var e=0,n=0;n<r;n++)e+=this.groupSizes[n];return e},t.prototype.insertRules=function(r,e){if(r>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,s=o;r>=s;)if((s<<=1)<0)throw it(16,"".concat(r));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var i=o;i<s;i++)this.groupSizes[i]=0}for(var c=this.indexOfGroup(r+1),a=(i=0,e.length);i<a;i++)this.tag.insertRule(c,e[i])&&(this.groupSizes[r]++,c++)},t.prototype.clearGroup=function(r){if(r<this.length){var e=this.groupSizes[r],n=this.indexOfGroup(r),o=n+e;this.groupSizes[r]=0;for(var s=n;s<o;s++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(r){var e="";if(r>=this.length||this.groupSizes[r]===0)return e;for(var n=this.groupSizes[r],o=this.indexOfGroup(r),s=o+n,i=o;i<s;i++)e+="".concat(this.tag.getRule(i)).concat(Ht);return e},t}(),yt=new Map,xt=new Map,bt=1,lt=function(t){if(yt.has(t))return yt.get(t);for(;xt.has(bt);)bt++;var r=bt++;return yt.set(t,r),xt.set(r,t),r},Ie=function(t,r){bt=r+1,yt.set(t,r),xt.set(r,t)},Ae="style[".concat(Z,"][").concat(vr,'="').concat(Et,'"]'),ke=new RegExp("^".concat(Z,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ee=function(t,r,e){for(var n,o=e.split(","),s=0,i=o.length;s<i;s++)(n=o[s])&&t.registerName(r,n)},$e=function(t,r){for(var e,n=((e=r.textContent)!==null&&e!==void 0?e:"").split(Ht),o=[],s=0,i=n.length;s<i;s++){var c=n[s].trim();if(c){var a=c.match(ke);if(a){var h=0|parseInt(a[1],10),l=a[2];h!==0&&(Ie(l,h),Ee(t,l,a[3]),t.getTag().insertRules(h,o)),o.length=0}else o.push(c)}}},sr=function(t){for(var r=document.querySelectorAll(Ae),e=0,n=r.length;e<n;e++){var o=r[e];o&&o.getAttribute(Z)!==wr&&($e(t,o),o.parentNode&&o.parentNode.removeChild(o))}};/**
 * Retrieves the current Webpack nonce value if defined.
 *
 * @returns {string|null} The value of {@link __webpack_nonce__} if it exists; otherwise, {@code null}.
 */
function Re(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $r=function(t){var r=document.head,e=t||r,n=document.createElement("style"),o=function(c){var a=Array.from(c.querySelectorAll("style[".concat(Z,"]")));return a[a.length-1]}(e),s=o!==void 0?o.nextSibling:null;n.setAttribute(Z,wr),n.setAttribute(vr,Et);var i=Re();return i&&n.setAttribute("nonce",i),e.insertBefore(n,s),n},_e=function(){/**
 * Creates a stylesheet manager that inserts CSS rules using a DOM text node.
 *
 * @param {HTMLElement} r - The DOM element to which the style tag will be attached.
 *
 * @remark
 * Throws an error if the associated stylesheet cannot be found.
 */
function t(r){this.element=$r(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var n=document.styleSheets,o=0,s=n.length;o<s;o++){var i=n[o];if(i.ownerNode===e)return i}throw it(17)}(this.element),this.length=0}return t.prototype.insertRule=function(r,e){try{return this.sheet.insertRule(e,r),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.prototype.getRule=function(r){var e=this.sheet.cssRules[r];return e&&e.cssText?e.cssText:""},t}(),Pe=function(){/**
 * Represents a wrapper for a DOM element and its child nodes.
 *
 * @param {HTMLElement|string} r - The target element or a selector string to resolve the element.
 *
 * @remark
 * The `element` property holds the resolved DOM element, and `nodes` contains its child nodes. The `length` property is initialized to 0 and may be used for tracking inserted nodes.
 */
function t(r){this.element=$r(r),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(r,e){if(r<=this.length&&r>=0){var n=document.createTextNode(e);return this.element.insertBefore(n,this.nodes[r]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},t}(),Ne=function(){/**
 * Initializes a new rule group for managing a collection of CSS rules.
 *
 * Creates an object with an empty rules array and a length counter set to zero.
 */
function t(r){this.rules=[],this.length=0}return t.prototype.insertRule=function(r,e){return r<=this.length&&(this.rules.splice(r,0,e),this.length++,!0)},t.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},t}(),ir=St,Oe={isServer:!St,useCSSOMInjection:!ce},Rr=function(){/**
 * Initializes a style sheet registry for managing CSS class names and rules.
 *
 * @param {object} [r=J] - Options for the registry.
 * @param {object} [e={}] - Group sheet instance for rule insertion.
 * @param {Iterable} [n] - Initial mapping of names to be registered.
 *
 * @remark
 * On the client, triggers style rehydration if not running on the server and the environment supports it.
 */
function t(r,e,n){r===void 0&&(r=J),e===void 0&&(e={});var o=this;this.options=R(R({},Oe),r),this.gs=e,this.names=new Map(n),this.server=!!r.isServer,!this.server&&St&&ir&&(ir=!1,sr(this)),Ut(this,function(){return function(s){for(var i=s.getTag(),c=i.length,a="",h=function(g){var m=function(I){return xt.get(I)}(g);if(m===void 0)return"continue";var p=s.names.get(m),v=i.getGroup(g);if(p===void 0||!p.size||v.length===0)return"continue";var C="".concat(Z,".g").concat(g,'[id="').concat(m,'"]'),_="";p!==void 0&&p.forEach(function(I){I.length>0&&(_+="".concat(I,","))}),a+="".concat(v).concat(C,'{content:"').concat(_,'"}').concat(Ht)},l=0;l<c;l++)h(l);return a}(o)})}return t.registerId=function(r){return lt(r)},t.prototype.rehydrate=function(){!this.server&&St&&sr(this)},t.prototype.reconstructWithOptions=function(r,e){return e===void 0&&(e=!0),new t(R(R({},this.options),r),this.gs,e&&this.names||void 0)},t.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(r=function(e){var n=e.useCSSOMInjection,o=e.target;return e.isServer?new Ne(o):n?new _e(o):new Pe(o)}(this.options),new Ce(r)));var r},t.prototype.hasNameForId=function(r,e){return this.names.has(r)&&this.names.get(r).has(e)},t.prototype.registerName=function(r,e){if(lt(r),this.names.has(r))this.names.get(r).add(e);else{var n=new Set;n.add(e),this.names.set(r,n)}},t.prototype.insertRules=function(r,e,n){this.registerName(r,e),this.getTag().insertRules(lt(r),n)},t.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.prototype.clearRules=function(r){this.getTag().clearGroup(lt(r)),this.clearNames(r)},t.prototype.clearTag=function(){this.tag=void 0},t}(),je=/&/g,ze=/^\s*\/\/.*$/gm;/**
 * Prefixes all CSS selectors in the given rules with a specified string.
 *
 * Recursively traverses the provided CSS rule objects, prepending the prefix to each selector and its properties, except within `@keyframes` blocks.
 *
 * @param {Array<Object>} t - Array of CSS rule objects to process.
 * @param {string} r - Selector prefix to prepend.
 * @returns {Array<Object>} The modified array of CSS rule objects with prefixed selectors.
 */
function _r(t,r){return t.map(function(e){return e.type==="rule"&&(e.value="".concat(r," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(r," ")),e.props=e.props.map(function(n){return"".concat(r," ").concat(n)})),Array.isArray(e.children)&&e.type!=="@keyframes"&&(e.children=_r(e.children,r)),e})}/**
 * Creates a CSS processor function that applies plugins, handles selector scoping, and generates processed CSS rules.
 *
 * The returned function processes a CSS string with optional selector and prefix, applies plugin transformations, handles namespacing, and collects resulting CSS rules. It also exposes a `hash` property representing a hash of the plugin pipeline.
 *
 * @param {object} context - The context object containing options and plugins for CSS processing.
 * @returns {function} A function that processes CSS strings with selector scoping and plugin transformations.
 *
 * @remark
 * The returned function has a `hash` property representing a hash of the plugin pipeline.
 */
function Te(t){var r,e,n,o=J,s=o.options,i=s===void 0?J:s,c=o.plugins,a=c===void 0?$t:c,h=function(m,p,v){return v.startsWith(e)&&v.endsWith(e)&&v.replaceAll(e,"").length>0?".".concat(r):m},l=a.slice();l.push(function(m){m.type===Ct&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(je,e).replace(n,h))}),i.prefix&&l.push(ie),l.push(ne);var g=function(m,p,v,C){p===void 0&&(p=""),v===void 0&&(v=""),C===void 0&&(C="&"),r=C,e=p,n=new RegExp("\\".concat(e,"\\b"),"g");var _=m.replace(ze,""),I=re(v||p?"".concat(v," ").concat(p," { ").concat(_," }"):_);i.namespace&&(I=_r(I,i.namespace));var S=[];return vt(I,oe(l.concat(se(function(w){return S.push(w)})))),S};return g.hash=a.length?a.reduce(function(m,p){return p.name||it(15),q(m,p.name)},xr).toString():"",g}var De=new Rr,Lt=Te(),Pr=ot.createContext({shouldForwardProp:void 0,styleSheet:De,stylis:Lt});Pr.Consumer;ot.createContext(void 0);/**
 * Returns the current styled-components context.
 *
 * Use this hook to access the style sheet and stylis instances provided by the styled-components context.
 *
 * @returns {object} The current styled-components context value.
 */
function ar(){return pr.useContext(Pr)}var Fe=function(){/**
 * Represents a keyframes animation with a unique name and associated CSS rules.
 *
 * @param {string} r - The base name for the keyframes animation.
 * @param {string} e - The CSS rules defining the keyframes.
 *
 * @remark
 * Throws an error if the keyframes instance is cloned, as cloning is not supported.
 */
function t(r,e){var n=this;this.inject=function(o,s){s===void 0&&(s=Lt);var i=n.name+s.hash;o.hasNameForId(n.id,i)||o.insertRules(n.id,i,s(n.rules,i,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=e,Ut(this,function(){throw it(12,String(n.name))})}return t.prototype.getName=function(r){return r===void 0&&(r=Lt),this.name+r.hash},t}(),Ge=function(t){return t>="A"&&t<="Z"};/**
 * Converts a camelCase or PascalCase string to kebab-case, handling vendor prefixes.
 *
 * If the input starts with a double dash (e.g., `--custom-prop`), it is returned unchanged.
 * Vendor-prefixed properties starting with "ms" are converted to "-ms-" format.
 *
 * @param {string} t - The input string to convert.
 * @returns {string} The kebab-case version of the input string, with vendor prefix adjustments.
 */
function cr(t){for(var r="",e=0;e<t.length;e++){var n=t[e];if(e===1&&n==="-"&&t[0]==="-")return t;Ge(n)?r+="-"+n.toLowerCase():r+=n}return r.startsWith("ms-")?"-"+r:r}var Nr=function(t){return t==null||t===!1||t===""},Or=function(t){var r,e,n=[];for(var o in t){var s=t[o];t.hasOwnProperty(o)&&!Nr(s)&&(Array.isArray(s)&&s.isCss||Q(s)?n.push("".concat(cr(o),":"),s,";"):st(s)?n.push.apply(n,wt(wt(["".concat(o," {")],Or(s),!1),["}"],!1)):n.push("".concat(cr(o),": ").concat((r=o,(e=s)==null||typeof e=="boolean"||e===""?"":typeof e!="number"||e===0||r in ae||r.startsWith("--")?String(e).trim():"".concat(e,"px")),";")))}return n};/**
 * Resolves a styled component, keyframes, or CSS interpolation into an array of class names or CSS rules.
 *
 * Handles various input types including styled components, keyframes, functions returning components, arrays of interpolations, and plain values. Recursively processes nested structures and injects keyframes if a stylesheet is provided.
 *
 * @param {*} input - The styled component, keyframes, function, array, or value to resolve.
 * @param {*} props - Optional props to pass if the input is a function.
 * @param {*} sheet - Optional stylesheet instance for keyframe injection.
 * @param {*} context - Optional context for keyframe naming.
 * @returns {Array} An array of class names or CSS rules derived from the input.
 */
function W(t,r,e,n){if(Nr(t))return[];if(qt(t))return[".".concat(t.styledComponentId)];if(Q(t)){if(!Q(s=t)||s.prototype&&s.prototype.isReactComponent||!r)return[t];var o=t(r);return W(o,r,e,n)}var s;return t instanceof Fe?e?(t.inject(e,n),[t.getName(n)]):[t]:st(t)?Or(t):Array.isArray(t)?Array.prototype.concat.apply($t,t.map(function(i){return W(i,r,e,n)})):[t.toString()]}/**
 * Determines if all elements in the array are objects and not React elements.
 *
 * @param {Array} t - The array to check.
 * @returns {boolean} True if every element is an object and not a React element; otherwise, false.
 */
function Be(t){for(var r=0;r<t.length;r+=1){var e=t[r];if(Q(e)&&!qt(e))return!1}return!0}var Le=Cr(Et),Me=function(){/**
 * Constructs a style rule group for a styled component.
 *
 * Initializes rule storage, determines if the rules are static, generates a base hash, and registers the component ID.
 *
 * @param {Array} r - The array of CSS rules for the component.
 * @param {string} e - The unique component ID.
 * @param {object} [n] - Optional base style configuration.
 */
function t(r,e,n){this.rules=r,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Be(r),this.componentId=e,this.baseHash=q(Le,e),this.baseStyle=n,Rr.registerId(e)}return t.prototype.generateAndInjectStyles=function(r,e,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,e,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&e.hasNameForId(this.componentId,this.staticRulesId))o=L(o,this.staticRulesId);else{var s=or(W(this.rules,r,e,n)),i=Gt(q(this.baseHash,s)>>>0);if(!e.hasNameForId(this.componentId,i)){var c=n(s,".".concat(i),void 0,this.componentId);e.insertRules(this.componentId,i,c)}o=L(o,i),this.staticRulesId=i}else{for(var a=q(this.baseHash,n.hash),h="",l=0;l<this.rules.length;l++){var g=this.rules[l];if(typeof g=="string")h+=g;else if(g){var m=or(W(g,r,e,n));a=q(a,m+l),h+=m}}if(h){var p=Gt(a>>>0);e.hasNameForId(this.componentId,p)||e.insertRules(this.componentId,p,n(h,".".concat(p),void 0,this.componentId)),o=L(o,p)}}return o},t}(),jr=ot.createContext(void 0);jr.Consumer;var zt={};/**
 * Creates a styled React component with dynamic CSS and optional attribute composition.
 *
 * Accepts a base component or HTML tag and returns a new component with generated styles, support for dynamic props, attribute merging, and ref forwarding. Handles unique class name generation, component IDs, and prop filtering for styled-components patterns.
 *
 * @param {React.ComponentType|String} t - The base component or HTML tag to style.
 * @param {Object} r - Configuration options including attrs, displayName, componentId, and shouldForwardProp.
 * @param {Array|Function|Object} e - CSS rules or interpolations to apply.
 * @returns {React.ForwardRefExoticComponent} A styled component with injected styles and composed attributes.
 */
function We(t,r,e){var n=qt(t),o=t,s=!jt(t),i=r.attrs,c=i===void 0?$t:i,a=r.componentId,h=a===void 0?function(x,k){var y=typeof x!="string"?"sc":Xt(x);zt[y]=(zt[y]||0)+1;var f="".concat(y,"-").concat(le(Et+y+zt[y]));return k?"".concat(k,"-").concat(f):f}(r.displayName,r.parentComponentId):a,l=r.displayName,g=l===void 0?function(x){return jt(x)?"styled.".concat(x):"Styled(".concat(he(x),")")}(t):l,m=r.displayName&&r.componentId?"".concat(Xt(r.displayName),"-").concat(r.componentId):r.componentId||h,p=n&&o.attrs?o.attrs.concat(c).filter(Boolean):c,v=r.shouldForwardProp;if(n&&o.shouldForwardProp){var C=o.shouldForwardProp;if(r.shouldForwardProp){var _=r.shouldForwardProp;v=function(x,k){return C(x,k)&&_(x,k)}}else v=C}var I=new Me(e,m,n?o.componentStyle:void 0);function S(x,k){return function(y,f,Y){var at=y.attrs,Tr=y.componentStyle,Dr=y.defaultProps,Fr=y.foldedComponentIds,Gr=y.styledComponentId,Br=y.target,Lr=ot.useContext(jr),Mr=ar(),Rt=y.shouldForwardProp||Mr.shouldForwardProp,Kt=ue(f,Lr,Dr)||J,z=function(ut,tt,ft){for(var rt,B=R(R({},tt),{className:void 0,theme:ft}),Pt=0;Pt<ut.length;Pt+=1){var pt=Q(rt=ut[Pt])?rt(B):rt;for(var F in pt)B[F]=F==="className"?L(B[F],pt[F]):F==="style"?R(R({},B[F]),pt[F]):pt[F]}return tt.className&&(B.className=L(B.className,tt.className)),B}(at,f,Kt),ct=z.as||Br,X={};for(var D in z)z[D]===void 0||D[0]==="$"||D==="as"||D==="theme"&&z.theme===Kt||(D==="forwardedAs"?X.as=z.forwardedAs:Rt&&!Rt(D,ct)||(X[D]=z[D]));var Zt=function(ut,tt){var ft=ar(),rt=ut.generateAndInjectStyles(tt,ft.styleSheet,ft.stylis);return rt}(Tr,z),_t=L(Fr,Gr);return Zt&&(_t+=" "+Zt),z.className&&(_t+=" "+z.className),X[jt(ct)&&!Sr.has(ct)?"class":"className"]=_t,Y&&(X.ref=Y),pr.createElement(ct,X)}(w,x,k)}S.displayName=g;var w=ot.forwardRef(S);return w.attrs=p,w.componentStyle=I,w.displayName=g,w.shouldForwardProp=v,w.foldedComponentIds=n?L(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=m,w.target=n?o.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=n?function(k){for(var y=[],f=1;f<arguments.length;f++)y[f-1]=arguments[f];for(var Y=0,at=y;Y<at.length;Y++)Bt(k,at[Y],!0);return k}({},o.defaultProps,x):x}}),Ut(w,function(){return".".concat(w.styledComponentId)}),s&&Er(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}/**
 * Interleaves the elements of a template string array with the provided interpolations.
 *
 * @param {string[]} t - The template string array.
 * @param {any[]} r - The array of interpolated values.
 * @returns {any[]} An array with template strings and interpolations interleaved in order.
 */
function ur(t,r){for(var e=[t[0]],n=0,o=r.length;n<o;n+=1)e.push(r[n],t[n+1]);return e}var fr=function(t){return Object.assign(t,{isCss:!0})};/**
 * Processes template literals or arrays of CSS rules and interpolations into a flattened CSS string.
 *
 * Accepts either a tagged template literal (with interpolations) or an array of CSS rules, and returns a single CSS string suitable for injection or further processing.
 *
 * @param {...any} args - Template literal strings and interpolations, or arrays of CSS rules.
 * @returns {string} The resulting flattened CSS string.
 */
function Ye(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];if(Q(t)||st(t))return fr(W(ur($t,wt([t],r,!0))));var n=t;return r.length===0&&n.length===1&&typeof n[0]=="string"?W(n):fr(W(ur(n,r)))}/**
 * Creates a styled component factory with support for `.attrs` and `.withConfig` chaining.
 *
 * Returns a function that generates a styled component using the provided base component, style rules, and configuration. The returned function supports `.attrs` to merge additional attributes and `.withConfig` to override configuration options.
 *
 * @param {Function} t - The styled component factory function.
 * @param {React.ComponentType|string} r - The base React component or HTML tag to style.
 * @param {Object} [e=J] - Optional configuration object for the styled component.
 * @returns {Function} A function for creating styled components, with `.attrs` and `.withConfig` methods for further customization.
 *
 * @throws {Error} If the base component {@link r} is not provided.
 */
function Mt(t,r,e){if(e===void 0&&(e=J),!r)throw it(1,r);var n=function(o){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return t(r,e,Ye.apply(void 0,wt([o],s,!1)))};return n.attrs=function(o){return Mt(t,r,R(R({},e),{attrs:Array.prototype.concat(e.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Mt(t,r,R(R({},e),o))},n}var zr=function(t){return Mt(We,t)},$=zr;Sr.forEach(function(t){$[t]=zr(t)});const He=$.div`
  margin: 2rem auto;
  padding: 1rem;
  max-width: 560px;
`,qe=$.form`
  background: lavender;
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #ddd;
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
    margin-top: .4rem;
    color: #333;
  }
`,Ue=$.div`
    display: flex;
    justify-content: space-between;
    padding: .5em;
`,Ke=$.div`
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  width: 100%;
  height: ${t=>t.size||"1.2em"};
  color: ${t=>t.color||"inherit"}; 
`,Ze=$.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  & > * {
    margin: 0.1rem;
  }
`,Je=$.label`
  grid-column: 1;  
  font-weight: 500;
  color: #555;
  margin-right: 0.5rem; 
  text-align: left;

  &::after {
    content: ":";
  }
`,Qe=$.input`
  grid-column: 2;
  justify-self: end;   
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: .8rem;
  box-sizing: border-box;

  &:focus {
    border: 1px solid #ccc;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;$.input`
 grid-column: 2;
 justify-self: end; 
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: .8rem;
  justify-self: end;
`;const Ve=$.input`
  width: 6rem;
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  gap: 1.5rem;
  font-size: .8rem;
`,Xe=$.select`
  padding: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: .8rem;
  background-color: white;
  color: #333;
`,tn=$.option`
    background-color: white;
    color: #333;
    font-size: .8rem;
`,rn=$.textarea`
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    min-height: 100px;
    background-color: #f9f9f9;

    &:focus {
        outline: none;
        border-color: #007bff;
        background-color: #fff;
    }

    &::placeholder {
        color: #888;
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`,en=$.div`
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.2rem;
   span {
    font-weight: bold;
  }
`,nn=$.div`
   display: flex;
   justify-content: space-between;
   margin-top: 2rem;
`,on=$.button`
  padding: 0.4rem .8rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  font-size: .8rem;
  transition: background-color 0.2s ease-in-out;

    background-color: ${({$variant:t})=>t==="reset"?"#ffa500":"#28a745"};
    color: ${({$variant:t})=>t==="reset"?"#333":"#fff"};

    &:hover {
        background-color: ${({$variant:t})=>t==="reset"?"#e69500":"#218838"};
    }
`,sn=$.pre`
    background-color: #f4f4f9;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    font-family: "Courier New", Courier, monospace;
    font-size: 1rem;
    white-space: pre-wrap;
    word-wrap: break-word;
    max-width: 100%;
    overflow-x: auto;
    margin-top: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,cn={FormContainer:He,StyledForm:qe,FormRow:Ue,UserIconWrapper:Ke,FieldWrapper:Ze,Label:Je,SmallInput:Ve,Select:Xe,Option:tn,Textarea:rn,ErrorText:en,SubmitRow:nn,Button:on,CustomInput:Qe,JsonOutput:sn};export{cn as S};
