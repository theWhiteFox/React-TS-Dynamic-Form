var j="Invariant failed";/**
 * Throws an error with a fixed message if the provided condition is falsy.
 *
 * @param {boolean} e - The condition to check.
 * @param {*} t - Unused parameter.
 * @throws {Error} If {@link e} is falsy.
 */
function S(e,t){if(!e)throw new Error(j)}const{useEffect:T}=__STORYBOOK_MODULE_PREVIEW_API__,{global:d}=__STORYBOOK_MODULE_GLOBAL__;var K="measureEnabled";/**
 * Returns the current width and height of the document's root element, accounting for scroll and offset sizes.
 *
 * @returns {{width: number, height: number}} An object containing the document's width and height in pixels.
 */
function Y(){let e=d.document.documentElement,t=Math.max(e.scrollHeight,e.offsetHeight);return{width:Math.max(e.scrollWidth,e.offsetWidth),height:t}}/**
 * Creates and appends a high-DPI canvas overlay to the document body for measurement visuals.
 *
 * The canvas is positioned absolutely to cover the entire viewport, scaled for device pixel ratio, and configured to ignore pointer events.
 *
 * @returns {{canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, width: number, height: number}} The created canvas element, its 2D rendering context, and its dimensions.
 *
 * @throws {Error} If the 2D rendering context cannot be obtained.
 */
function G(){let e=d.document.createElement("canvas");e.id="storybook-addon-measure";let t=e.getContext("2d");S(t!=null);let{width:o,height:l}=Y();return A(e,t,{width:o,height:l}),e.style.position="absolute",e.style.left="0",e.style.top="0",e.style.zIndex="2147483647",e.style.pointerEvents="none",d.document.body.appendChild(e),{canvas:e,context:t,width:o,height:l}}/**
 * Sets the canvas element's CSS size and pixel dimensions according to the device pixel ratio, and scales the 2D context for high-DPI rendering.
 *
 * @param {HTMLCanvasElement} e - The canvas element to configure.
 * @param {CanvasRenderingContext2D} t - The 2D rendering context of the canvas.
 * @param {{width: number, height: number}} param2 - The desired width and height for the canvas in CSS pixels.
 */
function A(e,t,{width:o,height:l}){e.style.width=`${o}px`,e.style.height=`${l}px`;let i=d.window.devicePixelRatio;e.width=Math.floor(o*i),e.height=Math.floor(l*i),t.scale(i,i)}var h={};/**
 * Initializes the singleton canvas overlay if it does not already exist.
 *
 * Ensures that the canvas and its 2D context are created and stored for subsequent drawing operations.
 */
function U(){h.canvas||(h=G())}/**
 * Clears the entire measurement overlay canvas.
 *
 * Does nothing if the canvas context is not initialized.
 */
function H(){h.context&&h.context.clearRect(0,0,h.width??0,h.height??0)}/**
 * Clears the overlay canvas and executes a drawing callback with the canvas context.
 *
 * @param {function} e - Callback function that receives the canvas 2D context for custom drawing.
 */
function V(e){H(),e(h.context)}/**
 * Resets the overlay canvas size to match the current document dimensions.
 *
 * Sets the canvas width and height to zero before resizing it to the document's current width and height, updating the stored dimensions accordingly.
 *
 * @remark Throws an error if the canvas or its context is not initialized.
 */
function Z(){S(h.canvas),S(h.context),A(h.canvas,h.context,{width:0,height:0});let{width:e,height:t}=Y();A(h.canvas,h.context,{width:e,height:t}),h.width=e,h.height=t}/**
 * Removes the measurement overlay canvas from the DOM and resets the singleton canvas reference.
 */
