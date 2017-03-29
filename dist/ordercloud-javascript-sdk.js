(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.OrderCloudSDK = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],3:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"base64-js":2,"ieee754":4,"isarray":5}],4:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],5:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],6:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],7:[function(require,module,exports){

/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function(arr, fn, initial){  
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3
    ? initial
    : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }
  
  return curr;
};
},{}],8:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var reduce = require('reduce');

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  root = this;
}

/**
 * Noop.
 */

function noop(){};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  return false;
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    if (null != obj[key]) {
      pushEncodedKeyValuePair(pairs, key, obj[key]);
        }
      }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (Array.isArray(val)) {
    return val.forEach(function(v) {
      pushEncodedKeyValuePair(pairs, key, v);
    });
  }
  pairs.push(encodeURIComponent(key)
    + '=' + encodeURIComponent(val));
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  return /[\/+]json\b/.test(mime);
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return reduce(str.split(/ *; */), function(obj, str){
    var parts = str.split(/ *= */)
      , key = parts.shift()
      , val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this.parseBody(this.text ? this.text : this.xhr.response)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype.setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype.parseBody = function(str){
  var parse = request.parse[this.type];
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype.setStatusProperties = function(status){
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }

  var type = status / 100 | 0;

  // status / class
  this.status = this.statusCode = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  Emitter.call(this);
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {};
  this._header = {};
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
      return self.callback(err);
    }

    self.emit('response', res);

    if (err) {
      return self.callback(err, res);
    }

    if (res.status >= 200 && res.status < 300) {
      return self.callback(err, res);
    }

    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
    new_err.original = err;
    new_err.response = res;
    new_err.status = res.status;

    self.callback(new_err, res);
  });
}

/**
 * Mixin `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Allow for extension
 */

