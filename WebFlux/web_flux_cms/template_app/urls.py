"""web_flux_cms URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import landing_view,template_page_view,signup_prompt_view

app_name = 'template_app'

urlpatterns = [
    path('',landing_view, name="landing-page"),
    path('template/',template_page_view, name="template-page"),
    path('signup-prompt/',signup_prompt_view, name="signup-prompt-page"),
]
