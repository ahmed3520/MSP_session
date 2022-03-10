import requests

import urllib
import requests
import urllib.request
import os

def get_net_real():
  url ="https://query1.finance.yahoo.com/v7/finance/quote?&symbols=BTC-USD&fields=extendedMarketChange,extendedMarketChangePercent,extendedMarketPrice,extendedMarketTime,regularMarketChange,circulatingSupply,regularMarketChangePercent,regularMarketPrice,regularMarketTime,ask,askSize,bid,bidSize,dayHigh,dayLow,regularMarketDayHigh,regularMarketDayLow,regularMarketVolume,volume,quoteType"
  headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
  result = requests.get(url, headers=headers)
  return result.json()




btc_now = get_net_real()
btc_now = btc_now['quoteResponse']['result'][0]['regularMarketPrice']
print(btc_now)
json = {
  "timeline": {
    "background": "#000000",
       "soundtrack": {
            "src": "https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/music/unminus/palmtrees.mp3",
            "effect": "fadeOut"
        },
    "tracks": [
      {
        "clips": [
          {
            "asset": {
              "type": "title",
              "text": str(btc_now),
              "style": "future"
            },
            "start": 0,
            "length": 5
          }
        ]
      }
    ]
  },
  "output": {
    "format": "mp4",
    "resolution": "sd"
  }
}

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-api-key': 'P80Nyti2Hi7FQ1DYvZbjx5Dn7goyHNSP8zOPXCih',
}
r = requests.post('https://api.shotstack.io/stage/render', headers = headers, json=json)

r= r.json()
url = '  https://api.shotstack.io/stage/render/'+str(r['response']['id'])
d= requests.get(url,headers=headers);

print(d.json())
dd=d.json();
dd = dd['response']['id']
url_link='https://shotstack-api-stage-output.s3-ap-southeast-2.amazonaws.com/8jwnpt53q2/'+str(dd)+'.mp4'

print(url_link)
file_name = 'trial_video.mp4' 
def download_video_series(video_links): 
  headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
  link = video_links
  file_name = link.split('/')[-1]    
    
      # create response object 
  r = requests.get(link, headers=headers,stream = True) 
  print(r)
      # download started 
  with open(file_name, 'wb') as f: 
    for chunk in r.iter_content(chunk_size = 1024*1024): 
      if chunk: 
        f.write(chunk) 
  
download_video_series(url_link)

