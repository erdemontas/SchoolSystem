from rest_framework.generics import (
    CreateAPIView, 
    ListAPIView, 
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView
)

from articles.models import Article
from .serializers import ArticleSerializer

class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    #permission_classes = (permissions.AllowAny, )


class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    #permission_classes = (permissions.AllowAny, )


class ArticleCreateView(CreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    #permission_classes = (permissions.IsAuthenticated, )

class ArticleUpdateView(UpdateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    #permission_classes = (permissions.IsAuthenticated, )

class ArticleDeleteView(DestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    #permission_classes = (permissions.IsAuthenticated, )