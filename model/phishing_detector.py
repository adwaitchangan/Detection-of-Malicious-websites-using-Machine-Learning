import joblib
import feature_set1
import features_set2
import feature_set3
import feature_set4
import pandas as pd
website = str(input("Enter website name=> "))
feature_set1.set1(website)
features_set2.set2(website)
feature_set3.set3(website)
feature_set4.set4(website)

model = joblib.load('model_phish')


read = pd.read_csv(r'tested_site_features.txt',header = None,sep = ',')
read = read.iloc[:,:-1].values
print(read.shape)
print(read)
Detect_phishing_website = model.predict(read)

if Detect_phishing_website == 1:
    print("legitimate website")
elif Detect_phishing_website == 0:
    print ('suspicious website')
else:
    print('phishing website')

print(model.predict_proba(read))
