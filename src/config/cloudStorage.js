const {Storage} = require('@google-cloud/storage')
const { gcloud_project_id, service_acc_key_path } = require('./index')
const storage = new Storage({
    projectId: gcloud_project_id,
    keyFilename: service_acc_key_path
})

module.exports = storage