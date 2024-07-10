import re
import patterns
import whois
from bs4 import BeautifulSoup
import bs4
import requests
from bs4.element import Tag

def set1(url):
    pfile = open('tested_site_features.txt','w')
    page = requests.get(url,allow_redirects = True)
    host = page.text
    if page.url != url:
        url = page.url
    w = whois.whois(url)
    soup = BeautifulSoup(host,"html.parser")
    
    #1)Checking IP in URL:
    ip_pattern =  patterns.ipv4_pattern + '|' + patterns.ipv6_pattern
    match = re.search(ip_pattern,url)
    pfile.write('-1,') if match else pfile.write('1,')

    #2)Checking URL Size 
    if len(url) < 54:
        pfile.write('1,')
    elif len(url) >= 55 and len(url) <= 75:
        pfile.write('0,')
    else:
        pfile.write('-1,')

    #3)Checking Shortening service 
    match1 = re.search(patterns.shortening_services,url)
    pfile.write('-1,') if match1 else pfile.write('1,')

    #4)Checking '@' symbol
    at_match = re.search(r'@',url)
    pfile.write('-1,') if at_match else pfile.write('1,')

    #5)Checking '//' redirecting
    redirect_match = re.findall(r'//',url)
    pfile.write('-1,') if len(redirect_match) > 1 else pfile.write('1,')

    #6)Checking '-' symbol
    hy_match = re.search(r'-',url)
    pfile.write('-1,') if hy_match else pfile.write('1,')

    #7)Checking number of subdomain
    sub_match = re.findall(r'\.[A-Za-z]{1,3}',url)
    if len(sub_match) <= 2:
        pfile.write('1,')
    elif len(sub_match) == 3:
        pfile.write('0,')
    else:
        pfile.write('-1,')

    #8)Checking https
    https_match = re.search(r'^https://',url)
    pfile.write('1,') if https_match else pfile.write('-1,')

    #9)Checking Registartion Time
    
    if w.expiration_date == None:
        pfile.write('-1,')
    else:
        x = w.expiration_date
        y = w.creation_date
        if isinstance(x,list) and isinstance(y,list):
            z = (x[0] - y[0]).days
        elif isinstance(x,list) and isinstance(y,int):
            z = (x[0] - y).days
        elif isinstance(x,int) and isinstance(y,list):
            z = (x - y[0]).days 
        else: 
            z = (x - y).days
        if z > 365:
            pfile.write('1,')
        else:
            pfile.write('-1,')

    #10) Favicon
    if re.search('^http',url) == None:
        url = 'http://'+url
    
    header =soup.head
    favicon = header.find('link',rel="shortcut icon")
    if isinstance(favicon,Tag):
        favicon_url = favicon['href']
        if re.search(r'^https://',favicon_url):
            pfile.write('1,')
        else:
            pfile.write('-1,')
    else:
        pfile.write('-1,')
    
    
    #11)Https in domain part
    ht_match = re.findall(r'https',url)
    if len(ht_match) > 1:
        pfile.write('-1,')
    else:
        pfile.write('1,')
        