function J(){var e;h.canvas&&(H(),(e=h.canvas.parentNode)==null||e.removeChild(h.canvas),h={})}var w={margin:"#f6b26b",border:"#ffe599",padding:"#93c47d",content:"#6fa8dc",text:"#232020"},c=6;/**
 * Draws a rounded rectangle path on the given canvas context.
 *
 * @param {CanvasRenderingContext2D} e - The canvas 2D context.
 * @param {{x: number, y: number, w: number, h: number, r: number}} rect - Rectangle parameters: center coordinates ({@link x}, {@link y}), width ({@link w}), height ({@link h}), and corner radius ({@link r}).
 *
 * @remark
 * If the width or height is less than twice the radius, the radius is reduced to fit the rectangle.
 */
function W(e,{x:t,y:o,w:l,h:i,r:n}){t=t-l/2,o=o-i/2,l<2*n&&(n=l/2),i<2*n&&(n=i/2),e.beginPath(),e.moveTo(t+n,o),e.arcTo(t+l,o,t+l,o+i,n),e.arcTo(t+l,o+i,t,o+i,n),e.arcTo(t,o+i,t,o,n),e.arcTo(t,o,t+l,o,n),e.closePath()}/**
 * Calculates the coordinates for label placement relative to a box model rectangle.
 *
 * Determines the (x, y) position for a label based on the specified position ("top", "right", "bottom", "left", or "center") within the content area of a box model, accounting for padding and border thickness.
 *
 * @param {string} position - The desired label position ("top", "right", "bottom", "left", or "center").
 * @param {Object} rect - The box model rectangle with properties: padding, border, width, height, top, and left.
 * @returns {{x: number, y: number}} The calculated coordinates for label placement.
 */
function Q(e,{padding:t,border:o,width:l,height:i,top:n,left:r}){let f=l-o.left-o.right-t.left-t.right,a=i-t.top-t.bottom-o.top-o.bottom,s=r+o.left+t.left,u=n+o.top+t.top;return e==="top"?s+=f/2:e==="right"?(s+=f,u+=a/2):e==="bottom"?(s+=f/2,u+=a):e==="left"?u+=a/2:e==="center"&&(s+=f/2,u+=a/2),{x:s,y:u}}/**
 * Calculates the x and y offset for positioning a label relative to a box model edge.
 *
 * @param {"margin"|"border"|"padding"} e - The box model type for which the offset is calculated.
 * @param {"top"|"right"|"bottom"|"left"} t - The position relative to the box model.
 * @param {Object} param2 - The box model measurements, containing `margin`, `border`, and `padding` objects.
 * @param {number} n - The base offset multiplier for floating labels.
 * @param {boolean} r - Whether the label is floating (affects offset scaling).
 * @returns {{offsetX: number, offsetY: number}} The calculated x and y offsets for label placement.
 */
function x(e,t,{margin:o,border:l,padding:i},n,r){let f=m=>0,a=0,s=0,u=r?1:.5,g=r?n*2:0;return e==="padding"?f=m=>i[m]*u+g:e==="border"?f=m=>i[m]+l[m]*u+g:e==="margin"&&(f=m=>i[m]+l[m]+o[m]*u+g),t==="top"?s=-f("top"):t==="right"?a=f("right"):t==="bottom"?s=f("bottom"):t==="left"&&(a=-f("left")),{offsetX:a,offsetY:s}}/**
 * Determines whether two rectangles overlap based on their center positions and dimensions.
 *
 * @param {{x: number, y: number, w: number, h: number}} e - The first rectangle, with center coordinates and width/height.
 * @param {{x: number, y: number, w: number, h: number}} t - The second rectangle, with center coordinates and width/height.
 * @returns {boolean} True if the rectangles overlap horizontally and vertically; otherwise, false.
 */
function tt(e,t){return Math.abs(e.x-t.x)<Math.abs(e.w+t.w)/2&&Math.abs(e.y-t.y)<Math.abs(e.h+t.h)/2}/**
 * Adjusts a label's position to avoid overlapping with a reference rectangle by shifting it away in the specified direction.
 *
 * @param {"top"|"right"|"bottom"|"left"} e - The direction to shift the label relative to the reference rectangle.
 * @param {{x: number, y: number, w: number, h: number}} t - The current label position and dimensions, which will be adjusted.
 * @param {{x: number, y: number, w: number, h: number}} o - The reference rectangle to avoid overlapping.
 * @returns {{x: number, y: number}} The adjusted label position.
 */
