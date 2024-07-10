import whois
from datetime import datetime
import dns.resolver
import re
from bs4 import BeautifulSoup
import requests
from tld import get_tld
from urllib.parse import urlencode

url = 'https://sentriqoitsolutions.com/fixed_new/SBROCKER/'
p_url = "https://checkurl.phishtank.com/checkurl/"
e_url = urlencode({'url': url})
payload = f"{e_url}&format=xml&app_key=8989dc3649e14d25f9d50f699730f47f48bca71b9c6193408335f6be7e23628f"
headers = {'content-type': "application/x-www-form-urlencoded",'cache-control': "no-cache"}

response = requests.request("POST", p_url, data=payload, headers=headers).text
soup = BeautifulSoup(response,'lxml')

if (soup.in_database.text).lower() == 'true':
    if (soup.valid.text).lower() == 'true':
        print('y')
    else:
        print('n')
else:
    print('z')