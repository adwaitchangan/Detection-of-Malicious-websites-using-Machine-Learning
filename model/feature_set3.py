import requests
from bs4 import BeautifulSoup
import re
def set3(url):
    page = requests.get(url,allow_redirects = True)
    host = page.text
    pfile = open('tested_site_features.txt','a')
    soup = BeautifulSoup(host,"html.parser")
    #18)Website Forwarding
    
    if len(page.history) <= 1:
        pfile.write('1,')
    elif 2 <= len(page.history) < 4:
        pfile.write('0,')
    else:
        pfile.write('-1,')
    

    #19)Status Bar Customization

    flag = 0
    for a in soup.find_all('a',onmouseover = True):
        if 'window.status' in a['onmouseover']:
            flag = 1
    if flag == 0:
        pfile.write('1,')
    else:
        pfile.write('-1,')

    #20)Disabling Right Click
    
    disable_match = re.search(r'contextmenu[\w\W]*preventDefault',host)
    pfile.write('-1,') if disable_match else pfile.write('1,')

    #21)I_frame Redirection
    for i_frame in soup.find_all('i_frame', width=True, height=True, frameBorder=True):
        if i_frame['width'] == "0" and i_frame['height'] == "0" and i_frame['frameBorder'] == "0":
            pfile.write('-1,')
        if i_frame['width'] == "0" or i_frame['height'] == "0" or i_frame['frameBorder'] == "0":
            pfile.write('0,')
    pfile.write('1,')




