from core.models import Resource
# import django

# django.setup()


def add_data(title, thumbnail, url, description, category):
    d, created = Resource.objects.get_or_create(title=title, thumbnail=thumbnail, 
    url=url, description=description, category=category)
    print("- Data: {0}, Created: {1}".format(str(d), str(created)))
    return d

def populate():
    fx = open('scripts/videos.csv', 'r')
    res = []
    for line in fx:
        out_ = line.split(',')
        add_data(title=out_[0], thumbnail=out_[2], url=out_[1], description='',category='Video')
        # res.append(out_)
        print(out_)

populate()
def run():
    populate()
    # print(res[0])
    # https://github.com/oloyedegbemiga/tec-site/blob/e19ee15ba38a7e054a3b72c776cfae38615445a1/static/assets/Frameblog2.png
    # https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_sticky
    # https://forum.freecodecamp.org/t/make-an-item-stick-after-a-certain-point/228002/8


# def search(request):
#     searchText = request.GET.get('key')
#     data = Resource.objects.filter(name__unaccent__icontains=searchText)
#     s_json = serializers.serialize('json', data, fields=('title', 'thumbnail', 'url', 'description', 'category'))
#     return JsonResponse(s_json, safe='False')

# path('search/', views.search, name='search')