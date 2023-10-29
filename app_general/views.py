from django.http.response import HttpResponse
from django.shortcuts import render

# Create your views here.
def home(request):
    context = {}
    return render(request, 'app_general/home.html', context=context)

def docs(request):
    return render(request, 'app_general/docs.html')