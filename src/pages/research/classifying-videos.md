---
title: "Classifying Videos using Deep Learning"
date: "2019-05-15"
---

Development in machine learning based programming has
become a widespread entity nowadays. Eventhough we can find tutorials
and courses on machine learning everywhere, finding the right model for our specific
use case need more trial and error.

In my final year research, I had to perform different video classification styles
on MOOC based courses. As of now, there are no models that directly process videos and predicts.
As an alternative everyone uses image based classification methods and some form of hybrid methods to do
machine learning on videos.

For my usecase models like Inception, VGG19, MobileNet were available. All these models performed image classification so I had to retrieve course videos and split them up into image frames and do predictions on them. To train the model, I used MOOC course videos and publically available image dataset for Person, Conversation and Text.

Mainly process was retraining the models on the new dataset and predict them with untrained data. Through my testing I found out that InceptionV3 performs better for my usecase though InceptionV3 is a performance heavy model. Since my predictions will be always run in the server side I chose InceptionV3 as my model.
