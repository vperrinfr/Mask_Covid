const fs = require('fs');
const VisualRecognitionV4 = require('ibm-watson/visual-recognition/v4');
const { IamAuthenticator } = require('ibm-watson/auth');

const visualRecognition = new VisualRecognitionV4({
  version: '2019-02-11',
  authenticator: new IamAuthenticator({
    apikey: 'XXXXXXXXXXXXXXX'
  }),
  url: 'https://api.us-south.visual-recognition.watson.cloud.ibm.com',
});

const params = {
  startTime: '2019-01-01',
  endTime: '2020-07-31'
};

visualRecognition.getTrainingUsage(params)
  .then(response => {
    console.log(JSON.stringify(response.result, null, 2));
  })
  .catch(err => {
    console.log('error: ', err);
  });
