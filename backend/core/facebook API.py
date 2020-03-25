import requests

def fb_get_fid(input_token, access_token):
    URL = "https://graph.facebook.com/debug_token"

    PARAMS = {'input_token': input_token, 'access_token':access_token}
    r = requests.get(url=URL, params=PARAMS)
    data = r.json()
    # fid = data['data']['user_id']
    print(data)
    # return fid

input_token = 'EAADb3jHspS4BAKAWkDFsVvp4B4yUnj7eXcpNWzZAVx4r88tsTfnpED39BzlWvm4RmZBqQdN5u19mP0M7PuhRaDagcxV9YaMSukpf5j2NlMDEMDIbC2ig4Phgtxac9t9dk2dVyxWYvp73Bj4OR3HeZBB7TPXhr5pHUD0ZBSzYrda8b4cwvN8wSWqCxRJqkUEZD'
access_token = '241747366815022|i6piESu2cds_1NVd4Kl_g_uw_PM'
# access_token = '206217843919244|EKo744gwUQJD-NBySyKd-1IUrRM'

fb_get_fid(input_token, access_token)



