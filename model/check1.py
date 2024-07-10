import requests
import json
url = "http://checkurl.phishtank.com/checkurl/?"

payload = {'url':'https%3A%2F%2Fwww.google.com','format':'xml','app_key':'8989dc3649e14d25f9d50f699730f47f48bca71b9c6193408335f6be7e23628f'}
headers = {
    'content-type': "application/x-www-form-urlencoded",
    'cache-control': "no-cache",
    'postman-token': "1fc2b130-77a5-1a82-303d-6719a2f30b04"
    }
jsonData = json.dumps(payload)
print(jsonData)
response = requests.post(url,  data = {"url": "https%3A%2F%2Fwww.google.com", "format": "xml", "app_key": "8989dc3649e14d25f9d50f699730f47f48bca71b9c6193408335f6be7e23628f"}, headers=headers)
print(response.text)