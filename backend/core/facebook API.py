import requests

def fb_get_fid(input_token, access_token):
    URL = "https://graph.facebook.com/debug_token"

    PARAMS = {'input_token': input_token, 'access_token':access_token}
    r = requests.get(url=URL, params=PARAMS)
    data = r.json()
    # fid = data['data']['user_id']
    print(data)
    # return fid

input_token = 'EAALjHcMKUWYBAHCYrkJ7hNWw2OP2PK9jNvc6e8vJd8XNTgpMX5luXRbwulcCgGxEdDRLqSdVcaca0hr32aDiVZB0sbtTuhmGVXbZCYZBbMJDhIeD0gXvGpEPJR5U32bfGZAqNFN9eAStF1zF1S51HPO7nwC1MFWDocxZC158ZCN7DHfFdDgnzrOAZASgiK6ZC4DyMfFidx73UmVhjSSXnoiGuvlBaGutxgZAZCbI7SIhoXBQZDZD'
# access_token = '812666919211366|zlJmX1FBFK_b6KRXLGNA-eoC0w4'
access_token = '206217843919244|EKo744gwUQJD-NBySyKd-1IUrRM'

fb_get_fid(input_token, access_token)



get_token()