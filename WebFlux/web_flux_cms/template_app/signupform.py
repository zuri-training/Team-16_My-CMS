from django import forms
class WebfluxSignupForm(forms.Form):
    first_name = forms.CharField(max_length=30, label='First Name')
    last_name = forms.CharField(max_length=30, label='Last Name')
    #user_email = forms.EmailField(max_length=200)
    #user_password = forms.CharField(label = 'pw', widget = forms.PasswordInput(), required = True)
    #comfirm_password = forms.CharField(label = 'pw', widget = forms.PasswordInput(), required = True)
    def signup(self, request, user):
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        #user.user_email = self.cleaned_data['user_email']
        #user.user_password = self.cleaned_data['user_password']
        #user.comfirm_password = self.cleaned_data['comfirm_password']
        user.save()