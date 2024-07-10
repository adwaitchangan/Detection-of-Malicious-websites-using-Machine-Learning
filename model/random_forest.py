import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib

df = pd.read_csv('PTrainingDataset.csv')

X = df.drop('Result',axis='columns')
y = df['Result']

X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.2)
model = RandomForestClassifier(n_estimators=25)
model.fit(X_train, y_train)
print(model.score(X_test,y_test))

joblib.dump(model, 'model_phish')


