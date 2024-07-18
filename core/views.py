from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from .models import Resource
from .models import Event
from django.core import serializers
from django.utils.timezone import now

# Create your views here.
def index(request):
    today = now().date()
    event_list = Event.objects.filter(event_date__gte=today).order_by('event_date')
    # print(event_list)
    return render(request, 'index.html', {'event_list': event_list})
    # return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def resource(request):
    return render(request, 'resource.html')

def roadmap(request):
    return render(request, 'roadmap.html')

def contacts(request):
    return render(request, 'contact-us.html')

def creeds(request):
    return render(request, 'creeds.html')

def reqcontent(request):
    resources = Resource.objects.all()
    # data = list(resources)
    # print(resources)
    s_json = serializers.serialize('json', resources, fields=('title', 'thumbnail', 'url', 'description', 'category'))
    #data = serializers.serialize('json', data, fields=("title", "thumbnail", "resource_link"))
    # print(s_json)
    # return JsonResponse({})
    return JsonResponse(s_json, safe=False)
    # return HttpResponse({'test_confirmed': data})
    # return HttpResponse({})
    # return JsonResponse({"test_confirmed":resources})
    # return JsonResponse({'test_confirmed': resources})

def search(request):
    searchText = request.GET.get('key')
    # print(searchText)
    # data = Resource.objects.filter(title__unaccent__icontains=searchText)
    data = Resource.objects.filter(title__icontains=searchText)
    print(data)
    s_json = serializers.serialize('json', data, fields=('title', 'thumbnail', 'url', 'description', 'category'))
    return JsonResponse(s_json, safe=False)
    # return {}

def give(request):
    return render(request, 'give.html')

# def reqcontent(request):
#     print(request.GET.get("test"))
#     di= [
#     {
#       "url": "#",
#       "title": "The Work of Faith",
#       "thumbnail": "assets/tube-prev.png",
#       "category": "Video",
#       "description": "Learn to draw and color with the extensive course.",
#       "price": "299.99",
#       "duration": "12"
#     },
  
#     {
#       "url": "#",
#       "title": "Purpose",
#       "category": "Podcast",
#       "thumbnail": "assets/podcast-thum.png",
#       "description": "Learn the basic theories behind excellent designs.",
#       "price": "119.99",
#       "duration": "4"
#     },
  
#     {
#       "url": "#",
#       "title": "Dear Anxiety, not today",
#       "category": "Article",
#       "thumbnail": "assets/Frameblog2.png",
#       "description":
#         "This course is for those who are interested in getting started with AI.",
#       "price": "149.99",
#       "duration": "10"
#     },
  
#     {
#       "url": "#",
#       "title": "God's Faithfulness",
#       "category": "Video",
#       "thumbnail": "assets/tube-prev.png",
#       "description": "Learn how to use Adobe XD to create stunning websites.",
#       "price": "99.99",
#       "duration": "8.5"
#     }
#   ]
#     return JsonResponse({"test_confirmed":di})