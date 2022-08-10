from allauth.account.forms import LoginForm,SignupForm
from django import forms

class WebfluxLoginForm(LoginForm):
    def __init__(self,*args,**kwargs):
        super(WebfluxLoginForm,self).__init__(*args,**kwargs)
        self.fields['login'].widget = forms.TextInput(attrs={'type':'email','class':"form-control p-3 my-input"})
        self.fields['password'].widget = forms.PasswordInput(attrs={'type':'password','class':"form-control p-3 my-input"})

