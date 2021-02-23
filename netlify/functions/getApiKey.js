exports.handler = function(event, context, callback) {
  const { API_KEY } = process.env
  const getApiKey = () => {
    return API_KEY
  }
  getApiKey()
}
