from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LoginView, NoticiaViewSet, ArchivoViewSet, InscripcionViewSet, GenerarPlanillaInscripcion

router = DefaultRouter()
router.register(r'noticias', NoticiaViewSet)
router.register(r'archivos', ArchivoViewSet)
router.register(r'inscripciones', InscripcionViewSet)

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('generar-planilla/', GenerarPlanillaInscripcion.as_view(), name='generar_planilla'),
    path('', include(router.urls)),
]