function et(e,t,o){return e==="top"?t.y=o.y-o.h-c:e==="right"?t.x=o.x+o.w/2+c+t.w/2:e==="bottom"?t.y=o.y+o.h+c:e==="left"&&(t.x=o.x-o.w/2-c-t.w/2),{x:t.x,y:t.y}}/**
 * Draws a filled and stroked rounded rectangle with a label at the specified position on the canvas.
 *
 * The rectangle is styled according to the provided box model type and includes a text label centered at the given coordinates.
 *
 * @param {CanvasRenderingContext2D} e - The canvas 2D rendering context.
 * @param {string} t - The box model type ("margin", "border", "padding", or "content") used to determine colors.
 * @param {{x: number, y: number, w: number, h: number}} rect - The rectangle's position and dimensions.
 * @param {string} r - The text label to display inside the rectangle.
 * @returns {{x: number, y: number, w: number, h: number}} The rectangle's position and dimensions.
 */
function X(e,t,{x:o,y:l,w:i,h:n},r){return W(e,{x:o,y:l,w:i,h:n,r:3}),e.fillStyle=`${w[t]}dd`,e.fill(),e.strokeStyle=w[t],e.stroke(),e.fillStyle=w.text,e.fillText(r,o,l),W(e,{x:o,y:l,w:i,h:n,r:3}),e.fillStyle=`${w[t]}dd`,e.fill(),e.strokeStyle=w[t],e.stroke(),e.fillStyle=w.text,e.fillText(r,o,l),{x:o,y:l,w:i,h:n}}/**
 * Measures the width and height required to render a text label with padding in a monospace font.
 *
 * @param {CanvasRenderingContext2D} e - The canvas 2D rendering context.
 * @param {string} t - The text to measure.
 * @returns {{w: number, h: number}} The width and height in pixels, including padding.
 */
function C(e,t){e.font="600 12px monospace",e.textBaseline="middle",e.textAlign="center";let o=e.measureText(t),l=o.actualBoundingBoxAscent+o.actualBoundingBoxDescent,i=o.width+c*2,n=l+c*2;return{w:i,h:n}}/**
 * Draws a label for a box model area on the canvas, positioning it to avoid overlap with a previous label if necessary.
 *
 * @param {CanvasRenderingContext2D} e - The canvas 2D context.
 * @param {Object} t - The rectangle representing the box model area.
 * @param {Object} param2 - Label configuration.
 * @param {string} param2.type - The box model type ("margin", "border", "padding", or "content").
 * @param {string} [param2.position="center"] - The preferred label position relative to the rectangle.
 * @param {string} param2.text - The label text.
 * @param {Object} [n] - The rectangle of the previous label, if any, for overlap avoidance.
 * @param {boolean} [r=false] - Whether the label is floating.
 * @returns {void}
 */
function ot(e,t,{type:o,position:l="center",text:i},n,r=!1){let{x:f,y:a}=Q(l,t),{offsetX:s,offsetY:u}=x(o,l,t,c+1,r);f+=s,a+=u;let{w:g,h:m}=C(e,i);if(n&&tt({x:f,y:a,w:g,h:m},n)){let v=et(l,{x:f,y:a,w:g},n);f=v.x,a=v.y}return X(e,o,{x:f,y:a,w:g,h:m},i)}/**
 * Calculates the offset for positioning a floating label relative to a reference point.
 *
 * @param {{x: "left" | "right" | "center", y: "top" | "bottom" | "center"}} e - The alignment direction for the label.
 * @param {{w: number, h: number}} size - The width and height of the label.
 * @returns {{offsetX: number, offsetY: number}} The x and y offsets to apply for correct label placement.
 */