Request.prototype.use = function(fn) {
  fn(this);
  return this;
}

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.timeout = function(ms){
  this._timeout = ms;
  return this;
};

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.clearTimeout = function(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function(){
  if (this.aborted) return;
  this.aborted = true;
  this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set header `field` to `val`, or multiple fields with one object.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Get case-insensitive header `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api private
 */

Request.prototype.getHeader = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Force given parser
 *
 * Sets the body parser no matter type.
 *
 * @param {Function}
 * @api public
 */

Request.prototype.parse = function(fn){
  this._parser = fn;
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass){
  var str = btoa(user + ':' + pass);
  this.set('Authorization', 'Basic ' + str);
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.field = function(name, val){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(name, val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(field, file, filename || file.name);
  return this;
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
  *      request.post('/user')
  *        .send('name=tobi')
  *        .send('species=ferret')
  *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.send = function(data){
  var obj = isObject(data);
  var type = this.getHeader('Content-Type');

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this.getHeader('Content-Type');
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj || isHost(data)) return this;
  if (!type) this.type('json');
  return this;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

Request.prototype.withCredentials = function(){
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (0 == status) {
      if (self.timedout) return self.timeoutError();
      if (self.aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(e){
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = 'download';
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    xhr.onprogress = handleProgress;
  }
  try {
    if (xhr.upload && this.hasListeners('progress')) {
      xhr.upload.onprogress = handleProgress;
    }
  } catch(e) {
    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
    // Reported here:
    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.timedout = true;
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }

  // initiate request
  xhr.open(this.method, this.url, true);

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var contentType = this.getHeader('Content-Type');
    var serialize = this._parser || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

/**
 * Faux promise support
 *
 * @param {Function} fulfill
 * @param {Function} reject
 * @return {Request}
 */

Request.prototype.then = function (fulfill, reject) {
  return this.end(function(err, res) {
    err ? reject(err) : fulfill(res);
  });
}

/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(method, url) {
  // callback
  if ('function' == typeof url) {
    return new Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new Request('GET', method);
  }

  return new Request(method, url);
}

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

function del(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * Expose `request`.
 */

module.exports = request;

},{"emitter":6,"reduce":7}],9:[function(require,module,exports){
(function (Buffer){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['superagent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('superagent'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ApiClient = factory(root.superagent);
  }
}(this, function(superagent) {
  'use strict';

  /**
   * @module ApiClient
   * @version v1.0.42-preview
   */

  /**
   * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
   * application to use this class directly - the *Api and model classes provide the public API for the service. The
   * contents of this file should be regarded as internal but are documented for completeness.
   * @alias module:ApiClient
   * @class
   */
  var exports = function() {
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * @type {String}
     * @default https://api.ordercloud.io/v1
     */
    this.baseApiPath = 'https://api.ordercloud.io/v1'.replace(/\/+$/, '');

    /**
    * The base URL against Auth calls are resolved.
    * @type {String}
    * @default https://auth.ordercloud.io
    */
    this.baseAuthPath = 'https://auth.ordercloud.io'.replace(/\/+$/, '');

    /**
     * The authentication methods to be included for all API calls.
     * @type {Array.<String>}
     */
    this.authentications = {
      'oauth2': {type: 'oauth2'}
    };
    /**
     * The default HTTP headers to be included for all API calls.
     * @type {Array.<String>}
     * @default {}
     */
    this.defaultHeaders = {};

    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000
     */
    this.timeout = 60000;
  };

  /**
   * Returns a string representation for an actual parameter.
   * @param param The actual parameter.
   * @returns {String} The string representation of <code>param</code>.
   */
  exports.prototype.paramToString = function(param) {
    if (param == undefined || param == null) {
      return '';
    }
    if (param instanceof Date) {
      return param.toJSON();
    }
    return param.toString();
  };

  /**
   * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
   * NOTE: query parameters are not handled here.
   * @param {String} path The path to append to the base URL.
   * @param {Object} pathParams The parameter values to append.
   * @returns {String} The encoded path with parameter values substituted.
   */
  exports.prototype.buildUrl = function(path, pathParams) {
    if (!path.match(/^\//)) {
      path = '/' + path;
    }
    var _this = this;
    var url = _this.baseApiPath + path;
    url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
      var value;
      if (pathParams.hasOwnProperty(key)) {
        value = _this.paramToString(pathParams[key]);
      } else {
        value = fullMatch;
      }
      return encodeURIComponent(value);
    });
    return url;
  };

  /**
   * Checks whether the given content type represents JSON.<br>
   * JSON content type examples:<br>
   * <ul>
   * <li>application/json</li>
   * <li>application/json; charset=UTF8</li>
   * <li>APPLICATION/JSON</li>
   * </ul>
   * @param {String} contentType The MIME content type to check.
   * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
   */
  exports.prototype.isJsonMime = function(contentType) {
    return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
  };

  /**
   * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
   * @param {Array.<String>} contentTypes
   * @returns {String} The chosen content type, preferring JSON.
   */
  exports.prototype.jsonPreferredMime = function(contentTypes) {
    for (var i = 0; i < contentTypes.length; i++) {
      if (this.isJsonMime(contentTypes[i])) {
        return contentTypes[i];
      }
    }
    return contentTypes[0];
  };

  /**
   * Checks whether the given parameter value represents file-like content.
   * @param param The parameter to check.
   * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
   */
  exports.prototype.isFileParam = function(param) {
    // fs.ReadStream in Node.js (but not in runtime like browserify)
    if (typeof window === 'undefined' &&
        typeof require === 'function' &&
        require('fs') &&
        param instanceof require('fs').ReadStream) {
      return true;
    }
    // Buffer in Node.js
    if (typeof Buffer === 'function' && param instanceof Buffer) {
      return true;
    }
    // Blob in browser
    if (typeof Blob === 'function' && param instanceof Blob) {
      return true;
    }
    // File in browser (it seems File object is also instance of Blob, but keep this for safe)
    if (typeof File === 'function' && param instanceof File) {
      return true;
    }
    return false;
  };

  /**
   * Normalizes parameter values:
   * <ul>
   * <li>remove nils</li>
   * <li>keep files and arrays</li>
   * <li>format to string with `paramToString` for other cases</li>
   * </ul>
   * @param {Object.<String, Object>} params The parameters as object properties.
   * @returns {Object.<String, Object>} normalized parameters.
   */
  exports.prototype.normalizeParams = function(params) {
    var newParams = {};
    for (var key in params) {
      if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null && key != "filters") {
        var value = params[key];
        if (this.isFileParam(value) || Array.isArray(value)) {
          newParams[key] = value;
        } else {
          newParams[key] = this.paramToString(value);
        }
      }
      else if (key == "filters" && params[key] != null && params[key] != undefined) {
        for (var filterKey in params[key]) {
          if (params[key].hasOwnProperty(filterKey) && params[key][filterKey] != undefined && params[key][filterKey] != null) {
            var value = params[key][filterKey];
            if (this.isFileParam(value) || Array.isArray(value)) {
              newParams[filterKey] = value;
            } else {
              newParams[filterKey] = this.paramToString(value);
            }
          }
        }
      }
    }
    return newParams;
  };

  /**
   * Enumeration of collection format separator strategies.
   * @enum {String}
   * @readonly
   */
  exports.CollectionFormatEnum = {
    /**
     * Comma-separated values. Value: <code>csv</code>
     * @const
     */
    CSV: ',',
    /**
     * Space-separated values. Value: <code>ssv</code>
     * @const
     */
    SSV: ' ',
    /**
     * Tab-separated values. Value: <code>tsv</code>
     * @const
     */
    TSV: '\t',
    /**
     * Pipe(|)-separated values. Value: <code>pipes</code>
     * @const
     */
    PIPES: '|',
    /**
     * Native array. Value: <code>multi</code>
     * @const
     */
    MULTI: 'multi'
  };

  /**
   * Builds a string representation of an array-type actual parameter, according to the given collection format.
   * @param {Array} param An array parameter.
   * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
   * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
   * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
   */
  exports.prototype.buildCollectionParam = function buildCollectionParam(param, collectionFormat) {
    if (param == null) {
      return null;
    }
    switch (collectionFormat) {
      case 'csv':
        return param.map(this.paramToString).join(',');
      case 'ssv':
        return param.map(this.paramToString).join(' ');
      case 'tsv':
        return param.map(this.paramToString).join('\t');
      case 'pipes':
        return param.map(this.paramToString).join('|');
      case 'multi':
        // return the array directly as SuperAgent will handle it as expected
        return param.map(this.paramToString);
      default:
        throw new Error('Unknown collection format: ' + collectionFormat);
    }
  };

  /**
   * Applies authentication headers to the request.
   * @param {Object} request The request object created by a <code>superagent()</code> call.
   * @param {Array.<String>} authNames An array of authentication method names.
   */
  exports.prototype.applyAuthToRequest = function(request, authNames) {
    var _this = this;
    authNames.forEach(function(authName) {
      var auth = _this.authentications[authName];
      switch (auth.type) {
        case 'basic':
          if (auth.username || auth.password) {
            request.auth(auth.username || '', auth.password || '');
          }
          break;
        case 'apiKey':
          if (auth.apiKey) {
            var data = {};
            if (auth.apiKeyPrefix) {
              data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
            } else {
              data[auth.name] = auth.apiKey;
            }
            if (auth['in'] === 'header') {
              request.set(data);
            } else {
              request.query(data);
            }
          }
          break;
        case 'oauth2':
          if (auth.accessToken) {
            if (!_this.impersonation) {
              request.set({'Authorization': 'Bearer ' + auth.accessToken});
            } else {
              request.set({'Authorization': 'Bearer ' + auth.impersonationToken});
            }
          }
          break;
        default:
          throw new Error('Unknown authentication type: ' + auth.type);
      }
    });
  };

  /**
   * Deserializes an HTTP response body into a value of the specified type.
   * @param {Object} response A SuperAgent response object.
   * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
   * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
   * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
   * all properties on <code>data<code> will be converted to this type.
   * @returns A value of the specified type.
   */
  exports.prototype.deserialize = function deserialize(response, returnType) {
    if (response == null || returnType == null) {
      return null;
    }
    // Rely on SuperAgent for parsing response body.
    // See http://visionmedia.github.io/superagent/#parsing-response-bodies
    var data = response.body;
    if (data == null) {
      // SuperAgent does not always produce a body; use the unparsed response as a fallback
      data = response.text;
    }
    return exports.convertToType(data, returnType);
  };

  /**
   * Invokes the REST service using the supplied settings and parameters.
   * @param {String} path The base URL to invoke.
   * @param {String} httpMethod The HTTP method to use.
   * @param {Object.<String, String>} pathParams A map of path parameters and their values.
   * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
   * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
   * @param {Object.<String, Object>} formParams A map of form parameters and their values.
   * @param {Object} bodyParam The value to pass as the request body.
   * @param {Array.<String>} authNames An array of authentication type names.
   * @param {Array.<String>} contentTypes An array of request MIME types.
   * @param {Array.<String>} accepts An array of acceptable response MIME types.
   * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
   * constructor for a complex type.
   * @returns {Promise} A {@link https://www.promisejs.org/|Promise} object.
   */
  exports.prototype.callApi = function callApi(path, httpMethod, pathParams,
      queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
      returnType) {

    var _this = this;
    var url = this.buildUrl(path, pathParams);
    var request = superagent(httpMethod, url);

    // apply authentications
    this.applyAuthToRequest(request, authNames);

    // set query parameters
    request.query(this.normalizeParams(queryParams));

    // set header parameters
    request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

    // set request timeout
    request.timeout(this.timeout);

    var contentType = this.jsonPreferredMime(contentTypes);
    if (contentType) {
      // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
      if(contentType != 'multipart/form-data') {
        request.type(contentType);
      }
    } else if (!request.header['Content-Type']) {
      request.type('application/json');
    }

    if (contentType === 'application/x-www-form-urlencoded') {
      request.send(this.normalizeParams(formParams));
    } else if (contentType == 'multipart/form-data') {
      var _formParams = this.normalizeParams(formParams);
      for (var key in _formParams) {
        if (_formParams.hasOwnProperty(key)) {
          if (this.isFileParam(_formParams[key])) {
            // file field
            request.attach(key, _formParams[key]);
          } else {
            request.field(key, _formParams[key]);
          }
        }
      }
    } else if (bodyParam) {
      request.send(bodyParam);
    }

    var accept = this.jsonPreferredMime(accepts);
    if (accept) {
      request.accept(accept);
    }

    return new Promise(function(resolve, reject) {
      request.end(function(error, response) {
        if (error) {
          reject(error);
          // reset impersonation boolean
          _this.impersonation = false;
        } else {
          var data = _this.deserialize(response, returnType);
          // reset impersonation boolean
          _this.impersonation = false;
          resolve(data);
        }
      });
    });
  };

exports.prototype.callAuth = function callApi(path, httpMethod, pathParams,
      queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
      returnType) {

    var _this = this;
    var url = _this.baseAuthPath.replace(/\/+$/, '') + path;
    var request = superagent(httpMethod, url);

    // set query parameters
    request.query(this.normalizeParams(queryParams));

    // set header parameters
    request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

    // set request timeout
    request.timeout(this.timeout);

    var contentType = this.jsonPreferredMime(contentTypes);
    if (contentType) {
      // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
      if(contentType != 'multipart/form-data') {
        request.type(contentType);
      }
    } else if (!request.header['Content-Type']) {
      request.type('application/json');
    }

    if (contentType == 'multipart/form-data') {
      var _formParams = this.normalizeParams(formParams);
      for (var key in _formParams) {
        if (_formParams.hasOwnProperty(key)) {
          if (this.isFileParam(_formParams[key])) {
            // file field
            request.attach(key, _formParams[key]);
          } else {
            request.field(key, _formParams[key]);
          }
        }
      }
    } else if (bodyParam) {
      request.send(bodyParam);
    }

    var accept = this.jsonPreferredMime(accepts);
    if (accept) {
      request.accept(accept);
    }

    return new Promise(function(resolve, reject) {
      request.end(function(error, response) {
        if (error) {
          reject(error);
        } else {
          var data = _this.deserialize(response, returnType);
          resolve(data);
        }
      });
    });
  };

  /**
   * Parses an ISO-8601 string representation of a date value.
   * @param {String} str The date value as a string.
   * @returns {Date} The parsed date object.
   */
  exports.parseDate = function(str) {
    return new Date(str.replace(/T/i, ' '));
  };

  /**
   * Converts a value to the specified type.
   * @param {(String|Object)} data The data to convert, as a string or object.
   * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
   * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
   * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
   * all properties on <code>data<code> will be converted to this type.
   * @returns An instance of the specified type.
   */
  exports.convertToType = function(data, type) {
    if (data === null)
      return null;
    switch (type) {
      case 'Boolean':
        return Boolean(data);
      case 'Integer':
        return parseInt(data, 10);
      case 'Number':
        return parseFloat(data);
      case 'String':
        return String(data);
      case 'Date':
        return this.parseDate(String(data));
      default:
        if (type === Object) {
          // generic object, return directly
          return data;
        } else if (typeof type === 'function') {
          // for model type like: User
          return type.constructFromObject(data);
        } else if (Array.isArray(type)) {
          // for array type like: ['String']
          var itemType = type[0];
          return data.map(function(item) {
            return exports.convertToType(item, itemType);
          });
        } else if (typeof type === 'object') {
          // for plain object type like: {'String': 'Integer'}
          var keyType, valueType;
          for (var k in type) {
            if (type.hasOwnProperty(k)) {
              keyType = k;
              valueType = type[k];
              break;
            }
          }
          var result = {};
          for (var k in data) {
            if (data.hasOwnProperty(k)) {
              var key = exports.convertToType(k, keyType);
              var value = exports.convertToType(data[k], valueType);
              result[key] = value;
            }
          }
          return result;
        } else {
          // for unknown type, return the data directly
          return data;
        }
    }
  };

  /**
   * Constructs a new map or array model from REST data.
   * @param data {Object|Array} The REST data.
   * @param obj {Object|Array} The target object or array.
   */
  exports.constructFromObject = function(data, obj, itemType) {
    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        if (data.hasOwnProperty(i))
          obj[i] = exports.convertToType(data[i], itemType);
      }
    } else {
      for (var k in data) {
        if (data.hasOwnProperty(k))
          obj[k] = exports.convertToType(data[k], itemType);
      }
    }
  };

  /**
   * The default API client implementation.
   * @type {module:ApiClient}
   */
  exports.instance = new exports();

  return exports;
}));

}).call(this,require("buffer").Buffer)
},{"buffer":3,"fs":1,"superagent":8}],10:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/AddressAssignment', 'model/ListAddress', 'model/ListAddressAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Address'), require('../model/AddressAssignment'), require('../model/ListAddress'), require('../model/ListAddressAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Addresses = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address, root.OrderCloud.AddressAssignment, root.OrderCloud.ListAddress, root.OrderCloud.ListAddressAssignment);
  }
}(this, function(ApiClient, Address, AddressAssignment, ListAddress, ListAddressAssignment) {
  'use strict';

  /**
   * Address service.
   * @module api/Addresses
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new Addresses. 
   * @alias module:api/Addresses
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Create = function(buyerID, address) {
      var postBody = address;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling Create");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} addressID ID of the address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, addressID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses/{addressID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} addressID ID of the address.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(buyerID, addressID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteAssignment");
      }

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling DeleteAssignment");
      }


      var pathParams = {
        'buyerID': buyerID,
        'addressID': addressID
      };
      var queryParams = {
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses/{addressID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} addressID ID of the address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Get = function(buyerID, addressID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses/{addressID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAddress}
     */
    this.List = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling List");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListAddress;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.addressID ID of the address.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the address.
     * @param {Boolean} opts.isShipping Is shipping of the address.
     * @param {Boolean} opts.isBilling Is billing of the address.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAddressAssignment}
     */
    this.ListAssignments = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling ListAssignments");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'addressID': opts['addressID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'isShipping': opts['isShipping'],
        'isBilling': opts['isBilling'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListAddressAssignment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} addressID ID of the address.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Patch = function(buyerID, addressID, address) {
      var postBody = address;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Patch");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses/{addressID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/AddressAssignment} assignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(buyerID, assignment) {
      var postBody = assignment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling SaveAssignment");
      }

      // verify the required parameter 'assignment' is set
      if (assignment == undefined || assignment == null) {
        throw new Error("Missing the required parameter 'assignment' when calling SaveAssignment");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} addressID ID of the address.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Update = function(buyerID, addressID, address) {
      var postBody = address;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Update");
      }

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Update");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling Update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses/{addressID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/Address":38,"../model/AddressAssignment":39,"../model/ListAddress":62,"../model/ListAddressAssignment":63}],11:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/ListAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Address'), require('../model/ListAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.AdminAddresses = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address, root.OrderCloud.ListAddress);
  }
}(this, function(ApiClient, Address, ListAddress) {
  'use strict';

  /**
   * AdminAddress service.
   * @module api/AdminAddresses
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new AdminAddresses. 
   * @alias module:api/AdminAddresses
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Create = function(address) {
      var postBody = address;

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.apiClient.callApi(
        '/addresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} addressID ID of the address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(addressID) {
      var postBody = null;

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Delete");
      }


      var pathParams = {
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/addresses/{addressID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} addressID ID of the address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Get = function(addressID) {
      var postBody = null;

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Get");
      }


      var pathParams = {
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.apiClient.callApi(
        '/addresses/{addressID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAddress}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListAddress;

      return this.apiClient.callApi(
        '/addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} addressID ID of the address.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Patch = function(addressID, address) {
      var postBody = address;

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Patch");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling Patch");
      }


      var pathParams = {
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.apiClient.callApi(
        '/addresses/{addressID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} addressID ID of the address.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Update = function(addressID, address) {
      var postBody = address;

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Update");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling Update");
      }


      var pathParams = {
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.apiClient.callApi(
        '/addresses/{addressID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/Address":38,"../model/ListAddress":62}],12:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ListUserGroup', 'model/ListUserGroupAssignment', 'model/UserGroup', 'model/UserGroupAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListUserGroup'), require('../model/ListUserGroupAssignment'), require('../model/UserGroup'), require('../model/UserGroupAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.AdminUserGroups = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListUserGroup, root.OrderCloud.ListUserGroupAssignment, root.OrderCloud.UserGroup, root.OrderCloud.UserGroupAssignment);
  }
}(this, function(ApiClient, ListUserGroup, ListUserGroupAssignment, UserGroup, UserGroupAssignment) {
  'use strict';

  /**
   * AdminUserGroup service.
   * @module api/AdminUserGroups
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new AdminUserGroups. 
   * @alias module:api/AdminUserGroups
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/UserGroup} group 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Create = function(group) {
      var postBody = group;

      // verify the required parameter 'group' is set
      if (group == undefined || group == null) {
        throw new Error("Missing the required parameter 'group' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/usergroups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(userGroupID) {
      var postBody = null;

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Delete");
      }


      var pathParams = {
        'userGroupID': userGroupID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/usergroups/{userGroupID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userGroupID ID of the user group.
     * @param {String} userID ID of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteUserAssignment = function(userGroupID, userID) {
      var postBody = null;

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling DeleteUserAssignment");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling DeleteUserAssignment");
      }


      var pathParams = {
        'userGroupID': userGroupID,
        'userID': userID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/usergroups/{userGroupID}/assignments/{userID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Get = function(userGroupID) {
      var postBody = null;

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Get");
      }


      var pathParams = {
        'userGroupID': userGroupID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/usergroups/{userGroupID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUserGroup}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListUserGroup;

      return this.apiClient.callApi(
        '/usergroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.userID ID of the user.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUserGroupAssignment}
     */
    this.ListUserAssignments = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'userGroupID': opts['userGroupID'],
        'userID': opts['userID'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListUserGroupAssignment;

      return this.apiClient.callApi(
        '/usergroups/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userGroupID ID of the user group.
     * @param {module:model/UserGroup} group 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Patch = function(userGroupID, group) {
      var postBody = group;

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Patch");
      }

      // verify the required parameter 'group' is set
      if (group == undefined || group == null) {
        throw new Error("Missing the required parameter 'group' when calling Patch");
      }


      var pathParams = {
        'userGroupID': userGroupID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/usergroups/{userGroupID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/UserGroupAssignment} userGroupAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveUserAssignment = function(userGroupAssignment) {
      var postBody = userGroupAssignment;

      // verify the required parameter 'userGroupAssignment' is set
      if (userGroupAssignment == undefined || userGroupAssignment == null) {
        throw new Error("Missing the required parameter 'userGroupAssignment' when calling SaveUserAssignment");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/usergroups/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userGroupID ID of the user group.
     * @param {module:model/UserGroup} group 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Update = function(userGroupID, group) {
      var postBody = group;

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Update");
      }

      // verify the required parameter 'group' is set
      if (group == undefined || group == null) {
        throw new Error("Missing the required parameter 'group' when calling Update");
      }


      var pathParams = {
        'userGroupID': userGroupID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/usergroups/{userGroupID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/ListUserGroup":103,"../model/ListUserGroupAssignment":104,"../model/UserGroup":136,"../model/UserGroupAssignment":137}],13:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ListUser', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListUser'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.AdminUsers = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListUser, root.OrderCloud.User);
  }
}(this, function(ApiClient, ListUser, User) {
  'use strict';

  /**
   * AdminUser service.
   * @module api/AdminUsers
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new AdminUsers. 
   * @alias module:api/AdminUsers
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Create = function(user) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/adminusers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userID ID of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(userID) {
      var postBody = null;

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Delete");
      }


      var pathParams = {
        'userID': userID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/adminusers/{userID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userID ID of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Get = function(userID) {
      var postBody = null;

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Get");
      }


      var pathParams = {
        'userID': userID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/adminusers/{userID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUser}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListUser;

      return this.apiClient.callApi(
        '/adminusers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userID ID of the user.
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Patch = function(userID, user) {
      var postBody = user;

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Patch");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Patch");
      }


      var pathParams = {
        'userID': userID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/adminusers/{userID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userID ID of the user.
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Update = function(userID, user) {
      var postBody = user;

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Update");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Update");
      }


      var pathParams = {
        'userID': userID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/adminusers/{userID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/ListUser":102,"../model/User":135}],14:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApprovalRule', 'model/ListApprovalRule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApprovalRule'), require('../model/ListApprovalRule'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ApprovalRules = factory(root.OrderCloud.ApiClient, root.OrderCloud.ApprovalRule, root.OrderCloud.ListApprovalRule);
  }
}(this, function(ApiClient, ApprovalRule, ListApprovalRule) {
  'use strict';

  /**
   * ApprovalRule service.
   * @module api/ApprovalRules
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new ApprovalRules. 
   * @alias module:api/ApprovalRules
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/ApprovalRule} approvalRule 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApprovalRule}
     */
    this.Create = function(buyerID, approvalRule) {
      var postBody = approvalRule;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'approvalRule' is set
      if (approvalRule == undefined || approvalRule == null) {
        throw new Error("Missing the required parameter 'approvalRule' when calling Create");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ApprovalRule;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/approvalrules', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} approvalRuleID ID of the approval rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, approvalRuleID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'approvalRuleID' is set
      if (approvalRuleID == undefined || approvalRuleID == null) {
        throw new Error("Missing the required parameter 'approvalRuleID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'approvalRuleID': approvalRuleID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/approvalrules/{approvalRuleID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} approvalRuleID ID of the approval rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApprovalRule}
     */
    this.Get = function(buyerID, approvalRuleID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'approvalRuleID' is set
      if (approvalRuleID == undefined || approvalRuleID == null) {
        throw new Error("Missing the required parameter 'approvalRuleID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'approvalRuleID': approvalRuleID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ApprovalRule;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/approvalrules/{approvalRuleID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListApprovalRule}
     */
    this.List = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling List");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListApprovalRule;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/approvalrules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} approvalRuleID ID of the approval rule.
     * @param {module:model/ApprovalRule} partialApprovalRule 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApprovalRule}
     */
    this.Patch = function(buyerID, approvalRuleID, partialApprovalRule) {
      var postBody = partialApprovalRule;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'approvalRuleID' is set
      if (approvalRuleID == undefined || approvalRuleID == null) {
        throw new Error("Missing the required parameter 'approvalRuleID' when calling Patch");
      }

      // verify the required parameter 'partialApprovalRule' is set
      if (partialApprovalRule == undefined || partialApprovalRule == null) {
        throw new Error("Missing the required parameter 'partialApprovalRule' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'approvalRuleID': approvalRuleID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ApprovalRule;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/approvalrules/{approvalRuleID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} approvalRuleID ID of the approval rule.
     * @param {module:model/ApprovalRule} approvalRule 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApprovalRule}
     */
    this.Update = function(buyerID, approvalRuleID, approvalRule) {
      var postBody = approvalRule;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Update");
      }

      // verify the required parameter 'approvalRuleID' is set
      if (approvalRuleID == undefined || approvalRuleID == null) {
        throw new Error("Missing the required parameter 'approvalRuleID' when calling Update");
      }

      // verify the required parameter 'approvalRule' is set
      if (approvalRule == undefined || approvalRule == null) {
        throw new Error("Missing the required parameter 'approvalRule' when calling Update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'approvalRuleID': approvalRuleID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ApprovalRule;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/approvalrules/{approvalRuleID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/ApprovalRule":41,"../model/ListApprovalRule":65}],15:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


(function(root, factory) {
    if (typeof define === 'function' && define.and) {
        // AMD. Register as an anonymous module.
        define(['ApiClient', 'model/AccessToken'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'), require('../model/AccessToken'));
    } else {
        if (!root.OrderCloud) {
            root.OrderCloud = {};
        }
        root.OrderCloud.Auth = factory(root.OrderCloud.ApiClient, root.OrderCloud.AccessToken);
    }
}(this, function(ApiClient, AccessToken) {
    'use strict';

    /**
     * Auth service.
     * @module api/Auth
     * @version <projectVersion>
     */

    /**
     * Constructs a new Auth. 
     * @alias module:api/Auth
     * @class
     * @param {module:ApiClient} apiClient Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */

    var exports = function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;

        /**
         * @param {String} username of the user logging in
         * @param {String} password of the user logging in
         * @param {String} clientID of the application the user is logging into
         * @param {Array.<String>} scope is a string array of roles the application has access to
         */
        this.Login = function(username, password, clientID, scope) {
            if (username == undefined || username == null) {
                throw new Error("Missing the required parameter 'username' when calling Login");
            }

            if (password == undefined || password == null) {
                throw new Error("Missing the required parameter 'password' when calling Login");
            }

            if (clientID == undefined || clientID == null) {
                throw new Error("Missing the required parameter 'clientID' when calling Login");
            }

            if (scope == undefined || scope == null) {
                throw new Error("Missing the required parameter 'scope' when calling Login");
            }

            var postBody = 'grant_type=password&scope=' + scope.join("+") + '&client_id=' + clientID + '&username=' + username + '&password=' + password;

            var pathParams = {};
            var queryParams = {};
            var headerParams = {};
            var formParams = {};

            var authNames = null;
            var contentTypes = ['application/x-www-form-urlencoded'];
            var accepts = ['application/json'];
            var returnType = AccessToken;

            return this.apiClient.callAuth(
                '/oauth/token', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );         
        }

        /**
         * @param {String} clientSecret of the application
         * @param {String} username of the user logging in
         * @param {String} password of the user logging in
         * @param {String} clientID of the application the user is logging into
         * @param {Array.<String>} scope is a string array of roles the application has access to
         */
        this.ElevatedLogin= function(clientSecret, username, password, clientID, scope) {
            if (clientSecret == undefined || clientSecret == null) {
                throw new Error("Missing the required parameter 'clientSecret' when calling ElevatedLogin")
            }

            if (username == undefined || username == null) {
                throw new Error("Missing the required parameter 'username' when calling ElevatedLogin");
            }

            if (password == undefined || password == null) {
                throw new Error("Missing the required parameter 'password' when calling ElevatedLogin");
            }

            if (clientID == undefined || clientID == null) {
                throw new Error("Missing the required parameter 'clientID' when calling ElevatedLogin");
            }

            if (scope == undefined || scope == null) {
                throw new Error("Missing the required parameter 'scope' when calling ElevatedLogin");
            }

            var postBody = 'grant_type=password&scope=' + scope.join("+") + '&client_secret=' + clientSecret + '&client_id=' + clientID + '&username=' + username + '&password=' + password;

            var pathParams = {};
            var queryParams = {};
            var headerParams = {};
            var formParams = {};

            var authNames = null;
            var contentTypes = ['application/x-www-form-urlencoded'];
            var accepts = ['application/json'];
            var returnType = AccessToken;

            return this.apiClient.callAuth(
                '/oauth/token', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );  
        }

        /**
         * @param {String} clientSecret of the application
         * @param {String} clientID of the application the user is logging into
         * @param {Array.<String>} scope is a string array of roles the application has access to
         */
        this.ClientCredentials = function(clientSecret, clientID, scope) {
            if (clientSecret == undefined || clientSecret == null) {
                throw new Error("Missing the required parameter 'clientSecret' when calling ElevatedLogin")
            }

            if (clientID == undefined || clientID == null) {
                throw new Error("Missing the required parameter 'clientID' when calling ElevatedLogin");
            }

            if (scope == undefined || scope == null) {
                throw new Error("Missing the required parameter 'scope' when calling ElevatedLogin");
            }

            var postBody = 'grant_type=client_credentials&scope=' + scope.join("+") + '&client_secret=' + clientSecret + '&client_id=' + clientID;

            var pathParams = {};
            var queryParams = {};
            var headerParams = {};
            var formParams = {};

            var authNames = null;
            var contentTypes = ['application/x-www-form-urlencoded'];
            var accepts = ['application/json'];
            var returnType = AccessToken;

            return this.apiClient.callAuth(
                'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            ); 
        }

        /**
         * @param {String} refreshToken of the application
         * @param {String} clientID of the application the user is logging into
         * @param {Array.<String>} scope is a string array of roles the application has access to
         */
        this.RefreshToken = function(refreshToken, clientID, scope) {
            if (refreshToken == undefined || refreshToken == null) {
                throw new Error("Missing the required parameter 'refreshToken' when calling RefreshToken")
            }

            if (clientID == undefined || clientID == null) {
                throw new Error("Missing the required parameter 'clientID' when calling RefreshToken");
            }

            if (scope == undefined || scope == null) {
                throw new Error("Missing the required parameter 'scope' when calling RefreshToken");
            }

            var postBody = 'grant_type=refresh_token&scope=' + scope.join("+") + '&refresh_token=' + refreshToken + '&client_id=' + clientID;

            var pathParams = {};
            var queryParams = {};
            var headerParams = {};
            var formParams = {};

            var authNames = null;
            var contentTypes = ['application/x-www-form-urlencoded'];
            var accepts = ['application/json'];
            var returnType = AccessToken;

            return this.apiClient.callAuth(
                '/oauth/token', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * @param {String} clientID of the application the user is logging into
         * @param {Array.<String>} scope is a string array of roles the application has access to
         */
        this.Anonymous = function(clientID, scope) {
            if (clientID == undefined || clientID == null) {
                throw new Error("Missing the required parameter 'clientID' when calling RefreshToken");
            }

            if (scope == undefined || scope == null) {
                throw new Error("Missing the required parameter 'scope' when calling RefreshToken");
            }

            var postBody = 'grant_type=client_credentials&scope=' + scope.join("+") + '&client_id=' + clientID;

            var pathParams = {};
            var queryParams = {};
            var headerParams = {};
            var formParams = {};

            var authNames = null;
            var contentTypes = ['application/x-www-form-urlencoded'];
            var accepts = ['application/json'];
            var returnType = AccessToken;

            return this.apiClient.callAuth(
                '/oauth/token', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }
    };

    return exports;
}));
},{"../ApiClient":9,"../model/AccessToken":37}],16:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Buyer', 'model/ListBuyer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Buyer'), require('../model/ListBuyer'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Buyers = factory(root.OrderCloud.ApiClient, root.OrderCloud.Buyer, root.OrderCloud.ListBuyer);
  }
}(this, function(ApiClient, Buyer, ListBuyer) {
  'use strict';

  /**
   * Buyer service.
   * @module api/Buyers
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new Buyers. 
   * @alias module:api/Buyers
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/Buyer} company 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Buyer}
     */
    this.Create = function(company) {
      var postBody = company;

      // verify the required parameter 'company' is set
      if (company == undefined || company == null) {
        throw new Error("Missing the required parameter 'company' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Buyer;

      return this.apiClient.callApi(
        '/buyers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Buyer}
     */
    this.Get = function(buyerID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Buyer;

      return this.apiClient.callApi(
        '/buyers/{buyerID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListBuyer}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListBuyer;

      return this.apiClient.callApi(
        '/buyers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/Buyer} company 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Buyer}
     */
    this.Patch = function(buyerID, company) {
      var postBody = company;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'company' is set
      if (company == undefined || company == null) {
        throw new Error("Missing the required parameter 'company' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Buyer;

      return this.apiClient.callApi(
        '/buyers/{buyerID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/Buyer} company 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Buyer}
     */
    this.Update = function(buyerID, company) {
      var postBody = company;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Update");
      }

      // verify the required parameter 'company' is set
      if (company == undefined || company == null) {
        throw new Error("Missing the required parameter 'company' when calling Update");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Buyer;

      return this.apiClient.callApi(
        '/buyers/{buyerID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/Buyer":43,"../model/ListBuyer":66}],17:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Catalog', 'model/CatalogAssignment', 'model/ListCatalog', 'model/ListCatalogAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Catalog'), require('../model/CatalogAssignment'), require('../model/ListCatalog'), require('../model/ListCatalogAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Catalogs = factory(root.OrderCloud.ApiClient, root.OrderCloud.Catalog, root.OrderCloud.CatalogAssignment, root.OrderCloud.ListCatalog, root.OrderCloud.ListCatalogAssignment);
  }
}(this, function(ApiClient, Catalog, CatalogAssignment, ListCatalog, ListCatalogAssignment) {
  'use strict';

  /**
   * Catalog service.
   * @module api/Catalogs
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new Catalogs. 
   * @alias module:api/Catalogs
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/Catalog} catalog 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Catalog}
     */
    this.Create = function(catalog) {
      var postBody = catalog;

      // verify the required parameter 'catalog' is set
      if (catalog == undefined || catalog == null) {
        throw new Error("Missing the required parameter 'catalog' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(catalogID) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Delete");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} buyerID ID of the buyer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(catalogID, buyerID) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling DeleteAssignment");
      }

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteAssignment");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
        'buyerID': buyerID
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Catalog}
     */
    this.Get = function(catalogID) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Get");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCatalog}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListCatalog;

      return this.apiClient.callApi(
        '/catalogs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.catalogID ID of the catalog.
     * @param {String} opts.buyerID ID of the buyer.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCatalogAssignment}
     */
    this.ListAssignments = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'catalogID': opts['catalogID'],
        'buyerID': opts['buyerID'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListCatalogAssignment;

      return this.apiClient.callApi(
        '/catalogs/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/Catalog} partialCatalog 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Catalog}
     */
    this.Patch = function(catalogID, partialCatalog) {
      var postBody = partialCatalog;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Patch");
      }

      // verify the required parameter 'partialCatalog' is set
      if (partialCatalog == undefined || partialCatalog == null) {
        throw new Error("Missing the required parameter 'partialCatalog' when calling Patch");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/CatalogAssignment} assignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(assignment) {
      var postBody = assignment;

      // verify the required parameter 'assignment' is set
      if (assignment == undefined || assignment == null) {
        throw new Error("Missing the required parameter 'assignment' when calling SaveAssignment");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/catalogs/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/Catalog} catalog 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Catalog}
     */
    this.Update = function(catalogID, catalog) {
      var postBody = catalog;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Update");
      }

      // verify the required parameter 'catalog' is set
      if (catalog == undefined || catalog == null) {
        throw new Error("Missing the required parameter 'catalog' when calling Update");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/Catalog":48,"../model/CatalogAssignment":49,"../model/ListCatalog":71,"../model/ListCatalogAssignment":72}],18:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Category', 'model/CategoryAssignment', 'model/CategoryProductAssignment', 'model/ListCategory', 'model/ListCategoryAssignment', 'model/ListCategoryProductAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Category'), require('../model/CategoryAssignment'), require('../model/CategoryProductAssignment'), require('../model/ListCategory'), require('../model/ListCategoryAssignment'), require('../model/ListCategoryProductAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Categorys = factory(root.OrderCloud.ApiClient, root.OrderCloud.Category, root.OrderCloud.CategoryAssignment, root.OrderCloud.CategoryProductAssignment, root.OrderCloud.ListCategory, root.OrderCloud.ListCategoryAssignment, root.OrderCloud.ListCategoryProductAssignment);
  }
}(this, function(ApiClient, Category, CategoryAssignment, CategoryProductAssignment, ListCategory, ListCategoryAssignment, ListCategoryProductAssignment) {
  'use strict';

  /**
   * Category service.
   * @module api/Categorys
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new Categorys. 
   * @alias module:api/Categorys
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/Category} category 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Category}
     */
    this.Create = function(catalogID, category) {
      var postBody = category;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Create");
      }

      // verify the required parameter 'category' is set
      if (category == undefined || category == null) {
        throw new Error("Missing the required parameter 'category' when calling Create");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Category;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} categoryID ID of the category.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(catalogID, categoryID) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Delete");
      }

      // verify the required parameter 'categoryID' is set
      if (categoryID == undefined || categoryID == null) {
        throw new Error("Missing the required parameter 'categoryID' when calling Delete");
      }


      var pathParams = {
        'catalogID': catalogID,
        'categoryID': categoryID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories/{categoryID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} categoryID ID of the category.
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(catalogID, categoryID, buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling DeleteAssignment");
      }

      // verify the required parameter 'categoryID' is set
      if (categoryID == undefined || categoryID == null) {
        throw new Error("Missing the required parameter 'categoryID' when calling DeleteAssignment");
      }

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteAssignment");
      }


      var pathParams = {
        'catalogID': catalogID,
        'categoryID': categoryID
      };
      var queryParams = {
        'buyerID': buyerID,
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories/{categoryID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} categoryID ID of the category.
     * @param {String} productID ID of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteProductAssignment = function(catalogID, categoryID, productID) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling DeleteProductAssignment");
      }

      // verify the required parameter 'categoryID' is set
      if (categoryID == undefined || categoryID == null) {
        throw new Error("Missing the required parameter 'categoryID' when calling DeleteProductAssignment");
      }

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling DeleteProductAssignment");
      }


      var pathParams = {
        'catalogID': catalogID,
        'categoryID': categoryID,
        'productID': productID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories/{categoryID}/productassignments/{productID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} categoryID ID of the category.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Category}
     */
    this.Get = function(catalogID, categoryID) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Get");
      }

      // verify the required parameter 'categoryID' is set
      if (categoryID == undefined || categoryID == null) {
        throw new Error("Missing the required parameter 'categoryID' when calling Get");
      }


      var pathParams = {
        'catalogID': catalogID,
        'categoryID': categoryID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Category;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories/{categoryID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {Object} opts Optional parameters
     * @param {String} opts.depth Depth of the category.
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCategory}
     */
    this.List = function(catalogID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling List");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
        'depth': opts['depth'],
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListCategory;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {Object} opts Optional parameters
     * @param {String} opts.categoryID ID of the category.
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the category.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCategoryAssignment}
     */
    this.ListAssignments = function(catalogID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling ListAssignments");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
        'categoryID': opts['categoryID'],
        'buyerID': opts['buyerID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListCategoryAssignment;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {Object} opts Optional parameters
     * @param {String} opts.categoryID ID of the category.
     * @param {String} opts.productID ID of the product.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCategoryProductAssignment}
     */
    this.ListProductAssignments = function(catalogID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling ListProductAssignments");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
        'categoryID': opts['categoryID'],
        'productID': opts['productID'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListCategoryProductAssignment;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories/productassignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} categoryID ID of the category.
     * @param {module:model/Category} category 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Category}
     */
    this.Patch = function(catalogID, categoryID, category) {
      var postBody = category;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Patch");
      }

      // verify the required parameter 'categoryID' is set
      if (categoryID == undefined || categoryID == null) {
        throw new Error("Missing the required parameter 'categoryID' when calling Patch");
      }

      // verify the required parameter 'category' is set
      if (category == undefined || category == null) {
        throw new Error("Missing the required parameter 'category' when calling Patch");
      }


      var pathParams = {
        'catalogID': catalogID,
        'categoryID': categoryID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Category;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories/{categoryID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/CategoryAssignment} categoryAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(catalogID, categoryAssignment) {
      var postBody = categoryAssignment;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling SaveAssignment");
      }

      // verify the required parameter 'categoryAssignment' is set
      if (categoryAssignment == undefined || categoryAssignment == null) {
        throw new Error("Missing the required parameter 'categoryAssignment' when calling SaveAssignment");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/CategoryProductAssignment} productAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveProductAssignment = function(catalogID, productAssignment) {
      var postBody = productAssignment;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling SaveProductAssignment");
      }

      // verify the required parameter 'productAssignment' is set
      if (productAssignment == undefined || productAssignment == null) {
        throw new Error("Missing the required parameter 'productAssignment' when calling SaveProductAssignment");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories/productassignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} categoryID ID of the category.
     * @param {module:model/Category} category 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Category}
     */
    this.Update = function(catalogID, categoryID, category) {
      var postBody = category;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Update");
      }

      // verify the required parameter 'categoryID' is set
      if (categoryID == undefined || categoryID == null) {
        throw new Error("Missing the required parameter 'categoryID' when calling Update");
      }

      // verify the required parameter 'category' is set
      if (category == undefined || category == null) {
        throw new Error("Missing the required parameter 'category' when calling Update");
      }


      var pathParams = {
        'catalogID': catalogID,
        'categoryID': categoryID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Category;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories/{categoryID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/Category":50,"../model/CategoryAssignment":51,"../model/CategoryProductAssignment":52,"../model/ListCategory":73,"../model/ListCategoryAssignment":74,"../model/ListCategoryProductAssignment":75}],19:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CostCenter', 'model/CostCenterAssignment', 'model/ListCostCenter', 'model/ListCostCenterAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CostCenter'), require('../model/CostCenterAssignment'), require('../model/ListCostCenter'), require('../model/ListCostCenterAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.CostCenters = factory(root.OrderCloud.ApiClient, root.OrderCloud.CostCenter, root.OrderCloud.CostCenterAssignment, root.OrderCloud.ListCostCenter, root.OrderCloud.ListCostCenterAssignment);
  }
}(this, function(ApiClient, CostCenter, CostCenterAssignment, ListCostCenter, ListCostCenterAssignment) {
  'use strict';

  /**
   * CostCenter service.
   * @module api/CostCenters
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new CostCenters. 
   * @alias module:api/CostCenters
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/CostCenter} costCenter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CostCenter}
     */
    this.Create = function(buyerID, costCenter) {
      var postBody = costCenter;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'costCenter' is set
      if (costCenter == undefined || costCenter == null) {
        throw new Error("Missing the required parameter 'costCenter' when calling Create");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = CostCenter;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/costcenters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} costCenterID ID of the cost center.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, costCenterID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'costCenterID' is set
      if (costCenterID == undefined || costCenterID == null) {
        throw new Error("Missing the required parameter 'costCenterID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'costCenterID': costCenterID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/costcenters/{costCenterID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} costCenterID ID of the cost center.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(buyerID, costCenterID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteAssignment");
      }

      // verify the required parameter 'costCenterID' is set
      if (costCenterID == undefined || costCenterID == null) {
        throw new Error("Missing the required parameter 'costCenterID' when calling DeleteAssignment");
      }


      var pathParams = {
        'buyerID': buyerID,
        'costCenterID': costCenterID
      };
      var queryParams = {
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/costcenters/{costCenterID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} costCenterID ID of the cost center.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CostCenter}
     */
    this.Get = function(buyerID, costCenterID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'costCenterID' is set
      if (costCenterID == undefined || costCenterID == null) {
        throw new Error("Missing the required parameter 'costCenterID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'costCenterID': costCenterID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = CostCenter;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/costcenters/{costCenterID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCostCenter}
     */
    this.List = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling List");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListCostCenter;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/costcenters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.costCenterID ID of the cost center.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the cost center.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCostCenterAssignment}
     */
    this.ListAssignments = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling ListAssignments");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'costCenterID': opts['costCenterID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListCostCenterAssignment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/costcenters/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} costCenterID ID of the cost center.
     * @param {module:model/CostCenter} costCenter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CostCenter}
     */
    this.Patch = function(buyerID, costCenterID, costCenter) {
      var postBody = costCenter;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'costCenterID' is set
      if (costCenterID == undefined || costCenterID == null) {
        throw new Error("Missing the required parameter 'costCenterID' when calling Patch");
      }

      // verify the required parameter 'costCenter' is set
      if (costCenter == undefined || costCenter == null) {
        throw new Error("Missing the required parameter 'costCenter' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'costCenterID': costCenterID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = CostCenter;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/costcenters/{costCenterID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/CostCenterAssignment} assignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(buyerID, assignment) {
      var postBody = assignment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling SaveAssignment");
      }

      // verify the required parameter 'assignment' is set
      if (assignment == undefined || assignment == null) {
        throw new Error("Missing the required parameter 'assignment' when calling SaveAssignment");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/costcenters/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} costCenterID ID of the cost center.
     * @param {module:model/CostCenter} costCenter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CostCenter}
     */
    this.Update = function(buyerID, costCenterID, costCenter) {
      var postBody = costCenter;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Update");
      }

      // verify the required parameter 'costCenterID' is set
      if (costCenterID == undefined || costCenterID == null) {
        throw new Error("Missing the required parameter 'costCenterID' when calling Update");
      }

      // verify the required parameter 'costCenter' is set
      if (costCenter == undefined || costCenter == null) {
        throw new Error("Missing the required parameter 'costCenter' when calling Update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'costCenterID': costCenterID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = CostCenter;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/costcenters/{costCenterID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/CostCenter":53,"../model/CostCenterAssignment":54,"../model/ListCostCenter":76,"../model/ListCostCenterAssignment":77}],20:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreditCard', 'model/CreditCardAssignment', 'model/ListCreditCard', 'model/ListCreditCardAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreditCard'), require('../model/CreditCardAssignment'), require('../model/ListCreditCard'), require('../model/ListCreditCardAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.CreditCards = factory(root.OrderCloud.ApiClient, root.OrderCloud.CreditCard, root.OrderCloud.CreditCardAssignment, root.OrderCloud.ListCreditCard, root.OrderCloud.ListCreditCardAssignment);
  }
}(this, function(ApiClient, CreditCard, CreditCardAssignment, ListCreditCard, ListCreditCardAssignment) {
  'use strict';

  /**
   * CreditCard service.
   * @module api/CreditCards
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new CreditCards. 
   * @alias module:api/CreditCards
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/CreditCard} card 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditCard}
     */
    this.Create = function(buyerID, card) {
      var postBody = card;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'card' is set
      if (card == undefined || card == null) {
        throw new Error("Missing the required parameter 'card' when calling Create");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = CreditCard;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/creditcards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} creditCardID ID of the credit card.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, creditCardID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'creditCardID' is set
      if (creditCardID == undefined || creditCardID == null) {
        throw new Error("Missing the required parameter 'creditCardID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'creditCardID': creditCardID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/creditcards/{creditCardID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} creditCardID ID of the credit card.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(buyerID, creditCardID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteAssignment");
      }

      // verify the required parameter 'creditCardID' is set
      if (creditCardID == undefined || creditCardID == null) {
        throw new Error("Missing the required parameter 'creditCardID' when calling DeleteAssignment");
      }


      var pathParams = {
        'buyerID': buyerID,
        'creditCardID': creditCardID
      };
      var queryParams = {
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/creditcards/{creditCardID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} creditCardID ID of the credit card.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditCard}
     */
    this.Get = function(buyerID, creditCardID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'creditCardID' is set
      if (creditCardID == undefined || creditCardID == null) {
        throw new Error("Missing the required parameter 'creditCardID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'creditCardID': creditCardID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = CreditCard;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/creditcards/{creditCardID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCreditCard}
     */
    this.List = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling List");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListCreditCard;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/creditcards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.creditCardID ID of the credit card.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the credit card.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCreditCardAssignment}
     */
    this.ListAssignments = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling ListAssignments");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'creditCardID': opts['creditCardID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListCreditCardAssignment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/creditcards/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} creditCardID ID of the credit card.
     * @param {module:model/CreditCard} card 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditCard}
     */
    this.Patch = function(buyerID, creditCardID, card) {
      var postBody = card;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'creditCardID' is set
      if (creditCardID == undefined || creditCardID == null) {
        throw new Error("Missing the required parameter 'creditCardID' when calling Patch");
      }

      // verify the required parameter 'card' is set
      if (card == undefined || card == null) {
        throw new Error("Missing the required parameter 'card' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'creditCardID': creditCardID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = CreditCard;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/creditcards/{creditCardID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/CreditCardAssignment} assignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(buyerID, assignment) {
      var postBody = assignment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling SaveAssignment");
      }

      // verify the required parameter 'assignment' is set
      if (assignment == undefined || assignment == null) {
        throw new Error("Missing the required parameter 'assignment' when calling SaveAssignment");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/creditcards/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} creditCardID ID of the credit card.
     * @param {module:model/CreditCard} card 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditCard}
     */
    this.Update = function(buyerID, creditCardID, card) {
      var postBody = card;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Update");
      }

      // verify the required parameter 'creditCardID' is set
      if (creditCardID == undefined || creditCardID == null) {
        throw new Error("Missing the required parameter 'creditCardID' when calling Update");
      }

      // verify the required parameter 'card' is set
      if (card == undefined || card == null) {
        throw new Error("Missing the required parameter 'card' when calling Update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'creditCardID': creditCardID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = CreditCard;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/creditcards/{creditCardID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/CreditCard":55,"../model/CreditCardAssignment":56,"../model/ListCreditCard":78,"../model/ListCreditCardAssignment":79}],21:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/LineItem', 'model/ListLineItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Address'), require('../model/LineItem'), require('../model/ListLineItem'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.LineItems = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address, root.OrderCloud.LineItem, root.OrderCloud.ListLineItem);
  }
}(this, function(ApiClient, Address, LineItem, ListLineItem) {
  'use strict';

  /**
   * LineItem service.
   * @module api/LineItems
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new LineItems. 
   * @alias module:api/LineItems
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {module:model/LineItem} lineItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LineItem}
     */
    this.Create = function(buyerID, orderID, lineItem) {
      var postBody = lineItem;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Create");
      }

      // verify the required parameter 'lineItem' is set
      if (lineItem == undefined || lineItem == null) {
        throw new Error("Missing the required parameter 'lineItem' when calling Create");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, orderID, lineItemID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Delete");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LineItem}
     */
    this.Get = function(buyerID, orderID, lineItemID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Get");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListLineItem}
     */
    this.List = function(buyerID, orderID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling List");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling List");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListLineItem;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:model/LineItem} partialLineItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LineItem}
     */
    this.Patch = function(buyerID, orderID, lineItemID, partialLineItem) {
      var postBody = partialLineItem;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Patch");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling Patch");
      }

      // verify the required parameter 'partialLineItem' is set
      if (partialLineItem == undefined || partialLineItem == null) {
        throw new Error("Missing the required parameter 'partialLineItem' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:model/Address} partialAddress 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LineItem}
     */
    this.PatchShippingAddress = function(buyerID, orderID, lineItemID, partialAddress) {
      var postBody = partialAddress;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling PatchShippingAddress");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling PatchShippingAddress");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling PatchShippingAddress");
      }

      // verify the required parameter 'partialAddress' is set
      if (partialAddress == undefined || partialAddress == null) {
        throw new Error("Missing the required parameter 'partialAddress' when calling PatchShippingAddress");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID}/shipto', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LineItem}
     */
    this.SetShippingAddress = function(buyerID, orderID, lineItemID, address) {
      var postBody = address;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling SetShippingAddress");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling SetShippingAddress");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling SetShippingAddress");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling SetShippingAddress");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID}/shipto', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:model/LineItem} lineItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LineItem}
     */
    this.Update = function(buyerID, orderID, lineItemID, lineItem) {
      var postBody = lineItem;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Update");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Update");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling Update");
      }

      // verify the required parameter 'lineItem' is set
      if (lineItem == undefined || lineItem == null) {
        throw new Error("Missing the required parameter 'lineItem' when calling Update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/Address":38,"../model/LineItem":59,"../model/ListLineItem":81}],22:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/BuyerAddress', 'model/BuyerCreditCard', 'model/BuyerProduct', 'model/BuyerSpec', 'model/CreditCard', 'model/ListBuyerAddress', 'model/ListBuyerCreditCard', 'model/ListBuyerProduct', 'model/ListBuyerSpec', 'model/ListCategory', 'model/ListCostCenter', 'model/ListOrder', 'model/ListPromotion', 'model/ListSpendingAccount', 'model/ListUserGroup', 'model/Order', 'model/Promotion', 'model/SpendingAccount', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Address'), require('../model/BuyerAddress'), require('../model/BuyerCreditCard'), require('../model/BuyerProduct'), require('../model/BuyerSpec'), require('../model/CreditCard'), require('../model/ListBuyerAddress'), require('../model/ListBuyerCreditCard'), require('../model/ListBuyerProduct'), require('../model/ListBuyerSpec'), require('../model/ListCategory'), require('../model/ListCostCenter'), require('../model/ListOrder'), require('../model/ListPromotion'), require('../model/ListSpendingAccount'), require('../model/ListUserGroup'), require('../model/Order'), require('../model/Promotion'), require('../model/SpendingAccount'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Me = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address, root.OrderCloud.BuyerAddress, root.OrderCloud.BuyerCreditCard, root.OrderCloud.BuyerProduct, root.OrderCloud.BuyerSpec, root.OrderCloud.CreditCard, root.OrderCloud.ListBuyerAddress, root.OrderCloud.ListBuyerCreditCard, root.OrderCloud.ListBuyerProduct, root.OrderCloud.ListBuyerSpec, root.OrderCloud.ListCategory, root.OrderCloud.ListCostCenter, root.OrderCloud.ListOrder, root.OrderCloud.ListPromotion, root.OrderCloud.ListSpendingAccount, root.OrderCloud.ListUserGroup, root.OrderCloud.Order, root.OrderCloud.Promotion, root.OrderCloud.SpendingAccount, root.OrderCloud.User);
  }
}(this, function(ApiClient, Address, BuyerAddress, BuyerCreditCard, BuyerProduct, BuyerSpec, CreditCard, ListBuyerAddress, ListBuyerCreditCard, ListBuyerProduct, ListBuyerSpec, ListCategory, ListCostCenter, ListOrder, ListPromotion, ListSpendingAccount, ListUserGroup, Order, Promotion, SpendingAccount, User) {
  'use strict';

  /**
   * Me service.
   * @module api/Me
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new Me. 
   * @alias module:api/Me
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/BuyerAddress} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BuyerAddress}
     */
    this.CreateAddress = function(address) {
      var postBody = address;

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling CreateAddress");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = BuyerAddress;

      return this.apiClient.callApi(
        '/me/addresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/BuyerCreditCard} creditCard 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BuyerCreditCard}
     */
    this.CreateCreditCard = function(creditCard) {
      var postBody = creditCard;

      // verify the required parameter 'creditCard' is set
      if (creditCard == undefined || creditCard == null) {
        throw new Error("Missing the required parameter 'creditCard' when calling CreateCreditCard");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = BuyerCreditCard;

      return this.apiClient.callApi(
        '/me/creditcards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} addressID ID of the address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAddress = function(addressID) {
      var postBody = null;

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling DeleteAddress");
      }


      var pathParams = {
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/me/addresses/{addressID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} creditcardID ID of the creditcard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteCreditCard = function(creditcardID) {
      var postBody = null;

      // verify the required parameter 'creditcardID' is set
      if (creditcardID == undefined || creditcardID == null) {
        throw new Error("Missing the required parameter 'creditcardID' when calling DeleteCreditCard");
      }


      var pathParams = {
        'creditcardID': creditcardID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/me/creditcards/{creditcardID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Get = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} addressID ID of the address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BuyerAddress}
     */
    this.GetAddress = function(addressID) {
      var postBody = null;

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling GetAddress");
      }


      var pathParams = {
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = BuyerAddress;

      return this.apiClient.callApi(
        '/me/addresses/{addressID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} creditcardID ID of the creditcard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BuyerCreditCard}
     */
    this.GetCreditCard = function(creditcardID) {
      var postBody = null;

      // verify the required parameter 'creditcardID' is set
      if (creditcardID == undefined || creditcardID == null) {
        throw new Error("Missing the required parameter 'creditcardID' when calling GetCreditCard");
      }


      var pathParams = {
        'creditcardID': creditcardID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = BuyerCreditCard;

      return this.apiClient.callApi(
        '/me/creditcards/{creditcardID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} orderID ID of the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.GetOrder = function(orderID) {
      var postBody = null;

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling GetOrder");
      }


      var pathParams = {
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/me/orders/{orderID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BuyerProduct}
     */
    this.GetProduct = function(productID) {
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling GetProduct");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = BuyerProduct;

      return this.apiClient.callApi(
        '/me/products/{productID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} promotionID ID of the promotion.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Promotion}
     */
    this.GetPromotion = function(promotionID) {
      var postBody = null;

      // verify the required parameter 'promotionID' is set
      if (promotionID == undefined || promotionID == null) {
        throw new Error("Missing the required parameter 'promotionID' when calling GetPromotion");
      }


      var pathParams = {
        'promotionID': promotionID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Promotion;

      return this.apiClient.callApi(
        '/me/promotions/{promotionID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {String} specID ID of the spec.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BuyerSpec}
     */
    this.GetSpec = function(productID, specID) {
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling GetSpec");
      }

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling GetSpec");
      }


      var pathParams = {
        'productID': productID,
        'specID': specID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = BuyerSpec;

      return this.apiClient.callApi(
        '/me/products/{productID}/specs/{specID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} spendingAccountID ID of the spending account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpendingAccount}
     */
    this.GetSpendingAccount = function(spendingAccountID) {
      var postBody = null;

      // verify the required parameter 'spendingAccountID' is set
      if (spendingAccountID == undefined || spendingAccountID == null) {
        throw new Error("Missing the required parameter 'spendingAccountID' when calling GetSpendingAccount");
      }


      var pathParams = {
        'spendingAccountID': spendingAccountID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = SpendingAccount;

      return this.apiClient.callApi(
        '/me/spendingaccounts/{spendingAccountID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListBuyerAddress}
     */
    this.ListAddresses = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListBuyerAddress;

      return this.apiClient.callApi(
        '/me/addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.depth Depth of the category.
     * @param {String} opts.catalogID ID of the catalog.
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCategory}
     */
    this.ListCategories = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'depth': opts['depth'],
        'catalogID': opts['catalogID'],
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListCategory;

      return this.apiClient.callApi(
        '/me/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCostCenter}
     */
    this.ListCostCenters = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListCostCenter;

      return this.apiClient.callApi(
        '/me/costcenters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListBuyerCreditCard}
     */
    this.ListCreditCards = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListBuyerCreditCard;

      return this.apiClient.callApi(
        '/me/creditcards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.from Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
     * @param {String} opts.to Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListOrder}
     */
    this.ListIncomingOrders = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListOrder;

      return this.apiClient.callApi(
        '/me/orders/incoming', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.from Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
     * @param {String} opts.to Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListOrder}
     */
    this.ListOutgoingOrders = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListOrder;

      return this.apiClient.callApi(
        '/me/orders/outgoing', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.categoryID ID of the category.
     * @param {String} opts.catalogID ID of the catalog.
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListBuyerProduct}
     */
    this.ListProducts = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'categoryID': opts['categoryID'],
        'catalogID': opts['catalogID'],
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListBuyerProduct;

      return this.apiClient.callApi(
        '/me/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPromotion}
     */
    this.ListPromotions = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListPromotion;

      return this.apiClient.callApi(
        '/me/promotions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListBuyerSpec}
     */
    this.ListSpecs = function(productID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling ListSpecs");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListBuyerSpec;

      return this.apiClient.callApi(
        '/me/products/{productID}/specs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSpendingAccount}
     */
    this.ListSpendingAccounts = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListSpendingAccount;

      return this.apiClient.callApi(
        '/me/spendingAccounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUserGroup}
     */
    this.ListUserGroups = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListUserGroup;

      return this.apiClient.callApi(
        '/me/usergroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Patch = function(user) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Patch");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/me', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} addressID ID of the address.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.PatchAddress = function(addressID, address) {
      var postBody = address;

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling PatchAddress");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling PatchAddress");
      }


      var pathParams = {
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/me/addresses/{addressID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} creditcardID ID of the creditcard.
     * @param {module:model/CreditCard} creditCard 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.PatchCreditCard = function(creditcardID, creditCard) {
      var postBody = creditCard;

      // verify the required parameter 'creditcardID' is set
      if (creditcardID == undefined || creditcardID == null) {
        throw new Error("Missing the required parameter 'creditcardID' when calling PatchCreditCard");
      }

      // verify the required parameter 'creditCard' is set
      if (creditCard == undefined || creditCard == null) {
        throw new Error("Missing the required parameter 'creditCard' when calling PatchCreditCard");
      }


      var pathParams = {
        'creditcardID': creditcardID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/me/creditcards/{creditcardID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Update = function(user) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Update");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/me', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} addressID ID of the address.
     * @param {module:model/BuyerAddress} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BuyerAddress}
     */
    this.UpdateAddress = function(addressID, address) {
      var postBody = address;

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling UpdateAddress");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling UpdateAddress");
      }


      var pathParams = {
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = BuyerAddress;

      return this.apiClient.callApi(
        '/me/addresses/{addressID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} creditcardID ID of the creditcard.
     * @param {module:model/BuyerCreditCard} creditCard 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BuyerCreditCard}
     */
    this.UpdateCreditCard = function(creditcardID, creditCard) {
      var postBody = creditCard;

      // verify the required parameter 'creditcardID' is set
      if (creditcardID == undefined || creditcardID == null) {
        throw new Error("Missing the required parameter 'creditcardID' when calling UpdateCreditCard");
      }

      // verify the required parameter 'creditCard' is set
      if (creditCard == undefined || creditCard == null) {
        throw new Error("Missing the required parameter 'creditCard' when calling UpdateCreditCard");
      }


      var pathParams = {
        'creditcardID': creditcardID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = BuyerCreditCard;

      return this.apiClient.callApi(
        '/me/creditcards/{creditcardID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/Address":38,"../model/BuyerAddress":44,"../model/BuyerCreditCard":45,"../model/BuyerProduct":46,"../model/BuyerSpec":47,"../model/CreditCard":55,"../model/ListBuyerAddress":67,"../model/ListBuyerCreditCard":68,"../model/ListBuyerProduct":69,"../model/ListBuyerSpec":70,"../model/ListCategory":73,"../model/ListCostCenter":76,"../model/ListOrder":85,"../model/ListPromotion":92,"../model/ListSpendingAccount":100,"../model/ListUserGroup":103,"../model/Order":111,"../model/Promotion":123,"../model/SpendingAccount":132,"../model/User":135}],23:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ListMessageCCListenerAssignment', 'model/ListMessageSender', 'model/ListMessageSenderAssignment', 'model/MessageCCListenerAssignment', 'model/MessageSender', 'model/MessageSenderAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListMessageCCListenerAssignment'), require('../model/ListMessageSender'), require('../model/ListMessageSenderAssignment'), require('../model/MessageCCListenerAssignment'), require('../model/MessageSender'), require('../model/MessageSenderAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.MessageSenders = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListMessageCCListenerAssignment, root.OrderCloud.ListMessageSender, root.OrderCloud.ListMessageSenderAssignment, root.OrderCloud.MessageCCListenerAssignment, root.OrderCloud.MessageSender, root.OrderCloud.MessageSenderAssignment);
  }
}(this, function(ApiClient, ListMessageCCListenerAssignment, ListMessageSender, ListMessageSenderAssignment, MessageCCListenerAssignment, MessageSender, MessageSenderAssignment) {
  'use strict';

  /**
   * MessageSenders service.
   * @module api/MessageSenders
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new MessageSenders. 
   * @alias module:api/MessageSenders
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} messageSenderID ID of the message sender.
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(messageSenderID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'messageSenderID' is set
      if (messageSenderID == undefined || messageSenderID == null) {
        throw new Error("Missing the required parameter 'messageSenderID' when calling DeleteAssignment");
      }


      var pathParams = {
        'messageSenderID': messageSenderID
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/MessageSenders/{messageSenderID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} messageSenderID ID of the message sender.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MessageSender}
     */
    this.Get = function(messageSenderID) {
      var postBody = null;

      // verify the required parameter 'messageSenderID' is set
      if (messageSenderID == undefined || messageSenderID == null) {
        throw new Error("Missing the required parameter 'messageSenderID' when calling Get");
      }


      var pathParams = {
        'messageSenderID': messageSenderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = MessageSender;

      return this.apiClient.callApi(
        '/MessageSenders/{messageSenderID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMessageSender}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListMessageSender;

      return this.apiClient.callApi(
        '/MessageSenders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.messageSenderID ID of the message sender.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the message sender.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMessageSenderAssignment}
     */
    this.ListAssignments = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
        'messageSenderID': opts['messageSenderID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListMessageSenderAssignment;

      return this.apiClient.callApi(
        '/MessageSenders/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMessageCCListenerAssignment}
     */
    this.ListCCListenerAssignments = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListMessageCCListenerAssignment;

      return this.apiClient.callApi(
        '/MessageSenders/CCListenerAssignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/MessageSenderAssignment} assignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(assignment) {
      var postBody = assignment;

      // verify the required parameter 'assignment' is set
      if (assignment == undefined || assignment == null) {
        throw new Error("Missing the required parameter 'assignment' when calling SaveAssignment");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/MessageSenders/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/MessageCCListenerAssignment} assignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveCCListenerAssignment = function(assignment) {
      var postBody = assignment;

      // verify the required parameter 'assignment' is set
      if (assignment == undefined || assignment == null) {
        throw new Error("Missing the required parameter 'assignment' when calling SaveCCListenerAssignment");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/MessageSenders/CCListenerAssignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/ListMessageCCListenerAssignment":82,"../model/ListMessageSender":83,"../model/ListMessageSenderAssignment":84,"../model/MessageCCListenerAssignment":107,"../model/MessageSender":108,"../model/MessageSenderAssignment":109}],24:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/ListOrder', 'model/ListOrderApproval', 'model/ListOrderPromotion', 'model/ListUser', 'model/Order', 'model/Promotion', 'model/Shipment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Address'), require('../model/ListOrder'), require('../model/ListOrderApproval'), require('../model/ListOrderPromotion'), require('../model/ListUser'), require('../model/Order'), require('../model/Promotion'), require('../model/Shipment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Orders = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address, root.OrderCloud.ListOrder, root.OrderCloud.ListOrderApproval, root.OrderCloud.ListOrderPromotion, root.OrderCloud.ListUser, root.OrderCloud.Order, root.OrderCloud.Promotion, root.OrderCloud.Shipment);
  }
}(this, function(ApiClient, Address, ListOrder, ListOrderApproval, ListOrderPromotion, ListUser, Order, Promotion, Shipment) {
  'use strict';

  /**
   * Order service.
   * @module api/Orders
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new Orders. 
   * @alias module:api/Orders
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} promoCode Promo code of the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Promotion}
     */
    this.AddPromotion = function(buyerID, orderID, promoCode) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling AddPromotion");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling AddPromotion");
      }

      // verify the required parameter 'promoCode' is set
      if (promoCode == undefined || promoCode == null) {
        throw new Error("Missing the required parameter 'promoCode' when calling AddPromotion");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'promoCode': promoCode
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Promotion;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/promotions/{promoCode}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.comments Comments to be saved with the order approval.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Approve = function(buyerID, orderID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Approve");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Approve");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
        'comments': opts['comments']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/approve', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Cancel = function(buyerID, orderID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Cancel");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Cancel");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/Order} order 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Create = function(buyerID, order) {
      var postBody = order;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'order' is set
      if (order == undefined || order == null) {
        throw new Error("Missing the required parameter 'order' when calling Create");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.comments Comments to be saved with the order denial.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Decline = function(buyerID, orderID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Decline");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Decline");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
        'comments': opts['comments']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/decline', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, orderID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Get = function(buyerID, orderID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListOrderApproval}
     */
    this.ListApprovals = function(buyerID, orderID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling ListApprovals");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling ListApprovals");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListOrderApproval;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/approvals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUser}
     */
    this.ListEligibleApprovers = function(buyerID, orderID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling ListEligibleApprovers");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling ListEligibleApprovers");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListUser;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/eligibleapprovers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.from Lower bound of date range that the order was submitted.
     * @param {String} opts.to Upper bound of date range that the order was submitted.
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListOrder}
     */
    this.ListIncoming = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
        'from': opts['from'],
        'to': opts['to'],
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListOrder;

      return this.apiClient.callApi(
        '/orders/incoming', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.from Lower bound of date range that the order was created.
     * @param {String} opts.to Upper bound of date range that the order was created.
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListOrder}
     */
    this.ListOutgoing = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
        'from': opts['from'],
        'to': opts['to'],
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListOrder;

      return this.apiClient.callApi(
        '/orders/outgoing', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListOrderPromotion}
     */
    this.ListPromotions = function(buyerID, orderID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling ListPromotions");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling ListPromotions");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListOrderPromotion;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/promotions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {module:model/Order} partialOrder 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Patch = function(buyerID, orderID, partialOrder) {
      var postBody = partialOrder;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Patch");
      }

      // verify the required parameter 'partialOrder' is set
      if (partialOrder == undefined || partialOrder == null) {
        throw new Error("Missing the required parameter 'partialOrder' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.PatchBillingAddress = function(buyerID, orderID, address) {
      var postBody = address;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling PatchBillingAddress");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling PatchBillingAddress");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling PatchBillingAddress");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/billto', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.PatchShippingAddress = function(buyerID, orderID, address) {
      var postBody = address;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling PatchShippingAddress");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling PatchShippingAddress");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling PatchShippingAddress");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/shipto', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} promoCode Promo code of the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.RemovePromotion = function(buyerID, orderID, promoCode) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling RemovePromotion");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling RemovePromotion");
      }

      // verify the required parameter 'promoCode' is set
      if (promoCode == undefined || promoCode == null) {
        throw new Error("Missing the required parameter 'promoCode' when calling RemovePromotion");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'promoCode': promoCode
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/promotions/{promoCode}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.SetBillingAddress = function(buyerID, orderID, address) {
      var postBody = address;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling SetBillingAddress");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling SetBillingAddress");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling SetBillingAddress");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/billto', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.SetShippingAddress = function(buyerID, orderID, address) {
      var postBody = address;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling SetShippingAddress");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling SetShippingAddress");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling SetShippingAddress");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/shipto', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {module:model/Shipment} shipment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Ship = function(buyerID, orderID, shipment) {
      var postBody = shipment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Ship");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Ship");
      }

      // verify the required parameter 'shipment' is set
      if (shipment == undefined || shipment == null) {
        throw new Error("Missing the required parameter 'shipment' when calling Ship");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/ship', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Submit = function(buyerID, orderID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Submit");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Submit");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/submit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} tempUserToken Temp user token of the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.TransferTempUserOrder = function(buyerID, tempUserToken) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling TransferTempUserOrder");
      }

      // verify the required parameter 'tempUserToken' is set
      if (tempUserToken == undefined || tempUserToken == null) {
        throw new Error("Missing the required parameter 'tempUserToken' when calling TransferTempUserOrder");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'tempUserToken': tempUserToken
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {module:model/Order} order 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Update = function(buyerID, orderID, order) {
      var postBody = order;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Update");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Update");
      }

      // verify the required parameter 'order' is set
      if (order == undefined || order == null) {
        throw new Error("Missing the required parameter 'order' when calling Update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/Address":38,"../model/ListOrder":85,"../model/ListOrderApproval":86,"../model/ListOrderPromotion":87,"../model/ListUser":102,"../model/Order":111,"../model/Promotion":123,"../model/Shipment":127}],25:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PasswordReset', 'model/PasswordResetRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PasswordReset'), require('../model/PasswordResetRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PasswordResets = factory(root.OrderCloud.ApiClient, root.OrderCloud.PasswordReset, root.OrderCloud.PasswordResetRequest);
  }
}(this, function(ApiClient, PasswordReset, PasswordResetRequest) {
  'use strict';

  /**
   * PasswordReset service.
   * @module api/PasswordResets
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new PasswordResets. 
   * @alias module:api/PasswordResets
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} verificationCode Verification code of the forgotten password.
     * @param {module:model/PasswordReset} passwordReset 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.ResetPassword = function(verificationCode, passwordReset) {
      var postBody = passwordReset;

      // verify the required parameter 'verificationCode' is set
      if (verificationCode == undefined || verificationCode == null) {
        throw new Error("Missing the required parameter 'verificationCode' when calling ResetPassword");
      }

      // verify the required parameter 'passwordReset' is set
      if (passwordReset == undefined || passwordReset == null) {
        throw new Error("Missing the required parameter 'passwordReset' when calling ResetPassword");
      }


      var pathParams = {
        'verificationCode': verificationCode
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/password/reset/{verificationCode}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/PasswordResetRequest} passwordResetRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SendVerificationCode = function(passwordResetRequest) {
      var postBody = passwordResetRequest;

      // verify the required parameter 'passwordResetRequest' is set
      if (passwordResetRequest == undefined || passwordResetRequest == null) {
        throw new Error("Missing the required parameter 'passwordResetRequest' when calling SendVerificationCode");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/password/reset', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/PasswordReset":114,"../model/PasswordResetRequest":115}],26:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ListPayment', 'model/Payment', 'model/PaymentTransaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListPayment'), require('../model/Payment'), require('../model/PaymentTransaction'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Payments = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListPayment, root.OrderCloud.Payment, root.OrderCloud.PaymentTransaction);
  }
}(this, function(ApiClient, ListPayment, Payment, PaymentTransaction) {
  'use strict';

  /**
   * Payment service.
   * @module api/Payments
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new Payments. 
   * @alias module:api/Payments
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {module:model/Payment} payment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */
    this.Create = function(buyerID, orderID, payment) {
      var postBody = payment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Create");
      }

      // verify the required parameter 'payment' is set
      if (payment == undefined || payment == null) {
        throw new Error("Missing the required parameter 'payment' when calling Create");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Payment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {module:model/PaymentTransaction} transaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */
    this.CreateTransaction = function(buyerID, orderID, paymentID, transaction) {
      var postBody = transaction;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling CreateTransaction");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling CreateTransaction");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling CreateTransaction");
      }

      // verify the required parameter 'transaction' is set
      if (transaction == undefined || transaction == null) {
        throw new Error("Missing the required parameter 'transaction' when calling CreateTransaction");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Payment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, orderID, paymentID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Delete");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {String} transactionID ID of the transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteTransaction = function(buyerID, orderID, paymentID, transactionID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteTransaction");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling DeleteTransaction");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling DeleteTransaction");
      }

      // verify the required parameter 'transactionID' is set
      if (transactionID == undefined || transactionID == null) {
        throw new Error("Missing the required parameter 'transactionID' when calling DeleteTransaction");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID,
        'transactionID': transactionID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions/{transactionID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */
    this.Get = function(buyerID, orderID, paymentID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Get");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Payment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPayment}
     */
    this.List = function(buyerID, orderID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling List");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling List");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListPayment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {module:model/Payment} partialPayment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */
    this.Patch = function(buyerID, orderID, paymentID, partialPayment) {
      var postBody = partialPayment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Patch");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling Patch");
      }

      // verify the required parameter 'partialPayment' is set
      if (partialPayment == undefined || partialPayment == null) {
        throw new Error("Missing the required parameter 'partialPayment' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Payment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {String} transactionID ID of the transaction.
     * @param {module:model/PaymentTransaction} partialTransaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */
    this.PatchTransaction = function(buyerID, orderID, paymentID, transactionID, partialTransaction) {
      var postBody = partialTransaction;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling PatchTransaction");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling PatchTransaction");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling PatchTransaction");
      }

      // verify the required parameter 'transactionID' is set
      if (transactionID == undefined || transactionID == null) {
        throw new Error("Missing the required parameter 'transactionID' when calling PatchTransaction");
      }

      // verify the required parameter 'partialTransaction' is set
      if (partialTransaction == undefined || partialTransaction == null) {
        throw new Error("Missing the required parameter 'partialTransaction' when calling PatchTransaction");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID,
        'transactionID': transactionID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Payment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions/{transactionID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {module:model/Payment} payment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */
    this.Update = function(buyerID, orderID, paymentID, payment) {
      var postBody = payment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Update");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Update");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling Update");
      }

      // verify the required parameter 'payment' is set
      if (payment == undefined || payment == null) {
        throw new Error("Missing the required parameter 'payment' when calling Update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Payment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {String} transactionID ID of the transaction.
     * @param {module:model/PaymentTransaction} transaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */
    this.UpdateTransaction = function(buyerID, orderID, paymentID, transactionID, transaction) {
      var postBody = transaction;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling UpdateTransaction");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling UpdateTransaction");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling UpdateTransaction");
      }

      // verify the required parameter 'transactionID' is set
      if (transactionID == undefined || transactionID == null) {
        throw new Error("Missing the required parameter 'transactionID' when calling UpdateTransaction");
      }

      // verify the required parameter 'transaction' is set
      if (transaction == undefined || transaction == null) {
        throw new Error("Missing the required parameter 'transaction' when calling UpdateTransaction");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID,
        'transactionID': transactionID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Payment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions/{transactionID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/ListPayment":88,"../model/Payment":116,"../model/PaymentTransaction":117}],27:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ListPriceSchedule', 'model/PriceBreak', 'model/PriceSchedule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListPriceSchedule'), require('../model/PriceBreak'), require('../model/PriceSchedule'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PriceSchedules = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListPriceSchedule, root.OrderCloud.PriceBreak, root.OrderCloud.PriceSchedule);
  }
}(this, function(ApiClient, ListPriceSchedule, PriceBreak, PriceSchedule) {
  'use strict';

  /**
   * PriceSchedule service.
   * @module api/PriceSchedules
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new PriceSchedules. 
   * @alias module:api/PriceSchedules
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/PriceSchedule} priceSchedule 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PriceSchedule}
     */
    this.Create = function(priceSchedule) {
      var postBody = priceSchedule;

      // verify the required parameter 'priceSchedule' is set
      if (priceSchedule == undefined || priceSchedule == null) {
        throw new Error("Missing the required parameter 'priceSchedule' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = PriceSchedule;

      return this.apiClient.callApi(
        '/priceschedules', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} priceScheduleID ID of the price schedule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(priceScheduleID) {
      var postBody = null;

      // verify the required parameter 'priceScheduleID' is set
      if (priceScheduleID == undefined || priceScheduleID == null) {
        throw new Error("Missing the required parameter 'priceScheduleID' when calling Delete");
      }


      var pathParams = {
        'priceScheduleID': priceScheduleID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/priceschedules/{priceScheduleID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} priceScheduleID ID of the price schedule.
     * @param {Number} quantity Quantity of the price schedule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeletePriceBreak = function(priceScheduleID, quantity) {
      var postBody = null;

      // verify the required parameter 'priceScheduleID' is set
      if (priceScheduleID == undefined || priceScheduleID == null) {
        throw new Error("Missing the required parameter 'priceScheduleID' when calling DeletePriceBreak");
      }

      // verify the required parameter 'quantity' is set
      if (quantity == undefined || quantity == null) {
        throw new Error("Missing the required parameter 'quantity' when calling DeletePriceBreak");
      }


      var pathParams = {
        'priceScheduleID': priceScheduleID
      };
      var queryParams = {
        'quantity': quantity
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/priceschedules/{priceScheduleID}/PriceBreaks', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} priceScheduleID ID of the price schedule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PriceSchedule}
     */
    this.Get = function(priceScheduleID) {
      var postBody = null;

      // verify the required parameter 'priceScheduleID' is set
      if (priceScheduleID == undefined || priceScheduleID == null) {
        throw new Error("Missing the required parameter 'priceScheduleID' when calling Get");
      }


      var pathParams = {
        'priceScheduleID': priceScheduleID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = PriceSchedule;

      return this.apiClient.callApi(
        '/priceschedules/{priceScheduleID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPriceSchedule}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListPriceSchedule;

      return this.apiClient.callApi(
        '/priceschedules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} priceScheduleID ID of the price schedule.
     * @param {module:model/PriceSchedule} priceSchedule 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PriceSchedule}
     */
    this.Patch = function(priceScheduleID, priceSchedule) {
      var postBody = priceSchedule;

      // verify the required parameter 'priceScheduleID' is set
      if (priceScheduleID == undefined || priceScheduleID == null) {
        throw new Error("Missing the required parameter 'priceScheduleID' when calling Patch");
      }

      // verify the required parameter 'priceSchedule' is set
      if (priceSchedule == undefined || priceSchedule == null) {
        throw new Error("Missing the required parameter 'priceSchedule' when calling Patch");
      }


      var pathParams = {
        'priceScheduleID': priceScheduleID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = PriceSchedule;

      return this.apiClient.callApi(
        '/priceschedules/{priceScheduleID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} priceScheduleID ID of the price schedule.
     * @param {module:model/PriceBreak} priceBreak 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PriceSchedule}
     */
    this.SavePriceBreak = function(priceScheduleID, priceBreak) {
      var postBody = priceBreak;

      // verify the required parameter 'priceScheduleID' is set
      if (priceScheduleID == undefined || priceScheduleID == null) {
        throw new Error("Missing the required parameter 'priceScheduleID' when calling SavePriceBreak");
      }

      // verify the required parameter 'priceBreak' is set
      if (priceBreak == undefined || priceBreak == null) {
        throw new Error("Missing the required parameter 'priceBreak' when calling SavePriceBreak");
      }


      var pathParams = {
        'priceScheduleID': priceScheduleID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = PriceSchedule;

      return this.apiClient.callApi(
        '/priceschedules/{priceScheduleID}/PriceBreaks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} priceScheduleID ID of the price schedule.
     * @param {module:model/PriceSchedule} priceSchedule 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PriceSchedule}
     */
    this.Update = function(priceScheduleID, priceSchedule) {
      var postBody = priceSchedule;

      // verify the required parameter 'priceScheduleID' is set
      if (priceScheduleID == undefined || priceScheduleID == null) {
        throw new Error("Missing the required parameter 'priceScheduleID' when calling Update");
      }

      // verify the required parameter 'priceSchedule' is set
      if (priceSchedule == undefined || priceSchedule == null) {
        throw new Error("Missing the required parameter 'priceSchedule' when calling Update");
      }


      var pathParams = {
        'priceScheduleID': priceScheduleID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = PriceSchedule;

      return this.apiClient.callApi(
        '/priceschedules/{priceScheduleID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/ListPriceSchedule":89,"../model/PriceBreak":119,"../model/PriceSchedule":120}],28:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Inventory', 'model/ListInventory', 'model/ListProduct', 'model/ListProductAssignment', 'model/ListVariant', 'model/Product', 'model/ProductAssignment', 'model/Variant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Inventory'), require('../model/ListInventory'), require('../model/ListProduct'), require('../model/ListProductAssignment'), require('../model/ListVariant'), require('../model/Product'), require('../model/ProductAssignment'), require('../model/Variant'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Products = factory(root.OrderCloud.ApiClient, root.OrderCloud.Inventory, root.OrderCloud.ListInventory, root.OrderCloud.ListProduct, root.OrderCloud.ListProductAssignment, root.OrderCloud.ListVariant, root.OrderCloud.Product, root.OrderCloud.ProductAssignment, root.OrderCloud.Variant);
  }
}(this, function(ApiClient, Inventory, ListInventory, ListProduct, ListProductAssignment, ListVariant, Product, ProductAssignment, Variant) {
  'use strict';

  /**
   * Product service.
   * @module api/Products
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new Products. 
   * @alias module:api/Products
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/Product} product 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.Create = function(product) {
      var postBody = product;

      // verify the required parameter 'product' is set
      if (product == undefined || product == null) {
        throw new Error("Missing the required parameter 'product' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/products', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(productID) {
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling Delete");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/products/{productID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} productID ID of the product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(buyerID, productID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteAssignment");
      }

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling DeleteAssignment");
      }


      var pathParams = {
        'buyerID': buyerID,
        'productID': productID
      };
      var queryParams = {
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/products/{productID}/assignments/{buyerID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overwriteExisting Overwrite existing of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.GenerateVariants = function(productID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling GenerateVariants");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
        'overwriteExisting': opts['overwriteExisting']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/products/{productID}/variants/generate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.Get = function(productID) {
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling Get");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/products/{productID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Inventory}
     */
    this.GetInventory = function(productID) {
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling GetInventory");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Inventory;

      return this.apiClient.callApi(
        '/products/{productID}/inventory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {String} variantID ID of the variant.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Variant}
     */
    this.GetVariant = function(productID, variantID) {
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling GetVariant");
      }

      // verify the required parameter 'variantID' is set
      if (variantID == undefined || variantID == null) {
        throw new Error("Missing the required parameter 'variantID' when calling GetVariant");
      }


      var pathParams = {
        'productID': productID,
        'variantID': variantID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Variant;

      return this.apiClient.callApi(
        '/products/{productID}/variants/{variantID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {String} variantID ID of the variant.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Inventory}
     */
    this.GetVariantInventory = function(productID, variantID) {
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling GetVariantInventory");
      }

      // verify the required parameter 'variantID' is set
      if (variantID == undefined || variantID == null) {
        throw new Error("Missing the required parameter 'variantID' when calling GetVariantInventory");
      }


      var pathParams = {
        'productID': productID,
        'variantID': variantID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Inventory;

      return this.apiClient.callApi(
        '/products/{productID}/variants/inventory/{variantID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListProduct}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListProduct;

      return this.apiClient.callApi(
        '/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.productID ID of the product.
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the product.
     * @param {String} opts.priceScheduleID ID of the price schedule.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListProductAssignment}
     */
    this.ListAssignments = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'productID': opts['productID'],
        'buyerID': opts['buyerID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'priceScheduleID': opts['priceScheduleID'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListProductAssignment;

      return this.apiClient.callApi(
        '/products/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListInventory}
     */
    this.ListInventory = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListInventory;

      return this.apiClient.callApi(
        '/products/inventory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListInventory}
     */
    this.ListVariantInventory = function(productID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling ListVariantInventory");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListInventory;

      return this.apiClient.callApi(
        '/products/{productID}/variants/inventory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListVariant}
     */
    this.ListVariants = function(productID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling ListVariants");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListVariant;

      return this.apiClient.callApi(
        '/products/{productID}/variants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {module:model/Product} product 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.Patch = function(productID, product) {
      var postBody = product;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling Patch");
      }

      // verify the required parameter 'product' is set
      if (product == undefined || product == null) {
        throw new Error("Missing the required parameter 'product' when calling Patch");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/products/{productID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {String} variantID ID of the variant.
     * @param {module:model/Variant} variant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Variant}
     */
    this.PatchVariant = function(productID, variantID, variant) {
      var postBody = variant;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling PatchVariant");
      }

      // verify the required parameter 'variantID' is set
      if (variantID == undefined || variantID == null) {
        throw new Error("Missing the required parameter 'variantID' when calling PatchVariant");
      }

      // verify the required parameter 'variant' is set
      if (variant == undefined || variant == null) {
        throw new Error("Missing the required parameter 'variant' when calling PatchVariant");
      }


      var pathParams = {
        'productID': productID,
        'variantID': variantID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Variant;

      return this.apiClient.callApi(
        '/products/{productID}/variants/{variantID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/ProductAssignment} productAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(productAssignment) {
      var postBody = productAssignment;

      // verify the required parameter 'productAssignment' is set
      if (productAssignment == undefined || productAssignment == null) {
        throw new Error("Missing the required parameter 'productAssignment' when calling SaveAssignment");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/products/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {module:model/Product} product 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.Update = function(productID, product) {
      var postBody = product;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling Update");
      }

      // verify the required parameter 'product' is set
      if (product == undefined || product == null) {
        throw new Error("Missing the required parameter 'product' when calling Update");
      }


      var pathParams = {
        'productID': productID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/products/{productID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {Number} inventory Inventory of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Inventory}
     */
    this.UpdateInventory = function(productID, inventory) {
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling UpdateInventory");
      }

      // verify the required parameter 'inventory' is set
      if (inventory == undefined || inventory == null) {
        throw new Error("Missing the required parameter 'inventory' when calling UpdateInventory");
      }


      var pathParams = {
        'productID': productID,
        'inventory': inventory
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Inventory;

      return this.apiClient.callApi(
        '/products/{productID}/inventory/{inventory}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {String} variantID ID of the variant.
     * @param {module:model/Variant} variant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Variant}
     */
    this.UpdateVariant = function(productID, variantID, variant) {
      var postBody = variant;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling UpdateVariant");
      }

      // verify the required parameter 'variantID' is set
      if (variantID == undefined || variantID == null) {
        throw new Error("Missing the required parameter 'variantID' when calling UpdateVariant");
      }

      // verify the required parameter 'variant' is set
      if (variant == undefined || variant == null) {
        throw new Error("Missing the required parameter 'variant' when calling UpdateVariant");
      }


      var pathParams = {
        'productID': productID,
        'variantID': variantID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Variant;

      return this.apiClient.callApi(
        '/products/{productID}/variants/{variantID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} productID ID of the product.
     * @param {String} variantID ID of the variant.
     * @param {Number} inventory Inventory of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Inventory}
     */
    this.UpdateVariantInventory = function(productID, variantID, inventory) {
      var postBody = null;

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling UpdateVariantInventory");
      }

      // verify the required parameter 'variantID' is set
      if (variantID == undefined || variantID == null) {
        throw new Error("Missing the required parameter 'variantID' when calling UpdateVariantInventory");
      }

      // verify the required parameter 'inventory' is set
      if (inventory == undefined || inventory == null) {
        throw new Error("Missing the required parameter 'inventory' when calling UpdateVariantInventory");
      }


      var pathParams = {
        'productID': productID,
        'variantID': variantID,
        'inventory': inventory
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Inventory;

      return this.apiClient.callApi(
        '/products/{productID}/variants/inventory/{variantID}/{inventory}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/Inventory":58,"../model/ListInventory":80,"../model/ListProduct":90,"../model/ListProductAssignment":91,"../model/ListVariant":105,"../model/Product":121,"../model/ProductAssignment":122,"../model/Variant":138}],29:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ListPromotion', 'model/ListPromotionAssignment', 'model/Promotion', 'model/PromotionAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListPromotion'), require('../model/ListPromotionAssignment'), require('../model/Promotion'), require('../model/PromotionAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Promotions = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListPromotion, root.OrderCloud.ListPromotionAssignment, root.OrderCloud.Promotion, root.OrderCloud.PromotionAssignment);
  }
}(this, function(ApiClient, ListPromotion, ListPromotionAssignment, Promotion, PromotionAssignment) {
  'use strict';

  /**
   * Promotion service.
   * @module api/Promotions
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new Promotions. 
   * @alias module:api/Promotions
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/Promotion} promo 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Promotion}
     */
    this.Create = function(promo) {
      var postBody = promo;

      // verify the required parameter 'promo' is set
      if (promo == undefined || promo == null) {
        throw new Error("Missing the required parameter 'promo' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Promotion;

      return this.apiClient.callApi(
        '/promotions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} promotionID ID of the promotion.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(promotionID) {
      var postBody = null;

      // verify the required parameter 'promotionID' is set
      if (promotionID == undefined || promotionID == null) {
        throw new Error("Missing the required parameter 'promotionID' when calling Delete");
      }


      var pathParams = {
        'promotionID': promotionID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/promotions/{promotionID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} promotionID ID of the promotion.
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(promotionID, buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'promotionID' is set
      if (promotionID == undefined || promotionID == null) {
        throw new Error("Missing the required parameter 'promotionID' when calling DeleteAssignment");
      }

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteAssignment");
      }


      var pathParams = {
        'promotionID': promotionID
      };
      var queryParams = {
        'buyerID': buyerID,
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/promotions/{promotionID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} promotionID ID of the promotion.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Promotion}
     */
    this.Get = function(promotionID) {
      var postBody = null;

      // verify the required parameter 'promotionID' is set
      if (promotionID == undefined || promotionID == null) {
        throw new Error("Missing the required parameter 'promotionID' when calling Get");
      }


      var pathParams = {
        'promotionID': promotionID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Promotion;

      return this.apiClient.callApi(
        '/promotions/{promotionID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPromotion}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListPromotion;

      return this.apiClient.callApi(
        '/promotions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.promotionID ID of the promotion.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the promotion.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPromotionAssignment}
     */
    this.ListAssignments = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
        'promotionID': opts['promotionID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListPromotionAssignment;

      return this.apiClient.callApi(
        '/promotions/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} promotionID ID of the promotion.
     * @param {module:model/Promotion} partialPromotion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Promotion}
     */
    this.Patch = function(promotionID, partialPromotion) {
      var postBody = partialPromotion;

      // verify the required parameter 'promotionID' is set
      if (promotionID == undefined || promotionID == null) {
        throw new Error("Missing the required parameter 'promotionID' when calling Patch");
      }

      // verify the required parameter 'partialPromotion' is set
      if (partialPromotion == undefined || partialPromotion == null) {
        throw new Error("Missing the required parameter 'partialPromotion' when calling Patch");
      }


      var pathParams = {
        'promotionID': promotionID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Promotion;

      return this.apiClient.callApi(
        '/promotions/{promotionID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/PromotionAssignment} assignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(assignment) {
      var postBody = assignment;

      // verify the required parameter 'assignment' is set
      if (assignment == undefined || assignment == null) {
        throw new Error("Missing the required parameter 'assignment' when calling SaveAssignment");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/promotions/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} promotionID ID of the promotion.
     * @param {module:model/Promotion} promo 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Promotion}
     */
    this.Update = function(promotionID, promo) {
      var postBody = promo;

      // verify the required parameter 'promotionID' is set
      if (promotionID == undefined || promotionID == null) {
        throw new Error("Missing the required parameter 'promotionID' when calling Update");
      }

      // verify the required parameter 'promo' is set
      if (promo == undefined || promo == null) {
        throw new Error("Missing the required parameter 'promo' when calling Update");
      }


      var pathParams = {
        'promotionID': promotionID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Promotion;

      return this.apiClient.callApi(
        '/promotions/{promotionID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/ListPromotion":92,"../model/ListPromotionAssignment":93,"../model/Promotion":123,"../model/PromotionAssignment":124}],30:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ListSecurityProfile', 'model/ListSecurityProfileAssignment', 'model/SecurityProfile', 'model/SecurityProfileAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListSecurityProfile'), require('../model/ListSecurityProfileAssignment'), require('../model/SecurityProfile'), require('../model/SecurityProfileAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SecurityProfiles = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListSecurityProfile, root.OrderCloud.ListSecurityProfileAssignment, root.OrderCloud.SecurityProfile, root.OrderCloud.SecurityProfileAssignment);
  }
}(this, function(ApiClient, ListSecurityProfile, ListSecurityProfileAssignment, SecurityProfile, SecurityProfileAssignment) {
  'use strict';

  /**
   * SecurityProfile service.
   * @module api/SecurityProfiles
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new SecurityProfiles. 
   * @alias module:api/SecurityProfiles
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} securityProfileID ID of the security profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(securityProfileID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'securityProfileID' is set
      if (securityProfileID == undefined || securityProfileID == null) {
        throw new Error("Missing the required parameter 'securityProfileID' when calling DeleteAssignment");
      }


      var pathParams = {
        'securityProfileID': securityProfileID
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/securityprofiles/{securityProfileID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} securityProfileID ID of the security profile.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecurityProfile}
     */
    this.Get = function(securityProfileID) {
      var postBody = null;

      // verify the required parameter 'securityProfileID' is set
      if (securityProfileID == undefined || securityProfileID == null) {
        throw new Error("Missing the required parameter 'securityProfileID' when calling Get");
      }


      var pathParams = {
        'securityProfileID': securityProfileID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = SecurityProfile;

      return this.apiClient.callApi(
        '/securityprofiles/{securityProfileID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSecurityProfile}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListSecurityProfile;

      return this.apiClient.callApi(
        '/securityprofiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.securityProfileID ID of the security profile.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the security profile.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSecurityProfileAssignment}
     */
    this.ListAssignments = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
        'securityProfileID': opts['securityProfileID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListSecurityProfileAssignment;

      return this.apiClient.callApi(
        '/securityprofiles/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/SecurityProfileAssignment} assignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(assignment) {
      var postBody = assignment;

      // verify the required parameter 'assignment' is set
      if (assignment == undefined || assignment == null) {
        throw new Error("Missing the required parameter 'assignment' when calling SaveAssignment");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/securityprofiles/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/ListSecurityProfile":94,"../model/ListSecurityProfileAssignment":95,"../model/SecurityProfile":125,"../model/SecurityProfileAssignment":126}],31:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ListShipment', 'model/Shipment', 'model/ShipmentItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListShipment'), require('../model/Shipment'), require('../model/ShipmentItem'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Shipments = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListShipment, root.OrderCloud.Shipment, root.OrderCloud.ShipmentItem);
  }
}(this, function(ApiClient, ListShipment, Shipment, ShipmentItem) {
  'use strict';

  /**
   * Shipment service.
   * @module api/Shipments
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new Shipments. 
   * @alias module:api/Shipments
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/Shipment} shipment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Shipment}
     */
    this.Create = function(buyerID, shipment) {
      var postBody = shipment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'shipment' is set
      if (shipment == undefined || shipment == null) {
        throw new Error("Missing the required parameter 'shipment' when calling Create");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/shipments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} shipmentID ID of the shipment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, shipmentID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'shipmentID' is set
      if (shipmentID == undefined || shipmentID == null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'shipmentID': shipmentID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/shipments/{shipmentID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} shipmentID ID of the shipment.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Shipment}
     */
    this.DeleteItem = function(buyerID, shipmentID, orderID, lineItemID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteItem");
      }

      // verify the required parameter 'shipmentID' is set
      if (shipmentID == undefined || shipmentID == null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling DeleteItem");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling DeleteItem");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling DeleteItem");
      }


      var pathParams = {
        'buyerID': buyerID,
        'shipmentID': shipmentID,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/shipments/{shipmentID}/items/{orderID}/{lineItemID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} shipmentID ID of the shipment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Shipment}
     */
    this.Get = function(buyerID, shipmentID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'shipmentID' is set
      if (shipmentID == undefined || shipmentID == null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'shipmentID': shipmentID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/shipments/{shipmentID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.orderID ID of the order.
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListShipment}
     */
    this.List = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling List");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'orderID': opts['orderID'],
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListShipment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/shipments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} shipmentID ID of the shipment.
     * @param {module:model/Shipment} shipment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Shipment}
     */
    this.Patch = function(buyerID, shipmentID, shipment) {
      var postBody = shipment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'shipmentID' is set
      if (shipmentID == undefined || shipmentID == null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling Patch");
      }

      // verify the required parameter 'shipment' is set
      if (shipment == undefined || shipment == null) {
        throw new Error("Missing the required parameter 'shipment' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'shipmentID': shipmentID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/shipments/{shipmentID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} shipmentID ID of the shipment.
     * @param {module:model/ShipmentItem} item 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Shipment}
     */
    this.SaveItem = function(buyerID, shipmentID, item) {
      var postBody = item;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling SaveItem");
      }

      // verify the required parameter 'shipmentID' is set
      if (shipmentID == undefined || shipmentID == null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling SaveItem");
      }

      // verify the required parameter 'item' is set
      if (item == undefined || item == null) {
        throw new Error("Missing the required parameter 'item' when calling SaveItem");
      }


      var pathParams = {
        'buyerID': buyerID,
        'shipmentID': shipmentID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/shipments/{shipmentID}/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} shipmentID ID of the shipment.
     * @param {module:model/Shipment} shipment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Shipment}
     */
    this.Update = function(buyerID, shipmentID, shipment) {
      var postBody = shipment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Update");
      }

      // verify the required parameter 'shipmentID' is set
      if (shipmentID == undefined || shipmentID == null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling Update");
      }

      // verify the required parameter 'shipment' is set
      if (shipment == undefined || shipment == null) {
        throw new Error("Missing the required parameter 'shipment' when calling Update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'shipmentID': shipmentID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/shipments/{shipmentID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/ListShipment":96,"../model/Shipment":127,"../model/ShipmentItem":128}],32:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ListSpec', 'model/ListSpecOption', 'model/ListSpecProductAssignment', 'model/Spec', 'model/SpecOption', 'model/SpecProductAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListSpec'), require('../model/ListSpecOption'), require('../model/ListSpecProductAssignment'), require('../model/Spec'), require('../model/SpecOption'), require('../model/SpecProductAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Specs = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListSpec, root.OrderCloud.ListSpecOption, root.OrderCloud.ListSpecProductAssignment, root.OrderCloud.Spec, root.OrderCloud.SpecOption, root.OrderCloud.SpecProductAssignment);
  }
}(this, function(ApiClient, ListSpec, ListSpecOption, ListSpecProductAssignment, Spec, SpecOption, SpecProductAssignment) {
  'use strict';

  /**
   * Spec service.
   * @module api/Specs
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new Specs. 
   * @alias module:api/Specs
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/Spec} spec 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Spec}
     */
    this.Create = function(spec) {
      var postBody = spec;

      // verify the required parameter 'spec' is set
      if (spec == undefined || spec == null) {
        throw new Error("Missing the required parameter 'spec' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Spec;

      return this.apiClient.callApi(
        '/specs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {module:model/SpecOption} option 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpecOption}
     */
    this.CreateOption = function(specID, option) {
      var postBody = option;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling CreateOption");
      }

      // verify the required parameter 'option' is set
      if (option == undefined || option == null) {
        throw new Error("Missing the required parameter 'option' when calling CreateOption");
      }


      var pathParams = {
        'specID': specID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = SpecOption;

      return this.apiClient.callApi(
        '/specs/{specID}/options', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(specID) {
      var postBody = null;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling Delete");
      }


      var pathParams = {
        'specID': specID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/specs/{specID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {String} optionID ID of the option.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteOption = function(specID, optionID) {
      var postBody = null;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling DeleteOption");
      }

      // verify the required parameter 'optionID' is set
      if (optionID == undefined || optionID == null) {
        throw new Error("Missing the required parameter 'optionID' when calling DeleteOption");
      }


      var pathParams = {
        'specID': specID,
        'optionID': optionID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/specs/{specID}/options/{optionID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {String} productID ID of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteProductAssignment = function(specID, productID) {
      var postBody = null;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling DeleteProductAssignment");
      }

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling DeleteProductAssignment");
      }


      var pathParams = {
        'specID': specID,
        'productID': productID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/specs/{specID}/productassignments/{productID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Spec}
     */
    this.Get = function(specID) {
      var postBody = null;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling Get");
      }


      var pathParams = {
        'specID': specID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Spec;

      return this.apiClient.callApi(
        '/specs/{specID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {String} optionID ID of the option.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpecOption}
     */
    this.GetOption = function(specID, optionID) {
      var postBody = null;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling GetOption");
      }

      // verify the required parameter 'optionID' is set
      if (optionID == undefined || optionID == null) {
        throw new Error("Missing the required parameter 'optionID' when calling GetOption");
      }


      var pathParams = {
        'specID': specID,
        'optionID': optionID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = SpecOption;

      return this.apiClient.callApi(
        '/specs/{specID}/options/{optionID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSpec}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListSpec;

      return this.apiClient.callApi(
        '/specs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSpecOption}
     */
    this.ListOptions = function(specID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling ListOptions");
      }


      var pathParams = {
        'specID': specID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListSpecOption;

      return this.apiClient.callApi(
        '/specs/{specID}/options', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.specID ID of the spec.
     * @param {String} opts.productID ID of the product.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSpecProductAssignment}
     */
    this.ListProductAssignments = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'specID': opts['specID'],
        'productID': opts['productID'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListSpecProductAssignment;

      return this.apiClient.callApi(
        '/specs/productassignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {module:model/Spec} spec 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Spec}
     */
    this.Patch = function(specID, spec) {
      var postBody = spec;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling Patch");
      }

      // verify the required parameter 'spec' is set
      if (spec == undefined || spec == null) {
        throw new Error("Missing the required parameter 'spec' when calling Patch");
      }


      var pathParams = {
        'specID': specID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Spec;

      return this.apiClient.callApi(
        '/specs/{specID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {String} optionID ID of the option.
     * @param {module:model/SpecOption} option 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpecOption}
     */
    this.PatchOption = function(specID, optionID, option) {
      var postBody = option;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling PatchOption");
      }

      // verify the required parameter 'optionID' is set
      if (optionID == undefined || optionID == null) {
        throw new Error("Missing the required parameter 'optionID' when calling PatchOption");
      }

      // verify the required parameter 'option' is set
      if (option == undefined || option == null) {
        throw new Error("Missing the required parameter 'option' when calling PatchOption");
      }


      var pathParams = {
        'specID': specID,
        'optionID': optionID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = SpecOption;

      return this.apiClient.callApi(
        '/specs/{specID}/options/{optionID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/SpecProductAssignment} productAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveProductAssignment = function(productAssignment) {
      var postBody = productAssignment;

      // verify the required parameter 'productAssignment' is set
      if (productAssignment == undefined || productAssignment == null) {
        throw new Error("Missing the required parameter 'productAssignment' when calling SaveProductAssignment");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/specs/productassignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {module:model/Spec} spec 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Spec}
     */
    this.Update = function(specID, spec) {
      var postBody = spec;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling Update");
      }

      // verify the required parameter 'spec' is set
      if (spec == undefined || spec == null) {
        throw new Error("Missing the required parameter 'spec' when calling Update");
      }


      var pathParams = {
        'specID': specID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Spec;

      return this.apiClient.callApi(
        '/specs/{specID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {String} optionID ID of the option.
     * @param {module:model/SpecOption} option 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpecOption}
     */
    this.UpdateOption = function(specID, optionID, option) {
      var postBody = option;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling UpdateOption");
      }

      // verify the required parameter 'optionID' is set
      if (optionID == undefined || optionID == null) {
        throw new Error("Missing the required parameter 'optionID' when calling UpdateOption");
      }

      // verify the required parameter 'option' is set
      if (option == undefined || option == null) {
        throw new Error("Missing the required parameter 'option' when calling UpdateOption");
      }


      var pathParams = {
        'specID': specID,
        'optionID': optionID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = SpecOption;

      return this.apiClient.callApi(
        '/specs/{specID}/options/{optionID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/ListSpec":97,"../model/ListSpecOption":98,"../model/ListSpecProductAssignment":99,"../model/Spec":129,"../model/SpecOption":130,"../model/SpecProductAssignment":131}],33:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ListSpendingAccount', 'model/ListSpendingAccountAssignment', 'model/SpendingAccount', 'model/SpendingAccountAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListSpendingAccount'), require('../model/ListSpendingAccountAssignment'), require('../model/SpendingAccount'), require('../model/SpendingAccountAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SpendingAccounts = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListSpendingAccount, root.OrderCloud.ListSpendingAccountAssignment, root.OrderCloud.SpendingAccount, root.OrderCloud.SpendingAccountAssignment);
  }
}(this, function(ApiClient, ListSpendingAccount, ListSpendingAccountAssignment, SpendingAccount, SpendingAccountAssignment) {
  'use strict';

  /**
   * SpendingAccount service.
   * @module api/SpendingAccounts
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new SpendingAccounts. 
   * @alias module:api/SpendingAccounts
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/SpendingAccount} spendingAccount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpendingAccount}
     */
    this.Create = function(buyerID, spendingAccount) {
      var postBody = spendingAccount;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'spendingAccount' is set
      if (spendingAccount == undefined || spendingAccount == null) {
        throw new Error("Missing the required parameter 'spendingAccount' when calling Create");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = SpendingAccount;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/spendingaccounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} spendingAccountID ID of the spending account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, spendingAccountID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'spendingAccountID' is set
      if (spendingAccountID == undefined || spendingAccountID == null) {
        throw new Error("Missing the required parameter 'spendingAccountID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'spendingAccountID': spendingAccountID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/spendingaccounts/{spendingAccountID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} spendingAccountID ID of the spending account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(buyerID, spendingAccountID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteAssignment");
      }

      // verify the required parameter 'spendingAccountID' is set
      if (spendingAccountID == undefined || spendingAccountID == null) {
        throw new Error("Missing the required parameter 'spendingAccountID' when calling DeleteAssignment");
      }


      var pathParams = {
        'buyerID': buyerID,
        'spendingAccountID': spendingAccountID
      };
      var queryParams = {
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/spendingaccounts/{spendingAccountID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} spendingAccountID ID of the spending account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpendingAccount}
     */
    this.Get = function(buyerID, spendingAccountID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'spendingAccountID' is set
      if (spendingAccountID == undefined || spendingAccountID == null) {
        throw new Error("Missing the required parameter 'spendingAccountID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'spendingAccountID': spendingAccountID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = SpendingAccount;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/spendingaccounts/{spendingAccountID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSpendingAccount}
     */
    this.List = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling List");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListSpendingAccount;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/spendingaccounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.spendingAccountID ID of the spending account.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the spending account.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSpendingAccountAssignment}
     */
    this.ListAssignments = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling ListAssignments");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'spendingAccountID': opts['spendingAccountID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListSpendingAccountAssignment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/spendingaccounts/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} spendingAccountID ID of the spending account.
     * @param {module:model/SpendingAccount} spendingAccount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpendingAccount}
     */
    this.Patch = function(buyerID, spendingAccountID, spendingAccount) {
      var postBody = spendingAccount;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'spendingAccountID' is set
      if (spendingAccountID == undefined || spendingAccountID == null) {
        throw new Error("Missing the required parameter 'spendingAccountID' when calling Patch");
      }

      // verify the required parameter 'spendingAccount' is set
      if (spendingAccount == undefined || spendingAccount == null) {
        throw new Error("Missing the required parameter 'spendingAccount' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'spendingAccountID': spendingAccountID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = SpendingAccount;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/spendingaccounts/{spendingAccountID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/SpendingAccountAssignment} assignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(buyerID, assignment) {
      var postBody = assignment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling SaveAssignment");
      }

      // verify the required parameter 'assignment' is set
      if (assignment == undefined || assignment == null) {
        throw new Error("Missing the required parameter 'assignment' when calling SaveAssignment");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/spendingaccounts/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} spendingAccountID ID of the spending account.
     * @param {module:model/SpendingAccount} spendingAccount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpendingAccount}
     */
    this.Update = function(buyerID, spendingAccountID, spendingAccount) {
      var postBody = spendingAccount;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Update");
      }

      // verify the required parameter 'spendingAccountID' is set
      if (spendingAccountID == undefined || spendingAccountID == null) {
        throw new Error("Missing the required parameter 'spendingAccountID' when calling Update");
      }

      // verify the required parameter 'spendingAccount' is set
      if (spendingAccount == undefined || spendingAccount == null) {
        throw new Error("Missing the required parameter 'spendingAccount' when calling Update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'spendingAccountID': spendingAccountID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = SpendingAccount;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/spendingaccounts/{spendingAccountID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/ListSpendingAccount":100,"../model/ListSpendingAccountAssignment":101,"../model/SpendingAccount":132,"../model/SpendingAccountAssignment":133}],34:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ListUserGroup', 'model/ListUserGroupAssignment', 'model/UserGroup', 'model/UserGroupAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListUserGroup'), require('../model/ListUserGroupAssignment'), require('../model/UserGroup'), require('../model/UserGroupAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.UserGroups = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListUserGroup, root.OrderCloud.ListUserGroupAssignment, root.OrderCloud.UserGroup, root.OrderCloud.UserGroupAssignment);
  }
}(this, function(ApiClient, ListUserGroup, ListUserGroupAssignment, UserGroup, UserGroupAssignment) {
  'use strict';

  /**
   * UserGroup service.
   * @module api/UserGroups
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new UserGroups. 
   * @alias module:api/UserGroups
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/UserGroup} group 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Create = function(buyerID, group) {
      var postBody = group;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'group' is set
      if (group == undefined || group == null) {
        throw new Error("Missing the required parameter 'group' when calling Create");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/usergroups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, userGroupID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userGroupID': userGroupID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/usergroups/{userGroupID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userGroupID ID of the user group.
     * @param {String} userID ID of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteUserAssignment = function(buyerID, userGroupID, userID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteUserAssignment");
      }

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling DeleteUserAssignment");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling DeleteUserAssignment");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userGroupID': userGroupID,
        'userID': userID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/usergroups/{userGroupID}/assignments/{userID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Get = function(buyerID, userGroupID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userGroupID': userGroupID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/usergroups/{userGroupID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUserGroup}
     */
    this.List = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling List");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListUserGroup;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/usergroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.userID ID of the user.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUserGroupAssignment}
     */
    this.ListUserAssignments = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling ListUserAssignments");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'userGroupID': opts['userGroupID'],
        'userID': opts['userID'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListUserGroupAssignment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/usergroups/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userGroupID ID of the user group.
     * @param {module:model/UserGroup} group 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Patch = function(buyerID, userGroupID, group) {
      var postBody = group;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Patch");
      }

      // verify the required parameter 'group' is set
      if (group == undefined || group == null) {
        throw new Error("Missing the required parameter 'group' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userGroupID': userGroupID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/usergroups/{userGroupID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/UserGroupAssignment} userGroupAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveUserAssignment = function(buyerID, userGroupAssignment) {
      var postBody = userGroupAssignment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling SaveUserAssignment");
      }

      // verify the required parameter 'userGroupAssignment' is set
      if (userGroupAssignment == undefined || userGroupAssignment == null) {
        throw new Error("Missing the required parameter 'userGroupAssignment' when calling SaveUserAssignment");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/usergroups/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userGroupID ID of the user group.
     * @param {module:model/UserGroup} group 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Update = function(buyerID, userGroupID, group) {
      var postBody = group;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Update");
      }

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Update");
      }

      // verify the required parameter 'group' is set
      if (group == undefined || group == null) {
        throw new Error("Missing the required parameter 'group' when calling Update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userGroupID': userGroupID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/usergroups/{userGroupID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/ListUserGroup":103,"../model/ListUserGroupAssignment":104,"../model/UserGroup":136,"../model/UserGroupAssignment":137}],35:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccessToken', 'model/ImpersonateTokenRequest', 'model/ListUser', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccessToken'), require('../model/ImpersonateTokenRequest'), require('../model/ListUser'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Users = factory(root.OrderCloud.ApiClient, root.OrderCloud.AccessToken, root.OrderCloud.ImpersonateTokenRequest, root.OrderCloud.ListUser, root.OrderCloud.User);
  }
}(this, function(ApiClient, AccessToken, ImpersonateTokenRequest, ListUser, User) {
  'use strict';

  /**
   * User service.
   * @module api/Users
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new Users. 
   * @alias module:api/Users
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Create = function(buyerID, user) {
      var postBody = user;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Create");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userID ID of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, userID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userID': userID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/users/{userID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userID ID of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Get = function(buyerID, userID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userID': userID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/users/{userID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userID ID of the user.
     * @param {module:model/ImpersonateTokenRequest} tokenRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccessToken}
     */
    this.GetAccessToken = function(buyerID, userID, tokenRequest) {
      var postBody = tokenRequest;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling GetAccessToken");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling GetAccessToken");
      }

      // verify the required parameter 'tokenRequest' is set
      if (tokenRequest == undefined || tokenRequest == null) {
        throw new Error("Missing the required parameter 'tokenRequest' when calling GetAccessToken");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userID': userID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = AccessToken;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/users/{userID}/accesstoken', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUser}
     */
    this.List = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling List");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'userGroupID': opts['userGroupID'],
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListUser;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userID ID of the user.
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Patch = function(buyerID, userID, user) {
      var postBody = user;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Patch");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userID': userID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/users/{userID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userID ID of the user.
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Update = function(buyerID, userID, user) {
      var postBody = user;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Update");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Update");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userID': userID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/users/{userID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":9,"../model/AccessToken":37,"../model/ImpersonateTokenRequest":57,"../model/ListUser":102,"../model/User":135}],36:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccessToken', 'model/Address', 'model/AddressAssignment', 'model/AdminCompany', 'model/ApprovalRule', 'model/BaseSpec', 'model/Buyer', 'model/BuyerAddress', 'model/BuyerCreditCard', 'model/BuyerProduct', 'model/BuyerSpec', 'model/Catalog', 'model/CatalogAssignment', 'model/Category', 'model/CategoryAssignment', 'model/CategoryProductAssignment', 'model/CostCenter', 'model/CostCenterAssignment', 'model/CreditCard', 'model/CreditCardAssignment', 'model/ImpersonateTokenRequest', 'model/Inventory', 'model/LineItem', 'model/LineItemProduct', 'model/LineItemSpec', 'model/ListAddress', 'model/ListAddressAssignment', 'model/ListAdminCompany', 'model/ListApprovalRule', 'model/ListBuyer', 'model/ListBuyerAddress', 'model/ListBuyerCreditCard', 'model/ListBuyerProduct', 'model/ListBuyerSpec', 'model/ListCatalog', 'model/ListCatalogAssignment', 'model/ListCategory', 'model/ListCategoryAssignment', 'model/ListCategoryProductAssignment', 'model/ListCostCenter', 'model/ListCostCenterAssignment', 'model/ListCreditCard', 'model/ListCreditCardAssignment', 'model/ListInventory', 'model/ListLineItem', 'model/ListMessageCCListenerAssignment', 'model/ListMessageSender', 'model/ListMessageSenderAssignment', 'model/ListOrder', 'model/ListOrderApproval', 'model/ListOrderPromotion', 'model/ListPayment', 'model/ListPriceSchedule', 'model/ListProduct', 'model/ListProductAssignment', 'model/ListPromotion', 'model/ListPromotionAssignment', 'model/ListSecurityProfile', 'model/ListSecurityProfileAssignment', 'model/ListShipment', 'model/ListSpec', 'model/ListSpecOption', 'model/ListSpecProductAssignment', 'model/ListSpendingAccount', 'model/ListSpendingAccountAssignment', 'model/ListUser', 'model/ListUserGroup', 'model/ListUserGroupAssignment', 'model/ListVariant', 'model/ListXpIndex', 'model/MessageCCListenerAssignment', 'model/MessageSender', 'model/MessageSenderAssignment', 'model/Meta', 'model/Order', 'model/OrderApproval', 'model/OrderPromotion', 'model/PasswordReset', 'model/PasswordResetRequest', 'model/Payment', 'model/PaymentTransaction', 'model/PingResponse', 'model/PriceBreak', 'model/PriceSchedule', 'model/Product', 'model/ProductAssignment', 'model/Promotion', 'model/PromotionAssignment', 'model/SecurityProfile', 'model/SecurityProfileAssignment', 'model/Shipment', 'model/ShipmentItem', 'model/Spec', 'model/SpecOption', 'model/SpecProductAssignment', 'model/SpendingAccount', 'model/SpendingAccountAssignment', 'model/StripeCreditCard', 'model/User', 'model/UserGroup', 'model/UserGroupAssignment', 'model/Variant', 'model/XpIndex', 'api/Addresses', 'api/AdminAddresses', 'api/AdminUsers', 'api/AdminUserGroups', 'api/ApprovalRules', 'api/Buyers', 'api/Catalogs', 'api/Categorys', 'api/CostCenters', 'api/CreditCards', 'api/LineItems', 'api/Me', 'api/MessageSenders', 'api/Orders', 'api/PasswordResets', 'api/Payments', 'api/PriceSchedules', 'api/Products', 'api/Promotions', 'api/SecurityProfiles', 'api/Shipments', 'api/Specs', 'api/SpendingAccounts', 'api/Users', 'api/UserGroups', 'api/Auth'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccessToken'), require('./model/Address'), require('./model/AddressAssignment'), require('./model/AdminCompany'), require('./model/ApprovalRule'), require('./model/BaseSpec'), require('./model/Buyer'), require('./model/BuyerAddress'), require('./model/BuyerCreditCard'), require('./model/BuyerProduct'), require('./model/BuyerSpec'), require('./model/Catalog'), require('./model/CatalogAssignment'), require('./model/Category'), require('./model/CategoryAssignment'), require('./model/CategoryProductAssignment'), require('./model/CostCenter'), require('./model/CostCenterAssignment'), require('./model/CreditCard'), require('./model/CreditCardAssignment'), require('./model/ImpersonateTokenRequest'), require('./model/Inventory'), require('./model/LineItem'), require('./model/LineItemProduct'), require('./model/LineItemSpec'), require('./model/ListAddress'), require('./model/ListAddressAssignment'), require('./model/ListAdminCompany'), require('./model/ListApprovalRule'), require('./model/ListBuyer'), require('./model/ListBuyerAddress'), require('./model/ListBuyerCreditCard'), require('./model/ListBuyerProduct'), require('./model/ListBuyerSpec'), require('./model/ListCatalog'), require('./model/ListCatalogAssignment'), require('./model/ListCategory'), require('./model/ListCategoryAssignment'), require('./model/ListCategoryProductAssignment'), require('./model/ListCostCenter'), require('./model/ListCostCenterAssignment'), require('./model/ListCreditCard'), require('./model/ListCreditCardAssignment'), require('./model/ListInventory'), require('./model/ListLineItem'), require('./model/ListMessageCCListenerAssignment'), require('./model/ListMessageSender'), require('./model/ListMessageSenderAssignment'), require('./model/ListOrder'), require('./model/ListOrderApproval'), require('./model/ListOrderPromotion'), require('./model/ListPayment'), require('./model/ListPriceSchedule'), require('./model/ListProduct'), require('./model/ListProductAssignment'), require('./model/ListPromotion'), require('./model/ListPromotionAssignment'), require('./model/ListSecurityProfile'), require('./model/ListSecurityProfileAssignment'), require('./model/ListShipment'), require('./model/ListSpec'), require('./model/ListSpecOption'), require('./model/ListSpecProductAssignment'), require('./model/ListSpendingAccount'), require('./model/ListSpendingAccountAssignment'), require('./model/ListUser'), require('./model/ListUserGroup'), require('./model/ListUserGroupAssignment'), require('./model/ListVariant'), require('./model/ListXpIndex'), require('./model/MessageCCListenerAssignment'), require('./model/MessageSender'), require('./model/MessageSenderAssignment'), require('./model/Meta'), require('./model/Order'), require('./model/OrderApproval'), require('./model/OrderPromotion'), require('./model/PasswordReset'), require('./model/PasswordResetRequest'), require('./model/Payment'), require('./model/PaymentTransaction'), require('./model/PingResponse'), require('./model/PriceBreak'), require('./model/PriceSchedule'), require('./model/Product'), require('./model/ProductAssignment'), require('./model/Promotion'), require('./model/PromotionAssignment'), require('./model/SecurityProfile'), require('./model/SecurityProfileAssignment'), require('./model/Shipment'), require('./model/ShipmentItem'), require('./model/Spec'), require('./model/SpecOption'), require('./model/SpecProductAssignment'), require('./model/SpendingAccount'), require('./model/SpendingAccountAssignment'), require('./model/StripeCreditCard'), require('./model/User'), require('./model/UserGroup'), require('./model/UserGroupAssignment'), require('./model/Variant'), require('./model/XpIndex'), require('./api/Addresses'), require('./api/AdminAddresses'), require('./api/AdminUsers'), require('./api/AdminUserGroups'), require('./api/ApprovalRules'), require('./api/Buyers'), require('./api/Catalogs'), require('./api/Categorys'), require('./api/CostCenters'), require('./api/CreditCards'), require('./api/LineItems'), require('./api/Me'), require('./api/MessageSenders'), require('./api/Orders'), require('./api/PasswordResets'), require('./api/Payments'), require('./api/PriceSchedules'), require('./api/Products'), require('./api/Promotions'), require('./api/SecurityProfiles'), require('./api/Shipments'), require('./api/Specs'), require('./api/SpendingAccounts'), require('./api/Users'), require('./api/UserGroups'), require('./api/Auth'));
  }
}(function(ApiClient, AccessToken, Address, AddressAssignment, AdminCompany, ApprovalRule, BaseSpec, Buyer, BuyerAddress, BuyerCreditCard, BuyerProduct, BuyerSpec, Catalog, CatalogAssignment, Category, CategoryAssignment, CategoryProductAssignment, CostCenter, CostCenterAssignment, CreditCard, CreditCardAssignment, ImpersonateTokenRequest, Inventory, LineItem, LineItemProduct, LineItemSpec, ListAddress, ListAddressAssignment, ListAdminCompany, ListApprovalRule, ListBuyer, ListBuyerAddress, ListBuyerCreditCard, ListBuyerProduct, ListBuyerSpec, ListCatalog, ListCatalogAssignment, ListCategory, ListCategoryAssignment, ListCategoryProductAssignment, ListCostCenter, ListCostCenterAssignment, ListCreditCard, ListCreditCardAssignment, ListInventory, ListLineItem, ListMessageCCListenerAssignment, ListMessageSender, ListMessageSenderAssignment, ListOrder, ListOrderApproval, ListOrderPromotion, ListPayment, ListPriceSchedule, ListProduct, ListProductAssignment, ListPromotion, ListPromotionAssignment, ListSecurityProfile, ListSecurityProfileAssignment, ListShipment, ListSpec, ListSpecOption, ListSpecProductAssignment, ListSpendingAccount, ListSpendingAccountAssignment, ListUser, ListUserGroup, ListUserGroupAssignment, ListVariant, ListXpIndex, MessageCCListenerAssignment, MessageSender, MessageSenderAssignment, Meta, Order, OrderApproval, OrderPromotion, PasswordReset, PasswordResetRequest, Payment, PaymentTransaction, PingResponse, PriceBreak, PriceSchedule, Product, ProductAssignment, Promotion, PromotionAssignment, SecurityProfile, SecurityProfileAssignment, Shipment, ShipmentItem, Spec, SpecOption, SpecProductAssignment, SpendingAccount, SpendingAccountAssignment, StripeCreditCard, User, UserGroup, UserGroupAssignment, Variant, XpIndex, Addresses, AdminAddresses, AdminUsers, AdminUserGroups, ApprovalRules, Buyers, Catalogs, Categorys, CostCenters, CreditCards, LineItems, Me, MessageSenders, Orders, PasswordResets, Payments, PriceSchedules, Products, Promotions, SecurityProfiles, Shipments, Specs, SpendingAccounts, Users, UserGroups, Auth) {
  'use strict';

  /**
   * JavaScript SDK autogenerated from swagger spec using the Swagger-CodeGen project.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var OrderCloud = require('index'); // See note below*.
   * var xxxSvc = new OrderCloud.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new OrderCloud.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new OrderCloud.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new OrderCloud.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v1.0.42-preview
   */
  var exports = {
    /**
     * The As impersonation service.
     * @property {null}
     */
    As: function() {
      this.ApiClient.instance.impersonation = true;
      return this;
    },
    /**
     * The Auth service.
     * @property {null}
     */
    Auth: new Auth(),
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccessToken model constructor.
     * @property {module:model/AccessToken}
     */
    AccessToken: AccessToken,
    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address: Address,
    /**
     * The AddressAssignment model constructor.
     * @property {module:model/AddressAssignment}
     */
    AddressAssignment: AddressAssignment,
    /**
     * The AdminCompany model constructor.
     * @property {module:model/AdminCompany}
     */
    AdminCompany: AdminCompany,
    /**
     * The ApprovalRule model constructor.
     * @property {module:model/ApprovalRule}
     */
    ApprovalRule: ApprovalRule,
    /**
     * The BaseSpec model constructor.
     * @property {module:model/BaseSpec}
     */
    BaseSpec: BaseSpec,
    /**
     * The Buyer model constructor.
     * @property {module:model/Buyer}
     */
    Buyer: Buyer,
    /**
     * The BuyerAddress model constructor.
     * @property {module:model/BuyerAddress}
     */
    BuyerAddress: BuyerAddress,
    /**
     * The BuyerCreditCard model constructor.
     * @property {module:model/BuyerCreditCard}
     */
    BuyerCreditCard: BuyerCreditCard,
    /**
     * The BuyerProduct model constructor.
     * @property {module:model/BuyerProduct}
     */
    BuyerProduct: BuyerProduct,
    /**
     * The BuyerSpec model constructor.
     * @property {module:model/BuyerSpec}
     */
    BuyerSpec: BuyerSpec,
    /**
     * The Catalog model constructor.
     * @property {module:model/Catalog}
     */
    Catalog: Catalog,
    /**
     * The CatalogAssignment model constructor.
     * @property {module:model/CatalogAssignment}
     */
    CatalogAssignment: CatalogAssignment,
    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category: Category,
    /**
     * The CategoryAssignment model constructor.
     * @property {module:model/CategoryAssignment}
     */
    CategoryAssignment: CategoryAssignment,
    /**
     * The CategoryProductAssignment model constructor.
     * @property {module:model/CategoryProductAssignment}
     */
    CategoryProductAssignment: CategoryProductAssignment,
    /**
     * The CostCenter model constructor.
     * @property {module:model/CostCenter}
     */
    CostCenter: CostCenter,
    /**
     * The CostCenterAssignment model constructor.
     * @property {module:model/CostCenterAssignment}
     */
    CostCenterAssignment: CostCenterAssignment,
    /**
     * The CreditCard model constructor.
     * @property {module:model/CreditCard}
     */
    CreditCard: CreditCard,
    /**
     * The CreditCardAssignment model constructor.
     * @property {module:model/CreditCardAssignment}
     */
    CreditCardAssignment: CreditCardAssignment,
    /**
     * The ImpersonateTokenRequest model constructor.
     * @property {module:model/ImpersonateTokenRequest}
     */
    ImpersonateTokenRequest: ImpersonateTokenRequest,
    /**
     * The Inventory model constructor.
     * @property {module:model/Inventory}
     */
    Inventory: Inventory,
    /**
     * The LineItem model constructor.
     * @property {module:model/LineItem}
     */
    LineItem: LineItem,
    /**
     * The LineItemProduct model constructor.
     * @property {module:model/LineItemProduct}
     */
    LineItemProduct: LineItemProduct,
    /**
     * The LineItemSpec model constructor.
     * @property {module:model/LineItemSpec}
     */
    LineItemSpec: LineItemSpec,
    /**
     * The ListAddress model constructor.
     * @property {module:model/ListAddress}
     */
    ListAddress: ListAddress,
    /**
     * The ListAddressAssignment model constructor.
     * @property {module:model/ListAddressAssignment}
     */
    ListAddressAssignment: ListAddressAssignment,
    /**
     * The ListAdminCompany model constructor.
     * @property {module:model/ListAdminCompany}
     */
    ListAdminCompany: ListAdminCompany,
    /**
     * The ListApprovalRule model constructor.
     * @property {module:model/ListApprovalRule}
     */
    ListApprovalRule: ListApprovalRule,
    /**
     * The ListBuyer model constructor.
     * @property {module:model/ListBuyer}
     */
    ListBuyer: ListBuyer,
    /**
     * The ListBuyerAddress model constructor.
     * @property {module:model/ListBuyerAddress}
     */
    ListBuyerAddress: ListBuyerAddress,
    /**
     * The ListBuyerCreditCard model constructor.
     * @property {module:model/ListBuyerCreditCard}
     */
    ListBuyerCreditCard: ListBuyerCreditCard,
    /**
     * The ListBuyerProduct model constructor.
     * @property {module:model/ListBuyerProduct}
     */
    ListBuyerProduct: ListBuyerProduct,
    /**
     * The ListBuyerSpec model constructor.
     * @property {module:model/ListBuyerSpec}
     */
    ListBuyerSpec: ListBuyerSpec,
    /**
     * The ListCatalog model constructor.
     * @property {module:model/ListCatalog}
     */
    ListCatalog: ListCatalog,
    /**
     * The ListCatalogAssignment model constructor.
     * @property {module:model/ListCatalogAssignment}
     */
    ListCatalogAssignment: ListCatalogAssignment,
    /**
     * The ListCategory model constructor.
     * @property {module:model/ListCategory}
     */
    ListCategory: ListCategory,
    /**
     * The ListCategoryAssignment model constructor.
     * @property {module:model/ListCategoryAssignment}
     */
    ListCategoryAssignment: ListCategoryAssignment,
    /**
     * The ListCategoryProductAssignment model constructor.
     * @property {module:model/ListCategoryProductAssignment}
     */
    ListCategoryProductAssignment: ListCategoryProductAssignment,
    /**
     * The ListCostCenter model constructor.
     * @property {module:model/ListCostCenter}
     */
    ListCostCenter: ListCostCenter,
    /**
     * The ListCostCenterAssignment model constructor.
     * @property {module:model/ListCostCenterAssignment}
     */
    ListCostCenterAssignment: ListCostCenterAssignment,
    /**
     * The ListCreditCard model constructor.
     * @property {module:model/ListCreditCard}
     */
    ListCreditCard: ListCreditCard,
    /**
     * The ListCreditCardAssignment model constructor.
     * @property {module:model/ListCreditCardAssignment}
     */
    ListCreditCardAssignment: ListCreditCardAssignment,
    /**
     * The ListInventory model constructor.
     * @property {module:model/ListInventory}
     */
    ListInventory: ListInventory,
    /**
     * The ListLineItem model constructor.
     * @property {module:model/ListLineItem}
     */
    ListLineItem: ListLineItem,
    /**
     * The ListMessageCCListenerAssignment model constructor.
     * @property {module:model/ListMessageCCListenerAssignment}
     */
    ListMessageCCListenerAssignment: ListMessageCCListenerAssignment,
    /**
     * The ListMessageSender model constructor.
     * @property {module:model/ListMessageSender}
     */
    ListMessageSender: ListMessageSender,
    /**
     * The ListMessageSenderAssignment model constructor.
     * @property {module:model/ListMessageSenderAssignment}
     */
    ListMessageSenderAssignment: ListMessageSenderAssignment,
    /**
     * The ListOrder model constructor.
     * @property {module:model/ListOrder}
     */
    ListOrder: ListOrder,
    /**
     * The ListOrderApproval model constructor.
     * @property {module:model/ListOrderApproval}
     */
    ListOrderApproval: ListOrderApproval,
    /**
     * The ListOrderPromotion model constructor.
     * @property {module:model/ListOrderPromotion}
     */
    ListOrderPromotion: ListOrderPromotion,
    /**
     * The ListPayment model constructor.
     * @property {module:model/ListPayment}
     */
    ListPayment: ListPayment,
    /**
     * The ListPriceSchedule model constructor.
     * @property {module:model/ListPriceSchedule}
     */
    ListPriceSchedule: ListPriceSchedule,
    /**
     * The ListProduct model constructor.
     * @property {module:model/ListProduct}
     */
    ListProduct: ListProduct,
    /**
     * The ListProductAssignment model constructor.
     * @property {module:model/ListProductAssignment}
     */
    ListProductAssignment: ListProductAssignment,
    /**
     * The ListPromotion model constructor.
     * @property {module:model/ListPromotion}
     */
    ListPromotion: ListPromotion,
    /**
     * The ListPromotionAssignment model constructor.
     * @property {module:model/ListPromotionAssignment}
     */
    ListPromotionAssignment: ListPromotionAssignment,
    /**
     * The ListSecurityProfile model constructor.
     * @property {module:model/ListSecurityProfile}
     */
    ListSecurityProfile: ListSecurityProfile,
    /**
     * The ListSecurityProfileAssignment model constructor.
     * @property {module:model/ListSecurityProfileAssignment}
     */
    ListSecurityProfileAssignment: ListSecurityProfileAssignment,
    /**
     * The ListShipment model constructor.
     * @property {module:model/ListShipment}
     */
    ListShipment: ListShipment,
    /**
     * The ListSpec model constructor.
     * @property {module:model/ListSpec}
     */
    ListSpec: ListSpec,
    /**
     * The ListSpecOption model constructor.
     * @property {module:model/ListSpecOption}
     */
    ListSpecOption: ListSpecOption,
    /**
     * The ListSpecProductAssignment model constructor.
     * @property {module:model/ListSpecProductAssignment}
     */
    ListSpecProductAssignment: ListSpecProductAssignment,
    /**
     * The ListSpendingAccount model constructor.
     * @property {module:model/ListSpendingAccount}
     */
    ListSpendingAccount: ListSpendingAccount,
    /**
     * The ListSpendingAccountAssignment model constructor.
     * @property {module:model/ListSpendingAccountAssignment}
     */
    ListSpendingAccountAssignment: ListSpendingAccountAssignment,
    /**
     * The ListUser model constructor.
     * @property {module:model/ListUser}
     */
    ListUser: ListUser,
    /**
     * The ListUserGroup model constructor.
     * @property {module:model/ListUserGroup}
     */
    ListUserGroup: ListUserGroup,
    /**
     * The ListUserGroupAssignment model constructor.
     * @property {module:model/ListUserGroupAssignment}
     */
    ListUserGroupAssignment: ListUserGroupAssignment,
    /**
     * The ListVariant model constructor.
     * @property {module:model/ListVariant}
     */
    ListVariant: ListVariant,
    /**
     * The ListXpIndex model constructor.
     * @property {module:model/ListXpIndex}
     */
    ListXpIndex: ListXpIndex,
    /**
     * The MessageCCListenerAssignment model constructor.
     * @property {module:model/MessageCCListenerAssignment}
     */
    MessageCCListenerAssignment: MessageCCListenerAssignment,
    /**
     * The MessageSender model constructor.
     * @property {module:model/MessageSender}
     */
    MessageSender: MessageSender,
    /**
     * The MessageSenderAssignment model constructor.
     * @property {module:model/MessageSenderAssignment}
     */
    MessageSenderAssignment: MessageSenderAssignment,
    /**
     * The Meta model constructor.
     * @property {module:model/Meta}
     */
    Meta: Meta,
    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order: Order,
    /**
     * The OrderApproval model constructor.
     * @property {module:model/OrderApproval}
     */
    OrderApproval: OrderApproval,
    /**
     * The OrderPromotion model constructor.
     * @property {module:model/OrderPromotion}
     */
    OrderPromotion: OrderPromotion,
    /**
     * The PasswordReset model constructor.
     * @property {module:model/PasswordReset}
     */
    PasswordReset: PasswordReset,
    /**
     * The PasswordResetRequest model constructor.
     * @property {module:model/PasswordResetRequest}
     */
    PasswordResetRequest: PasswordResetRequest,
    /**
     * The Payment model constructor.
     * @property {module:model/Payment}
     */
    Payment: Payment,
    /**
     * The PaymentTransaction model constructor.
     * @property {module:model/PaymentTransaction}
     */
    PaymentTransaction: PaymentTransaction,
    /**
     * The PingResponse model constructor.
     * @property {module:model/PingResponse}
     */
    PingResponse: PingResponse,
    /**
     * The PriceBreak model constructor.
     * @property {module:model/PriceBreak}
     */
    PriceBreak: PriceBreak,
    /**
     * The PriceSchedule model constructor.
     * @property {module:model/PriceSchedule}
     */
    PriceSchedule: PriceSchedule,
    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product: Product,
    /**
     * The ProductAssignment model constructor.
     * @property {module:model/ProductAssignment}
     */
    ProductAssignment: ProductAssignment,
    /**
     * The Promotion model constructor.
     * @property {module:model/Promotion}
     */
    Promotion: Promotion,
    /**
     * The PromotionAssignment model constructor.
     * @property {module:model/PromotionAssignment}
     */
    PromotionAssignment: PromotionAssignment,
    /**
     * The SecurityProfile model constructor.
     * @property {module:model/SecurityProfile}
     */
    SecurityProfile: SecurityProfile,
    /**
     * The SecurityProfileAssignment model constructor.
     * @property {module:model/SecurityProfileAssignment}
     */
    SecurityProfileAssignment: SecurityProfileAssignment,
    /**
     * The Shipment model constructor.
     * @property {module:model/Shipment}
     */
    Shipment: Shipment,
    /**
     * The ShipmentItem model constructor.
     * @property {module:model/ShipmentItem}
     */
    ShipmentItem: ShipmentItem,
    /**
     * The Spec model constructor.
     * @property {module:model/Spec}
     */
    Spec: Spec,
    /**
     * The SpecOption model constructor.
     * @property {module:model/SpecOption}
     */
    SpecOption: SpecOption,
    /**
     * The SpecProductAssignment model constructor.
     * @property {module:model/SpecProductAssignment}
     */
    SpecProductAssignment: SpecProductAssignment,
    /**
     * The SpendingAccount model constructor.
     * @property {module:model/SpendingAccount}
     */
    SpendingAccount: SpendingAccount,
    /**
     * The SpendingAccountAssignment model constructor.
     * @property {module:model/SpendingAccountAssignment}
     */
    SpendingAccountAssignment: SpendingAccountAssignment,
    /**
     * The StripeCreditCard model constructor.
     * @property {module:model/StripeCreditCard}
     */
    StripeCreditCard: StripeCreditCard,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserGroup model constructor.
     * @property {module:model/UserGroup}
     */
    UserGroup: UserGroup,
    /**
     * The UserGroupAssignment model constructor.
     * @property {module:model/UserGroupAssignment}
     */
    UserGroupAssignment: UserGroupAssignment,
    /**
     * The Variant model constructor.
     * @property {module:model/Variant}
     */
    Variant: Variant,
    /**
     * The XpIndex model constructor.
     * @property {module:model/XpIndex}
     */
    XpIndex: XpIndex,
    /**
     * The Addresses service.
     * @property {module:api/Addresses}
     */
    Addresses: new Addresses(),
    /**
     * The AdminAddresses service.
     * @property {module:api/AdminAddresses}
     */
    AdminAddresses: new AdminAddresses(),
    /**
     * The AdminUsers service.
     * @property {module:api/AdminUsers}
     */
    AdminUsers: new AdminUsers(),
    /**
     * The AdminUserGroups service.
     * @property {module:api/AdminUserGroups}
     */
    AdminUserGroups: new AdminUserGroups(),
    /**
     * The ApprovalRules service.
     * @property {module:api/ApprovalRules}
     */
    ApprovalRules: new ApprovalRules(),
    /**
     * The Buyers service.
     * @property {module:api/Buyers}
     */
    Buyers: new Buyers(),
    /**
     * The Catalogs service.
     * @property {module:api/Catalogs}
     */
    Catalogs: new Catalogs(),
    /**
     * The Categorys service.
     * @property {module:api/Categorys}
     */
    Categorys: new Categorys(),
    /**
     * The CostCenters service.
     * @property {module:api/CostCenters}
     */
    CostCenters: new CostCenters(),
    /**
     * The CreditCards service.
     * @property {module:api/CreditCards}
     */
    CreditCards: new CreditCards(),
    /**
     * The LineItems service.
     * @property {module:api/LineItems}
     */
    LineItems: new LineItems(),
    /**
     * The Me service.
     * @property {module:api/Me}
     */
    Me: new Me(),
    /**
     * The MessageSenders service.
     * @property {module:api/MessageSenders}
     */
    MessageSenders: new MessageSenders(),
    /**
     * The Orders service.
     * @property {module:api/Orders}
     */
    Orders: new Orders(),
    /**
     * The PasswordResets service.
     * @property {module:api/PasswordResets}
     */
    PasswordResets: new PasswordResets(),
    /**
     * The Payments service.
     * @property {module:api/Payments}
     */
    Payments: new Payments(),
    /**
     * The PriceSchedules service.
     * @property {module:api/PriceSchedules}
     */
    PriceSchedules: new PriceSchedules(),
    /**
     * The Products service.
     * @property {module:api/Products}
     */
    Products: new Products(),
    /**
     * The Promotions service.
     * @property {module:api/Promotions}
     */
    Promotions: new Promotions(),
    /**
     * The SecurityProfiles service.
     * @property {module:api/SecurityProfiles}
     */
    SecurityProfiles: new SecurityProfiles(),
    /**
     * The Shipments service.
     * @property {module:api/Shipments}
     */
    Shipments: new Shipments(),
    /**
     * The Specs service.
     * @property {module:api/Specs}
     */
    Specs: new Specs(),
    /**
     * The SpendingAccounts service.
     * @property {module:api/SpendingAccounts}
     */
    SpendingAccounts: new SpendingAccounts(),
    /**
     * The Users service.
     * @property {module:api/Users}
     */
    Users: new Users(),
    /**
     * The UserGroups service.
     * @property {module:api/UserGroups}
     */
    UserGroups: new UserGroups()
  };

  return exports;
}));

},{"./ApiClient":9,"./api/Addresses":10,"./api/AdminAddresses":11,"./api/AdminUserGroups":12,"./api/AdminUsers":13,"./api/ApprovalRules":14,"./api/Auth":15,"./api/Buyers":16,"./api/Catalogs":17,"./api/Categorys":18,"./api/CostCenters":19,"./api/CreditCards":20,"./api/LineItems":21,"./api/Me":22,"./api/MessageSenders":23,"./api/Orders":24,"./api/PasswordResets":25,"./api/Payments":26,"./api/PriceSchedules":27,"./api/Products":28,"./api/Promotions":29,"./api/SecurityProfiles":30,"./api/Shipments":31,"./api/Specs":32,"./api/SpendingAccounts":33,"./api/UserGroups":34,"./api/Users":35,"./model/AccessToken":37,"./model/Address":38,"./model/AddressAssignment":39,"./model/AdminCompany":40,"./model/ApprovalRule":41,"./model/BaseSpec":42,"./model/Buyer":43,"./model/BuyerAddress":44,"./model/BuyerCreditCard":45,"./model/BuyerProduct":46,"./model/BuyerSpec":47,"./model/Catalog":48,"./model/CatalogAssignment":49,"./model/Category":50,"./model/CategoryAssignment":51,"./model/CategoryProductAssignment":52,"./model/CostCenter":53,"./model/CostCenterAssignment":54,"./model/CreditCard":55,"./model/CreditCardAssignment":56,"./model/ImpersonateTokenRequest":57,"./model/Inventory":58,"./model/LineItem":59,"./model/LineItemProduct":60,"./model/LineItemSpec":61,"./model/ListAddress":62,"./model/ListAddressAssignment":63,"./model/ListAdminCompany":64,"./model/ListApprovalRule":65,"./model/ListBuyer":66,"./model/ListBuyerAddress":67,"./model/ListBuyerCreditCard":68,"./model/ListBuyerProduct":69,"./model/ListBuyerSpec":70,"./model/ListCatalog":71,"./model/ListCatalogAssignment":72,"./model/ListCategory":73,"./model/ListCategoryAssignment":74,"./model/ListCategoryProductAssignment":75,"./model/ListCostCenter":76,"./model/ListCostCenterAssignment":77,"./model/ListCreditCard":78,"./model/ListCreditCardAssignment":79,"./model/ListInventory":80,"./model/ListLineItem":81,"./model/ListMessageCCListenerAssignment":82,"./model/ListMessageSender":83,"./model/ListMessageSenderAssignment":84,"./model/ListOrder":85,"./model/ListOrderApproval":86,"./model/ListOrderPromotion":87,"./model/ListPayment":88,"./model/ListPriceSchedule":89,"./model/ListProduct":90,"./model/ListProductAssignment":91,"./model/ListPromotion":92,"./model/ListPromotionAssignment":93,"./model/ListSecurityProfile":94,"./model/ListSecurityProfileAssignment":95,"./model/ListShipment":96,"./model/ListSpec":97,"./model/ListSpecOption":98,"./model/ListSpecProductAssignment":99,"./model/ListSpendingAccount":100,"./model/ListSpendingAccountAssignment":101,"./model/ListUser":102,"./model/ListUserGroup":103,"./model/ListUserGroupAssignment":104,"./model/ListVariant":105,"./model/ListXpIndex":106,"./model/MessageCCListenerAssignment":107,"./model/MessageSender":108,"./model/MessageSenderAssignment":109,"./model/Meta":110,"./model/Order":111,"./model/OrderApproval":112,"./model/OrderPromotion":113,"./model/PasswordReset":114,"./model/PasswordResetRequest":115,"./model/Payment":116,"./model/PaymentTransaction":117,"./model/PingResponse":118,"./model/PriceBreak":119,"./model/PriceSchedule":120,"./model/Product":121,"./model/ProductAssignment":122,"./model/Promotion":123,"./model/PromotionAssignment":124,"./model/SecurityProfile":125,"./model/SecurityProfileAssignment":126,"./model/Shipment":127,"./model/ShipmentItem":128,"./model/Spec":129,"./model/SpecOption":130,"./model/SpecProductAssignment":131,"./model/SpendingAccount":132,"./model/SpendingAccountAssignment":133,"./model/StripeCreditCard":134,"./model/User":135,"./model/UserGroup":136,"./model/UserGroupAssignment":137,"./model/Variant":138,"./model/XpIndex":139}],37:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.AccessToken = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccessToken model module.
   * @module model/AccessToken
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>AccessToken</code>.
   * @alias module:model/AccessToken
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>AccessToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccessToken} obj Optional instance to populate.
   * @return {module:model/AccessToken} The populated <code>AccessToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
      }
      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
      }
      if (data.hasOwnProperty('refresh_token')) {
        obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} access_token
   */
  exports.prototype['access_token'] = undefined;
  /**
   * @member {Number} expires_in
   */
  exports.prototype['expires_in'] = undefined;
  /**
   * @member {String} token_type
   */
  exports.prototype['token_type'] = undefined;
  /**
   * @member {String} refresh_token
   */
  exports.prototype['refresh_token'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],38:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Address = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Address model module.
   * @module model/Address
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>Address</code>.
   * @alias module:model/Address
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('CompanyName')) {
        obj['CompanyName'] = ApiClient.convertToType(data['CompanyName'], 'String');
      }
      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('LastName')) {
        obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
      }
      if (data.hasOwnProperty('Street1')) {
        obj['Street1'] = ApiClient.convertToType(data['Street1'], 'String');
      }
      if (data.hasOwnProperty('Street2')) {
        obj['Street2'] = ApiClient.convertToType(data['Street2'], 'String');
      }
      if (data.hasOwnProperty('City')) {
        obj['City'] = ApiClient.convertToType(data['City'], 'String');
      }
      if (data.hasOwnProperty('State')) {
        obj['State'] = ApiClient.convertToType(data['State'], 'String');
      }
      if (data.hasOwnProperty('Zip')) {
        obj['Zip'] = ApiClient.convertToType(data['Zip'], 'String');
      }
      if (data.hasOwnProperty('Country')) {
        obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
      }
      if (data.hasOwnProperty('Phone')) {
        obj['Phone'] = ApiClient.convertToType(data['Phone'], 'String');
      }
      if (data.hasOwnProperty('AddressName')) {
        obj['AddressName'] = ApiClient.convertToType(data['AddressName'], 'String');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} CompanyName
   */
  exports.prototype['CompanyName'] = undefined;
  /**
   * @member {String} FirstName
   */
  exports.prototype['FirstName'] = undefined;
  /**
   * @member {String} LastName
   */
  exports.prototype['LastName'] = undefined;
  /**
   * @member {String} Street1
   */
  exports.prototype['Street1'] = undefined;
  /**
   * @member {String} Street2
   */
  exports.prototype['Street2'] = undefined;
  /**
   * @member {String} City
   */
  exports.prototype['City'] = undefined;
  /**
   * @member {String} State
   */
  exports.prototype['State'] = undefined;
  /**
   * @member {String} Zip
   */
  exports.prototype['Zip'] = undefined;
  /**
   * @member {String} Country
   */
  exports.prototype['Country'] = undefined;
  /**
   * @member {String} Phone
   */
  exports.prototype['Phone'] = undefined;
  /**
   * @member {String} AddressName
   */
  exports.prototype['AddressName'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],39:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.AddressAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddressAssignment model module.
   * @module model/AddressAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>AddressAssignment</code>.
   * @alias module:model/AddressAssignment
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>AddressAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressAssignment} obj Optional instance to populate.
   * @return {module:model/AddressAssignment} The populated <code>AddressAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('AddressID')) {
        obj['AddressID'] = ApiClient.convertToType(data['AddressID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
      if (data.hasOwnProperty('IsShipping')) {
        obj['IsShipping'] = ApiClient.convertToType(data['IsShipping'], 'Boolean');
      }
      if (data.hasOwnProperty('IsBilling')) {
        obj['IsBilling'] = ApiClient.convertToType(data['IsBilling'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} AddressID
   */
  exports.prototype['AddressID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;
  /**
   * @member {Boolean} IsShipping
   */
  exports.prototype['IsShipping'] = undefined;
  /**
   * @member {Boolean} IsBilling
   */
  exports.prototype['IsBilling'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],40:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.AdminCompany = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AdminCompany model module.
   * @module model/AdminCompany
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>AdminCompany</code>.
   * @alias module:model/AdminCompany
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AdminCompany</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdminCompany} obj Optional instance to populate.
   * @return {module:model/AdminCompany} The populated <code>AdminCompany</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('OwnerDevID')) {
        obj['OwnerDevID'] = ApiClient.convertToType(data['OwnerDevID'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {Number} OwnerDevID
   */
  exports.prototype['OwnerDevID'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],41:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ApprovalRule = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApprovalRule model module.
   * @module model/ApprovalRule
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ApprovalRule</code>.
   * @alias module:model/ApprovalRule
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ApprovalRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApprovalRule} obj Optional instance to populate.
   * @return {module:model/ApprovalRule} The populated <code>ApprovalRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('ApprovingGroupID')) {
        obj['ApprovingGroupID'] = ApiClient.convertToType(data['ApprovingGroupID'], 'String');
      }
      if (data.hasOwnProperty('RuleExpression')) {
        obj['RuleExpression'] = ApiClient.convertToType(data['RuleExpression'], 'String');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {String} ApprovingGroupID
   */
  exports.prototype['ApprovingGroupID'] = undefined;
  /**
   * @member {String} RuleExpression
   */
  exports.prototype['RuleExpression'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],42:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.BaseSpec = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BaseSpec model module.
   * @module model/BaseSpec
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>BaseSpec</code>.
   * @alias module:model/BaseSpec
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>BaseSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseSpec} obj Optional instance to populate.
   * @return {module:model/BaseSpec} The populated <code>BaseSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('ListOrder')) {
        obj['ListOrder'] = ApiClient.convertToType(data['ListOrder'], 'Number');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('DefaultValue')) {
        obj['DefaultValue'] = ApiClient.convertToType(data['DefaultValue'], 'String');
      }
      if (data.hasOwnProperty('Required')) {
        obj['Required'] = ApiClient.convertToType(data['Required'], 'Boolean');
      }
      if (data.hasOwnProperty('AllowOpenText')) {
        obj['AllowOpenText'] = ApiClient.convertToType(data['AllowOpenText'], 'Boolean');
      }
      if (data.hasOwnProperty('DefaultOptionID')) {
        obj['DefaultOptionID'] = ApiClient.convertToType(data['DefaultOptionID'], 'String');
      }
      if (data.hasOwnProperty('DefinesVariant')) {
        obj['DefinesVariant'] = ApiClient.convertToType(data['DefinesVariant'], 'Boolean');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {Number} ListOrder
   */
  exports.prototype['ListOrder'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} DefaultValue
   */
  exports.prototype['DefaultValue'] = undefined;
  /**
   * @member {Boolean} Required
   */
  exports.prototype['Required'] = undefined;
  /**
   * @member {Boolean} AllowOpenText
   */
  exports.prototype['AllowOpenText'] = undefined;
  /**
   * @member {String} DefaultOptionID
   */
  exports.prototype['DefaultOptionID'] = undefined;
  /**
   * @member {Boolean} DefinesVariant
   */
  exports.prototype['DefinesVariant'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],43:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Buyer = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Buyer model module.
   * @module model/Buyer
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>Buyer</code>.
   * @alias module:model/Buyer
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Buyer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Buyer} obj Optional instance to populate.
   * @return {module:model/Buyer} The populated <code>Buyer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('DefaultCatalogID')) {
        obj['DefaultCatalogID'] = ApiClient.convertToType(data['DefaultCatalogID'], 'String');
      }
      if (data.hasOwnProperty('Active')) {
        obj['Active'] = ApiClient.convertToType(data['Active'], 'Boolean');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} DefaultCatalogID
   */
  exports.prototype['DefaultCatalogID'] = undefined;
  /**
   * @member {Boolean} Active
   */
  exports.prototype['Active'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],44:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.BuyerAddress = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BuyerAddress model module.
   * @module model/BuyerAddress
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>BuyerAddress</code>.
   * @alias module:model/BuyerAddress
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>BuyerAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BuyerAddress} obj Optional instance to populate.
   * @return {module:model/BuyerAddress} The populated <code>BuyerAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Shipping')) {
        obj['Shipping'] = ApiClient.convertToType(data['Shipping'], 'Boolean');
      }
      if (data.hasOwnProperty('Billing')) {
        obj['Billing'] = ApiClient.convertToType(data['Billing'], 'Boolean');
      }
      if (data.hasOwnProperty('Editable')) {
        obj['Editable'] = ApiClient.convertToType(data['Editable'], 'Boolean');
      }
      if (data.hasOwnProperty('CompanyName')) {
        obj['CompanyName'] = ApiClient.convertToType(data['CompanyName'], 'String');
      }
      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('LastName')) {
        obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
      }
      if (data.hasOwnProperty('Street1')) {
        obj['Street1'] = ApiClient.convertToType(data['Street1'], 'String');
      }
      if (data.hasOwnProperty('Street2')) {
        obj['Street2'] = ApiClient.convertToType(data['Street2'], 'String');
      }
      if (data.hasOwnProperty('City')) {
        obj['City'] = ApiClient.convertToType(data['City'], 'String');
      }
      if (data.hasOwnProperty('State')) {
        obj['State'] = ApiClient.convertToType(data['State'], 'String');
      }
      if (data.hasOwnProperty('Zip')) {
        obj['Zip'] = ApiClient.convertToType(data['Zip'], 'String');
      }
      if (data.hasOwnProperty('Country')) {
        obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
      }
      if (data.hasOwnProperty('Phone')) {
        obj['Phone'] = ApiClient.convertToType(data['Phone'], 'String');
      }
      if (data.hasOwnProperty('AddressName')) {
        obj['AddressName'] = ApiClient.convertToType(data['AddressName'], 'String');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {Boolean} Shipping
   */
  exports.prototype['Shipping'] = undefined;
  /**
   * @member {Boolean} Billing
   */
  exports.prototype['Billing'] = undefined;
  /**
   * @member {Boolean} Editable
   */
  exports.prototype['Editable'] = undefined;
  /**
   * @member {String} CompanyName
   */
  exports.prototype['CompanyName'] = undefined;
  /**
   * @member {String} FirstName
   */
  exports.prototype['FirstName'] = undefined;
  /**
   * @member {String} LastName
   */
  exports.prototype['LastName'] = undefined;
  /**
   * @member {String} Street1
   */
  exports.prototype['Street1'] = undefined;
  /**
   * @member {String} Street2
   */
  exports.prototype['Street2'] = undefined;
  /**
   * @member {String} City
   */
  exports.prototype['City'] = undefined;
  /**
   * @member {String} State
   */
  exports.prototype['State'] = undefined;
  /**
   * @member {String} Zip
   */
  exports.prototype['Zip'] = undefined;
  /**
   * @member {String} Country
   */
  exports.prototype['Country'] = undefined;
  /**
   * @member {String} Phone
   */
  exports.prototype['Phone'] = undefined;
  /**
   * @member {String} AddressName
   */
  exports.prototype['AddressName'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],45:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.BuyerCreditCard = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BuyerCreditCard model module.
   * @module model/BuyerCreditCard
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>BuyerCreditCard</code>.
   * @alias module:model/BuyerCreditCard
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>BuyerCreditCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BuyerCreditCard} obj Optional instance to populate.
   * @return {module:model/BuyerCreditCard} The populated <code>BuyerCreditCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Editable')) {
        obj['Editable'] = ApiClient.convertToType(data['Editable'], 'Boolean');
      }
      if (data.hasOwnProperty('Token')) {
        obj['Token'] = ApiClient.convertToType(data['Token'], 'String');
      }
      if (data.hasOwnProperty('DateCreated')) {
        obj['DateCreated'] = ApiClient.convertToType(data['DateCreated'], 'String');
      }
      if (data.hasOwnProperty('CardType')) {
        obj['CardType'] = ApiClient.convertToType(data['CardType'], 'String');
      }
      if (data.hasOwnProperty('PartialAccountNumber')) {
        obj['PartialAccountNumber'] = ApiClient.convertToType(data['PartialAccountNumber'], 'String');
      }
      if (data.hasOwnProperty('CardholderName')) {
        obj['CardholderName'] = ApiClient.convertToType(data['CardholderName'], 'String');
      }
      if (data.hasOwnProperty('ExpirationDate')) {
        obj['ExpirationDate'] = ApiClient.convertToType(data['ExpirationDate'], 'String');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {Boolean} Editable
   */
  exports.prototype['Editable'] = undefined;
  /**
   * @member {String} Token
   */
  exports.prototype['Token'] = undefined;
  /**
   * @member {String} DateCreated
   */
  exports.prototype['DateCreated'] = undefined;
  /**
   * @member {String} CardType
   */
  exports.prototype['CardType'] = undefined;
  /**
   * @member {String} PartialAccountNumber
   */
  exports.prototype['PartialAccountNumber'] = undefined;
  /**
   * @member {String} CardholderName
   */
  exports.prototype['CardholderName'] = undefined;
  /**
   * @member {String} ExpirationDate
   */
  exports.prototype['ExpirationDate'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],46:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PriceSchedule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PriceSchedule'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.BuyerProduct = factory(root.OrderCloud.ApiClient, root.OrderCloud.PriceSchedule);
  }
}(this, function(ApiClient, PriceSchedule) {
  'use strict';




  /**
   * The BuyerProduct model module.
   * @module model/BuyerProduct
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>BuyerProduct</code>.
   * @alias module:model/BuyerProduct
   * @class
   */
  var exports = function() {
    var _this = this;






















  };

  /**
   * Constructs a <code>BuyerProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BuyerProduct} obj Optional instance to populate.
   * @return {module:model/BuyerProduct} The populated <code>BuyerProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ReplenishmentPriceSchedule')) {
        obj['ReplenishmentPriceSchedule'] = PriceSchedule.constructFromObject(data['ReplenishmentPriceSchedule']);
      }
      if (data.hasOwnProperty('StandardPriceSchedule')) {
        obj['StandardPriceSchedule'] = PriceSchedule.constructFromObject(data['StandardPriceSchedule']);
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('QuantityMultiplier')) {
        obj['QuantityMultiplier'] = ApiClient.convertToType(data['QuantityMultiplier'], 'Number');
      }
      if (data.hasOwnProperty('ShipWeight')) {
        obj['ShipWeight'] = ApiClient.convertToType(data['ShipWeight'], 'Number');
      }
      if (data.hasOwnProperty('ShipHeight')) {
        obj['ShipHeight'] = ApiClient.convertToType(data['ShipHeight'], 'Number');
      }
      if (data.hasOwnProperty('ShipWidth')) {
        obj['ShipWidth'] = ApiClient.convertToType(data['ShipWidth'], 'Number');
      }
      if (data.hasOwnProperty('ShipLength')) {
        obj['ShipLength'] = ApiClient.convertToType(data['ShipLength'], 'Number');
      }
      if (data.hasOwnProperty('Active')) {
        obj['Active'] = ApiClient.convertToType(data['Active'], 'Boolean');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('InventoryEnabled')) {
        obj['InventoryEnabled'] = ApiClient.convertToType(data['InventoryEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('InventoryNotificationPoint')) {
        obj['InventoryNotificationPoint'] = ApiClient.convertToType(data['InventoryNotificationPoint'], 'Number');
      }
      if (data.hasOwnProperty('VariantLevelInventory')) {
        obj['VariantLevelInventory'] = ApiClient.convertToType(data['VariantLevelInventory'], 'Boolean');
      }
      if (data.hasOwnProperty('SpecCount')) {
        obj['SpecCount'] = ApiClient.convertToType(data['SpecCount'], 'Number');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
      if (data.hasOwnProperty('AllowOrderExceedInventory')) {
        obj['AllowOrderExceedInventory'] = ApiClient.convertToType(data['AllowOrderExceedInventory'], 'Boolean');
      }
      if (data.hasOwnProperty('InventoryVisible')) {
        obj['InventoryVisible'] = ApiClient.convertToType(data['InventoryVisible'], 'Boolean');
      }
      if (data.hasOwnProperty('VariantCount')) {
        obj['VariantCount'] = ApiClient.convertToType(data['VariantCount'], 'Number');
      }
      if (data.hasOwnProperty('ShipFromAddressID')) {
        obj['ShipFromAddressID'] = ApiClient.convertToType(data['ShipFromAddressID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PriceSchedule} ReplenishmentPriceSchedule
   */
  exports.prototype['ReplenishmentPriceSchedule'] = undefined;
  /**
   * @member {module:model/PriceSchedule} StandardPriceSchedule
   */
  exports.prototype['StandardPriceSchedule'] = undefined;
  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Number} QuantityMultiplier
   */
  exports.prototype['QuantityMultiplier'] = undefined;
  /**
   * @member {Number} ShipWeight
   */
  exports.prototype['ShipWeight'] = undefined;
  /**
   * @member {Number} ShipHeight
   */
  exports.prototype['ShipHeight'] = undefined;
  /**
   * @member {Number} ShipWidth
   */
  exports.prototype['ShipWidth'] = undefined;
  /**
   * @member {Number} ShipLength
   */
  exports.prototype['ShipLength'] = undefined;
  /**
   * @member {Boolean} Active
   */
  exports.prototype['Active'] = undefined;
  /**
   * @member {String} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * @member {Boolean} InventoryEnabled
   */
  exports.prototype['InventoryEnabled'] = undefined;
  /**
   * @member {Number} InventoryNotificationPoint
   */
  exports.prototype['InventoryNotificationPoint'] = undefined;
  /**
   * @member {Boolean} VariantLevelInventory
   */
  exports.prototype['VariantLevelInventory'] = undefined;
  /**
   * @member {Number} SpecCount
   */
  exports.prototype['SpecCount'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;
  /**
   * @member {Boolean} AllowOrderExceedInventory
   */
  exports.prototype['AllowOrderExceedInventory'] = undefined;
  /**
   * @member {Boolean} InventoryVisible
   */
  exports.prototype['InventoryVisible'] = undefined;
  /**
   * @member {Number} VariantCount
   */
  exports.prototype['VariantCount'] = undefined;
  /**
   * @member {String} ShipFromAddressID
   */
  exports.prototype['ShipFromAddressID'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./PriceSchedule":120}],47:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SpecOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SpecOption'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.BuyerSpec = factory(root.OrderCloud.ApiClient, root.OrderCloud.SpecOption);
  }
}(this, function(ApiClient, SpecOption) {
  'use strict';




  /**
   * The BuyerSpec model module.
   * @module model/BuyerSpec
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>BuyerSpec</code>.
   * @alias module:model/BuyerSpec
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>BuyerSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BuyerSpec} obj Optional instance to populate.
   * @return {module:model/BuyerSpec} The populated <code>BuyerSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Options')) {
        obj['Options'] = ApiClient.convertToType(data['Options'], [SpecOption]);
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('ListOrder')) {
        obj['ListOrder'] = ApiClient.convertToType(data['ListOrder'], 'Number');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('DefaultValue')) {
        obj['DefaultValue'] = ApiClient.convertToType(data['DefaultValue'], 'String');
      }
      if (data.hasOwnProperty('Required')) {
        obj['Required'] = ApiClient.convertToType(data['Required'], 'Boolean');
      }
      if (data.hasOwnProperty('AllowOpenText')) {
        obj['AllowOpenText'] = ApiClient.convertToType(data['AllowOpenText'], 'Boolean');
      }
      if (data.hasOwnProperty('DefaultOptionID')) {
        obj['DefaultOptionID'] = ApiClient.convertToType(data['DefaultOptionID'], 'String');
      }
      if (data.hasOwnProperty('DefinesVariant')) {
        obj['DefinesVariant'] = ApiClient.convertToType(data['DefinesVariant'], 'Boolean');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SpecOption>} Options
   */
  exports.prototype['Options'] = undefined;
  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {Number} ListOrder
   */
  exports.prototype['ListOrder'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} DefaultValue
   */
  exports.prototype['DefaultValue'] = undefined;
  /**
   * @member {Boolean} Required
   */
  exports.prototype['Required'] = undefined;
  /**
   * @member {Boolean} AllowOpenText
   */
  exports.prototype['AllowOpenText'] = undefined;
  /**
   * @member {String} DefaultOptionID
   */
  exports.prototype['DefaultOptionID'] = undefined;
  /**
   * @member {Boolean} DefinesVariant
   */
  exports.prototype['DefinesVariant'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./SpecOption":130}],48:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Catalog = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Catalog model module.
   * @module model/Catalog
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>Catalog</code>.
   * @alias module:model/Catalog
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Catalog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Catalog} obj Optional instance to populate.
   * @return {module:model/Catalog} The populated <code>Catalog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('CategoryCount')) {
        obj['CategoryCount'] = ApiClient.convertToType(data['CategoryCount'], 'Number');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Number} CategoryCount
   */
  exports.prototype['CategoryCount'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],49:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.CatalogAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CatalogAssignment model module.
   * @module model/CatalogAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>CatalogAssignment</code>.
   * @alias module:model/CatalogAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CatalogAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogAssignment} obj Optional instance to populate.
   * @return {module:model/CatalogAssignment} The populated <code>CatalogAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CatalogID')) {
        obj['CatalogID'] = ApiClient.convertToType(data['CatalogID'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} CatalogID
   */
  exports.prototype['CatalogID'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],50:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Category = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Category model module.
   * @module model/Category
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>Category</code>.
   * @alias module:model/Category
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Category</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Category} obj Optional instance to populate.
   * @return {module:model/Category} The populated <code>Category</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('ListOrder')) {
        obj['ListOrder'] = ApiClient.convertToType(data['ListOrder'], 'Number');
      }
      if (data.hasOwnProperty('Active')) {
        obj['Active'] = ApiClient.convertToType(data['Active'], 'Boolean');
      }
      if (data.hasOwnProperty('ParentID')) {
        obj['ParentID'] = ApiClient.convertToType(data['ParentID'], 'String');
      }
      if (data.hasOwnProperty('ChildCount')) {
        obj['ChildCount'] = ApiClient.convertToType(data['ChildCount'], 'Number');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Number} ListOrder
   */
  exports.prototype['ListOrder'] = undefined;
  /**
   * @member {Boolean} Active
   */
  exports.prototype['Active'] = undefined;
  /**
   * @member {String} ParentID
   */
  exports.prototype['ParentID'] = undefined;
  /**
   * @member {Number} ChildCount
   */
  exports.prototype['ChildCount'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],51:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.CategoryAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CategoryAssignment model module.
   * @module model/CategoryAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>CategoryAssignment</code>.
   * @alias module:model/CategoryAssignment
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CategoryAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CategoryAssignment} obj Optional instance to populate.
   * @return {module:model/CategoryAssignment} The populated <code>CategoryAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CategoryID')) {
        obj['CategoryID'] = ApiClient.convertToType(data['CategoryID'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} CategoryID
   */
  exports.prototype['CategoryID'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],52:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.CategoryProductAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CategoryProductAssignment model module.
   * @module model/CategoryProductAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>CategoryProductAssignment</code>.
   * @alias module:model/CategoryProductAssignment
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CategoryProductAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CategoryProductAssignment} obj Optional instance to populate.
   * @return {module:model/CategoryProductAssignment} The populated <code>CategoryProductAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CategoryID')) {
        obj['CategoryID'] = ApiClient.convertToType(data['CategoryID'], 'String');
      }
      if (data.hasOwnProperty('ProductID')) {
        obj['ProductID'] = ApiClient.convertToType(data['ProductID'], 'String');
      }
      if (data.hasOwnProperty('ListOrder')) {
        obj['ListOrder'] = ApiClient.convertToType(data['ListOrder'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} CategoryID
   */
  exports.prototype['CategoryID'] = undefined;
  /**
   * @member {String} ProductID
   */
  exports.prototype['ProductID'] = undefined;
  /**
   * @member {Number} ListOrder
   */
  exports.prototype['ListOrder'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],53:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.CostCenter = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CostCenter model module.
   * @module model/CostCenter
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>CostCenter</code>.
   * @alias module:model/CostCenter
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CostCenter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CostCenter} obj Optional instance to populate.
   * @return {module:model/CostCenter} The populated <code>CostCenter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],54:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.CostCenterAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CostCenterAssignment model module.
   * @module model/CostCenterAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>CostCenterAssignment</code>.
   * @alias module:model/CostCenterAssignment
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CostCenterAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CostCenterAssignment} obj Optional instance to populate.
   * @return {module:model/CostCenterAssignment} The populated <code>CostCenterAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CostCenterID')) {
        obj['CostCenterID'] = ApiClient.convertToType(data['CostCenterID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} CostCenterID
   */
  exports.prototype['CostCenterID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],55:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.CreditCard = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreditCard model module.
   * @module model/CreditCard
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>CreditCard</code>.
   * @alias module:model/CreditCard
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>CreditCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreditCard} obj Optional instance to populate.
   * @return {module:model/CreditCard} The populated <code>CreditCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Token')) {
        obj['Token'] = ApiClient.convertToType(data['Token'], 'String');
      }
      if (data.hasOwnProperty('DateCreated')) {
        obj['DateCreated'] = ApiClient.convertToType(data['DateCreated'], 'String');
      }
      if (data.hasOwnProperty('CardType')) {
        obj['CardType'] = ApiClient.convertToType(data['CardType'], 'String');
      }
      if (data.hasOwnProperty('PartialAccountNumber')) {
        obj['PartialAccountNumber'] = ApiClient.convertToType(data['PartialAccountNumber'], 'String');
      }
      if (data.hasOwnProperty('CardholderName')) {
        obj['CardholderName'] = ApiClient.convertToType(data['CardholderName'], 'String');
      }
      if (data.hasOwnProperty('ExpirationDate')) {
        obj['ExpirationDate'] = ApiClient.convertToType(data['ExpirationDate'], 'String');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Token
   */
  exports.prototype['Token'] = undefined;
  /**
   * @member {String} DateCreated
   */
  exports.prototype['DateCreated'] = undefined;
  /**
   * @member {String} CardType
   */
  exports.prototype['CardType'] = undefined;
  /**
   * @member {String} PartialAccountNumber
   */
  exports.prototype['PartialAccountNumber'] = undefined;
  /**
   * @member {String} CardholderName
   */
  exports.prototype['CardholderName'] = undefined;
  /**
   * @member {String} ExpirationDate
   */
  exports.prototype['ExpirationDate'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],56:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.CreditCardAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreditCardAssignment model module.
   * @module model/CreditCardAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>CreditCardAssignment</code>.
   * @alias module:model/CreditCardAssignment
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CreditCardAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreditCardAssignment} obj Optional instance to populate.
   * @return {module:model/CreditCardAssignment} The populated <code>CreditCardAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CreditCardID')) {
        obj['CreditCardID'] = ApiClient.convertToType(data['CreditCardID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} CreditCardID
   */
  exports.prototype['CreditCardID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],57:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ImpersonateTokenRequest = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ImpersonateTokenRequest model module.
   * @module model/ImpersonateTokenRequest
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ImpersonateTokenRequest</code>.
   * @alias module:model/ImpersonateTokenRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ImpersonateTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImpersonateTokenRequest} obj Optional instance to populate.
   * @return {module:model/ImpersonateTokenRequest} The populated <code>ImpersonateTokenRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ClientID')) {
        obj['ClientID'] = ApiClient.convertToType(data['ClientID'], 'String');
      }
      if (data.hasOwnProperty('Claims')) {
        obj['Claims'] = ApiClient.convertToType(data['Claims'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} ClientID
   */
  exports.prototype['ClientID'] = undefined;
  /**
   * @member {Array.<String>} Claims
   */
  exports.prototype['Claims'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],58:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Inventory = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Inventory model module.
   * @module model/Inventory
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>Inventory</code>.
   * @alias module:model/Inventory
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Inventory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Inventory} obj Optional instance to populate.
   * @return {module:model/Inventory} The populated <code>Inventory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Available')) {
        obj['Available'] = ApiClient.convertToType(data['Available'], 'Number');
      }
      if (data.hasOwnProperty('Reserved')) {
        obj['Reserved'] = ApiClient.convertToType(data['Reserved'], 'Number');
      }
      if (data.hasOwnProperty('LastUpdated')) {
        obj['LastUpdated'] = ApiClient.convertToType(data['LastUpdated'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Number} Available
   */
  exports.prototype['Available'] = undefined;
  /**
   * @member {Number} Reserved
   */
  exports.prototype['Reserved'] = undefined;
  /**
   * @member {String} LastUpdated
   */
  exports.prototype['LastUpdated'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],59:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/LineItemProduct', 'model/LineItemSpec'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./LineItemProduct'), require('./LineItemSpec'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.LineItem = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address, root.OrderCloud.LineItemProduct, root.OrderCloud.LineItemSpec);
  }
}(this, function(ApiClient, Address, LineItemProduct, LineItemSpec) {
  'use strict';




  /**
   * The LineItem model module.
   * @module model/LineItem
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>LineItem</code>.
   * @alias module:model/LineItem
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>LineItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LineItem} obj Optional instance to populate.
   * @return {module:model/LineItem} The populated <code>LineItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('ProductID')) {
        obj['ProductID'] = ApiClient.convertToType(data['ProductID'], 'String');
      }
      if (data.hasOwnProperty('Quantity')) {
        obj['Quantity'] = ApiClient.convertToType(data['Quantity'], 'Number');
      }
      if (data.hasOwnProperty('DateAdded')) {
        obj['DateAdded'] = ApiClient.convertToType(data['DateAdded'], 'String');
      }
      if (data.hasOwnProperty('QuantityShipped')) {
        obj['QuantityShipped'] = ApiClient.convertToType(data['QuantityShipped'], 'Number');
      }
      if (data.hasOwnProperty('UnitPrice')) {
        obj['UnitPrice'] = ApiClient.convertToType(data['UnitPrice'], 'Number');
      }
      if (data.hasOwnProperty('LineTotal')) {
        obj['LineTotal'] = ApiClient.convertToType(data['LineTotal'], 'Number');
      }
      if (data.hasOwnProperty('CostCenter')) {
        obj['CostCenter'] = ApiClient.convertToType(data['CostCenter'], 'String');
      }
      if (data.hasOwnProperty('DateNeeded')) {
        obj['DateNeeded'] = ApiClient.convertToType(data['DateNeeded'], 'String');
      }
      if (data.hasOwnProperty('ShippingAccount')) {
        obj['ShippingAccount'] = ApiClient.convertToType(data['ShippingAccount'], 'String');
      }
      if (data.hasOwnProperty('ShippingAddressID')) {
        obj['ShippingAddressID'] = ApiClient.convertToType(data['ShippingAddressID'], 'String');
      }
      if (data.hasOwnProperty('ShipFromAddressID')) {
        obj['ShipFromAddressID'] = ApiClient.convertToType(data['ShipFromAddressID'], 'String');
      }
      if (data.hasOwnProperty('Product')) {
        obj['Product'] = LineItemProduct.constructFromObject(data['Product']);
      }
      if (data.hasOwnProperty('ShippingAddress')) {
        obj['ShippingAddress'] = Address.constructFromObject(data['ShippingAddress']);
      }
      if (data.hasOwnProperty('ShipFromAddress')) {
        obj['ShipFromAddress'] = Address.constructFromObject(data['ShipFromAddress']);
      }
      if (data.hasOwnProperty('Specs')) {
        obj['Specs'] = ApiClient.convertToType(data['Specs'], [LineItemSpec]);
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} ProductID
   */
  exports.prototype['ProductID'] = undefined;
  /**
   * @member {Number} Quantity
   */
  exports.prototype['Quantity'] = undefined;
  /**
   * @member {String} DateAdded
   */
  exports.prototype['DateAdded'] = undefined;
  /**
   * @member {Number} QuantityShipped
   */
  exports.prototype['QuantityShipped'] = undefined;
  /**
   * @member {Number} UnitPrice
   */
  exports.prototype['UnitPrice'] = undefined;
  /**
   * @member {Number} LineTotal
   */
  exports.prototype['LineTotal'] = undefined;
  /**
   * @member {String} CostCenter
   */
  exports.prototype['CostCenter'] = undefined;
  /**
   * @member {String} DateNeeded
   */
  exports.prototype['DateNeeded'] = undefined;
  /**
   * @member {String} ShippingAccount
   */
  exports.prototype['ShippingAccount'] = undefined;
  /**
   * @member {String} ShippingAddressID
   */
  exports.prototype['ShippingAddressID'] = undefined;
  /**
   * @member {String} ShipFromAddressID
   */
  exports.prototype['ShipFromAddressID'] = undefined;
  /**
   * @member {module:model/LineItemProduct} Product
   */
  exports.prototype['Product'] = undefined;
  /**
   * @member {module:model/Address} ShippingAddress
   */
  exports.prototype['ShippingAddress'] = undefined;
  /**
   * @member {module:model/Address} ShipFromAddress
   */
  exports.prototype['ShipFromAddress'] = undefined;
  /**
   * @member {Array.<module:model/LineItemSpec>} Specs
   */
  exports.prototype['Specs'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Address":38,"./LineItemProduct":60,"./LineItemSpec":61}],60:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.LineItemProduct = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LineItemProduct model module.
   * @module model/LineItemProduct
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>LineItemProduct</code>.
   * @alias module:model/LineItemProduct
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>LineItemProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LineItemProduct} obj Optional instance to populate.
   * @return {module:model/LineItemProduct} The populated <code>LineItemProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('QuantityMultiplier')) {
        obj['QuantityMultiplier'] = ApiClient.convertToType(data['QuantityMultiplier'], 'Number');
      }
      if (data.hasOwnProperty('ShipWeight')) {
        obj['ShipWeight'] = ApiClient.convertToType(data['ShipWeight'], 'Number');
      }
      if (data.hasOwnProperty('ShipHeight')) {
        obj['ShipHeight'] = ApiClient.convertToType(data['ShipHeight'], 'Number');
      }
      if (data.hasOwnProperty('ShipWidth')) {
        obj['ShipWidth'] = ApiClient.convertToType(data['ShipWidth'], 'Number');
      }
      if (data.hasOwnProperty('ShipLength')) {
        obj['ShipLength'] = ApiClient.convertToType(data['ShipLength'], 'Number');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Number} QuantityMultiplier
   */
  exports.prototype['QuantityMultiplier'] = undefined;
  /**
   * @member {Number} ShipWeight
   */
  exports.prototype['ShipWeight'] = undefined;
  /**
   * @member {Number} ShipHeight
   */
  exports.prototype['ShipHeight'] = undefined;
  /**
   * @member {Number} ShipWidth
   */
  exports.prototype['ShipWidth'] = undefined;
  /**
   * @member {Number} ShipLength
   */
  exports.prototype['ShipLength'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],61:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.LineItemSpec = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LineItemSpec model module.
   * @module model/LineItemSpec
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>LineItemSpec</code>.
   * @alias module:model/LineItemSpec
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>LineItemSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LineItemSpec} obj Optional instance to populate.
   * @return {module:model/LineItemSpec} The populated <code>LineItemSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('SpecID')) {
        obj['SpecID'] = ApiClient.convertToType(data['SpecID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('OptionID')) {
        obj['OptionID'] = ApiClient.convertToType(data['OptionID'], 'String');
      }
      if (data.hasOwnProperty('Value')) {
        obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} SpecID
   */
  exports.prototype['SpecID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} OptionID
   */
  exports.prototype['OptionID'] = undefined;
  /**
   * @member {String} Value
   */
  exports.prototype['Value'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],62:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListAddress = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, Address, Meta) {
  'use strict';




  /**
   * The ListAddress model module.
   * @module model/ListAddress
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListAddress</code>.
   * @alias module:model/ListAddress
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListAddress} obj Optional instance to populate.
   * @return {module:model/ListAddress} The populated <code>ListAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [Address]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Address>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Address":38,"./Meta":110}],63:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddressAssignment', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressAssignment'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListAddressAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.AddressAssignment, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, AddressAssignment, Meta) {
  'use strict';




  /**
   * The ListAddressAssignment model module.
   * @module model/ListAddressAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListAddressAssignment</code>.
   * @alias module:model/ListAddressAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListAddressAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListAddressAssignment} obj Optional instance to populate.
   * @return {module:model/ListAddressAssignment} The populated <code>ListAddressAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [AddressAssignment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/AddressAssignment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./AddressAssignment":39,"./Meta":110}],64:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AdminCompany', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdminCompany'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListAdminCompany = factory(root.OrderCloud.ApiClient, root.OrderCloud.AdminCompany, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, AdminCompany, Meta) {
  'use strict';




  /**
   * The ListAdminCompany model module.
   * @module model/ListAdminCompany
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListAdminCompany</code>.
   * @alias module:model/ListAdminCompany
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListAdminCompany</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListAdminCompany} obj Optional instance to populate.
   * @return {module:model/ListAdminCompany} The populated <code>ListAdminCompany</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [AdminCompany]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/AdminCompany>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./AdminCompany":40,"./Meta":110}],65:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApprovalRule', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApprovalRule'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListApprovalRule = factory(root.OrderCloud.ApiClient, root.OrderCloud.ApprovalRule, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, ApprovalRule, Meta) {
  'use strict';




  /**
   * The ListApprovalRule model module.
   * @module model/ListApprovalRule
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListApprovalRule</code>.
   * @alias module:model/ListApprovalRule
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListApprovalRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListApprovalRule} obj Optional instance to populate.
   * @return {module:model/ListApprovalRule} The populated <code>ListApprovalRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [ApprovalRule]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ApprovalRule>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./ApprovalRule":41,"./Meta":110}],66:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Buyer', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Buyer'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListBuyer = factory(root.OrderCloud.ApiClient, root.OrderCloud.Buyer, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, Buyer, Meta) {
  'use strict';




  /**
   * The ListBuyer model module.
   * @module model/ListBuyer
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListBuyer</code>.
   * @alias module:model/ListBuyer
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListBuyer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListBuyer} obj Optional instance to populate.
   * @return {module:model/ListBuyer} The populated <code>ListBuyer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [Buyer]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Buyer>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Buyer":43,"./Meta":110}],67:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BuyerAddress', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BuyerAddress'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListBuyerAddress = factory(root.OrderCloud.ApiClient, root.OrderCloud.BuyerAddress, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, BuyerAddress, Meta) {
  'use strict';




  /**
   * The ListBuyerAddress model module.
   * @module model/ListBuyerAddress
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListBuyerAddress</code>.
   * @alias module:model/ListBuyerAddress
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListBuyerAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListBuyerAddress} obj Optional instance to populate.
   * @return {module:model/ListBuyerAddress} The populated <code>ListBuyerAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [BuyerAddress]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/BuyerAddress>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./BuyerAddress":44,"./Meta":110}],68:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BuyerCreditCard', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BuyerCreditCard'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListBuyerCreditCard = factory(root.OrderCloud.ApiClient, root.OrderCloud.BuyerCreditCard, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, BuyerCreditCard, Meta) {
  'use strict';




  /**
   * The ListBuyerCreditCard model module.
   * @module model/ListBuyerCreditCard
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListBuyerCreditCard</code>.
   * @alias module:model/ListBuyerCreditCard
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListBuyerCreditCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListBuyerCreditCard} obj Optional instance to populate.
   * @return {module:model/ListBuyerCreditCard} The populated <code>ListBuyerCreditCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [BuyerCreditCard]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/BuyerCreditCard>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./BuyerCreditCard":45,"./Meta":110}],69:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BuyerProduct', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BuyerProduct'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListBuyerProduct = factory(root.OrderCloud.ApiClient, root.OrderCloud.BuyerProduct, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, BuyerProduct, Meta) {
  'use strict';




  /**
   * The ListBuyerProduct model module.
   * @module model/ListBuyerProduct
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListBuyerProduct</code>.
   * @alias module:model/ListBuyerProduct
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListBuyerProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListBuyerProduct} obj Optional instance to populate.
   * @return {module:model/ListBuyerProduct} The populated <code>ListBuyerProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [BuyerProduct]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/BuyerProduct>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./BuyerProduct":46,"./Meta":110}],70:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BuyerSpec', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BuyerSpec'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListBuyerSpec = factory(root.OrderCloud.ApiClient, root.OrderCloud.BuyerSpec, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, BuyerSpec, Meta) {
  'use strict';




  /**
   * The ListBuyerSpec model module.
   * @module model/ListBuyerSpec
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListBuyerSpec</code>.
   * @alias module:model/ListBuyerSpec
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListBuyerSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListBuyerSpec} obj Optional instance to populate.
   * @return {module:model/ListBuyerSpec} The populated <code>ListBuyerSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [BuyerSpec]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/BuyerSpec>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./BuyerSpec":47,"./Meta":110}],71:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Catalog', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Catalog'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListCatalog = factory(root.OrderCloud.ApiClient, root.OrderCloud.Catalog, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, Catalog, Meta) {
  'use strict';




  /**
   * The ListCatalog model module.
   * @module model/ListCatalog
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListCatalog</code>.
   * @alias module:model/ListCatalog
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListCatalog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListCatalog} obj Optional instance to populate.
   * @return {module:model/ListCatalog} The populated <code>ListCatalog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [Catalog]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Catalog>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Catalog":48,"./Meta":110}],72:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CatalogAssignment', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CatalogAssignment'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListCatalogAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.CatalogAssignment, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, CatalogAssignment, Meta) {
  'use strict';




  /**
   * The ListCatalogAssignment model module.
   * @module model/ListCatalogAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListCatalogAssignment</code>.
   * @alias module:model/ListCatalogAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListCatalogAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListCatalogAssignment} obj Optional instance to populate.
   * @return {module:model/ListCatalogAssignment} The populated <code>ListCatalogAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [CatalogAssignment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CatalogAssignment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./CatalogAssignment":49,"./Meta":110}],73:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Category', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Category'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListCategory = factory(root.OrderCloud.ApiClient, root.OrderCloud.Category, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, Category, Meta) {
  'use strict';




  /**
   * The ListCategory model module.
   * @module model/ListCategory
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListCategory</code>.
   * @alias module:model/ListCategory
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListCategory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListCategory} obj Optional instance to populate.
   * @return {module:model/ListCategory} The populated <code>ListCategory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [Category]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Category>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Category":50,"./Meta":110}],74:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CategoryAssignment', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CategoryAssignment'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListCategoryAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.CategoryAssignment, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, CategoryAssignment, Meta) {
  'use strict';




  /**
   * The ListCategoryAssignment model module.
   * @module model/ListCategoryAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListCategoryAssignment</code>.
   * @alias module:model/ListCategoryAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListCategoryAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListCategoryAssignment} obj Optional instance to populate.
   * @return {module:model/ListCategoryAssignment} The populated <code>ListCategoryAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [CategoryAssignment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CategoryAssignment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./CategoryAssignment":51,"./Meta":110}],75:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CategoryProductAssignment', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CategoryProductAssignment'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListCategoryProductAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.CategoryProductAssignment, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, CategoryProductAssignment, Meta) {
  'use strict';




  /**
   * The ListCategoryProductAssignment model module.
   * @module model/ListCategoryProductAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListCategoryProductAssignment</code>.
   * @alias module:model/ListCategoryProductAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListCategoryProductAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListCategoryProductAssignment} obj Optional instance to populate.
   * @return {module:model/ListCategoryProductAssignment} The populated <code>ListCategoryProductAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [CategoryProductAssignment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CategoryProductAssignment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./CategoryProductAssignment":52,"./Meta":110}],76:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CostCenter', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CostCenter'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListCostCenter = factory(root.OrderCloud.ApiClient, root.OrderCloud.CostCenter, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, CostCenter, Meta) {
  'use strict';




  /**
   * The ListCostCenter model module.
   * @module model/ListCostCenter
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListCostCenter</code>.
   * @alias module:model/ListCostCenter
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListCostCenter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListCostCenter} obj Optional instance to populate.
   * @return {module:model/ListCostCenter} The populated <code>ListCostCenter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [CostCenter]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CostCenter>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./CostCenter":53,"./Meta":110}],77:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CostCenterAssignment', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CostCenterAssignment'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListCostCenterAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.CostCenterAssignment, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, CostCenterAssignment, Meta) {
  'use strict';




  /**
   * The ListCostCenterAssignment model module.
   * @module model/ListCostCenterAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListCostCenterAssignment</code>.
   * @alias module:model/ListCostCenterAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListCostCenterAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListCostCenterAssignment} obj Optional instance to populate.
   * @return {module:model/ListCostCenterAssignment} The populated <code>ListCostCenterAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [CostCenterAssignment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CostCenterAssignment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./CostCenterAssignment":54,"./Meta":110}],78:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreditCard', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreditCard'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListCreditCard = factory(root.OrderCloud.ApiClient, root.OrderCloud.CreditCard, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, CreditCard, Meta) {
  'use strict';




  /**
   * The ListCreditCard model module.
   * @module model/ListCreditCard
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListCreditCard</code>.
   * @alias module:model/ListCreditCard
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListCreditCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListCreditCard} obj Optional instance to populate.
   * @return {module:model/ListCreditCard} The populated <code>ListCreditCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [CreditCard]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CreditCard>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./CreditCard":55,"./Meta":110}],79:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreditCardAssignment', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreditCardAssignment'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListCreditCardAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.CreditCardAssignment, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, CreditCardAssignment, Meta) {
  'use strict';




  /**
   * The ListCreditCardAssignment model module.
   * @module model/ListCreditCardAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListCreditCardAssignment</code>.
   * @alias module:model/ListCreditCardAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListCreditCardAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListCreditCardAssignment} obj Optional instance to populate.
   * @return {module:model/ListCreditCardAssignment} The populated <code>ListCreditCardAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [CreditCardAssignment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CreditCardAssignment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./CreditCardAssignment":56,"./Meta":110}],80:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Inventory', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Inventory'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListInventory = factory(root.OrderCloud.ApiClient, root.OrderCloud.Inventory, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, Inventory, Meta) {
  'use strict';




  /**
   * The ListInventory model module.
   * @module model/ListInventory
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListInventory</code>.
   * @alias module:model/ListInventory
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListInventory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListInventory} obj Optional instance to populate.
   * @return {module:model/ListInventory} The populated <code>ListInventory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [Inventory]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Inventory>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Inventory":58,"./Meta":110}],81:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LineItem', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LineItem'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListLineItem = factory(root.OrderCloud.ApiClient, root.OrderCloud.LineItem, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, LineItem, Meta) {
  'use strict';




  /**
   * The ListLineItem model module.
   * @module model/ListLineItem
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListLineItem</code>.
   * @alias module:model/ListLineItem
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListLineItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListLineItem} obj Optional instance to populate.
   * @return {module:model/ListLineItem} The populated <code>ListLineItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [LineItem]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/LineItem>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./LineItem":59,"./Meta":110}],82:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MessageCCListenerAssignment', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageCCListenerAssignment'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListMessageCCListenerAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.MessageCCListenerAssignment, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, MessageCCListenerAssignment, Meta) {
  'use strict';




  /**
   * The ListMessageCCListenerAssignment model module.
   * @module model/ListMessageCCListenerAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListMessageCCListenerAssignment</code>.
   * @alias module:model/ListMessageCCListenerAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListMessageCCListenerAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListMessageCCListenerAssignment} obj Optional instance to populate.
   * @return {module:model/ListMessageCCListenerAssignment} The populated <code>ListMessageCCListenerAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [MessageCCListenerAssignment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/MessageCCListenerAssignment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./MessageCCListenerAssignment":107,"./Meta":110}],83:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MessageSender', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageSender'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListMessageSender = factory(root.OrderCloud.ApiClient, root.OrderCloud.MessageSender, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, MessageSender, Meta) {
  'use strict';




  /**
   * The ListMessageSender model module.
   * @module model/ListMessageSender
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListMessageSender</code>.
   * @alias module:model/ListMessageSender
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListMessageSender</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListMessageSender} obj Optional instance to populate.
   * @return {module:model/ListMessageSender} The populated <code>ListMessageSender</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [MessageSender]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/MessageSender>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./MessageSender":108,"./Meta":110}],84:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MessageSenderAssignment', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageSenderAssignment'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListMessageSenderAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.MessageSenderAssignment, root.OrderCloud.Meta);
  }
}(this, function(ApiClient, MessageSenderAssignment, Meta) {
  'use strict';




  /**
   * The ListMessageSenderAssignment model module.
   * @module model/ListMessageSenderAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListMessageSenderAssignment</code>.
   * @alias module:model/ListMessageSenderAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListMessageSenderAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListMessageSenderAssignment} obj Optional instance to populate.
   * @return {module:model/ListMessageSenderAssignment} The populated <code>ListMessageSenderAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [MessageSenderAssignment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/MessageSenderAssignment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./MessageSenderAssignment":109,"./Meta":110}],85:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/Order'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./Order'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListOrder = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.Order);
  }
}(this, function(ApiClient, Meta, Order) {
  'use strict';




  /**
   * The ListOrder model module.
   * @module model/ListOrder
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListOrder</code>.
   * @alias module:model/ListOrder
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListOrder} obj Optional instance to populate.
   * @return {module:model/ListOrder} The populated <code>ListOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [Order]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Order>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./Order":111}],86:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/OrderApproval'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./OrderApproval'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListOrderApproval = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.OrderApproval);
  }
}(this, function(ApiClient, Meta, OrderApproval) {
  'use strict';




  /**
   * The ListOrderApproval model module.
   * @module model/ListOrderApproval
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListOrderApproval</code>.
   * @alias module:model/ListOrderApproval
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListOrderApproval</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListOrderApproval} obj Optional instance to populate.
   * @return {module:model/ListOrderApproval} The populated <code>ListOrderApproval</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [OrderApproval]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/OrderApproval>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./OrderApproval":112}],87:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/OrderPromotion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./OrderPromotion'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListOrderPromotion = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.OrderPromotion);
  }
}(this, function(ApiClient, Meta, OrderPromotion) {
  'use strict';




  /**
   * The ListOrderPromotion model module.
   * @module model/ListOrderPromotion
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListOrderPromotion</code>.
   * @alias module:model/ListOrderPromotion
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListOrderPromotion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListOrderPromotion} obj Optional instance to populate.
   * @return {module:model/ListOrderPromotion} The populated <code>ListOrderPromotion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [OrderPromotion]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/OrderPromotion>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./OrderPromotion":113}],88:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/Payment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./Payment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListPayment = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.Payment);
  }
}(this, function(ApiClient, Meta, Payment) {
  'use strict';




  /**
   * The ListPayment model module.
   * @module model/ListPayment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListPayment</code>.
   * @alias module:model/ListPayment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListPayment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListPayment} obj Optional instance to populate.
   * @return {module:model/ListPayment} The populated <code>ListPayment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [Payment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Payment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./Payment":116}],89:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/PriceSchedule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./PriceSchedule'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListPriceSchedule = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.PriceSchedule);
  }
}(this, function(ApiClient, Meta, PriceSchedule) {
  'use strict';




  /**
   * The ListPriceSchedule model module.
   * @module model/ListPriceSchedule
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListPriceSchedule</code>.
   * @alias module:model/ListPriceSchedule
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListPriceSchedule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListPriceSchedule} obj Optional instance to populate.
   * @return {module:model/ListPriceSchedule} The populated <code>ListPriceSchedule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [PriceSchedule]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PriceSchedule>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./PriceSchedule":120}],90:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/Product'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./Product'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListProduct = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.Product);
  }
}(this, function(ApiClient, Meta, Product) {
  'use strict';




  /**
   * The ListProduct model module.
   * @module model/ListProduct
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListProduct</code>.
   * @alias module:model/ListProduct
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListProduct} obj Optional instance to populate.
   * @return {module:model/ListProduct} The populated <code>ListProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [Product]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Product>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./Product":121}],91:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/ProductAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./ProductAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListProductAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.ProductAssignment);
  }
}(this, function(ApiClient, Meta, ProductAssignment) {
  'use strict';




  /**
   * The ListProductAssignment model module.
   * @module model/ListProductAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListProductAssignment</code>.
   * @alias module:model/ListProductAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListProductAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListProductAssignment} obj Optional instance to populate.
   * @return {module:model/ListProductAssignment} The populated <code>ListProductAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [ProductAssignment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ProductAssignment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./ProductAssignment":122}],92:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/Promotion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./Promotion'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListPromotion = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.Promotion);
  }
}(this, function(ApiClient, Meta, Promotion) {
  'use strict';




  /**
   * The ListPromotion model module.
   * @module model/ListPromotion
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListPromotion</code>.
   * @alias module:model/ListPromotion
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListPromotion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListPromotion} obj Optional instance to populate.
   * @return {module:model/ListPromotion} The populated <code>ListPromotion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [Promotion]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Promotion>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./Promotion":123}],93:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/PromotionAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./PromotionAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListPromotionAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.PromotionAssignment);
  }
}(this, function(ApiClient, Meta, PromotionAssignment) {
  'use strict';




  /**
   * The ListPromotionAssignment model module.
   * @module model/ListPromotionAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListPromotionAssignment</code>.
   * @alias module:model/ListPromotionAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListPromotionAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListPromotionAssignment} obj Optional instance to populate.
   * @return {module:model/ListPromotionAssignment} The populated <code>ListPromotionAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [PromotionAssignment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PromotionAssignment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./PromotionAssignment":124}],94:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/SecurityProfile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./SecurityProfile'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListSecurityProfile = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.SecurityProfile);
  }
}(this, function(ApiClient, Meta, SecurityProfile) {
  'use strict';




  /**
   * The ListSecurityProfile model module.
   * @module model/ListSecurityProfile
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListSecurityProfile</code>.
   * @alias module:model/ListSecurityProfile
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListSecurityProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListSecurityProfile} obj Optional instance to populate.
   * @return {module:model/ListSecurityProfile} The populated <code>ListSecurityProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [SecurityProfile]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SecurityProfile>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./SecurityProfile":125}],95:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/SecurityProfileAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./SecurityProfileAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListSecurityProfileAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.SecurityProfileAssignment);
  }
}(this, function(ApiClient, Meta, SecurityProfileAssignment) {
  'use strict';




  /**
   * The ListSecurityProfileAssignment model module.
   * @module model/ListSecurityProfileAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListSecurityProfileAssignment</code>.
   * @alias module:model/ListSecurityProfileAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListSecurityProfileAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListSecurityProfileAssignment} obj Optional instance to populate.
   * @return {module:model/ListSecurityProfileAssignment} The populated <code>ListSecurityProfileAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [SecurityProfileAssignment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SecurityProfileAssignment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./SecurityProfileAssignment":126}],96:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/Shipment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./Shipment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListShipment = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.Shipment);
  }
}(this, function(ApiClient, Meta, Shipment) {
  'use strict';




  /**
   * The ListShipment model module.
   * @module model/ListShipment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListShipment</code>.
   * @alias module:model/ListShipment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListShipment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListShipment} obj Optional instance to populate.
   * @return {module:model/ListShipment} The populated <code>ListShipment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [Shipment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Shipment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./Shipment":127}],97:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/Spec'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./Spec'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListSpec = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.Spec);
  }
}(this, function(ApiClient, Meta, Spec) {
  'use strict';




  /**
   * The ListSpec model module.
   * @module model/ListSpec
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListSpec</code>.
   * @alias module:model/ListSpec
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListSpec} obj Optional instance to populate.
   * @return {module:model/ListSpec} The populated <code>ListSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [Spec]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Spec>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./Spec":129}],98:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/SpecOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./SpecOption'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListSpecOption = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.SpecOption);
  }
}(this, function(ApiClient, Meta, SpecOption) {
  'use strict';




  /**
   * The ListSpecOption model module.
   * @module model/ListSpecOption
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListSpecOption</code>.
   * @alias module:model/ListSpecOption
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListSpecOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListSpecOption} obj Optional instance to populate.
   * @return {module:model/ListSpecOption} The populated <code>ListSpecOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [SpecOption]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SpecOption>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./SpecOption":130}],99:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/SpecProductAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./SpecProductAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListSpecProductAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.SpecProductAssignment);
  }
}(this, function(ApiClient, Meta, SpecProductAssignment) {
  'use strict';




  /**
   * The ListSpecProductAssignment model module.
   * @module model/ListSpecProductAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListSpecProductAssignment</code>.
   * @alias module:model/ListSpecProductAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListSpecProductAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListSpecProductAssignment} obj Optional instance to populate.
   * @return {module:model/ListSpecProductAssignment} The populated <code>ListSpecProductAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [SpecProductAssignment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SpecProductAssignment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./SpecProductAssignment":131}],100:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/SpendingAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./SpendingAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListSpendingAccount = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.SpendingAccount);
  }
}(this, function(ApiClient, Meta, SpendingAccount) {
  'use strict';




  /**
   * The ListSpendingAccount model module.
   * @module model/ListSpendingAccount
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListSpendingAccount</code>.
   * @alias module:model/ListSpendingAccount
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListSpendingAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListSpendingAccount} obj Optional instance to populate.
   * @return {module:model/ListSpendingAccount} The populated <code>ListSpendingAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [SpendingAccount]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SpendingAccount>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./SpendingAccount":132}],101:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/SpendingAccountAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./SpendingAccountAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListSpendingAccountAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.SpendingAccountAssignment);
  }
}(this, function(ApiClient, Meta, SpendingAccountAssignment) {
  'use strict';




  /**
   * The ListSpendingAccountAssignment model module.
   * @module model/ListSpendingAccountAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListSpendingAccountAssignment</code>.
   * @alias module:model/ListSpendingAccountAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListSpendingAccountAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListSpendingAccountAssignment} obj Optional instance to populate.
   * @return {module:model/ListSpendingAccountAssignment} The populated <code>ListSpendingAccountAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [SpendingAccountAssignment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SpendingAccountAssignment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./SpendingAccountAssignment":133}],102:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListUser = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.User);
  }
}(this, function(ApiClient, Meta, User) {
  'use strict';




  /**
   * The ListUser model module.
   * @module model/ListUser
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListUser</code>.
   * @alias module:model/ListUser
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListUser} obj Optional instance to populate.
   * @return {module:model/ListUser} The populated <code>ListUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [User]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/User>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./User":135}],103:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/UserGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./UserGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListUserGroup = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.UserGroup);
  }
}(this, function(ApiClient, Meta, UserGroup) {
  'use strict';




  /**
   * The ListUserGroup model module.
   * @module model/ListUserGroup
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListUserGroup</code>.
   * @alias module:model/ListUserGroup
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListUserGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListUserGroup} obj Optional instance to populate.
   * @return {module:model/ListUserGroup} The populated <code>ListUserGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [UserGroup]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/UserGroup>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./UserGroup":136}],104:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/UserGroupAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./UserGroupAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListUserGroupAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.UserGroupAssignment);
  }
}(this, function(ApiClient, Meta, UserGroupAssignment) {
  'use strict';




  /**
   * The ListUserGroupAssignment model module.
   * @module model/ListUserGroupAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListUserGroupAssignment</code>.
   * @alias module:model/ListUserGroupAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListUserGroupAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListUserGroupAssignment} obj Optional instance to populate.
   * @return {module:model/ListUserGroupAssignment} The populated <code>ListUserGroupAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [UserGroupAssignment]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/UserGroupAssignment>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./UserGroupAssignment":137}],105:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/Variant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./Variant'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListVariant = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.Variant);
  }
}(this, function(ApiClient, Meta, Variant) {
  'use strict';




  /**
   * The ListVariant model module.
   * @module model/ListVariant
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListVariant</code>.
   * @alias module:model/ListVariant
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListVariant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListVariant} obj Optional instance to populate.
   * @return {module:model/ListVariant} The populated <code>ListVariant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [Variant]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Variant>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./Variant":138}],106:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meta', 'model/XpIndex'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./XpIndex'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ListXpIndex = factory(root.OrderCloud.ApiClient, root.OrderCloud.Meta, root.OrderCloud.XpIndex);
  }
}(this, function(ApiClient, Meta, XpIndex) {
  'use strict';




  /**
   * The ListXpIndex model module.
   * @module model/ListXpIndex
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ListXpIndex</code>.
   * @alias module:model/ListXpIndex
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListXpIndex</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListXpIndex} obj Optional instance to populate.
   * @return {module:model/ListXpIndex} The populated <code>ListXpIndex</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [XpIndex]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/XpIndex>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Meta":110,"./XpIndex":139}],107:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MessageSenderAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageSenderAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.MessageCCListenerAssignment = factory(root.OrderCloud.ApiClient, root.OrderCloud.MessageSenderAssignment);
  }
}(this, function(ApiClient, MessageSenderAssignment) {
  'use strict';




  /**
   * The MessageCCListenerAssignment model module.
   * @module model/MessageCCListenerAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>MessageCCListenerAssignment</code>.
   * @alias module:model/MessageCCListenerAssignment
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>MessageCCListenerAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageCCListenerAssignment} obj Optional instance to populate.
   * @return {module:model/MessageCCListenerAssignment} The populated <code>MessageCCListenerAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('MessageSenderAssignment')) {
        obj['MessageSenderAssignment'] = MessageSenderAssignment.constructFromObject(data['MessageSenderAssignment']);
      }
      if (data.hasOwnProperty('MessageConfigName')) {
        obj['MessageConfigName'] = ApiClient.convertToType(data['MessageConfigName'], 'String');
      }
      if (data.hasOwnProperty('MessageType')) {
        obj['MessageType'] = ApiClient.convertToType(data['MessageType'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MessageSenderAssignment} MessageSenderAssignment
   */
  exports.prototype['MessageSenderAssignment'] = undefined;
  /**
   * @member {String} MessageConfigName
   */
  exports.prototype['MessageConfigName'] = undefined;
  /**
   * @member {String} MessageType
   */
  exports.prototype['MessageType'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./MessageSenderAssignment":109}],108:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.MessageSender = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessageSender model module.
   * @module model/MessageSender
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>MessageSender</code>.
   * @alias module:model/MessageSender
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MessageSender</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageSender} obj Optional instance to populate.
   * @return {module:model/MessageSender} The populated <code>MessageSender</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('MessageTypes')) {
        obj['MessageTypes'] = ApiClient.convertToType(data['MessageTypes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Array.<String>} MessageTypes
   */
  exports.prototype['MessageTypes'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],109:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.MessageSenderAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessageSenderAssignment model module.
   * @module model/MessageSenderAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>MessageSenderAssignment</code>.
   * @alias module:model/MessageSenderAssignment
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>MessageSenderAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageSenderAssignment} obj Optional instance to populate.
   * @return {module:model/MessageSenderAssignment} The populated <code>MessageSenderAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('MessageSenderID')) {
        obj['MessageSenderID'] = ApiClient.convertToType(data['MessageSenderID'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
      if (data.hasOwnProperty('MessageConfigName')) {
        obj['MessageConfigName'] = ApiClient.convertToType(data['MessageConfigName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} MessageSenderID
   */
  exports.prototype['MessageSenderID'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;
  /**
   * @member {String} MessageConfigName
   */
  exports.prototype['MessageConfigName'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],110:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Meta = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Meta model module.
   * @module model/Meta
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>Meta</code>.
   * @alias module:model/Meta
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Meta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Meta} obj Optional instance to populate.
   * @return {module:model/Meta} The populated <code>Meta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Page')) {
        obj['Page'] = ApiClient.convertToType(data['Page'], 'Number');
      }
      if (data.hasOwnProperty('PageSize')) {
        obj['PageSize'] = ApiClient.convertToType(data['PageSize'], 'Number');
      }
      if (data.hasOwnProperty('TotalCount')) {
        obj['TotalCount'] = ApiClient.convertToType(data['TotalCount'], 'Number');
      }
      if (data.hasOwnProperty('TotalPages')) {
        obj['TotalPages'] = ApiClient.convertToType(data['TotalPages'], 'Number');
      }
      if (data.hasOwnProperty('ItemRange')) {
        obj['ItemRange'] = ApiClient.convertToType(data['ItemRange'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} Page
   */
  exports.prototype['Page'] = undefined;
  /**
   * @member {Number} PageSize
   */
  exports.prototype['PageSize'] = undefined;
  /**
   * @member {Number} TotalCount
   */
  exports.prototype['TotalCount'] = undefined;
  /**
   * @member {Number} TotalPages
   */
  exports.prototype['TotalPages'] = undefined;
  /**
   * @member {Array.<Number>} ItemRange
   */
  exports.prototype['ItemRange'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],111:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Order = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address);
  }
}(this, function(ApiClient, Address) {
  'use strict';




  /**
   * The Order model module.
   * @module model/Order
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>Order</code>.
   * @alias module:model/Order
   * @class
   */
  var exports = function() {
    var _this = this;


























  };

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Order} obj Optional instance to populate.
   * @return {module:model/Order} The populated <code>Order</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('FromCompanyID')) {
        obj['FromCompanyID'] = ApiClient.convertToType(data['FromCompanyID'], 'String');
      }
      if (data.hasOwnProperty('FromUserID')) {
        obj['FromUserID'] = ApiClient.convertToType(data['FromUserID'], 'String');
      }
      if (data.hasOwnProperty('FromUserFirstName')) {
        obj['FromUserFirstName'] = ApiClient.convertToType(data['FromUserFirstName'], 'String');
      }
      if (data.hasOwnProperty('FromUserLastName')) {
        obj['FromUserLastName'] = ApiClient.convertToType(data['FromUserLastName'], 'String');
      }
      if (data.hasOwnProperty('BillingAddressID')) {
        obj['BillingAddressID'] = ApiClient.convertToType(data['BillingAddressID'], 'String');
      }
      if (data.hasOwnProperty('BillingAddress')) {
        obj['BillingAddress'] = Address.constructFromObject(data['BillingAddress']);
      }
      if (data.hasOwnProperty('ShippingAddressID')) {
        obj['ShippingAddressID'] = ApiClient.convertToType(data['ShippingAddressID'], 'String');
      }
      if (data.hasOwnProperty('Comments')) {
        obj['Comments'] = ApiClient.convertToType(data['Comments'], 'String');
      }
      if (data.hasOwnProperty('LineItemCount')) {
        obj['LineItemCount'] = ApiClient.convertToType(data['LineItemCount'], 'Number');
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('DateCreated')) {
        obj['DateCreated'] = ApiClient.convertToType(data['DateCreated'], 'String');
      }
      if (data.hasOwnProperty('DateSubmitted')) {
        obj['DateSubmitted'] = ApiClient.convertToType(data['DateSubmitted'], 'String');
      }
      if (data.hasOwnProperty('DateApproved')) {
        obj['DateApproved'] = ApiClient.convertToType(data['DateApproved'], 'String');
      }
      if (data.hasOwnProperty('DateDeclined')) {
        obj['DateDeclined'] = ApiClient.convertToType(data['DateDeclined'], 'String');
      }
      if (data.hasOwnProperty('DateCanceled')) {
        obj['DateCanceled'] = ApiClient.convertToType(data['DateCanceled'], 'String');
      }
      if (data.hasOwnProperty('DateCompleted')) {
        obj['DateCompleted'] = ApiClient.convertToType(data['DateCompleted'], 'String');
      }
      if (data.hasOwnProperty('Subtotal')) {
        obj['Subtotal'] = ApiClient.convertToType(data['Subtotal'], 'Number');
      }
      if (data.hasOwnProperty('ShippingCost')) {
        obj['ShippingCost'] = ApiClient.convertToType(data['ShippingCost'], 'Number');
      }
      if (data.hasOwnProperty('TaxCost')) {
        obj['TaxCost'] = ApiClient.convertToType(data['TaxCost'], 'Number');
      }
      if (data.hasOwnProperty('PromotionDiscount')) {
        obj['PromotionDiscount'] = ApiClient.convertToType(data['PromotionDiscount'], 'Number');
      }
      if (data.hasOwnProperty('Total')) {
        obj['Total'] = ApiClient.convertToType(data['Total'], 'Number');
      }
      if (data.hasOwnProperty('IsSubmitted')) {
        obj['IsSubmitted'] = ApiClient.convertToType(data['IsSubmitted'], 'Boolean');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * @member {String} FromCompanyID
   */
  exports.prototype['FromCompanyID'] = undefined;
  /**
   * @member {String} FromUserID
   */
  exports.prototype['FromUserID'] = undefined;
  /**
   * @member {String} FromUserFirstName
   */
  exports.prototype['FromUserFirstName'] = undefined;
  /**
   * @member {String} FromUserLastName
   */
  exports.prototype['FromUserLastName'] = undefined;
  /**
   * @member {String} BillingAddressID
   */
  exports.prototype['BillingAddressID'] = undefined;
  /**
   * @member {module:model/Address} BillingAddress
   */
  exports.prototype['BillingAddress'] = undefined;
  /**
   * @member {String} ShippingAddressID
   */
  exports.prototype['ShippingAddressID'] = undefined;
  /**
   * @member {String} Comments
   */
  exports.prototype['Comments'] = undefined;
  /**
   * @member {Number} LineItemCount
   */
  exports.prototype['LineItemCount'] = undefined;
  /**
   * @member {String} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * @member {String} DateCreated
   */
  exports.prototype['DateCreated'] = undefined;
  /**
   * @member {String} DateSubmitted
   */
  exports.prototype['DateSubmitted'] = undefined;
  /**
   * @member {String} DateApproved
   */
  exports.prototype['DateApproved'] = undefined;
  /**
   * @member {String} DateDeclined
   */
  exports.prototype['DateDeclined'] = undefined;
  /**
   * @member {String} DateCanceled
   */
  exports.prototype['DateCanceled'] = undefined;
  /**
   * @member {String} DateCompleted
   */
  exports.prototype['DateCompleted'] = undefined;
  /**
   * @member {Number} Subtotal
   */
  exports.prototype['Subtotal'] = undefined;
  /**
   * @member {Number} ShippingCost
   */
  exports.prototype['ShippingCost'] = undefined;
  /**
   * @member {Number} TaxCost
   */
  exports.prototype['TaxCost'] = undefined;
  /**
   * @member {Number} PromotionDiscount
   */
  exports.prototype['PromotionDiscount'] = undefined;
  /**
   * @member {Number} Total
   */
  exports.prototype['Total'] = undefined;
  /**
   * @member {Boolean} IsSubmitted
   */
  exports.prototype['IsSubmitted'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./Address":38}],112:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.OrderApproval = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderApproval model module.
   * @module model/OrderApproval
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>OrderApproval</code>.
   * @alias module:model/OrderApproval
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>OrderApproval</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderApproval} obj Optional instance to populate.
   * @return {module:model/OrderApproval} The populated <code>OrderApproval</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ApprovalRuleID')) {
        obj['ApprovalRuleID'] = ApiClient.convertToType(data['ApprovalRuleID'], 'String');
      }
      if (data.hasOwnProperty('ApprovingGroupID')) {
        obj['ApprovingGroupID'] = ApiClient.convertToType(data['ApprovingGroupID'], 'String');
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('DateCreated')) {
        obj['DateCreated'] = ApiClient.convertToType(data['DateCreated'], 'String');
      }
      if (data.hasOwnProperty('DateCompleted')) {
        obj['DateCompleted'] = ApiClient.convertToType(data['DateCompleted'], 'String');
      }
      if (data.hasOwnProperty('ApproverID')) {
        obj['ApproverID'] = ApiClient.convertToType(data['ApproverID'], 'String');
      }
      if (data.hasOwnProperty('ApproverUserName')) {
        obj['ApproverUserName'] = ApiClient.convertToType(data['ApproverUserName'], 'String');
      }
      if (data.hasOwnProperty('ApproverEmail')) {
        obj['ApproverEmail'] = ApiClient.convertToType(data['ApproverEmail'], 'String');
      }
      if (data.hasOwnProperty('Comments')) {
        obj['Comments'] = ApiClient.convertToType(data['Comments'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ApprovalRuleID
   */
  exports.prototype['ApprovalRuleID'] = undefined;
  /**
   * @member {String} ApprovingGroupID
   */
  exports.prototype['ApprovingGroupID'] = undefined;
  /**
   * @member {String} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * @member {String} DateCreated
   */
  exports.prototype['DateCreated'] = undefined;
  /**
   * @member {String} DateCompleted
   */
  exports.prototype['DateCompleted'] = undefined;
  /**
   * @member {String} ApproverID
   */
  exports.prototype['ApproverID'] = undefined;
  /**
   * @member {String} ApproverUserName
   */
  exports.prototype['ApproverUserName'] = undefined;
  /**
   * @member {String} ApproverEmail
   */
  exports.prototype['ApproverEmail'] = undefined;
  /**
   * @member {String} Comments
   */
  exports.prototype['Comments'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],113:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.OrderPromotion = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderPromotion model module.
   * @module model/OrderPromotion
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>OrderPromotion</code>.
   * @alias module:model/OrderPromotion
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>OrderPromotion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderPromotion} obj Optional instance to populate.
   * @return {module:model/OrderPromotion} The populated <code>OrderPromotion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Amount')) {
        obj['Amount'] = ApiClient.convertToType(data['Amount'], 'Number');
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Code')) {
        obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('RedemptionLimit')) {
        obj['RedemptionLimit'] = ApiClient.convertToType(data['RedemptionLimit'], 'Number');
      }
      if (data.hasOwnProperty('RedemptionLimitPerUser')) {
        obj['RedemptionLimitPerUser'] = ApiClient.convertToType(data['RedemptionLimitPerUser'], 'Number');
      }
      if (data.hasOwnProperty('RedemptionCount')) {
        obj['RedemptionCount'] = ApiClient.convertToType(data['RedemptionCount'], 'Number');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('FinePrint')) {
        obj['FinePrint'] = ApiClient.convertToType(data['FinePrint'], 'String');
      }
      if (data.hasOwnProperty('StartDate')) {
        obj['StartDate'] = ApiClient.convertToType(data['StartDate'], 'String');
      }
      if (data.hasOwnProperty('ExpirationDate')) {
        obj['ExpirationDate'] = ApiClient.convertToType(data['ExpirationDate'], 'String');
      }
      if (data.hasOwnProperty('EligibleExpression')) {
        obj['EligibleExpression'] = ApiClient.convertToType(data['EligibleExpression'], 'String');
      }
      if (data.hasOwnProperty('ValueExpression')) {
        obj['ValueExpression'] = ApiClient.convertToType(data['ValueExpression'], 'String');
      }
      if (data.hasOwnProperty('CanCombine')) {
        obj['CanCombine'] = ApiClient.convertToType(data['CanCombine'], 'Boolean');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Number} Amount
   */
  exports.prototype['Amount'] = undefined;
  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Code
   */
  exports.prototype['Code'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Number} RedemptionLimit
   */
  exports.prototype['RedemptionLimit'] = undefined;
  /**
   * @member {Number} RedemptionLimitPerUser
   */
  exports.prototype['RedemptionLimitPerUser'] = undefined;
  /**
   * @member {Number} RedemptionCount
   */
  exports.prototype['RedemptionCount'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {String} FinePrint
   */
  exports.prototype['FinePrint'] = undefined;
  /**
   * @member {String} StartDate
   */
  exports.prototype['StartDate'] = undefined;
  /**
   * @member {String} ExpirationDate
   */
  exports.prototype['ExpirationDate'] = undefined;
  /**
   * @member {String} EligibleExpression
   */
  exports.prototype['EligibleExpression'] = undefined;
  /**
   * @member {String} ValueExpression
   */
  exports.prototype['ValueExpression'] = undefined;
  /**
   * @member {Boolean} CanCombine
   */
  exports.prototype['CanCombine'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],114:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PasswordReset = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PasswordReset model module.
   * @module model/PasswordReset
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>PasswordReset</code>.
   * @alias module:model/PasswordReset
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PasswordReset</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PasswordReset} obj Optional instance to populate.
   * @return {module:model/PasswordReset} The populated <code>PasswordReset</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ClientID')) {
        obj['ClientID'] = ApiClient.convertToType(data['ClientID'], 'String');
      }
      if (data.hasOwnProperty('Username')) {
        obj['Username'] = ApiClient.convertToType(data['Username'], 'String');
      }
      if (data.hasOwnProperty('Password')) {
        obj['Password'] = ApiClient.convertToType(data['Password'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ClientID
   */
  exports.prototype['ClientID'] = undefined;
  /**
   * @member {String} Username
   */
  exports.prototype['Username'] = undefined;
  /**
   * @member {String} Password
   */
  exports.prototype['Password'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],115:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PasswordResetRequest = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PasswordResetRequest model module.
   * @module model/PasswordResetRequest
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>PasswordResetRequest</code>.
   * @alias module:model/PasswordResetRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PasswordResetRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PasswordResetRequest} obj Optional instance to populate.
   * @return {module:model/PasswordResetRequest} The populated <code>PasswordResetRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ClientID')) {
        obj['ClientID'] = ApiClient.convertToType(data['ClientID'], 'String');
      }
      if (data.hasOwnProperty('Email')) {
        obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
      }
      if (data.hasOwnProperty('Username')) {
        obj['Username'] = ApiClient.convertToType(data['Username'], 'String');
      }
      if (data.hasOwnProperty('URL')) {
        obj['URL'] = ApiClient.convertToType(data['URL'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ClientID
   */
  exports.prototype['ClientID'] = undefined;
  /**
   * @member {String} Email
   */
  exports.prototype['Email'] = undefined;
  /**
   * @member {String} Username
   */
  exports.prototype['Username'] = undefined;
  /**
   * @member {String} URL
   */
  exports.prototype['URL'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],116:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PaymentTransaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentTransaction'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Payment = factory(root.OrderCloud.ApiClient, root.OrderCloud.PaymentTransaction);
  }
}(this, function(ApiClient, PaymentTransaction) {
  'use strict';




  /**
   * The Payment model module.
   * @module model/Payment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>Payment</code>.
   * @alias module:model/Payment
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Payment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Payment} obj Optional instance to populate.
   * @return {module:model/Payment} The populated <code>Payment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('DateCreated')) {
        obj['DateCreated'] = ApiClient.convertToType(data['DateCreated'], 'String');
      }
      if (data.hasOwnProperty('CreditCardID')) {
        obj['CreditCardID'] = ApiClient.convertToType(data['CreditCardID'], 'String');
      }
      if (data.hasOwnProperty('SpendingAccountID')) {
        obj['SpendingAccountID'] = ApiClient.convertToType(data['SpendingAccountID'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('Amount')) {
        obj['Amount'] = ApiClient.convertToType(data['Amount'], 'Number');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
      if (data.hasOwnProperty('Transactions')) {
        obj['Transactions'] = ApiClient.convertToType(data['Transactions'], [PaymentTransaction]);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * @member {String} DateCreated
   */
  exports.prototype['DateCreated'] = undefined;
  /**
   * @member {String} CreditCardID
   */
  exports.prototype['CreditCardID'] = undefined;
  /**
   * @member {String} SpendingAccountID
   */
  exports.prototype['SpendingAccountID'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Number} Amount
   */
  exports.prototype['Amount'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;
  /**
   * @member {Array.<module:model/PaymentTransaction>} Transactions
   */
  exports.prototype['Transactions'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./PaymentTransaction":117}],117:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PaymentTransaction = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PaymentTransaction model module.
   * @module model/PaymentTransaction
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>PaymentTransaction</code>.
   * @alias module:model/PaymentTransaction
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>PaymentTransaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentTransaction} obj Optional instance to populate.
   * @return {module:model/PaymentTransaction} The populated <code>PaymentTransaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('DateExecuted')) {
        obj['DateExecuted'] = ApiClient.convertToType(data['DateExecuted'], 'String');
      }
      if (data.hasOwnProperty('Amount')) {
        obj['Amount'] = ApiClient.convertToType(data['Amount'], 'Number');
      }
      if (data.hasOwnProperty('Succeeded')) {
        obj['Succeeded'] = ApiClient.convertToType(data['Succeeded'], 'Boolean');
      }
      if (data.hasOwnProperty('ResultCode')) {
        obj['ResultCode'] = ApiClient.convertToType(data['ResultCode'], 'String');
      }
      if (data.hasOwnProperty('ResultMessage')) {
        obj['ResultMessage'] = ApiClient.convertToType(data['ResultMessage'], 'String');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * @member {String} DateExecuted
   */
  exports.prototype['DateExecuted'] = undefined;
  /**
   * @member {Number} Amount
   */
  exports.prototype['Amount'] = undefined;
  /**
   * @member {Boolean} Succeeded
   */
  exports.prototype['Succeeded'] = undefined;
  /**
   * @member {String} ResultCode
   */
  exports.prototype['ResultCode'] = undefined;
  /**
   * @member {String} ResultMessage
   */
  exports.prototype['ResultMessage'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],118:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PingResponse = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PingResponse model module.
   * @module model/PingResponse
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>PingResponse</code>.
   * @alias module:model/PingResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PingResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PingResponse} obj Optional instance to populate.
   * @return {module:model/PingResponse} The populated <code>PingResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Message')) {
        obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Message
   */
  exports.prototype['Message'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],119:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PriceBreak = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PriceBreak model module.
   * @module model/PriceBreak
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>PriceBreak</code>.
   * @alias module:model/PriceBreak
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PriceBreak</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PriceBreak} obj Optional instance to populate.
   * @return {module:model/PriceBreak} The populated <code>PriceBreak</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Quantity')) {
        obj['Quantity'] = ApiClient.convertToType(data['Quantity'], 'Number');
      }
      if (data.hasOwnProperty('Price')) {
        obj['Price'] = ApiClient.convertToType(data['Price'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} Quantity
   */
  exports.prototype['Quantity'] = undefined;
  /**
   * @member {Number} Price
   */
  exports.prototype['Price'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],120:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PriceBreak'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PriceBreak'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PriceSchedule = factory(root.OrderCloud.ApiClient, root.OrderCloud.PriceBreak);
  }
}(this, function(ApiClient, PriceBreak) {
  'use strict';




  /**
   * The PriceSchedule model module.
   * @module model/PriceSchedule
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>PriceSchedule</code>.
   * @alias module:model/PriceSchedule
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>PriceSchedule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PriceSchedule} obj Optional instance to populate.
   * @return {module:model/PriceSchedule} The populated <code>PriceSchedule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('ApplyTax')) {
        obj['ApplyTax'] = ApiClient.convertToType(data['ApplyTax'], 'Boolean');
      }
      if (data.hasOwnProperty('ApplyShipping')) {
        obj['ApplyShipping'] = ApiClient.convertToType(data['ApplyShipping'], 'Boolean');
      }
      if (data.hasOwnProperty('MinQuantity')) {
        obj['MinQuantity'] = ApiClient.convertToType(data['MinQuantity'], 'Number');
      }
      if (data.hasOwnProperty('MaxQuantity')) {
        obj['MaxQuantity'] = ApiClient.convertToType(data['MaxQuantity'], 'Number');
      }
      if (data.hasOwnProperty('UseCumulativeQuantity')) {
        obj['UseCumulativeQuantity'] = ApiClient.convertToType(data['UseCumulativeQuantity'], 'Boolean');
      }
      if (data.hasOwnProperty('RestrictedQuantity')) {
        obj['RestrictedQuantity'] = ApiClient.convertToType(data['RestrictedQuantity'], 'Boolean');
      }
      if (data.hasOwnProperty('OrderType')) {
        obj['OrderType'] = ApiClient.convertToType(data['OrderType'], 'String');
      }
      if (data.hasOwnProperty('PriceBreaks')) {
        obj['PriceBreaks'] = ApiClient.convertToType(data['PriceBreaks'], [PriceBreak]);
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Boolean} ApplyTax
   */
  exports.prototype['ApplyTax'] = undefined;
  /**
   * @member {Boolean} ApplyShipping
   */
  exports.prototype['ApplyShipping'] = undefined;
  /**
   * @member {Number} MinQuantity
   */
  exports.prototype['MinQuantity'] = undefined;
  /**
   * @member {Number} MaxQuantity
   */
  exports.prototype['MaxQuantity'] = undefined;
  /**
   * @member {Boolean} UseCumulativeQuantity
   */
  exports.prototype['UseCumulativeQuantity'] = undefined;
  /**
   * @member {Boolean} RestrictedQuantity
   */
  exports.prototype['RestrictedQuantity'] = undefined;
  /**
   * @member {String} OrderType
   */
  exports.prototype['OrderType'] = undefined;
  /**
   * @member {Array.<module:model/PriceBreak>} PriceBreaks
   */
  exports.prototype['PriceBreaks'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./PriceBreak":119}],121:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Product = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Product model module.
   * @module model/Product
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>Product</code>.
   * @alias module:model/Product
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Product} obj Optional instance to populate.
   * @return {module:model/Product} The populated <code>Product</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('QuantityMultiplier')) {
        obj['QuantityMultiplier'] = ApiClient.convertToType(data['QuantityMultiplier'], 'Number');
      }
      if (data.hasOwnProperty('ShipWeight')) {
        obj['ShipWeight'] = ApiClient.convertToType(data['ShipWeight'], 'Number');
      }
      if (data.hasOwnProperty('ShipHeight')) {
        obj['ShipHeight'] = ApiClient.convertToType(data['ShipHeight'], 'Number');
      }
      if (data.hasOwnProperty('ShipWidth')) {
        obj['ShipWidth'] = ApiClient.convertToType(data['ShipWidth'], 'Number');
      }
      if (data.hasOwnProperty('ShipLength')) {
        obj['ShipLength'] = ApiClient.convertToType(data['ShipLength'], 'Number');
      }
      if (data.hasOwnProperty('Active')) {
        obj['Active'] = ApiClient.convertToType(data['Active'], 'Boolean');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('InventoryEnabled')) {
        obj['InventoryEnabled'] = ApiClient.convertToType(data['InventoryEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('InventoryNotificationPoint')) {
        obj['InventoryNotificationPoint'] = ApiClient.convertToType(data['InventoryNotificationPoint'], 'Number');
      }
      if (data.hasOwnProperty('VariantLevelInventory')) {
        obj['VariantLevelInventory'] = ApiClient.convertToType(data['VariantLevelInventory'], 'Boolean');
      }
      if (data.hasOwnProperty('SpecCount')) {
        obj['SpecCount'] = ApiClient.convertToType(data['SpecCount'], 'Number');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
      if (data.hasOwnProperty('AllowOrderExceedInventory')) {
        obj['AllowOrderExceedInventory'] = ApiClient.convertToType(data['AllowOrderExceedInventory'], 'Boolean');
      }
      if (data.hasOwnProperty('InventoryVisible')) {
        obj['InventoryVisible'] = ApiClient.convertToType(data['InventoryVisible'], 'Boolean');
      }
      if (data.hasOwnProperty('VariantCount')) {
        obj['VariantCount'] = ApiClient.convertToType(data['VariantCount'], 'Number');
      }
      if (data.hasOwnProperty('ShipFromAddressID')) {
        obj['ShipFromAddressID'] = ApiClient.convertToType(data['ShipFromAddressID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Number} QuantityMultiplier
   */
  exports.prototype['QuantityMultiplier'] = undefined;
  /**
   * @member {Number} ShipWeight
   */
  exports.prototype['ShipWeight'] = undefined;
  /**
   * @member {Number} ShipHeight
   */
  exports.prototype['ShipHeight'] = undefined;
  /**
   * @member {Number} ShipWidth
   */
  exports.prototype['ShipWidth'] = undefined;
  /**
   * @member {Number} ShipLength
   */
  exports.prototype['ShipLength'] = undefined;
  /**
   * @member {Boolean} Active
   */
  exports.prototype['Active'] = undefined;
  /**
   * @member {String} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * @member {Boolean} InventoryEnabled
   */
  exports.prototype['InventoryEnabled'] = undefined;
  /**
   * @member {Number} InventoryNotificationPoint
   */
  exports.prototype['InventoryNotificationPoint'] = undefined;
  /**
   * @member {Boolean} VariantLevelInventory
   */
  exports.prototype['VariantLevelInventory'] = undefined;
  /**
   * @member {Number} SpecCount
   */
  exports.prototype['SpecCount'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;
  /**
   * @member {Boolean} AllowOrderExceedInventory
   */
  exports.prototype['AllowOrderExceedInventory'] = undefined;
  /**
   * @member {Boolean} InventoryVisible
   */
  exports.prototype['InventoryVisible'] = undefined;
  /**
   * @member {Number} VariantCount
   */
  exports.prototype['VariantCount'] = undefined;
  /**
   * @member {String} ShipFromAddressID
   */
  exports.prototype['ShipFromAddressID'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],122:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ProductAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductAssignment model module.
   * @module model/ProductAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ProductAssignment</code>.
   * @alias module:model/ProductAssignment
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ProductAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductAssignment} obj Optional instance to populate.
   * @return {module:model/ProductAssignment} The populated <code>ProductAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ProductID')) {
        obj['ProductID'] = ApiClient.convertToType(data['ProductID'], 'String');
      }
      if (data.hasOwnProperty('PriceScheduleID')) {
        obj['PriceScheduleID'] = ApiClient.convertToType(data['PriceScheduleID'], 'String');
      }
      if (data.hasOwnProperty('StandardPriceScheduleID')) {
        obj['StandardPriceScheduleID'] = ApiClient.convertToType(data['StandardPriceScheduleID'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ProductID
   */
  exports.prototype['ProductID'] = undefined;
  /**
   * @member {String} PriceScheduleID
   */
  exports.prototype['PriceScheduleID'] = undefined;
  /**
   * @member {String} StandardPriceScheduleID
   */
  exports.prototype['StandardPriceScheduleID'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],123:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Promotion = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Promotion model module.
   * @module model/Promotion
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>Promotion</code>.
   * @alias module:model/Promotion
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>Promotion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Promotion} obj Optional instance to populate.
   * @return {module:model/Promotion} The populated <code>Promotion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Code')) {
        obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('RedemptionLimit')) {
        obj['RedemptionLimit'] = ApiClient.convertToType(data['RedemptionLimit'], 'Number');
      }
      if (data.hasOwnProperty('RedemptionLimitPerUser')) {
        obj['RedemptionLimitPerUser'] = ApiClient.convertToType(data['RedemptionLimitPerUser'], 'Number');
      }
      if (data.hasOwnProperty('RedemptionCount')) {
        obj['RedemptionCount'] = ApiClient.convertToType(data['RedemptionCount'], 'Number');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('FinePrint')) {
        obj['FinePrint'] = ApiClient.convertToType(data['FinePrint'], 'String');
      }
      if (data.hasOwnProperty('StartDate')) {
        obj['StartDate'] = ApiClient.convertToType(data['StartDate'], 'String');
      }
      if (data.hasOwnProperty('ExpirationDate')) {
        obj['ExpirationDate'] = ApiClient.convertToType(data['ExpirationDate'], 'String');
      }
      if (data.hasOwnProperty('EligibleExpression')) {
        obj['EligibleExpression'] = ApiClient.convertToType(data['EligibleExpression'], 'String');
      }
      if (data.hasOwnProperty('ValueExpression')) {
        obj['ValueExpression'] = ApiClient.convertToType(data['ValueExpression'], 'String');
      }
      if (data.hasOwnProperty('CanCombine')) {
        obj['CanCombine'] = ApiClient.convertToType(data['CanCombine'], 'Boolean');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Code
   */
  exports.prototype['Code'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Number} RedemptionLimit
   */
  exports.prototype['RedemptionLimit'] = undefined;
  /**
   * @member {Number} RedemptionLimitPerUser
   */
  exports.prototype['RedemptionLimitPerUser'] = undefined;
  /**
   * @member {Number} RedemptionCount
   */
  exports.prototype['RedemptionCount'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {String} FinePrint
   */
  exports.prototype['FinePrint'] = undefined;
  /**
   * @member {String} StartDate
   */
  exports.prototype['StartDate'] = undefined;
  /**
   * @member {String} ExpirationDate
   */
  exports.prototype['ExpirationDate'] = undefined;
  /**
   * @member {String} EligibleExpression
   */
  exports.prototype['EligibleExpression'] = undefined;
  /**
   * @member {String} ValueExpression
   */
  exports.prototype['ValueExpression'] = undefined;
  /**
   * @member {Boolean} CanCombine
   */
  exports.prototype['CanCombine'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],124:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PromotionAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PromotionAssignment model module.
   * @module model/PromotionAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>PromotionAssignment</code>.
   * @alias module:model/PromotionAssignment
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PromotionAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PromotionAssignment} obj Optional instance to populate.
   * @return {module:model/PromotionAssignment} The populated <code>PromotionAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('PromotionID')) {
        obj['PromotionID'] = ApiClient.convertToType(data['PromotionID'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} PromotionID
   */
  exports.prototype['PromotionID'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],125:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SecurityProfile = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SecurityProfile model module.
   * @module model/SecurityProfile
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>SecurityProfile</code>.
   * @alias module:model/SecurityProfile
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SecurityProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityProfile} obj Optional instance to populate.
   * @return {module:model/SecurityProfile} The populated <code>SecurityProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('IsDevProfile')) {
        obj['IsDevProfile'] = ApiClient.convertToType(data['IsDevProfile'], 'Boolean');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Roles')) {
        obj['Roles'] = ApiClient.convertToType(data['Roles'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {Boolean} IsDevProfile
   */
  exports.prototype['IsDevProfile'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Array.<String>} Roles
   */
  exports.prototype['Roles'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],126:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SecurityProfileAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SecurityProfileAssignment model module.
   * @module model/SecurityProfileAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>SecurityProfileAssignment</code>.
   * @alias module:model/SecurityProfileAssignment
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SecurityProfileAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityProfileAssignment} obj Optional instance to populate.
   * @return {module:model/SecurityProfileAssignment} The populated <code>SecurityProfileAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('SecurityProfileID')) {
        obj['SecurityProfileID'] = ApiClient.convertToType(data['SecurityProfileID'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} SecurityProfileID
   */
  exports.prototype['SecurityProfileID'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],127:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ShipmentItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ShipmentItem'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Shipment = factory(root.OrderCloud.ApiClient, root.OrderCloud.ShipmentItem);
  }
}(this, function(ApiClient, ShipmentItem) {
  'use strict';




  /**
   * The Shipment model module.
   * @module model/Shipment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>Shipment</code>.
   * @alias module:model/Shipment
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Shipment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Shipment} obj Optional instance to populate.
   * @return {module:model/Shipment} The populated <code>Shipment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Shipper')) {
        obj['Shipper'] = ApiClient.convertToType(data['Shipper'], 'String');
      }
      if (data.hasOwnProperty('DateShipped')) {
        obj['DateShipped'] = ApiClient.convertToType(data['DateShipped'], 'String');
      }
      if (data.hasOwnProperty('DateDelivered')) {
        obj['DateDelivered'] = ApiClient.convertToType(data['DateDelivered'], 'String');
      }
      if (data.hasOwnProperty('TrackingNumber')) {
        obj['TrackingNumber'] = ApiClient.convertToType(data['TrackingNumber'], 'String');
      }
      if (data.hasOwnProperty('Cost')) {
        obj['Cost'] = ApiClient.convertToType(data['Cost'], 'Number');
      }
      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [ShipmentItem]);
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Shipper
   */
  exports.prototype['Shipper'] = undefined;
  /**
   * @member {String} DateShipped
   */
  exports.prototype['DateShipped'] = undefined;
  /**
   * @member {String} DateDelivered
   */
  exports.prototype['DateDelivered'] = undefined;
  /**
   * @member {String} TrackingNumber
   */
  exports.prototype['TrackingNumber'] = undefined;
  /**
   * @member {Number} Cost
   */
  exports.prototype['Cost'] = undefined;
  /**
   * @member {Array.<module:model/ShipmentItem>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9,"./ShipmentItem":128}],128:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ShipmentItem = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ShipmentItem model module.
   * @module model/ShipmentItem
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>ShipmentItem</code>.
   * @alias module:model/ShipmentItem
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ShipmentItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShipmentItem} obj Optional instance to populate.
   * @return {module:model/ShipmentItem} The populated <code>ShipmentItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('OrderID')) {
        obj['OrderID'] = ApiClient.convertToType(data['OrderID'], 'String');
      }
      if (data.hasOwnProperty('LineItemID')) {
        obj['LineItemID'] = ApiClient.convertToType(data['LineItemID'], 'String');
      }
      if (data.hasOwnProperty('QuantityShipped')) {
        obj['QuantityShipped'] = ApiClient.convertToType(data['QuantityShipped'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} OrderID
   */
  exports.prototype['OrderID'] = undefined;
  /**
   * @member {String} LineItemID
   */
  exports.prototype['LineItemID'] = undefined;
  /**
   * @member {Number} QuantityShipped
   */
  exports.prototype['QuantityShipped'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],129:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Spec = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Spec model module.
   * @module model/Spec
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>Spec</code>.
   * @alias module:model/Spec
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Spec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Spec} obj Optional instance to populate.
   * @return {module:model/Spec} The populated <code>Spec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('OptionCount')) {
        obj['OptionCount'] = ApiClient.convertToType(data['OptionCount'], 'Number');
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('ListOrder')) {
        obj['ListOrder'] = ApiClient.convertToType(data['ListOrder'], 'Number');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('DefaultValue')) {
        obj['DefaultValue'] = ApiClient.convertToType(data['DefaultValue'], 'String');
      }
      if (data.hasOwnProperty('Required')) {
        obj['Required'] = ApiClient.convertToType(data['Required'], 'Boolean');
      }
      if (data.hasOwnProperty('AllowOpenText')) {
        obj['AllowOpenText'] = ApiClient.convertToType(data['AllowOpenText'], 'Boolean');
      }
      if (data.hasOwnProperty('DefaultOptionID')) {
        obj['DefaultOptionID'] = ApiClient.convertToType(data['DefaultOptionID'], 'String');
      }
      if (data.hasOwnProperty('DefinesVariant')) {
        obj['DefinesVariant'] = ApiClient.convertToType(data['DefinesVariant'], 'Boolean');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Number} OptionCount
   */
  exports.prototype['OptionCount'] = undefined;
  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {Number} ListOrder
   */
  exports.prototype['ListOrder'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} DefaultValue
   */
  exports.prototype['DefaultValue'] = undefined;
  /**
   * @member {Boolean} Required
   */
  exports.prototype['Required'] = undefined;
  /**
   * @member {Boolean} AllowOpenText
   */
  exports.prototype['AllowOpenText'] = undefined;
  /**
   * @member {String} DefaultOptionID
   */
  exports.prototype['DefaultOptionID'] = undefined;
  /**
   * @member {Boolean} DefinesVariant
   */
  exports.prototype['DefinesVariant'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],130:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SpecOption = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SpecOption model module.
   * @module model/SpecOption
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>SpecOption</code>.
   * @alias module:model/SpecOption
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>SpecOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpecOption} obj Optional instance to populate.
   * @return {module:model/SpecOption} The populated <code>SpecOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Value')) {
        obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
      }
      if (data.hasOwnProperty('ListOrder')) {
        obj['ListOrder'] = ApiClient.convertToType(data['ListOrder'], 'Number');
      }
      if (data.hasOwnProperty('IsOpenText')) {
        obj['IsOpenText'] = ApiClient.convertToType(data['IsOpenText'], 'Boolean');
      }
      if (data.hasOwnProperty('PriceMarkupType')) {
        obj['PriceMarkupType'] = ApiClient.convertToType(data['PriceMarkupType'], 'String');
      }
      if (data.hasOwnProperty('PriceMarkup')) {
        obj['PriceMarkup'] = ApiClient.convertToType(data['PriceMarkup'], 'Number');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Value
   */
  exports.prototype['Value'] = undefined;
  /**
   * @member {Number} ListOrder
   */
  exports.prototype['ListOrder'] = undefined;
  /**
   * @member {Boolean} IsOpenText
   */
  exports.prototype['IsOpenText'] = undefined;
  /**
   * @member {String} PriceMarkupType
   */
  exports.prototype['PriceMarkupType'] = undefined;
  /**
   * @member {Number} PriceMarkup
   */
  exports.prototype['PriceMarkup'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],131:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SpecProductAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SpecProductAssignment model module.
   * @module model/SpecProductAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>SpecProductAssignment</code>.
   * @alias module:model/SpecProductAssignment
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SpecProductAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpecProductAssignment} obj Optional instance to populate.
   * @return {module:model/SpecProductAssignment} The populated <code>SpecProductAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('SpecID')) {
        obj['SpecID'] = ApiClient.convertToType(data['SpecID'], 'String');
      }
      if (data.hasOwnProperty('ProductID')) {
        obj['ProductID'] = ApiClient.convertToType(data['ProductID'], 'String');
      }
      if (data.hasOwnProperty('DefaultValue')) {
        obj['DefaultValue'] = ApiClient.convertToType(data['DefaultValue'], 'String');
      }
      if (data.hasOwnProperty('DefaultOptionID')) {
        obj['DefaultOptionID'] = ApiClient.convertToType(data['DefaultOptionID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} SpecID
   */
  exports.prototype['SpecID'] = undefined;
  /**
   * @member {String} ProductID
   */
  exports.prototype['ProductID'] = undefined;
  /**
   * @member {String} DefaultValue
   */
  exports.prototype['DefaultValue'] = undefined;
  /**
   * @member {String} DefaultOptionID
   */
  exports.prototype['DefaultOptionID'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],132:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SpendingAccount = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SpendingAccount model module.
   * @module model/SpendingAccount
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>SpendingAccount</code>.
   * @alias module:model/SpendingAccount
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>SpendingAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpendingAccount} obj Optional instance to populate.
   * @return {module:model/SpendingAccount} The populated <code>SpendingAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Balance')) {
        obj['Balance'] = ApiClient.convertToType(data['Balance'], 'Number');
      }
      if (data.hasOwnProperty('AllowAsPaymentMethod')) {
        obj['AllowAsPaymentMethod'] = ApiClient.convertToType(data['AllowAsPaymentMethod'], 'Boolean');
      }
      if (data.hasOwnProperty('RedemptionCode')) {
        obj['RedemptionCode'] = ApiClient.convertToType(data['RedemptionCode'], 'String');
      }
      if (data.hasOwnProperty('StartDate')) {
        obj['StartDate'] = ApiClient.convertToType(data['StartDate'], 'String');
      }
      if (data.hasOwnProperty('EndDate')) {
        obj['EndDate'] = ApiClient.convertToType(data['EndDate'], 'String');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Number} Balance
   */
  exports.prototype['Balance'] = undefined;
  /**
   * @member {Boolean} AllowAsPaymentMethod
   */
  exports.prototype['AllowAsPaymentMethod'] = undefined;
  /**
   * @member {String} RedemptionCode
   */
  exports.prototype['RedemptionCode'] = undefined;
  /**
   * @member {String} StartDate
   */
  exports.prototype['StartDate'] = undefined;
  /**
   * @member {String} EndDate
   */
  exports.prototype['EndDate'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],133:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SpendingAccountAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SpendingAccountAssignment model module.
   * @module model/SpendingAccountAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>SpendingAccountAssignment</code>.
   * @alias module:model/SpendingAccountAssignment
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SpendingAccountAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpendingAccountAssignment} obj Optional instance to populate.
   * @return {module:model/SpendingAccountAssignment} The populated <code>SpendingAccountAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('SpendingAccountID')) {
        obj['SpendingAccountID'] = ApiClient.convertToType(data['SpendingAccountID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
      if (data.hasOwnProperty('AllowExceed')) {
        obj['AllowExceed'] = ApiClient.convertToType(data['AllowExceed'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} SpendingAccountID
   */
  exports.prototype['SpendingAccountID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;
  /**
   * @member {Boolean} AllowExceed
   */
  exports.prototype['AllowExceed'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],134:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.StripeCreditCard = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StripeCreditCard model module.
   * @module model/StripeCreditCard
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>StripeCreditCard</code>.
   * @alias module:model/StripeCreditCard
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>StripeCreditCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StripeCreditCard} obj Optional instance to populate.
   * @return {module:model/StripeCreditCard} The populated <code>StripeCreditCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Number')) {
        obj['Number'] = ApiClient.convertToType(data['Number'], 'String');
      }
      if (data.hasOwnProperty('ExpirationMonth')) {
        obj['ExpirationMonth'] = ApiClient.convertToType(data['ExpirationMonth'], 'String');
      }
      if (data.hasOwnProperty('ExpirationYear')) {
        obj['ExpirationYear'] = ApiClient.convertToType(data['ExpirationYear'], 'String');
      }
      if (data.hasOwnProperty('Cvc')) {
        obj['Cvc'] = ApiClient.convertToType(data['Cvc'], 'String');
      }
      if (data.hasOwnProperty('AddressLine1')) {
        obj['AddressLine1'] = ApiClient.convertToType(data['AddressLine1'], 'String');
      }
      if (data.hasOwnProperty('AddressLine2')) {
        obj['AddressLine2'] = ApiClient.convertToType(data['AddressLine2'], 'String');
      }
      if (data.hasOwnProperty('AddressCity')) {
        obj['AddressCity'] = ApiClient.convertToType(data['AddressCity'], 'String');
      }
      if (data.hasOwnProperty('AddressState')) {
        obj['AddressState'] = ApiClient.convertToType(data['AddressState'], 'String');
      }
      if (data.hasOwnProperty('AddressZip')) {
        obj['AddressZip'] = ApiClient.convertToType(data['AddressZip'], 'String');
      }
      if (data.hasOwnProperty('AddressCountry')) {
        obj['AddressCountry'] = ApiClient.convertToType(data['AddressCountry'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Number
   */
  exports.prototype['Number'] = undefined;
  /**
   * @member {String} ExpirationMonth
   */
  exports.prototype['ExpirationMonth'] = undefined;
  /**
   * @member {String} ExpirationYear
   */
  exports.prototype['ExpirationYear'] = undefined;
  /**
   * @member {String} Cvc
   */
  exports.prototype['Cvc'] = undefined;
  /**
   * @member {String} AddressLine1
   */
  exports.prototype['AddressLine1'] = undefined;
  /**
   * @member {String} AddressLine2
   */
  exports.prototype['AddressLine2'] = undefined;
  /**
   * @member {String} AddressCity
   */
  exports.prototype['AddressCity'] = undefined;
  /**
   * @member {String} AddressState
   */
  exports.prototype['AddressState'] = undefined;
  /**
   * @member {String} AddressZip
   */
  exports.prototype['AddressZip'] = undefined;
  /**
   * @member {String} AddressCountry
   */
  exports.prototype['AddressCountry'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],135:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.User = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Username')) {
        obj['Username'] = ApiClient.convertToType(data['Username'], 'String');
      }
      if (data.hasOwnProperty('Password')) {
        obj['Password'] = ApiClient.convertToType(data['Password'], 'String');
      }
      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('LastName')) {
        obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
      }
      if (data.hasOwnProperty('Email')) {
        obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
      }
      if (data.hasOwnProperty('Phone')) {
        obj['Phone'] = ApiClient.convertToType(data['Phone'], 'String');
      }
      if (data.hasOwnProperty('TermsAccepted')) {
        obj['TermsAccepted'] = ApiClient.convertToType(data['TermsAccepted'], 'String');
      }
      if (data.hasOwnProperty('Active')) {
        obj['Active'] = ApiClient.convertToType(data['Active'], 'Boolean');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
      if (data.hasOwnProperty('AvailableRoles')) {
        obj['AvailableRoles'] = ApiClient.convertToType(data['AvailableRoles'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Username
   */
  exports.prototype['Username'] = undefined;
  /**
   * @member {String} Password
   */
  exports.prototype['Password'] = undefined;
  /**
   * @member {String} FirstName
   */
  exports.prototype['FirstName'] = undefined;
  /**
   * @member {String} LastName
   */
  exports.prototype['LastName'] = undefined;
  /**
   * @member {String} Email
   */
  exports.prototype['Email'] = undefined;
  /**
   * @member {String} Phone
   */
  exports.prototype['Phone'] = undefined;
  /**
   * @member {String} TermsAccepted
   */
  exports.prototype['TermsAccepted'] = undefined;
  /**
   * @member {Boolean} Active
   */
  exports.prototype['Active'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;
  /**
   * @member {Array.<String>} AvailableRoles
   */
  exports.prototype['AvailableRoles'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],136:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.UserGroup = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserGroup model module.
   * @module model/UserGroup
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>UserGroup</code>.
   * @alias module:model/UserGroup
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>UserGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserGroup} obj Optional instance to populate.
   * @return {module:model/UserGroup} The populated <code>UserGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],137:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.UserGroupAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserGroupAssignment model module.
   * @module model/UserGroupAssignment
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>UserGroupAssignment</code>.
   * @alias module:model/UserGroupAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UserGroupAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserGroupAssignment} obj Optional instance to populate.
   * @return {module:model/UserGroupAssignment} The populated <code>UserGroupAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],138:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Variant = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Variant model module.
   * @module model/Variant
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>Variant</code>.
   * @alias module:model/Variant
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Variant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Variant} obj Optional instance to populate.
   * @return {module:model/Variant} The populated <code>Variant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('Active')) {
        obj['Active'] = ApiClient.convertToType(data['Active'], 'Boolean');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Boolean} Active
   */
  exports.prototype['Active'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));



},{"../ApiClient":9}],139:[function(require,module,exports){
/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.XpIndex = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The XpIndex model module.
   * @module model/XpIndex
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>XpIndex</code>.
   * @alias module:model/XpIndex
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>XpIndex</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XpIndex} obj Optional instance to populate.
   * @return {module:model/XpIndex} The populated <code>XpIndex</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ThingType')) {
        obj['ThingType'] = ApiClient.convertToType(data['ThingType'], 'String');
      }
      if (data.hasOwnProperty('Key')) {
        obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ThingType
   */
  exports.prototype['ThingType'] = undefined;
  /**
   * @member {String} Key
   */
  exports.prototype['Key'] = undefined;



  return exports;
}));



},{"../ApiClient":9}]},{},[36])(36)
});