# first_project/views.py
from django.shortcuts import render

def dashboard_view(request):
    return render(request, 'first_project/dashboard.html')

def profile_view(request):
    return render(request, 'first_project/profile.html')

def landing_page_view(request):
    return render(request, 'first_project/landing-page.html')

def signin_view(request):
    return render(request, 'first_project/signin.html')

def settings_view(request):
    return render(request, 'first_project/settings.html')

def classes_view(request):
    return render(request, 'first_project/classes.html')
