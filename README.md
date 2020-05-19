# Face Mask Detector using Watson Visual Recognition

## Abstract
A set of scripts to leverage a dataset of faced-mask for Covid crisis for Watson Visual Recognition

Solutions have been made to detect people wearing masks like in France [XXII](https://www.xxii.fr/). My goal is to create a  model from Open Source Data using Watson Visual Recognition, a Watson AI services dedicated to do image classification and custom object detection.
I wanted to show how easy it is to have a COD model using Watson technologies.

## Dataset
One of the eky challenge when you want to do a visual recognition model is to have a good dataset. 
Several exists on Internet. One colleague has published one on [Github](https://github.com/prajnasb/face_detector), I have used another one publicly available on [Kaggle](https://www.kaggle.com/alexandralorenzo/maskdetection).
That dataset is labelled using YOLO format.

## Scripts

I have written several scripts to implement the different steps of the overall process.

**transform_label.js** *to adapt the content in YOLO to Watson format*
[image]
**upload.js** *to upload images and data to Watson VR instance*
**list.js** *to list uploaded images*
**train.js** *to launch and monitor the training process*

The scripts has to be run at the root of the extracted Kaggle dataset.

![folder](https://octodex.github.com/images/yaktocat.png)

## Adapt these scripts to your env

Change the api key, collectionId (in some files) and gateway url (if relevant).

```
const visualRecognition = new VisualRecognitionV4({
  version: '2019-02-11',
  authenticator: new IamAuthenticator({
    apikey: '**XXXXXXXXXXXXXXXX**'
  }),
  url: 'https://api.us-south.visual-recognition.watson.cloud.ibm.com',
});
```

## Results

In progress