function it(e,{w:t,h:o}){let l=t*.5+c,i=o*.5+c;return{offsetX:(e.x==="left"?-1:1)*l,offsetY:(e.y==="top"?-1:1)*i}}/**
 * Draws a floating label for a box model area, positioning it at the specified alignment extremity.
 *
 * @param {CanvasRenderingContext2D} e - The canvas 2D context.
 * @param {Object} t - The box model object containing alignment and extremity information.
 * @param {Object} param2 - Label details.
 * @param {string} param2.type - The box model area type (e.g., "margin", "border", "padding", "content").
 * @param {string} param2.text - The label text to display.
 *
 * @returns {void}
 */
function lt(e,t,{type:o,text:l}){let{floatingAlignment:i,extremities:n}=t,r=n[i.x],f=n[i.y],{w:a,h:s}=C(e,l),{offsetX:u,offsetY:g}=it(i,{w:a,h:s});return r+=u,f+=g,X(e,o,{x:r,y:f,w:a,h:s},l)}/**
 * Draws multiple labels for a given box model area, positioning each label to avoid overlap.
 *
 * For each label in {@link o}, draws it at the appropriate position on the canvas context {@link e}, using either floating or standard label placement depending on {@link l}. Ensures that labels do not overlap by adjusting their positions relative to previously drawn labels.
 *
 * @param {CanvasRenderingContext2D} e - The canvas context to draw on.
 * @param {object} t - The box model area or rectangle associated with the labels.
 * @param {Array<object>} o - The list of label objects to draw, each containing position and text.
 * @param {boolean} l - Whether to use floating label placement.
 */
function E(e,t,o,l){let i=[];o.forEach((n,r)=>{let f=l&&n.position==="center"?lt(e,t,n):ot(e,t,n,i[r-1],l);i[r]=f})}/**
 * Groups label objects by their position and draws them on the canvas for a given rectangle.
 *
 * @param {CanvasRenderingContext2D} e - The canvas 2D context.
 * @param {Object} t - The rectangle to annotate.
 * @param {Array<Object>} o - Array of label objects, each with a `position` property.
 * @param {boolean} l - Whether to use floating label positioning.
 */
function nt(e,t,o,l){let i=o.reduce((n,r)=>{var f;return Object.prototype.hasOwnProperty.call(n,r.position)||(n[r.position]=[]),(f=n[r.position])==null||f.push(r),n},{});i.top&&E(e,t,i.top,l),i.right&&E(e,t,i.right,l),i.bottom&&E(e,t,i.bottom,l),i.left&&E(e,t,i.left,l),i.center&&E(e,t,i.center,l)}var L={margin:"#f6b26ba8",border:"#ffe599a8",padding:"#93c47d8c",content:"#6fa8dca8"},B=30;/**
 * Parses a CSS pixel value string and returns its integer value.
 *
 * @param {string} e - A string representing a CSS pixel value (e.g., "12px").
 * @returns {number} The numeric value of the pixel string as an integer.
 */
function p(e){return parseInt(e.replace("px",""),10)}/**
 * Formats a number as an integer if possible, otherwise returns it as a string with two decimal places.
 *
 * @param {number} e - The number to format.
 * @returns {number|string} The formatted number, either as an integer or a string with two decimals.
 */
function b(e){return Number.isInteger(e)?e:e.toFixed(2)}/**
 * Filters out label objects whose `text` property is zero or the string "0".
 *
 * @param {Array<{text: string|number}>} e - Array of label objects to filter.
 * @returns {Array<{text: string|number}>} Filtered array excluding labels with zero values.
 */
function P(e){return e.filter(t=>t.text!==0&&t.text!=="0")}/**
 * Determines which sides of a rectangle are closest to the viewport edges.
 *
 * @param {Object} e - The rectangle with `top`, `bottom`, `left`, and `right` properties.
 * @returns {{x: string, y: string}} An object indicating the closest horizontal (`x`: "left" or "right") and vertical (`y`: "top" or "bottom") sides to the viewport.
 */
function ft(e){let t={top:d.window.scrollY,bottom:d.window.scrollY+d.window.innerHeight,left:d.window.scrollX,right:d.window.scrollX+d.window.innerWidth},o={top:Math.abs(t.top-e.top),bottom:Math.abs(t.bottom-e.bottom),left:Math.abs(t.left-e.left),right:Math.abs(t.right-e.right)};return{x:o.left>o.right?"left":"right",y:o.top>o.bottom?"top":"bottom"}}/**
 * Computes the box model metrics and extremities for a DOM element.
 *
 * Returns an object containing the element's margin, padding, border widths, bounding rectangle (top, left, bottom, right, width, height), extremities including margins, and floating label alignment.
 *
 * @param {Element} e - The DOM element to measure.
 * @returns {Object} An object with properties: margin, padding, border, top, left, bottom, right, width, height, extremities, and floatingAlignment.
 */
function rt(e){let t=d.getComputedStyle(e),{top:o,left:l,right:i,bottom:n,width:r,height:f}=e.getBoundingClientRect(),{marginTop:a,marginBottom:s,marginLeft:u,marginRight:g,paddingTop:m,paddingBottom:v,paddingLeft:k,paddingRight:F,borderBottomWidth:I,borderTopWidth:D,borderLeftWidth:$,borderRightWidth:N}=t;o=o+d.window.scrollY,l=l+d.window.scrollX,n=n+d.window.scrollY,i=i+d.window.scrollX;let y={top:p(a),bottom:p(s),left:p(u),right:p(g)},q={top:p(m),bottom:p(v),left:p(k),right:p(F)},z={top:p(D),bottom:p(I),left:p($),right:p(N)},_={top:o-y.top,bottom:n+y.bottom,left:l-y.left,right:i+y.right};return{margin:y,padding:q,border:z,top:o,left:l,bottom:n,right:i,width:r,height:f,extremities:_,floatingAlignment:ft(_)}}/**
 * Draws the margin area of a box model on the canvas and returns label data for each margin side.
 *
 * @param {CanvasRenderingContext2D} e - The canvas 2D rendering context.
 * @param {Object} boxModel - The box model metrics, including margin, width, height, and box edges.
 * @returns {Array<Object>} An array of label objects for each margin side, excluding sides with zero margin.
 */
function at(e,{margin:t,width:o,height:l,top:i,left:n,bottom:r,right:f}){let a=l+t.bottom+t.top;e.fillStyle=L.margin,e.fillRect(n,i-t.top,o,t.top),e.fillRect(f,i-t.top,t.right,a),e.fillRect(n,r,o,t.bottom),e.fillRect(n-t.left,i-t.top,t.left,a);let s=[{type:"margin",text:b(t.top),position:"top"},{type:"margin",text:b(t.right),position:"right"},{type:"margin",text:b(t.bottom),position:"bottom"},{type:"margin",text:b(t.left),position:"left"}];return P(s)}/**
 * Draws the padding area of a box model on the canvas and returns label data for each padding side.
 *
 * @param {CanvasRenderingContext2D} e - The canvas 2D context to draw on.
 * @param {Object} boxModel - The box model metrics, including padding, border, width, height, and edge positions.
 * @returns {Array<Object>} An array of label objects for each padding side with type, value, and position.
 */
function st(e,{padding:t,border:o,width:l,height:i,top:n,left:r,bottom:f,right:a}){let s=l-o.left-o.right,u=i-t.top-t.bottom-o.top-o.bottom;e.fillStyle=L.padding,e.fillRect(r+o.left,n+o.top,s,t.top),e.fillRect(a-t.right-o.right,n+t.top+o.top,t.right,u),e.fillRect(r+o.left,f-t.bottom-o.bottom,s,t.bottom),e.fillRect(r+o.left,n+t.top+o.top,t.left,u);let g=[{type:"padding",text:t.top,position:"top"},{type:"padding",text:t.right,position:"right"},{type:"padding",text:t.bottom,position:"bottom"},{type:"padding",text:t.left,position:"left"}];return P(g)}/**
 * Draws the border areas of a box model on the canvas and returns label data for each border side.
 *
 * @param {CanvasRenderingContext2D} e - The canvas 2D rendering context.
 * @param {Object} boxModel - The box model metrics, including border thickness and box dimensions.
 * @returns {Array<Object>} An array of label objects for each border side with type, text, and position.
 */
function ht(e,{border:t,width:o,height:l,top:i,left:n,bottom:r,right:f}){let a=l-t.top-t.bottom;e.fillStyle=L.border,e.fillRect(n,i,o,t.top),e.fillRect(n,r-t.bottom,o,t.bottom),e.fillRect(n,i+t.top,t.left,a),e.fillRect(f-t.right,i+t.top,t.right,a);let s=[{type:"border",text:t.top,position:"top"},{type:"border",text:t.right,position:"right"},{type:"border",text:t.bottom,position:"bottom"},{type:"border",text:t.left,position:"left"}];return P(s)}/**
 * Draws the content area of a box model on the canvas and returns a label with its dimensions.
 *
 * @param {CanvasRenderingContext2D} e - The canvas 2D context to draw on.
 * @param {Object} boxModel - The box model metrics, including padding, border, width, height, top, and left.
 * @returns {Array<Object>} An array containing a single label object with the content area's width and height.
 */
function ut(e,{padding:t,border:o,width:l,height:i,top:n,left:r}){let f=l-o.left-o.right-t.left-t.right,a=i-t.top-t.bottom-o.top-o.bottom;return e.fillStyle=L.content,e.fillRect(r+o.left+t.left,n+o.top+t.top,f,a),[{type:"content",position:"center",text:`${b(f)} x ${b(a)}`}]}/**
 * Returns a drawing function that overlays box model measurements for a given DOM element.
 *
 * The returned function, when called with a canvas context, computes the element's box model (margin, border, padding, content), draws colored overlays for each area, and renders labels with pixel values. Label placement adapts for small elements to avoid overlap.
 *
 * @param {Element} e - The DOM element to measure and annotate.
 * @returns {(ctx: CanvasRenderingContext2D) => void} A function that draws the measurement overlay for the specified element on the provided canvas context.
 */
function dt(e){return t=>{if(e&&t){let o=rt(e),l=at(t,o),i=st(t,o),n=ht(t,o),r=ut(t,o),f=o.width<=B*3||o.height<=B;nt(t,o,[...r,...i,...n,...l],f)}}}/**
 * Draws the measurement overlay for the specified DOM element.
 *
 * Clears the overlay canvas and renders margin, border, padding, and content highlights with labels for the given element.
 *
 * @param {Element} e - The DOM element to measure and annotate.
 */
function mt(e){V(dt(e))}var gt=(e,t)=>{let o=d.document.elementFromPoint(e,t),l=i=>{if(i&&i.shadowRoot){let n=i.shadowRoot.elementFromPoint(e,t);return i.isEqualNode(n)?i:n.shadowRoot?l(n):n}return i};return l(o)||o},O,M={x:0,y:0};/**
 * Updates the overlay to highlight and label the box model of the element at the specified viewport coordinates.
 *
 * @param {number} e - The x-coordinate in the viewport.
 * @param {number} t - The y-coordinate in the viewport.
 */
function R(e,t){O=gt(e,t),mt(O)}var pt=(e,t)=>{let{measureEnabled:o}=t.globals;return T(()=>{let l=i=>{window.requestAnimationFrame(()=>{i.stopPropagation(),M.x=i.clientX,M.y=i.clientY})};return document.addEventListener("pointermove",l),()=>{document.removeEventListener("pointermove",l)}},[]),T(()=>{let l=n=>{window.requestAnimationFrame(()=>{n.stopPropagation(),R(n.clientX,n.clientY)})},i=()=>{window.requestAnimationFrame(()=>{Z()})};return t.viewMode==="story"&&o&&(document.addEventListener("pointerover",l),U(),window.addEventListener("resize",i),R(M.x,M.y)),()=>{window.removeEventListener("resize",i),J()}},[o,t.viewMode]),e()},ct=[pt],wt={[K]:!1};export{ct as decorators,wt as initialGlobals};
