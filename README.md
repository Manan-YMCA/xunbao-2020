![open issues](https://img.shields.io/github/issues/Manan-YMCA/xunbao-2020)
![open issues](https://img.shields.io/github/forks/Manan-YMCA/xunbao-2020)
![open issues](https://img.shields.io/github/stars/Manan-YMCA/xunbao-2020)
![open issues](https://img.shields.io/github/contributors/Manan-YMCA/xunbao-2020)
[![Visits Badge](https://badges.pufler.dev/visits/Manan-YMCA/xunbao-2020)](https://badges.pufler.dev)

# Xunbao 2020 - Treasure Hunt
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-python.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)


## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Usage](#usage)
* [Frontend](#frontend)
* [Backend](#backend)
    * [Django](#django)
    * [JWT Token](#jwt-token)
* [Screenshots](#screenshots)
* [Authors](#authors)
* [Contributing](#contributing)
* [License](#license)

## About the Project
[XUNBAO 2020](https://xunbao.elementsculmyca.com/) is a Quiz WebApp made during Online Culmyca 2020 held at [JC Bose University of Science and Technology](https://jcboseust.ac.in/), developed by members of [Manan - A techno Surge](https://manantechnosurge.com/). We got 300+ Participants and it was loved by all of them. Participants enthusiastically participated in this 3 Day event.
 
### Built With
*   ReactJs
*   Django
*   Facebook API

[Back to Table of Contents](#table-of-contents)

## Getting Started
### Prerequisites

* ReactJs
* Python
* Django


### Installation


* Frontend

    ```NodeJs
    npm i node-modules
    npm start
    ```

* Backend

    ```Python
    pip install -r requirements.txt
    python manage.py makemigrations
    python manage.py migrate
    ```

### Usage

* To Create Super User

    ``` python
    python3 manage.py createsuperuser
    ```
    
    
* To Run Server

    ``` python
    python3 manage.py runserver
    ```
    
[Back to Table of Contents](#table-of-contents)

## Frontend

* #### ReactJs
    React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
    
    * ###### Why reactJS ?
    
        *  Component-Based
        *  Declarative 
        *  Incredibly versatile
        *  Learn Once, Write Anywhere
        
* #### React-Bootstraps
     React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery. As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.

* #### AJAX
     You should populate data with AJAX calls in the componentDidMount lifecycle method. This is so you can use setState to update your component when the data is retrieved.

* #### Additional FrontEnd Info
     The FrontEnd is made by the help of reactJs, AJAX for API calls and CSS. The structure is pretty simple with various components. The info about react tree will can be seen in router.js file.

## Backend

* #### Django 
    Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It's free and open source.
    
    * ###### Why Django ?
        *  Ridiculously fast
        *  Reassuringly secure
        *  Exceedingly scalable
        *  Incredibly versatile
        *  Easy to Integrate with Python Libraries/Functions
        
* #### JWT Token
    JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

    Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.
    When should you use JSON Web Tokens?

    * ###### Here are some scenarios where JSON Web Tokens are useful:

        * <b>Authorization:</b> This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

        * <b>Information Exchange:</b> JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.

* #### Backend Approach
    For Xunbao we created 6 models/tables.

    * User Profile
    * Question
    * Hint
    * Answer
    * Submission
    * Happy Hour

    So before explaining about models and their fields i would like to explain our goal/aim with which we started to make this quiz. We wanted to make Quiz as much interesting as much we can so we focused on 5 main points.
    * Multiple answers for a question
    * Full Score in Happy Hour
    * Hint would be given but some score would be deducted when the participant answers that question
    * Marking system should be relative to previous correct submissions.
    * Participant can only move forward question by question.
    
    ##### Tables
    * User Profile - Name, Pic, Score, Level, Submission_count, fid (fb id)
    * Question - ques, hint, no (index)
    * Hint - ques, user, hint, fid, hintviewed
    * Answer - ques, answer
    * Submission - user, fid, ques, answer, datetime, score, response, hintviewed
    * Happy hour - start, end
    
    Here we used Django Model Viewsets, Model serializer and Default Routers (to handle UI and links for APIs) for APIs and JWT fot token auth.
    


[Back to Table of Contents](#table-of-contents)
## Screenshots

![alt text](https://github.com/Manan-YMCA/xunbao-2020/blob/master/Screenshot/home%20page.PNG?raw=True)

![alt text](https://github.com/Manan-YMCA/xunbao-2020/blob/master/Screenshot/developers.PNG?raw=True)

![alt text](https://github.com/Manan-YMCA/xunbao-2020/blob/master/Screenshot/leaderboard.PNG?raw=True)

![alt text](https://github.com/Manan-YMCA/xunbao-2020/blob/master/Screenshot/question%20page.PNG?raw=True)

[Back to Table of Contents](#table-of-contents)
## Authors
<table>
  <tr>
    <td align="center">
        <a href="https://github.com/sanyam1992000/">
            <img src="https://avatars2.githubusercontent.com/u/44235818?s=460&u=ace44cdd2bd36f9d187041adfe6565049275d77d&v=4" width="100px;" alt="" style="border-radius:50%;" /><br />
        </a>
        <br><a href="https://github.com/Manan-YMCA/xunbao-2020/commits?author=sanyam1992000" title="Code">💻<b>Sanyam Mittal</b></a>
    </td>    
    <td align="center">
        <a href="https://github.com/aayushme/">
            <img src="https://avatars2.githubusercontent.com/u/44281902?s=400&u=e943101b7644437b9acd95c05ef99406e71dcd68&v=4" width="100px;" alt="" style="border-radius:50%;" /><br />
        </a>
            <br><a href="https://github.com/Manan-YMCA/xunbao-2020/commits?author=aayushme" title="Code">💻<b>Aayush Tyagi</b></a>
    </td>
   <td align="center">
        <a href="https://github.com/cooldude001/">
            <img src="https://avatars3.githubusercontent.com/u/23423227?s=400&v=4" width="100px;" alt="" style="border-radius:50%;" /><br />
        </a>
            <br><a href="https://github.com/cooldude001" title="Code">💻<b>Arun</b></a>
    </td>
  </tr>
</table>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[![Linkedin Badge](https://img.shields.io/badge/-Sanyam_Mittal-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/sanyam1992000/)](https://www.linkedin.com/in/sanyam1992000/)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[![Linkedin Badge](https://img.shields.io/badge/-Aayush_Tyagi-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/aayush-tyagi-30a293185//)](https://www.linkedin.com/in/aayush-tyagi-30a293185//)

[Back to Table of Contents](#table-of-contents)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
