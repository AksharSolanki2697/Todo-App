from rest_framework import viewsets

from .serializers import TodoSerializer
from backend.models import Todo


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer