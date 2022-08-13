# Webflux (CMS)
## Project Summary
A CMS(Content Management System) is a software or an application designed to manage the content of a website. It enables users to create, edit and also publish websites.

# Project Overview 
Webflux enables users to create, edit, and update content for their website; the user does not need to be a developer before using a cms web app. A user who needs to build a website within a specific time can use Webflux because it is easy, user friendly and has variety of templates to choose from will be convenient for the work.

# Aim
Our aim is to build a platform that will make the development process of websites easy for users (both programmers and those that are not tech inclined) and also give users more flexibility with their design.

# Our System
Template which allows users to edit,format content of the site to suit their work, creation of a webflux bot and also an interactive environment for users, enable users to download or save their work and also see it on their dashboard.

# Features
## Authenticated:
- Allow the user to make as much customization as possible.
- Allow users to access the backend of created websites.
- The ability to create more pages.
- Add Social media links
- Change templates and  more.
## Unauthenticated:
- Be able to view basic information about the built platform.
- Access documentation.
- Browse through templates.
- Setup a website by filling some information.
- Sign up for an account.

# Technical Details
## Stacks/Language
- Frontend: HTML, CSS, Javascript
- Backend:  Python(Django), Javascript

# For Deployment
Step 1:
Clone this this repository or download the zip file of this project
```
$ git clone https://github.com/zuri-training/Team-16_My-CMS
$ cd WebFlux
```
For the other process download the zipped file,
and download unzip the project using any unzipping software.
Unzip into any directory in your PC and get access to the files

Step 2:
Create a Virtual environment and activate it
```
py -3 -m venv env
$ env\Scripts\activate
```
Step 3:
Install dependencies
```
(env)$ pip install -r requirements.txt
```
Step 4:
After downloading dependencies,makemigration and migrate 
```
$ cd web_flux_cms
(env)$ python manage.py makemigrations
(env)$ python manage.py migrate
```
Step 5 :
Run code and test
```
(env)$ python manage.py runserver
```
