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

const testFolder = 'labels/WVR_train';
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    var fil_wout_ext = file.slice(0,file.length-4);
    const params = {
      collectionId: '1e35cc93-2ba3-4471-a354-1aa72767ea1b',
      imagesFile: [
        {
          data: fs.createReadStream("./images/train/"+ fil_wout_ext +".jpg"),
          contentType: 'image/jpeg',
        }
      ],
      trainingData: fs.readFileSync("./labels/WVR_train/"+ fil_wout_ext +".txt")
    };

    visualRecognition.addImages(params)
      .then(response => {
        console.log(JSON.stringify(response.result, null, 2));
      })
      .catch(err => {
        console.log('error: ', err);
      });
    });
  });