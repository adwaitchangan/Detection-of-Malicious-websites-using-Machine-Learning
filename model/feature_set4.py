import whois
from datetime import datetime
import dns.resolver
import re
from bs4 import BeautifulSoup
import requests
from tld import get_tld
from urllib.parse import urlencode
def set4(url):
    pfile = open('tested_site_features.txt','a')
    w = whois.whois(url)
    info = get_tld(url,as_object=True)
    domian = info.fld

#22)Age of Domain
    if w.creationdate == None:
        pfile.write('-1,')
    else:
        x = w.creation_date
        y = datetime.now()
        if isinstance(x,list):
            z = (y - x[0]).days
        else:
            z = (y - x).days
        if z > 180:
            pfile.write('1,')
        else:
            pfile.write('-1,')

#23)DNS record
    #ip_list = list()
    #todo : not taking https or http
    try:
        ip_url = re.sub(r'^https://' or r'^http://','',url)
       
        result = dns.resolver.query(ip_url, 'A')
        if result != None:
            pfile.write('1,')
        else:
            pfile.write('-1,')
    except:
        pfile.write('-1,')

#24)Web Traffic using Alexa

    try:
        rank_page =requests.get('http://data.alexa.com/data?cli=10&dat=s&url='+url).text
        soup1 = BeautifulSoup(rank_page,"xml")
        rank = int(soup1.REACH['RANK'])
        if rank < 100000:
            pfile.write('1,')
        elif rank > 100000:
            pfile.write('0,')
    except:
        pfile.write('-1,')

#25)Google Index

    query = "site:"+url 
    query = query.replace(' ', '+')
    g_URL = f"https://google.com/search?q={query}"
    USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"
    headers = {"user-agent" : USER_AGENT}
    resp = requests.get(g_URL, headers=headers)
    flag = 0
    soup = BeautifulSoup(resp.content, "html.parser")
    for g in soup.find_all('div', class_='r'):
        anchors = g.find_all('a')
        if anchors:
            link = anchors[0]['href']
            if domian in link:
                flag = 1

    if flag == 1:
        pfile.write('1,')
    else:
        pfile.write('-1,')

#26)Statistical-Reports Based Feature
    p_url = "https://checkurl.phishtank.com/checkurl/"
    e_url = urlencode({'url': url})
    payload = f"{e_url}&format=xml&app_key=8989dc3649e14d25f9d50f699730f47f48bca71b9c6193408335f6be7e23628f"
    headers = {'content-type': "application/x-www-form-urlencoded",'cache-control': "no-cache"}

    response = requests.request("POST", p_url, data=payload, headers=headers).text
    soup = BeautifulSoup(response,'lxml')

    if (soup.in_database.text).lower() == 'true':
        if (soup.valid.text).lower() == 'true':
            pfile.write('-1,')
        else:
            pfile.write('1,')
    else:
        pfile.write('1,')



