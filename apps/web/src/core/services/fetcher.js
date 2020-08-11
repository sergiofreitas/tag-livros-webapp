import axios from 'axios'
// import config from 'config/app'

const fetcher = url => axios.get(url).then(res => res.data)

export default fetcher
