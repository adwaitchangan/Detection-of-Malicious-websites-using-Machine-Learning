import re
from bs4 import BeautifulSoup
from tld import get_tld
import whois
import requests
def set2(url):
    pfile = open('tested_site_features.txt','a')
    info = get_tld(url,as_object=True)
    domain = info.fld
    page = requests.get(url,allow_redirects = True)
    
    if page.url != url:   #redirct site change
        url = page.url
        

    host = page.text
    soup = BeautifulSoup(host,"html.parser")
    w = whois.whois(url)
    #12)Request_url
    i = 0
    success = 0
    for img in soup.find_all('img', src=True):
        dots = [x.start() for x in re.finditer(r'\.', img['src'])]
        if url in img['src'] or domain in img['src'] or len(dots) == 1:
            success = success + 1
        i = i + 1

    for audio in soup.find_all('audio', src=True):
        dots = [x.start() for x in re.finditer(r'\.', audio['src'])]
        if url in audio['src'] or domain in audio['src'] or len(dots) == 1:
            success = success + 1
        i = i + 1

    for embed in soup.find_all('embed', src=True):
        dots = [x.start() for x in re.finditer(r'\.', embed['src'])]
        if url in embed['src'] or domain in embed['src'] or len(dots) == 1:
            success = success + 1
        i = i + 1

    for i_frame in soup.find_all('i_frame', src=True):
        dots = [x.start() for x in re.finditer(r'\.', i_frame['src'])]
        if url in i_frame['src'] or domain in i_frame['src'] or len(dots) == 1:
            success = success + 1
        i = i + 1
    
    try:
        percentage = success / float(i) * 100
        if percentage < 22.0:
            pfile.write('-1,')
        elif 22.0 <= percentage < 61.0:
            pfile.write('0,')
        else:
            pfile.write('1,')
    except:
        pfile.write('1,')
    
    
    #13)Anchor_request_url
    i = 0
    unsafe = 0
    for a in soup.find_all('a',href=True):
        if '#' in a['href'] or 'javascript' in a['href'].lower() or not(domain in a['href'] or url in a['href']):
            unsafe += 1
        i += 1
    try:
        percent = unsafe/float(i)*100
        if percent < 31:
            pfile.write('1,')
        elif 31 <= percent < 67:
            pfile.write('0,')
        else:
            pfile.write('-1,')
    except:
        pfile.write('1,')

    #14)Script,link request URL
    i = 0
    success = 0
    for link in soup.find_all('link', href=True):
        dots = [x.start() for x in re.finditer(r'\.', link['href'])]
        if url in link['href'] or domain in link['href'] or len(dots) == 1:
            success = success + 1
        i = i + 1

    for script in soup.find_all('script', src=True):
        dots = [x.start() for x in re.finditer(r'\.', script['src'])]
        if url in script['src'] or domain in script['src'] or len(dots) == 1:
            success = success + 1
        i = i + 1
    try:
        percentage1 = success / float(i) * 100
        if percentage1 < 17.0:
            pfile.write('-1,')
        elif 17.0 <= percentage1 < 81.0:
            pfile.write('0,')
        else:
            pfile.write('1,')
    except:
        pfile.write('1,')
    

    #15)Server Form Handler
    flag = 0
    flag1 = 0
    flag2 = 0
    for form in soup.find_all('form', action=True):
        if form['action'] == "" or form['action'] == "about:blank":
            flag = 1
        elif url in form['action'] or domain in form['action'] or re.match(r'^/',form['action']):
            flag1 = 1
        else:
            flag2 = 1

    if flag == 1:
        pfile.write('-1,')
    elif flag2 == 1:
        pfile.write('0,')
    elif flag1 == 1:
        pfile.write('1,')

    if len(soup.find_all('form', action=True)) == 0:
        pfile.write('1,')


    #16)Submitting to mail
    flag = 0
    flag1 = 0
    for form in soup.find_all('form', action=True):
        if "mailto:" in form['action']:
            flag = 1
        else:
            flag1 = 1
    if flag == 1:
        pfile.write('-1,')
    elif flag1 == 1:
        pfile.write('1,')

    if len(soup.find_all('form', action=True)) == 0:
        pfile.write('1,')

    #17)Abnormal URL
    
    ab_url = w["domain"]   #todo : whois return domain or domain_name
    flag = 0
    flag1 = 0
    if isinstance(ab_url,str):
        if info.domain in ab_url:
            pfile.write('1,')
        else:
            pfile.write('-1,')
    elif isinstance(ab_url,list):
        for i in ab_url:
            if info.domain in i.lower():
                flag = 1
            else:
                flag1 = 1
    else:
         pfile.write('-1,')

    if flag == 1:
        pfile.write('1,')
    elif flag1 == 1:
        pfile.write('-1,')

            


    
   


    


