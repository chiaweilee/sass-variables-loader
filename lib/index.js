var extract = require('sass-extract')

module.exports.pitch = function (request) {
    this.cacheable(false)
    var cb = this.async()
    var uri = request.split('!')
    var result = {}
    const vars = extract.renderSync({ file: uri[uri.length - 1] }).vars.global
    Object.keys(vars).forEach(function (key) {
        result[key] = vars[key].value
    })
    return cb(null, 'module.exports = ' + JSON.stringify(result))
}
