from django.shortcuts import render

# Create your views here.
def landing_view(requests):
    context = {
    }
    return render(requests, 'landing_page/index.html', context=context)
def template_page_view(requests):
    context = {
    }
    return render(requests, 'template_page/index.html', context=context)
def signup_prompt_view(requests):
    context = {
    }
    return render(requests, 'signupprompt/index.html', context=context)
