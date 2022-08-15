
from django import forms
class MyCustomSignupForm(forms.Form):    
        def __init__(self, *args, **kwargs):
                super(MyCustomSignupForm, self).__init__(*args, **kwargs)
                self.fields['First Name'] = forms.CharField(required=True)   
                self.fields['Last Name'] = forms.CharField(required=True)   
        def save(self, request):
                first_name = self.cleaned_data.pop('First Name')
                last_name = self.cleaned_data.pop('Last Name')
                user = super(MyCustomSignupForm, self).save(request)