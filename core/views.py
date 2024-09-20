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
    event_list = Event.objects.filter(event_date__gte=today).order_by("event_date")
    return render(request, "index.html", {"event_list": event_list})


def about(request):
    return render(request, "about.html")


def resource(request):
    return render(request, "resource.html")


def roadmap(request):
    return render(request, "roadmap.html")


def contacts(request):
    return render(request, "contact-us.html")


def creeds(request):
    return render(request, "creeds.html")


def reqcontent(request):
    resources = Resource.objects.all().order_by("-published_at")
    s_json = serializers.serialize(
        "json",
        resources,
        fields=("title", "thumbnail", "url", "description", "category"),
    )
    return JsonResponse(s_json, safe=False)


def search(request):
    searchText = request.GET.get("key")
    data = Resource.objects.filter(title__icontains=searchText).order_by(
        "-published_at"
    )
    print(data)
    s_json = serializers.serialize(
        "json", data, fields=("title", "thumbnail", "url", "description", "category")
    )
    return JsonResponse(s_json, safe=False)


def give(request):
    return render(request, "give.html")
