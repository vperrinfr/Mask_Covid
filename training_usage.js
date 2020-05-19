const fs = require('fs');
const VisualRecognitionV4 = require('ibm-watson/visual-recognition/v4');
const { IamAuthenticator } = require('ibm-watson/auth');

const visualRecognition = new VisualRecognitionV4({
  version: '2019-02-11',
  authenticator: new IamAuthenticator({
    apikey: 'cWPJQ9i0SRbwSrnHsGIwI7cFIvOrJYFKDBpNIfHWCRqn'
  }),
  url: 'https://api.us-south.visual-recognition.watson.cloud.ibm.com',
});

const params = {
  startTime: '2019-01-01',
  endTime: '2020-07-31',
  collectionId: '1e35cc93-2ba3-4471-a354-1aa72767ea1b'
};

visualRecognition.getTrainingUsage(params)
  .then(response => {
    console.log(JSON.stringify(response.result, null, 2));
  })
  .catch(err => {
    console.log('error: ', err);
  });